import {
    scaleBand, scaleLinear, scalePoint
} from "d3-scale";

import {
    select as d3Select
} from "d3-selection";

import "./../style/visual.less";

import { axisBottom, axisLeft } from "d3-axis";
import { timeFormat, timeParse } from "d3-time-format";
import * as d3 from "d3";

import powerbi from "powerbi-visuals-api";
import "regenerator-runtime/runtime";


import DataViewCategoryColumn       = powerbi.DataViewCategoryColumn;
import DataViewObjects              = powerbi.DataViewObjects;
import Fill                         = powerbi.Fill;
import ISandboxExtendedColorPalette = powerbi.extensibility.ISandboxExtendedColorPalette;
import ISelectionId                 = powerbi.visuals.ISelectionId;
import IVisual                      = powerbi.extensibility.IVisual;
import IVisualHost                  = powerbi.extensibility.visual.IVisualHost;
import PrimitiveValue               = powerbi.PrimitiveValue;
import VisualUpdateOptions          = powerbi.extensibility.visual.VisualUpdateOptions;
import VisualConstructorOptions     = powerbi.extensibility.visual.VisualConstructorOptions;

import { textMeasurementService } from "powerbi-visuals-utils-formattingutils";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";

import { BarChartSettingsModel } from "./barChartSettingsModel";
import { getCategoricalObjectValue, getValue } from "./objectEnumerationUtility";
import { MarginPadding } from "powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents";


type Selection<T1, T2 = T1> = d3.Selection<any, T1, any, T2>;

export interface SPCChartData {
    datapoints: SPCChartDataPoint[];

    meanValue: number;
    UCLValue: number;
    LCLValue: number;
    
    strokeWidth: number;
    strokeColor: string;
}

export interface SPCChartDataPoint {
    value: PrimitiveValue;
    category: string;
    difference: number;
    color: string; //for the marker
    markerSize: number;
    selectionId: ISelectionId;
}

function createSelectorData(options: VisualUpdateOptions, host: IVisualHost): SPCChartData {
    let SPCChartDataPoints = createSelectorDataPoints(options, host);

    
    let nPoints = SPCChartDataPoints.length

    let meanValue = SPCChartDataPoints
        .map((d) => <number>d.value)
        .reduce((a,b)=>a+b,0)/nPoints

    let avgDiff = SPCChartDataPoints
        .map((d) => <number>d.difference)
        .reduce((a,b)=>a+b,0)/(nPoints - 1)
    


    let UCLValue = meanValue + 2.66*avgDiff
    let LCLValue = meanValue - 2.66*avgDiff

    //SPC Marker Colors Rules
    for(let i = 0, len = nPoints; i < len; i++) {
        if(<number>SPCChartDataPoints[i].value > UCLValue){
            SPCChartDataPoints[i].color = 'red'
            SPCChartDataPoints[i].markerSize = 3
        }
        if(<number>SPCChartDataPoints[i].value < LCLValue){
            SPCChartDataPoints[i].color = 'red'
            SPCChartDataPoints[i].markerSize = 3
        }
    }
    
    return {
        datapoints: SPCChartDataPoints,

        meanValue,
        UCLValue,
        LCLValue,

        strokeWidth:2,
        strokeColor:'steelblue'
    }
}

function createSelectorDataPoints(options: VisualUpdateOptions, host: IVisualHost): SPCChartDataPoint[] {
    let SPCChartDataPoints: SPCChartDataPoint[] = []
    let dataViews = options.dataViews;

    if (!dataViews //checks data exists
        || !dataViews[0]
        || !dataViews[0].categorical
        || !dataViews[0].categorical.categories
        || !dataViews[0].categorical.categories[0].source
        || !dataViews[0].categorical.values
    ) {
        return SPCChartDataPoints;
    }

    let categorical = dataViews[0].categorical;
    let category = categorical.categories[0];
    let dataValue = categorical.values[0];

    let colorPalette: ISandboxExtendedColorPalette = host.colorPalette;

    for (let i = 0, len = Math.max(category.values.length, dataValue.values.length); i < len; i++) {
        const selectionId: ISelectionId = host.createSelectionIdBuilder()
            .withCategory(category, i)
            .createSelectionId();

        let diff = 0
        if(i > 0){
            diff = Math.abs(<number>dataValue.values[i] - <number>dataValue.values[i-1])
        }

        //console.log(category.values)
        SPCChartDataPoints.push({
            color: 'steelblue',
            markerSize: 0,
            selectionId,
            value: dataValue.values[i],
            difference: diff,
            category: <string>category.values[i] 
        });
    }

    return SPCChartDataPoints;
}


function getAxisTextFillColor(
    objects: DataViewObjects,
    colorPalette: ISandboxExtendedColorPalette,
    defaultColor: string
): string {
    if (colorPalette.isHighContrast) {
        return colorPalette.foreground.value;
    }

    return getValue<Fill>(
        objects,
        "enableAxis",
        "fill",
        {
            solid: {
                color: defaultColor,
            }
        },
    ).solid.color;
}

function getYAxisTextFillColor(
    objects: DataViewObjects,
    colorPalette: ISandboxExtendedColorPalette,
    defaultColor: string
): string {
    if (colorPalette.isHighContrast) {
        return colorPalette.foreground.value;
    }

    return getValue<Fill>(
        objects,
        "enableYAxis",
        "fill",
        {
            solid: {
                color: defaultColor,
            }
        },
    ).solid.color;
}

export class SPCChart implements IVisual {
    private svg: Selection<any>;
    private tooltip: Selection<any>;

    private host: IVisualHost;
    //private barContainer: Selection<SVGElement>;
    private xAxis: Selection<SVGElement>;
    private yAxis: Selection<SVGElement>;
    private yGridLines: Selection<SVGElement>;
    
    private lineData: Selection<SVGElement>;
    private lineData_Diff: Selection<SVGElement>;
    private lineMean: Selection<SVGElement>;
    private lineUCL: Selection<SVGElement>;
    private lineLCL: Selection<SVGElement>;

    private dataMarkers: Selection<SVGElement>;

    private dataPoints: SPCChartDataPoint[];
    private formattingSettings: BarChartSettingsModel;
    private formattingSettingsService: FormattingSettingsService;

    private chartSelection: d3.Selection<d3.BaseType, any, d3.BaseType, any>;

    static Config = {
        xScalePadding: 0.1,
        solidOpacity: 1,
        transparentOpacity: 1,
        margins: {
            top: 0,
            right: 30,
            bottom: 25,
            left: 30,
        },
    };

    /**
     * Creates instance of SPCChart. This method is only called once.
     *
     * @constructor
     * @param {VisualConstructorOptions} options - Contains references to the element that will
     *                                             contain the visual and a reference to the host
     *                                             which contains services.
     */
    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        const localizationManager = this.host.createLocalizationManager();
        this.formattingSettingsService = new FormattingSettingsService(localizationManager);

        this.svg = d3Select(options.element)
            .append('svg')
            .classed('SPCChart', true);

        this.xAxis = this.svg
            .append('g')
            .classed('xAxis', true);

        this.yAxis = this.svg
            .append('g')
            .classed('yAxis', true);

        this.lineData = this.svg
            .append('path')
            .classed('line', true)

        this.lineData_Diff = this.svg
            .append('path')
            .classed('line', true)
        
        this.dataMarkers = this.svg
            .selectAll('dot.Markers')
        
        this.lineMean = this.svg
            .append('line')
            .classed('line', true)
        
        this.lineUCL = this.svg
            .append('line')
            .classed('line', true)
        
        this.lineLCL = this.svg
            .append('line')
            .classed('line', true)
    }

    private parseDateLabel(label: string, index: number){
        let formatter = d3.timeParse('%Y');
        let parsed = formatter(label);
        if(parsed){
            return parsed.getFullYear().toString()
        }
        
        formatter = d3.timeParse('%Y Qtr %q');
        parsed = formatter(label);
        if(parsed){
            if(parsed.getMonth() == 0 ){
                return parsed.getFullYear().toString()
            } else {return ''}
        }

        formatter = d3.timeParse('%Y Qtr %q %B');
        parsed = formatter(label);
        if(parsed){
            if(parsed.getMonth() == 0 ){
                return parsed.getFullYear().toString()
            } else {return ''}
        }

        
        formatter = d3.timeParse('%Y Qtr %q %B %-d');
        parsed = formatter(label);
        if(parsed){
            if(parsed.getMonth() == 0 && parsed.getDate() == 1){
                return parsed.getFullYear().toString()
            } else {return ''}
        }

        formatter = d3.timeParse('%B');
        parsed = formatter(label);
        if(parsed){
            return label.slice(0,3)
        }

        return label
    }

    private parseYLabel(label: number){
        //let formatter = d3.timeParse('%Y');
        //let parsed = formatter(label);
        
        //if( this.formattingSettings.enableYAxis.time.value ){
         //   return 'test'
       // }

        return 'ff'
    }

    /**
     * Updates the state of the visual. Every sequential databinding and resize will call update.
     *
     * @function
     * @param {VisualUpdateOptions} options - Contains references to the size of the container
     *                                        and the dataView which contains all the data
     *                                        the visual had queried.
     */
    public update(options: VisualUpdateOptions) {
        //Set up the charting object 
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(BarChartSettingsModel, options.dataViews);
        let data = createSelectorData(options, this.host);
        this.dataPoints = data.datapoints;
       // this.formattingSettings.populateColorSelector(this.dataPoints);

        let width = options.viewport.width;
        let height = options.viewport.height;
        let margins = SPCChart.Config.margins;
        let widthChartStart = 0;
        let widthChartEnd = 0.99*width;

        this.svg
            .attr("width", width)
            .attr("height", height);

        if (this.formattingSettings.enableAxis.show.value) {
            height -= margins.bottom;
        }
            
        const colorObjects = options.dataViews[0] ? options.dataViews[0].metadata.objects : null;

        //Set up the Y Axis
        let yScale = scaleLinear()
            .domain([Math.min(<number>options.dataViews[0].categorical.values[0].minLocal)*0.9, 
                     Math.max(<number>options.dataViews[0].categorical.values[0].maxLocal)*1.1])
            .range([height, 5]);

        let yTicks = 5;

        let yAxis = axisLeft(yScale)
            .tickSizeInner(-widthChartEnd);

        if(this.formattingSettings.enableYAxis.time.value){
            yAxis = yAxis
                .ticks(yTicks)
                .tickFormat(function (d) {
                    let sign = ''
                    if (<number>d < 0) {sign = '-', d = Math.abs(<number>d)}
                    let minutes = Math.floor(<number>d/60);
                    let hours = Math.floor(minutes/60);
                    if(hours > 0){
                        minutes = minutes%60
                    }
                    let seconds = <number>d%60;
                    return sign + String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
                })
                ;
        } else {
            yAxis = yAxis
                .ticks(yTicks, "s"); //format n=yTicks ticks into SI units
            ;
            };

        let yAxisObject = this.yAxis 
            .call(yAxis)
            .transition().duration(500)
            .attr("color", getYAxisTextFillColor(
                colorObjects,
                this.host.colorPalette,
                this.formattingSettings.enableYAxis.fill.value.value
            ))
            ;
        
        yAxisObject.selectAll('.yAxis line')
            .attr('stroke', this.formattingSettings.enableYAxis.fill.value.value)
            .attr('opacity', 0.2)
            ;
        yAxisObject.selectAll('.yAxis path')
            .attr('opacity', 0)
            ;

            //TO DO maxW doesnt seem to calculate when you expect
        let yShift = 0;
        let maxW = 0;

        this.yAxis
            .selectAll("text")
            .each( function (this:SVGGraphicsElement){
            if(this.getBBox().width > maxW) maxW = this.getBBox().width;
        });

        if (this.formattingSettings.enableYAxis.show.value) {
            yShift = maxW + 10; //longest "word" plus 10 pixels
        } 

        if (this.formattingSettings.enableYAxis.time.value) {
            yShift = maxW + 10; //longest "word" plus 10 pixels
        } 

        widthChartStart = yShift + (width - widthChartEnd)
        
        this.yAxis
            .style('font-family', 'inherit')
            .style('font-size', 11) //TODO make this a drop down
            .attr('transform', 'translate(' + (yShift) + ',0)')

        //Set up the X Axis
        
        this.xAxis
            .style("font-size", 11)
            ;
    
        let xScale = scalePoint()
            .domain(this.dataPoints.map(d => d.category))
            .range([widthChartStart, widthChartEnd])
            ;

        let xAxis = axisBottom(xScale)
            .tickFormat(this.parseDateLabel)
            ;

        let xAxisObject = this.xAxis
            .attr('transform', 'translate(0, ' + (height + 2) + ')')
            .call(xAxis)
            .transition().duration(500)
            .attr("color", getAxisTextFillColor(
                colorObjects,
                this.host.colorPalette,
                this.formattingSettings.enableAxis.fill.value.value
            ));
        
        xAxisObject.selectAll('.xAxis path, line')
            .attr('opacity', 0)
            ;
        //Create data line
        this.lineData
            .datum(this.dataPoints)
            .style("stroke-linecap", "round")
            .attr("fill", "none")
            .attr("stroke", function (d) {return data.strokeColor} )
            .attr("stroke-width", function (d) {return data.strokeWidth })
            .attr("stroke-linejoin", "round")
            .attr("d", d3.line<SPCChartDataPoint>()
                .x(function (d) { return xScale(d.category) })
                .y(function (d) { return yScale(<number>d.value) })
            )
        
        this.svg.selectAll('.markers').remove();
        this.dataMarkers
            .data(this.dataPoints)
            .enter()
            .append("circle")
            .attr("class", "markers")
            .attr("cx", function(d) { return xScale(d.category) } )
            .attr("cy", function(d) { return yScale(<number>d.value) } )
            .attr("r", function(d) {return d.markerSize})
            .attr("fill", function(d) {return d.color}) 
            
            /*
        this.lineData_Diff
            .datum(this.dataPoints)
            .style("stroke-linecap", "round")
            .attr("fill", "none")
            .attr("stroke", "purple")
            .attr("stroke-width", 2)
            .attr("stroke-linejoin", "round")
            .attr("d", d3.line<SPCChartDataPoint>()
                .x(function (d) { return xScale(d.category) })
                .y(function (d) { return yScale(<number>d.difference) })
            )*/
        //Create mean line
        this.lineMean
            .style("stroke-linecap", "round")
            .attr("class", "mean")
            .attr("x1", widthChartStart)
            .attr("x2", widthChartEnd)
            .attr("y1", function(d){ return yScale(data.meanValue);})
            .attr("y2", function(d){ return yScale(data.meanValue);})
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 1.5)

        //Create limit lines   
        this.lineUCL
            .style("stroke-dasharray", ("5,5"))
            .style("stroke-linecap", "round")
            .attr("class", "mean")
            .attr("x1", widthChartStart)
            .attr("x2", widthChartEnd)
            .attr("y1", function(d){ return yScale(data.UCLValue);})
            .attr("y2", function(d){ return yScale(data.UCLValue);})
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            
        this.lineLCL
            .style("stroke-dasharray", ("5,5"))
            .style("stroke-linecap", "round")
            .attr("class", "mean")
            .attr("x1", widthChartStart)
            .attr("x2", widthChartEnd)
            .attr("y1", function(d){ return yScale(data.LCLValue);})
            .attr("y2", function(d){ return yScale(data.LCLValue);})
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 2)

    }

    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }

}

export {SPCChart as Visual};