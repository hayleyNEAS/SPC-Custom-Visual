import { scaleLinear, scalePoint } from "d3-scale";
import { select as d3Select } from "d3-selection";

import "./../style/visual.less";

import { axisBottom, axisLeft } from "d3-axis";
import * as d3 from "d3";
import { BaseType } from "d3-selection"

import powerbi from "powerbi-visuals-api";
import "regenerator-runtime/runtime";


import IVisual = powerbi.extensibility.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import ISelectionId = powerbi.visuals.ISelectionId;

import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import { createTooltipServiceWrapper, ITooltipServiceWrapper } from "powerbi-visuals-utils-tooltiputils";

import { VisualSettingsModel } from "./visualSettingsModel";

//Importing functions from file
import { SPCChartData, SPCChartDataPoint } from "./dataStructure";
import { parseDateLabel, parseinHMS } from "./formattingFunctions"
import { yAxisDomain, getFillColor, getYAxisTextFillColor } from "./chartFunctions"
import { createDataset } from "./dataLoad"
import { logoSelector } from "./spcFunctions";
import { getTooltipData } from "./tooltipFunctions"

type Selection<T1, T2 = T1> = d3.Selection<any, T1, any, T2>;

export class SPCChart implements IVisual {
    //Physical objects in the chart 
    //The Chart
    private svg: Selection<any>;                            //Chart
    private host: IVisualHost;                              //Interactability 
    private tooltipServiceWrapper: ITooltipServiceWrapper;  //ToolTips
    private selectionManager: ISelectionManager;            //Right click menu
    private locale: string;                                 //Locale of user

    //The logos
    private logo: Selection<any>;
    private logoTarget: Selection<any>;

    //The Axis
    private xAxis: Selection<SVGElement>;
    private yAxis: Selection<SVGElement>;

    //The Lines
    private lineData: Selection<SVGElement>;
    private lineMean: Selection<SVGElement>;
    private lineUCL: Selection<SVGElement>;
    private lineLCL: Selection<SVGElement>;
    private lineUpperZoneA: Selection<SVGElement>;
    private lineUpperZoneB: Selection<SVGElement>;
    private lineLowerZoneA: Selection<SVGElement>;
    private lineLowerZoneB: Selection<SVGElement>;
    private lineTarget: Selection<SVGElement>;

    //The Markers
    private dataMarkers: Selection<any>;
    private tooltipMarkers: Selection<SVGElement>;

    //The Data
    private data: SPCChartData;
    private dataPoints: SPCChartDataPoint[];
    private formattingSettings: VisualSettingsModel;
    private formattingSettingsService: FormattingSettingsService;

    //Configuration parameters
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
        chartWidth: {
            start: 0,
            end: 0,
            height: 0,
            width: 0
        },

    yTicks: 5

    };

    //Creates formatting pane
    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }

    //This initialises the chart - only ran once
    //Basically a load of empty objects waiting to be filled
    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        const localizationManager = this.host.createLocalizationManager();
        this.formattingSettingsService = new FormattingSettingsService(localizationManager);
        this.selectionManager = options.host.createSelectionManager();
        this.locale = options.host.locale;

        this.selectionManager.registerOnSelectCallback(() => {
            this.syncSelectionState(this.dataMarkers, this.dataMarkers, <ISelectionId[]>this.selectionManager.getSelectionIds());
        });

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
            .classed('line', true);

        this.lineMean = this.svg
            .append('path')
            .classed('line', true);

        this.lineUCL = this.svg
            .append('path')
            .classed('line', true);

        this.lineLCL = this.svg
            .append('path')
            .classed('line', true);

        this.lineUpperZoneA = this.svg
            .append('path')
            .classed('line', true);

        this.lineUpperZoneB = this.svg
            .append('path')
            .classed('line', true);

        this.lineLowerZoneA = this.svg
            .append('path')
            .classed('line', true);

        this.lineLowerZoneB = this.svg
            .append('path')
            .classed('line', true);

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
            .append('image');

        this.logoTarget = this.svg
            .append('image');

        this.tooltipServiceWrapper = createTooltipServiceWrapper(this.host.tooltipService, options.element);
        this.handleContextMenu();
    }
    private handleContextMenu() {
        this.svg.on('contextmenu', (event) => {
            const mouseEvent: MouseEvent = event;
            const eventTarget: EventTarget = mouseEvent.target;
            const dataPoint: any = d3Select(<BaseType>eventTarget).datum();
            this.selectionManager.showContextMenu(dataPoint ? dataPoint.selectionId : {}, {
                x: mouseEvent.clientX,
                y: mouseEvent.clientY
            });
            mouseEvent.preventDefault();
        });
    }  

    private handleClick(selection: Selection<any>, selection2: Selection<any>) {
        // Clear selection when clicking outside a bar
        this.svg.on('click', () => {
            if (this.host.hostCapabilities.allowInteractions) {
                this.selectionManager
                    .clear()
                    .then(() => {
                        this.syncSelectionState(selection, selection2, []);
                    });
            }
        });
    }

    private syncSelectionState( selection: Selection<SPCChartDataPoint>, circle: Selection<SPCChartDataPoint>, selectionIds: ISelectionId[]): void {
        if (!selection || !selectionIds) {
            return;
        }
        //console.log('click success')
        
        if (!selectionIds.length) { //nothing selected 
            const opacity: number = 0.0//this.barChartSettings.generalView.opacity / 100;
            selection
                .style("fill-opacity", opacity)
                .style("stroke-opacity", opacity);

            this.lineData
                .style("opacity", 1)

            if (this.formattingSettings.SPCSettings.markerOptions.showMarker.value) {
                circle
                    .style("opacity", 1)
            } else {
                circle
                    .style("opacity", 0)
            }

            circle.each(function (datapoint: SPCChartDataPoint) {
                d3Select(this)
                    .attr("r", datapoint.markerSize)
            }); 
            return;
        }
        
        this.lineData
            .style("opacity", 0.3)
            
        circle
            .style("opacity", 1) 

        selection.each(((self) => function (datapoint: SPCChartDataPoint) {
            const isSelected: boolean = self.isSelectionIdInArray(selectionIds, datapoint.selectionID);

            const opacity: number = isSelected? 0: 0;
            d3Select(this)
                .style("fill-opacity", opacity)
                .style("stroke-opacity", opacity);
        })(this));

        circle.each(((self) => function (datapoint: SPCChartDataPoint) {
            const isSelected: boolean = self.isSelectionIdInArray(selectionIds, datapoint.selectionID);
            d3Select(this)
                .attr("r", isSelected? self.data.markerSize: datapoint.markerSize)
            if (self.formattingSettings.SPCSettings.markerOptions.showMarker.value) {
                d3Select(this)
                    .style("opacity", isSelected? 1: 0.3)
            } else {
                d3Select(this)
                    .style("opacity", isSelected? 1: 0)
            }
        })(this)); 
    }

    private isSelectionIdInArray(selectionIds: ISelectionId[], selectionId: ISelectionId): boolean {
        if (!selectionIds || !selectionId) {
            return false;
        }

        return selectionIds.some((currentSelectionId: ISelectionId) => {
            return currentSelectionId.includes(selectionId);
        });
    }

    public tooltipMouseMove(xScale: d3.ScalePoint<string>, thissvg: Selection<any, any>, dm: SPCChartDataPoint[]){
        return function(ev: Event){
            thissvg //clear previous tooltip
                .selectAll('.markers.tooltip')
                .attr("opacity", 0);

            const pointer = d3.pointer(ev)
            const cats = dm.map(d => xScale(d.category))
            const closest = cats.reduce(function (prev, curr) { return (Math.abs(curr - pointer[0]) < Math.abs(prev - pointer[0]) ? curr : prev); });

            const index = cats.map(d => d == closest).indexOf(true)
            const tooltiplines = thissvg
                .selectAll('rect.markers.tooltip')
                .nodes();

            const tooltipmarkers = thissvg
                .selectAll('circle.markers.tooltip')
                .nodes();

            d3Select(tooltiplines[index])
                .attr("opacity", 1);

            d3Select(tooltipmarkers[index])
                .attr("opacity", 1);
        }
    }

    public tooltipMouseOff(thissvg){
        return function() {
            thissvg
            .selectAll('.markers.tooltip')
            .attr("opacity", 0);
        }
    }
    
    public logoDisplayer(){

        let logoX = SPCChart.Config.chartWidth.start
        if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == -1) {
            logoX = SPCChart.Config.chartWidth.start
        } if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == 0) {
            logoX = (SPCChart.Config.chartWidth.end - SPCChart.Config.chartWidth.start) / 2 + SPCChart.Config.chartWidth.start - 50
        } if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == 1) {
            logoX = SPCChart.Config.chartWidth.end - 100
        }

        const logo = logoSelector(this.data, "variation")
        if (this.formattingSettings.SPCSettings.logoOptions.show.value && this.data.n > 1) {
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
        const logoTarget = logoSelector(this.data, "target")
        if (this.formattingSettings.SPCSettings.logoOptions.show.value && this.data.target && this.data.n > 1) {
            this.logoTarget
                .attr('href', logoTarget)
                .attr('width', 50)
                .attr('height', 50)
                .attr('x', logoX + 50)
                .attr('y', 0)
        } else {
            this.logoTarget
                .attr('width', 0)
                .attr('height', 0)
        }
    }

    public meanDisplayer(xScale: d3.ScalePoint<string>, yScale: d3.ScaleLinear<number, number, never>){
        if (this.formattingSettings.SPCSettings.lineOptions.showMean.value) {
            this.lineMean
                .datum(this.dataPoints)
                .attr("class", "mean")
                .attr("fill", "none")
                .attr("stroke", this.formattingSettings.SPCSettings.lineOptions.meanColor.value.value)
                .attr("stroke-width", 1.5)
                .attr("stroke-linejoin", "round")
                .style("stroke-linecap", "round")
                .attr("d", d3.line<SPCChartDataPoint>()
                    .x(function (d) { return xScale(d.category) })
                    .y(function (d) { return yScale(<number>d.mean) })
                );
        } else {
            this.lineMean
                .attr("stroke-width", 0)
        }
    }

    public targetDisplayer(yScale: d3.ScaleLinear<number, number, never>){
        if (this.formattingSettings.SPCSettings.logoOptions.show.value) {
            const targetValue = isNaN(yScale(this.data.target)) ? 0 : yScale(this.data.target);
            this.lineTarget
                .style("stroke-linecap", "round")
                .attr("class", "target")
                .attr("stroke-width", 1.5)
                .attr("x1", SPCChart.Config.chartWidth.start)
                .attr("x2", SPCChart.Config.chartWidth.end)
                .attr("y1", targetValue)
                .attr("y2", targetValue)
                .attr("fill", "none")
                .attr("stroke", this.formattingSettings.SPCSettings.lineOptions.targetColor.value.value)
                .attr("stroke-width", this.formattingSettings.SPCSettings.spcSetUp.target.value == '' && this.data.target == -Infinity ? 0 : 2)
        }
    }
    //This updates the chart - ran each time anything changes in the visual (ie filters, mouse moves, drilling up/down)
    public update(options: VisualUpdateOptions) {
        //Set up the charting object 
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualSettingsModel, options.dataViews[0]);

        this.data = createDataset(options, this.host, this.formattingSettings);
        const data = this.data
        this.dataPoints = data.dataPoints.filter(d => d.value !== null);
        const n = this.dataPoints.length;
        

        //Define the chart size
        if(n > 0){
            SPCChart.Config.chartWidth.height = options.viewport.height;
            SPCChart.Config.chartWidth.width  = options.viewport.width;
            SPCChart.Config.chartWidth.height -= this.formattingSettings.enableAxis.show.value ? SPCChart.Config.margins.bottom : 0
        }
        SPCChart.Config.chartWidth.end    = options.viewport.width;

        //Give the chart image a width and a height based on the size of the image in the report. If no data then the chart has no size
        this.svg
            .attr("width", SPCChart.Config.chartWidth.width)
            .attr("height", SPCChart.Config.chartWidth.height);

        //Set up the Y Axis
        const yScale = scaleLinear()
            .domain(yAxisDomain(data))
            .range([SPCChart.Config.chartWidth.height, 5]);

        let yAxis = axisLeft(yScale)
            .tickSizeInner(-SPCChart.Config.chartWidth.end);

        if (this.formattingSettings.enableYAxis.formatter.time.value) {
            yAxis = yAxis
                .ticks(SPCChart.Config.yTicks)
                .tickFormat(d => parseinHMS(d))
                ;
        } else {
            yAxis = yAxis
                .ticks(SPCChart.Config.yTicks, data.measureFormat); //format n=yTicks ticks into SI units
        }

        const yAxisObject = this.yAxis
            .call(yAxis)
            .transition().duration(500)
            .attr("color", getYAxisTextFillColor(
                options,
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

        this.yAxis
            .style('font-family', 'inherit')
            .style('font-size', 11) //TODO make this a drop down
            .attr('transform', 'translate(' + (yShift) + ',0)')

        //Set up the X Axis
        SPCChart.Config.chartWidth.start = yShift 
        let xScale = scalePoint();
        let maxW_xAxis = 0;
        let total_label_coverage = 0;
        let bandwidth;

        for (let i = 0; i < 2; i++) { //should only run twice to "fit" the chart to size

            let inner_chartMargin = SPCChart.Config.chartWidth.width - SPCChart.Config.chartWidth.end
            bandwidth = data.n == 1 ? (SPCChart.Config.chartWidth.end - SPCChart.Config.chartWidth.start) : (SPCChart.Config.chartWidth.end - SPCChart.Config.chartWidth.start) / (data.n - 1); //each datapoint takes up one "bandwidth" of the chart area

            this.xAxis
                .style("font-size", 11)
                ;

            xScale = scalePoint()
                .domain(data.dataPoints.map(d => d.category))
                .range([SPCChart.Config.chartWidth.start, SPCChart.Config.chartWidth.end])
                ;

            const span = [0, -1].map(i => new Date(data.dataPoints.at(i).category))
            const xAxis = axisBottom(xScale)
                .tickFormat(d => parseDateLabel(d, data.levelOfDateHeirarchy, span))
                ;

            const xAxisObject = this.xAxis
                .attr('transform', 'translate(0, ' + (SPCChart.Config.chartWidth.height + 2) + ')')
                .call(xAxis)
                .transition().duration(500)
                .attr("color", getFillColor(
                    options,
                    'enableAxis',
                    'fill',
                    this.host.colorPalette,
                    this.formattingSettings.enableAxis.formatter.fill.value.value
                ));

            xAxisObject.selectAll('.xAxis path, line')
                .attr('opacity', 0)
                ;

            //XAxis label reducer  
            this.xAxis
                .selectAll("text")
                .each(function (this: SVGGraphicsElement, d, i) {
                    total_label_coverage += this.getBBox().width
                    if (this.getBBox().width > maxW_xAxis) maxW_xAxis = this.getBBox().width;
                    if (i == n - 1) inner_chartMargin = this.getBBox().width / 2.;
                });
            if (inner_chartMargin == 0){inner_chartMargin = 0.02*SPCChart.Config.chartWidth.width}//if there is no final tick label then we need the margin to be 2% of the chart width
            if (SPCChart.Config.chartWidth.end + inner_chartMargin > SPCChart.Config.chartWidth.width) {
                SPCChart.Config.chartWidth.end -= inner_chartMargin
                SPCChart.Config.chartWidth.start += inner_chartMargin
            } else {
                break //catch run away loops
            }
        }

        if (data.n > 1) {   
            const n_xTicks = Math.ceil(total_label_coverage * 1.2 / (SPCChart.Config.chartWidth.end - SPCChart.Config.chartWidth.start))
            if (total_label_coverage / (SPCChart.Config.chartWidth.end - SPCChart.Config.chartWidth.start) > 1) {
                this.xAxis
                    .selectAll(`.tick`)
                    .attr('display', 'none')

                this.xAxis
                    .selectAll(`.tick:nth-child(${n_xTicks}n + ${Math.floor(n_xTicks / 2)})`)
                    .attr('display', 'block')
            }

        }

        //Create data line
        this.lineData
            .datum(this.dataPoints)
            .style("stroke-linecap", "round")
            .attr("fill", "none")
            .attr("stroke", function () { return data.strokeColor })
            .attr("stroke-width", function () { return data.strokeWidth })
            .attr("stroke-linejoin", "round")
            .attr("d", d3.line<SPCChartDataPoint>()
                .x(function (d) { return xScale(d.category) })
                .y(function (d) { return yScale(<number>d.value) })
            )

        this.svg.selectAll('.markers').remove();

        const circlemarkers = this.dataMarkers
            .data(this.dataPoints)
            .enter()
            .append("circle")
            .attr("class", "markers")
            .attr("cx", function (d) { return xScale(d.category) })
            .attr("cy", function (d) { return yScale(<number>d.value) })
            .attr("r", function (d) { return d.markerSize })
            .attr("fill", function (d) { return d.color });

        this.tooltipMarkers
            .data(this.dataPoints)
            .enter()
            .append("circle")
            .attr("class", "markers tooltip")
            .attr("cx", function (d) { return xScale(d.category) })
            .attr("cy", function (d) { return yScale(<number>d.value) })
            .attr("r", function () { return data.markerSize })
            .attr("fill", function (d) { return d.color })
            .attr("opacity", 0);

        const invisibleBars = this.dataMarkers
            .data(this.dataPoints)
            .enter()
            .append("rect")
            .attr("class", "markers")
            .attr("width", bandwidth)
            .attr("height", SPCChart.Config.chartWidth.height)
            .attr("x", function (d) { return xScale(d.category) - bandwidth / 2 })
            .attr("y", 0)
            .attr("fill", function (d) { return d.color }); //invisable rectangles 

        this.syncSelectionState( invisibleBars, circlemarkers, <ISelectionId[]>this.selectionManager.getSelectionIds() );

        this.tooltipMarkers
            .data(this.dataPoints)
            .enter()
            .append("rect")
            .attr("class", "markers tooltip")
            .attr("width", 0.05)
            .attr("height", SPCChart.Config.chartWidth.height)
            .attr("x", function (d) { return xScale(d.category) })
            .attr("y", 0)
            .attr("stroke", "#777777")
            .attr("opacity", 0); //invisable rectangles 

        
        invisibleBars.on('click', (event: Event, datum: SPCChartDataPoint) => {//To allow cross filtering
            if (this.host.hostCapabilities.allowInteractions) {// Allow selection only if the visual is rendered in a view that supports interactivity (e.g. Report)
                const isCtrlPressed: boolean = (<MouseEvent>event).ctrlKey;
                this.selectionManager
                    .select(datum.selectionID, isCtrlPressed)
                    .then((ids: ISelectionId[]) => { this.syncSelectionState(invisibleBars, circlemarkers, ids); });
                (<Event>event).stopPropagation();
            }
        });
        this.dataMarkers
            .exit()
            .remove();
        this.handleClick(invisibleBars, circlemarkers);

        if (n > 1) {
            this.meanDisplayer(xScale, yScale)//Create mean line
            this.targetDisplayer(yScale)//Create target line

            //Create limit lines   
            if (this.formattingSettings.SPCSettings.lineOptions.showControl.value) {
                this.lineUCL
                    .datum(this.dataPoints)
                    .attr("class", "ControlLimit")
                    .attr("fill", "none")
                    .attr("stroke", this.formattingSettings.SPCSettings.lineOptions.upperCL.value.value)
                    .attr("stroke-width", 2)
                    .style("stroke-dasharray", ("5,5"))
                    .style("stroke-linecap", "round")
                    .attr("d", d3.line<SPCChartDataPoint>()
                        .x(function (d) { return xScale(d.category) })
                        .y(function (d) { return yScale(<number>d.UCLValue) })
                    );

                this.lineLCL
                    .datum(this.dataPoints)
                    .attr("class", "ControlLimit")
                    .attr("fill", "none")
                    .attr("stroke", this.formattingSettings.SPCSettings.lineOptions.lowerCL.value.value)
                    .attr("stroke-width", 2)
                    .style("stroke-dasharray", ("5,5"))
                    .style("stroke-linecap", "round")
                    .attr("d", d3.line<SPCChartDataPoint>()
                        .x(function (d) { return xScale(d.category) })
                        .y(function (d) { return yScale(<number>d.LCLValue) })
                    );
            } else {
                this.lineUCL
                    .attr("stroke-width", 0)

                this.lineLCL
                    .attr("stroke-width", 0)
            }

            //Create Zone lines 
            if (this.formattingSettings.SPCSettings.lineOptions.showSubControl.value) {
                this.lineUpperZoneA
                    .datum(this.dataPoints)
                    .style("stroke-dasharray", ("5,5"))
                    .style("stroke-linecap", "round")
                    .attr("class", "subControl")
                    .attr("fill", "none")
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("d", d3.line<SPCChartDataPoint>()
                        .x(function (d) { return xScale(d.category) })
                        .y(function (d) { return yScale(<number>d.Upper_Zone_A) })
                    );

                this.lineUpperZoneB
                    .datum(this.dataPoints)
                    .style("stroke-dasharray", ("5,5"))
                    .style("stroke-linecap", "round")
                    .attr("class", "subControl")
                    .attr("fill", "none")
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("d", d3.line<SPCChartDataPoint>()
                        .x(function (d) { return xScale(d.category) })
                        .y(function (d) { return yScale(<number>d.Upper_Zone_B) })
                    );

                this.lineLowerZoneA
                    .datum(this.dataPoints)
                    .style("stroke-dasharray", ("5,5"))
                    .style("stroke-linecap", "round")
                    .attr("class", "subControl")
                    .attr("fill", "none")
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("d", d3.line<SPCChartDataPoint>()
                        .x(function (d) { return xScale(d.category) })
                        .y(function (d) { return yScale(<number>d.Lower_Zone_A) })
                    );

                this.lineLowerZoneB
                    .datum(this.dataPoints)
                    .style("stroke-dasharray", ("5,5"))
                    .style("stroke-linecap", "round")
                    .attr("class", "subControl")
                    .attr("fill", "none")
                    .attr("stroke", "black")
                    .attr("stroke-width", 1)
                    .attr("d", d3.line<SPCChartDataPoint>()
                        .x(function (d) { return xScale(d.category) })
                        .y(function (d) { return yScale(<number>d.Lower_Zone_B) })
                    );
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
        }
        // Move logo 
        this.logoDisplayer()

        //ToolTips
        this.svg
            .on('mousemove', this.tooltipMouseMove(xScale, this.svg, this.dataPoints))
            .on('mouseleave', this.tooltipMouseOff(this.svg));

        this.tooltipServiceWrapper
            .addTooltip(
                this.svg.selectAll('rect.markers'),
                (d: SPCChartDataPoint) => getTooltipData(d, data, this.formattingSettings)
            );
    }
}

export { SPCChart as Visual };