import {
    scaleBand, scaleLinear
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

export interface BarChartDataPoint {
    value: PrimitiveValue;
    category: string;
    difference: number;
    color: string;
    strokeColor: string;
    strokeWidth: number;
    selectionId: ISelectionId;
}

function createSelectorDataPoints(options: VisualUpdateOptions, host: IVisualHost): BarChartDataPoint[] {
    let barChartDataPoints: BarChartDataPoint[] = []
    let dataViews = options.dataViews;

    if (!dataViews //checks data exists
        || !dataViews[0]
        || !dataViews[0].categorical
        || !dataViews[0].categorical.categories
        || !dataViews[0].categorical.categories[0].source
        || !dataViews[0].categorical.values
    ) {
        return barChartDataPoints;
    }

    let categorical = dataViews[0].categorical;
    let category = categorical.categories[0];
    let dataValue = categorical.values[0];

    let colorPalette: ISandboxExtendedColorPalette = host.colorPalette;

    const strokeColor: string = getColumnStrokeColor(colorPalette);
    const strokeWidth: number = getColumnStrokeWidth(colorPalette.isHighContrast);

    for (let i = 0, len = Math.max(category.values.length, dataValue.values.length); i < len; i++) {
        const color: string = getColumnColorByIndex(category, i, colorPalette);

        const selectionId: ISelectionId = host.createSelectionIdBuilder()
            .withCategory(category, i)
            .createSelectionId();

        barChartDataPoints.push({
            color,
            strokeColor,
            strokeWidth,
            selectionId,
            value: dataValue.values[i],
            difference: Math.abs(<number>dataValue.values[i] - <number>dataValue.values[i-1]),
            category: <string>category.values[i] //new Date(<any>category.values[i]),
        });
    }

    return barChartDataPoints;
}

function getColumnColorByIndex(
    category: DataViewCategoryColumn,
    index: number,
    colorPalette: ISandboxExtendedColorPalette,
): string {
    if (colorPalette.isHighContrast) {
        return colorPalette.background.value;
    }

    const defaultColor: Fill = {
        solid: {
            color: colorPalette.getColor(`${category.values[index]}`).value,
        }
    };

    return getCategoricalObjectValue<Fill>(
        category,
        index,
        'colorSelector',
        'fill',
        defaultColor
    ).solid.color;
}

function getColumnStrokeColor(colorPalette: ISandboxExtendedColorPalette): string {
    return colorPalette.isHighContrast
        ? colorPalette.foreground.value
        : null;
}

function getColumnStrokeWidth(isHighContrast: boolean): number {
    return isHighContrast
        ? 2
        : 0;
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

export class BarChart implements IVisual {
    private svg: Selection<any>;
    private host: IVisualHost;
    //private barContainer: Selection<SVGElement>;
    private xAxis: Selection<SVGElement>;
    private yAxis: Selection<SVGElement>;
    private yGridLines: Selection<SVGElement>;
    
    private line: Selection<SVGElement>;
    private lineMean: Selection<SVGElement>;
    private lineUCL: Selection<SVGElement>;
    private lineLCL: Selection<SVGElement>;

    private dataPoints: BarChartDataPoint[];
    private formattingSettings: BarChartSettingsModel;
    private formattingSettingsService: FormattingSettingsService;

    private chartSelection: d3.Selection<d3.BaseType, any, d3.BaseType, any>;

    static Config = {
        xScalePadding: 0.1,
        solidOpacity: 1,
        transparentOpacity: 1,
        margins: {
            top: 0,
            right: 0,
            bottom: 25,
            left: 30,
        },
        xAxisFontMultiplier: 0.04,
        yAxisFontMultiplier: 0.04,
    };

    /**
     * Creates instance of BarChart. This method is only called once.
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
            .classed('barChart', true);

        this.xAxis = this.svg
            .append('g')
            .classed('xAxis', true);

        this.yAxis = this.svg
            .append('g')
            .classed('yAxis', true);

        this.yGridLines = this.svg
            .selectAll("line.horizontalGrid");

        this.line = this.svg
            .append('path')
            .classed('line', true)
        
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
            if(parsed.getMonth() == 0 && parsed.getDay() == 0){
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
        this.dataPoints = createSelectorDataPoints(options, this.host);
        this.formattingSettings.populateColorSelector(this.dataPoints);

        let width = options.viewport.width;
        let height = options.viewport.height;
        let margins = BarChart.Config.margins;

        let yShift = 0;

        this.svg
            .attr("width", width)
            .attr("height", height);

        if (this.formattingSettings.enableAxis.show.value) {
            height -= margins.bottom;
        }
            
        const colorObjects = options.dataViews[0] ? options.dataViews[0].metadata.objects : null;

        //Set up variables 
        let meanLine = this.dataPoints
        .map((d) => <number>d.value)
        .reduce((a,b)=>a+b,0)/this.dataPoints.length

        let avgDiff = this.dataPoints
            .map((d) => <number>d.value)
            .map((a,b)=> Math.abs(b-a))
            .reduce((a,b)=>a+b,0)/this.dataPoints.length

        let UCL = meanLine + 2.66*avgDiff
        let LCL = meanLine - 2.66*avgDiff
        //Set up the Y Axis
        this.yAxis
            .style("font-size", Math.min(height, width) * BarChart.Config.yAxisFontMultiplier)
            .style("fill", this.formattingSettings.enableYAxis.fill.value.value)
            .attr("stroke-width", 0);

        let yScale = scaleLinear()
            .domain([Math.min(0,<number>options.dataViews[0].categorical.values[0].minLocal,LCL), Math.max(<number>options.dataViews[0].categorical.values[0].maxLocal, UCL)*1.1])
            .range([height, 0]);

        let yTicks = 4;

        let yAxis = axisLeft(yScale)
            .tickSize(0) // removes tickmarks
            .ticks(yTicks)
            ;
        
        this.yAxis
            .call(yAxis)
            .attr("color", getYAxisTextFillColor(
                colorObjects,
                this.host.colorPalette,
                this.formattingSettings.enableYAxis.fill.value.value
            ));

        let maxW = 0;

        this.yAxis
            .selectAll("text").each( function (this:SVGGraphicsElement){
            if(this.getBBox().width > maxW) maxW = this.getBBox().width;
        });

        if (this.formattingSettings.enableYAxis.show.value) {
            yShift = maxW + 10; //longest "word" plus 10 pixels
        } 
        
        this.yAxis
            .attr('transform', 'translate(' + (yShift) + ',0)')

        //Y Grid lines
        this.svg.selectAll('.horizontalGrid').remove(); //removes previously drawn gridlines so they dont duplicate

        this.yGridLines
            .data(yScale.ticks())
            .enter()
            .append('line')
            .attr("class", "horizontalGrid")
            .attr("x1", yShift)
            .attr("x2", width)
            .attr("y1", function(d){ return yScale(d);})
            .attr("y2", function(d){ return yScale(d);})
            .attr("fill", "none")
            .attr("stroke", "#EEEEEE")
            .attr("stroke-width", 1)
            
                  
        //Set up the X Axis
        
        this.xAxis
            .style("font-size", Math.min(height, width) * BarChart.Config.xAxisFontMultiplier)
            .style("fill", this.formattingSettings.enableAxis.fill.value.value)
            .attr("stroke-width", 0);
    
        let xScale = scaleBand()
            .domain(this.dataPoints.map(d => d.category))
            .rangeRound([yShift, width])
            .padding(0.5);

        let xAxis = axisBottom(xScale)
            .tickSize(0) //removes the tickmarks
            .tickFormat(this.parseDateLabel)
            ;

        this.xAxis
            .attr('transform', 'translate(0, ' + (height + 2) + ')')
            .call(xAxis)
            .attr("color", getAxisTextFillColor(
                colorObjects,
                this.host.colorPalette,
                this.formattingSettings.enableAxis.fill.value.value
            ));
        
        //Create data line
        this.line
            .datum(this.dataPoints)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("stroke-linejoin", "round")
            .attr("d", d3.line<BarChartDataPoint>()
                .x(function (d) { return xScale(d.category) })
                .y(function (d) { return yScale(<number>d.value) })
            )
        
        //Create mean line
        this.lineMean
            .attr("class", "mean")
            .attr("x1", yShift)
            .attr("x2", width)
            .attr("y1", function(d){ return yScale(meanLine);})
            .attr("y2", function(d){ return yScale(meanLine);})
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 1.5)

        //Create limit lines        
        this.lineUCL
            .style("stroke-dasharray", ("5,5"))
            .style("stroke-linecap", "round")
            .attr("class", "mean")
            .attr("x1", yShift)
            .attr("x2", width)
            .attr("y1", function(d){ return yScale(UCL);})
            .attr("y2", function(d){ return yScale(UCL);})
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 2)
        this.lineLCL
            .style("stroke-dasharray", ("5,5"))
            .style("stroke-linecap", "round")
            .attr("class", "mean")
            .attr("x1", yShift)
            .attr("x2", width)
            .attr("y1", function(d){ return yScale(LCL);})
            .attr("y2", function(d){ return yScale(LCL);})
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 2)

    }

    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }

}

export {BarChart as Visual};