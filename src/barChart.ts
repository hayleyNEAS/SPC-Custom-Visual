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


import IVisual = powerbi.extensibility.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;

import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import { createTooltipServiceWrapper, ITooltipServiceWrapper } from "powerbi-visuals-utils-tooltiputils";

import { BarChartSettingsModel } from "./barChartSettingsModel";
import { getLocalizedString } from "./localisation/localisationHelper"

//Importing functions from file
import { SPCChartData, SPCChartDataPoint } from "./dataStructure"; 
import { parseDateLabel, parseinHMS, parseYLabels, PBIformatingKeeper } from "./formattingFunctions"
import { yAxisDomain, getFillColor, getYAxisTextFillColor } from "./chartFunctions"
import { identifyOutliers, twoInThreeRule, logoSelector, directionColors, getMean, getControlLimits, getMarkerColors } from "./spcFunctions"
import { dataLoad, dataSet, fullData } from "./dataLoad"


type Selection<T1, T2 = T1> = d3.Selection<any, T1, any, T2>;

function createSelectorData(options: VisualUpdateOptions, host: IVisualHost, formatSettings: BarChartSettingsModel): SPCChartData {
    //MEASURES INPUT
    let [dates_input, value_input, target_input, breakPoint_input] = dataLoad(options)
    let SPCChartDataPoints = dataSet(dates_input, value_input)
    let allData = fullData(options, formatSettings)
    
    //Constants
    let displayMarkerSize = 3
    let nPoints = allData.n//remove

    //DIRECTION
    let [direction, up_color, down_color] = directionColors(formatSettings)

    //TARGET
    let target = allData.target // remove

    //FORMATTING
    let [measureName, measureFormat, decimalPlaces] = [allData.measureName, allData.measureFormat, allData.decimalPlaces] //remove

    allData = getMean(allData)
    let meanValue = allData.meanValue //remove

    allData = getControlLimits(allData)

    //SPC Marker Colors Rules 
    allData = getMarkerColors(allData, formatSettings)
    SPCChartDataPoints = identifyOutliers(allData.datapoints, formatSettings, displayMarkerSize, allData.UCLValue, allData.LCLValue)

    let outlier = allData.datapoints[nPoints - 1].outlier
    let run = allData.datapoints[nPoints - 1].run
    let shift = allData.datapoints[nPoints - 1].shift
    let twoInThree = allData.datapoints[nPoints - 1].twoInThree


    return {
        datapoints: allData.datapoints,

        n: allData.n,
        direction,
        target,

        meanValue,
        UCLValue: allData.UCLValue,
        LCLValue: allData.LCLValue,

        Upper_Zone_A: allData.Upper_Zone_A,
        Upper_Zone_B: allData.Upper_Zone_B,
        Lower_Zone_A: allData.Lower_Zone_A,
        Lower_Zone_B: allData.Lower_Zone_B,

        strokeWidth: 2,
        strokeColor: 'steelblue',
        markerSize: allData.markerSize,

        measureName, 
        measureFormat,
        decimalPlaces,

        outlier,
        run,
        shift,
        twoInThree
    }
}


export class SPCChart implements IVisual {
    private svg: Selection<any>;

    private logo: Selection<any>;
    private logoTarget: Selection<any>;

    private host: IVisualHost;
    private xAxis: Selection<SVGElement>;
    private yAxis: Selection<SVGElement>;

    private lineData: Selection<SVGElement>;
    private lineData_Diff: Selection<SVGElement>;
    private lineMean: Selection<SVGElement>;
    private lineUCL: Selection<SVGElement>;
    private lineLCL: Selection<SVGElement>;
    private lineUpperZoneA: Selection<SVGElement>;
    private lineUpperZoneB: Selection<SVGElement>;
    private lineLowerZoneA: Selection<SVGElement>;
    private lineLowerZoneB: Selection<SVGElement>;
    private lineTarget: Selection<SVGElement>;

    private dataMarkers: Selection<SVGElement>;
    private tooltipMarkers: Selection<SVGElement>;

    private dataPoints: SPCChartDataPoint[];
    private formattingSettings: BarChartSettingsModel;
    private formattingSettingsService: FormattingSettingsService;

    private tooltipServiceWrapper: ITooltipServiceWrapper;
    private locale: string;

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
        this.locale = options.host.locale;

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

        this.lineMean = this.svg
            .append('line')
            .classed('line', true)

        this.lineUCL = this.svg
            .append('line')
            .classed('line', true)

        this.lineLCL = this.svg
            .append('line')
            .classed('line', true)

        this.lineUpperZoneA = this.svg
            .append('line')
            .classed('line', true)

        this.lineUpperZoneB = this.svg
            .append('line')
            .classed('line', true)

        this.lineLowerZoneA = this.svg
            .append('line')
            .classed('line', true)

        this.lineLowerZoneB = this.svg
            .append('line')
            .classed('line', true)

        this.lineTarget = this.svg
            .append('line')
            .classed('line', true);

        this.dataMarkers = this.svg
            .append('g')
            .classed('dataMarkers', true)
            .selectAll();

        this.tooltipMarkers = this.svg
            .append('g')
            .classed('dataMarkers', true)
            .selectAll();

        this.logo = this.svg
            .append('image')

        this.logoTarget = this.svg
            .append('image');

        this.tooltipServiceWrapper = createTooltipServiceWrapper(this.host.tooltipService, options.element);
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
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(BarChartSettingsModel, options.dataViews[0]);

        let data = createSelectorData(options, this.host, this.formattingSettings); 

        this.dataPoints = data.datapoints;

        let width = options.viewport.width;
        let height = options.viewport.height;
        let margins = SPCChart.Config.margins;
        let widthChartStart = 0;
        let widthChartEnd = 0.99 * width;


        this.svg
            .attr("width", width)
            .attr("height", height);

        if (this.formattingSettings.enableAxis.show.value) {
            height -= margins.bottom;
        }


        const colorObjects = options.dataViews[0] ? options.dataViews[0].metadata.objects : null;
        //Set up the Y Axis
        let yScale = scaleLinear()
            .domain(yAxisDomain(data))
            .range([height, 5]);

        let yTicks = 5;

        let yAxis = axisLeft(yScale)
            .tickSizeInner(-widthChartEnd);

        if (this.formattingSettings.enableYAxis.formatter.time.value) {
            yAxis = yAxis
                .ticks(yTicks)
                .tickFormat(d => parseinHMS(d))
                ;
        } else {
            yAxis = yAxis
                .ticks(yTicks, data.measureFormat); //format n=yTicks ticks into SI units
            ;
        };

        let yAxisObject = this.yAxis
            .call(yAxis)
            .transition().duration(500)
            .attr("color", getYAxisTextFillColor(
                colorObjects,
                this.host.colorPalette,
                this.formattingSettings.enableYAxis.formatter.fill.value.value
            ))
            ;

        yAxisObject.selectAll('.yAxis line')
            .attr('stroke', this.formattingSettings.enableYAxis.formatter.fill.value.value)
            .attr('opacity', 0.2)
            ;
        yAxisObject.selectAll('.yAxis path')
            .attr('opacity', 0)
            ;

        let yShift = 0;
        let maxW = 0;

        this.yAxis
            .selectAll("text")
            .each(function (this: SVGGraphicsElement) {
                if (this.getBBox().width > maxW) maxW = this.getBBox().width;
            });

        if (this.formattingSettings.enableYAxis.show.value || this.formattingSettings.enableYAxis.formatter.time.value) {
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
            .tickFormat(parseDateLabel)
            ;

        let xAxisObject = this.xAxis
            .attr('transform', 'translate(0, ' + (height + 2) + ')')
            .call(xAxis)
            .transition().duration(500)
            .attr("color", getFillColor(
                colorObjects,
                'enableAxis',
                'fill',
                this.host.colorPalette,
                this.formattingSettings.enableAxis.formatter.fill.value.value
            ));

        xAxisObject.selectAll('.xAxis path, line')
            .attr('opacity', 0)
            ;

        //Create target line
        this.lineTarget
            .style("stroke-linecap", "round")
            .attr("class", "target")
            .attr("x1", widthChartStart)
            .attr("x2", widthChartEnd)
            .attr("y1", function (d) { return yScale(data.target); })
            .attr("y2", function (d) { return yScale(data.target); })
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", this.formattingSettings.SPCSettings.spcSetUp.target.value == '' && data.target == -Infinity ? 0 : 2)

        //Create data line
        this.lineData
            .datum(this.dataPoints)
            .style("stroke-linecap", "round")
            .attr("fill", "none")
            .attr("stroke", function (d) { return data.strokeColor })
            .attr("stroke-width", function (d) { return data.strokeWidth })
            .attr("stroke-linejoin", "round")
            .attr("d", d3.line<SPCChartDataPoint>()
                .x(function (d) { return xScale(d.category) })
                .y(function (d) { return yScale(<number>d.value) })
            )

        this.svg.selectAll('.markers').remove();

        if (this.formattingSettings.SPCSettings.markerOptions.showMarker.value) {
            this.dataMarkers
                .data(this.dataPoints)
                .enter()
                .append("circle")
                .attr("class", "markers")
                .attr("cx", function (d) { return xScale(d.category) })
                .attr("cy", function (d) { return yScale(<number>d.value) })
                .attr("r", function (d) { return d.markerSize })
                .attr("fill", function (d) { return d.color });
        }

        this.tooltipMarkers
            .data(this.dataPoints)
            .enter()
            .append("circle")
            .attr("class", "markers tooltip")
            .attr("cx", function (d) { return xScale(d.category) })
            .attr("cy", function (d) { return yScale(<number>d.value) })
            .attr("r", function (d) { return 3 })
            .attr("fill", function (d) { return data.strokeColor })
            .attr("opacity", 0);

        let bandwidth = (widthChartEnd - widthChartStart) / (data.n - 1);

        this.dataMarkers
            .data(this.dataPoints)
            .enter()
            .append("rect")
            .attr("class", "markers")
            .attr("width", bandwidth)
            .attr("height", height)
            .attr("x", function (d) { return xScale(d.category) - bandwidth / 2 })
            .attr("y", 0)
            .attr("fill", function (d) { return d.color })
            .attr("opacity", 0); //invisable rectangles 

        this.tooltipMarkers
            .data(this.dataPoints)
            .enter()
            .append("rect")
            .attr("class", "markers tooltip")
            .attr("width", 0.05)
            .attr("height", height)
            .attr("x", function (d) { return xScale(d.category) })
            .attr("y", 0)
            .attr("stroke", "#777777")
            .attr("opacity", 0) //invisable rectangles 


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
        if (this.formattingSettings.SPCSettings.lineOptions.showMean.value) {
            this.lineMean
                .style("stroke-linecap", "round")
                .attr("class", "mean")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.meanValue); })
                .attr("y2", function (d) { return yScale(data.meanValue); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1.5)
        } else {
            this.lineMean
                .attr("stroke-width", 0)
        }

        //Create limit lines   
        if (this.formattingSettings.SPCSettings.lineOptions.showControl.value) {
            this.lineUCL
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "ControlLimit")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.UCLValue); })
                .attr("y2", function (d) { return yScale(data.UCLValue); })
                .attr("fill", "none")
                .attr("stroke", this.formattingSettings.SPCSettings.lineOptions.upperCL.value.value)
                .attr("stroke-width", 2)

            this.lineLCL
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "ControlLimit")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.LCLValue); })
                .attr("y2", function (d) { return yScale(data.LCLValue); })
                .attr("fill", "none")
                .attr("stroke", this.formattingSettings.SPCSettings.lineOptions.upperCL.value.value)
                .attr("stroke-width", 2)
        } else {
            this.lineUCL
                .attr("stroke-width", 0)

            this.lineLCL
                .attr("stroke-width", 0)
        }

        //Create Zone lines 
        if (this.formattingSettings.SPCSettings.lineOptions.showSubControl.value) {
            this.lineUpperZoneA
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "subControl")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.Upper_Zone_A); })
                .attr("y2", function (d) { return yScale(data.Upper_Zone_A); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1)

            this.lineUpperZoneB
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "subControl")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.Upper_Zone_B); })
                .attr("y2", function (d) { return yScale(data.Upper_Zone_B); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1)

            this.lineLowerZoneA
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "subControl")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.Lower_Zone_A); })
                .attr("y2", function (d) { return yScale(data.Lower_Zone_A); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1)

            this.lineLowerZoneB
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "subControl")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.Lower_Zone_B); })
                .attr("y2", function (d) { return yScale(data.Lower_Zone_B); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1)
        } else {
            this.lineUpperZoneA
                .attr("stroke-width", 0)

            this.lineUpperZoneB
                .attr("stroke-width", 0)

            this.lineLowerZoneA
                .attr("stroke-width", 0)

            this.lineLowerZoneB
                .attr("stroke-width", 0)
        }
        // Move logo 
        let logoX = widthChartStart
        if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == -1) {
            logoX = widthChartStart
        } if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == 0) {
            logoX = (widthChartEnd - widthChartStart) / 2 + widthChartStart - 50
        } if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == 1) {
            logoX = widthChartEnd - 100
        }
        let logo = logoSelector(data, "variation")
        if (this.formattingSettings.SPCSettings.logoOptions.show.value) {
            this.logo
                .attr('href', logo)
                .attr('width', 50)
                .attr('height', 50)
                .attr('x', logoX)
                .attr('y', 0)
        } else {
            this.logo
                .attr('width', 0)
                .attr('height', 0)
        }

        let logoTarget = logoSelector(data, "target")
        if (this.formattingSettings.SPCSettings.logoOptions.show.value) {
            this.logoTarget
                .attr('href', logoTarget)
                .attr('width', 50)
                .attr('height', 50)
                .attr('x', logoX + 50)
                .attr('y', 0)
        } else {
            //this.logoTarget
            //    .attr('width', 0)
            //.attr('height', 0)
        }

        //ToolTips
        let thissvg = this.svg;
        let tt = this.tooltipMarkers;
        let dm = this.dataPoints;

        this.svg
            .on('mouseover', function () {
                console.log('on')
            })
            .on('mousemove', function (ev) {
                thissvg //clear previous tooltip
                    .selectAll('.markers.tooltip')
                    .attr("opacity", 0);

                let pointer = d3.pointer(ev)
                let cats = dm.map(d => xScale(d.category))
                let closest = cats.reduce(function (prev, curr) {
                    return (Math.abs(curr - pointer[0]) < Math.abs(prev - pointer[0]) ? curr : prev);
                });

                let index = cats.map(d => d == closest).indexOf(true)
                let tooltiplines = thissvg
                    .selectAll('rect.markers.tooltip')
                    .nodes();

                let tooltipmarkers = thissvg
                    .selectAll('circle.markers.tooltip')
                    .nodes();

                d3Select(tooltiplines[index])
                    .attr("opacity", 1);

                d3Select(tooltipmarkers[index])
                    .attr("opacity", 1);


            })
            .on('mouseleave', function () {
                thissvg
                    .selectAll('.markers.tooltip')
                    .attr("opacity", 0);
                console.log('left')
            });

        this.tooltipServiceWrapper
            .addTooltip(this.svg.selectAll('rect.markers'),
                (d: SPCChartDataPoint) => this.getTooltipData(d, data),
                (d: SPCChartDataPoint) => null,
                true
            );

    }


    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }

    private getTooltipData(d: SPCChartDataPoint, data: SPCChartData): VisualTooltipDataItem[] {
        return [
            {
                header: d.category,
                displayName: data.measureName,
                value: parseYLabels(<number>d.value, this.formattingSettings.enableYAxis.formatter.time.value),
                color: data.strokeColor
            },
            {
                displayName: "Upper Control Limit",
                value: parseYLabels(data.UCLValue, this.formattingSettings.enableYAxis.formatter.time.value),
                color: "darkgrey"
            }
        ];
    }

}

export { SPCChart as Visual };