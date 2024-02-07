import { scaleBand, scaleLinear, scalePoint } from "d3-scale";
import { select as d3Select } from "d3-selection";

import "./../style/visual.less";

import { axisBottom, axisLeft } from "d3-axis";
import { timeFormat, timeParse } from "d3-time-format";
import * as d3 from "d3";
import { BaseType } from "d3-selection"

import powerbi from "powerbi-visuals-api";
import "regenerator-runtime/runtime";


import IVisual = powerbi.extensibility.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import ISelectionManager = powerbi.extensibility.ISelectionManager;
import ISelectionId = powerbi.visuals.ISelectionId;

import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import { createTooltipServiceWrapper, ITooltipServiceWrapper } from "powerbi-visuals-utils-tooltiputils";

import { VisualSettingsModel } from "./visualSettingsModel";
import { getLocalizedString } from "./localisation/localisationHelper"

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
        const self: this = this;
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

        selection.each(function (datapoint: SPCChartDataPoint) {
            const isSelected: boolean = self.isSelectionIdInArray(selectionIds, datapoint.selectionID);

            const opacity: number = isSelected? 0: 0;
            d3Select(this)
                .style("fill-opacity", opacity)
                .style("stroke-opacity", opacity);
        });

        circle.each(function (datapoint: SPCChartDataPoint) {
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
        }); 
    }

    private isSelectionIdInArray(selectionIds: ISelectionId[], selectionId: ISelectionId): boolean {
        if (!selectionIds || !selectionId) {
            return false;
        }

        return selectionIds.some((currentSelectionId: ISelectionId) => {
            return currentSelectionId.includes(selectionId);
        });
    }
    //This updates the chart - ran each time anything changes in the visual (ie filters, mouse moves, drilling up/down)
    public update(options: VisualUpdateOptions) {
        //Set up the charting object 
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualSettingsModel, options.dataViews[0]);

        this.data = createDataset(options, this.host, this.formattingSettings);
        let data = this.data
        this.dataPoints = data.dataPoints.filter(d => d.value !== null);
        let n = this.dataPoints.length

        //Define the chart size
        let width = options.viewport.width;
        let height = options.viewport.height;
        let margins = SPCChart.Config.margins;

        //Define the usable chart size
        let widthChartStart = 0;
        let widthChartEnd = width;

        //Give the chart image a width and a height based on the size of the image in the report
        //If no data then the chart has no size
        if (n == 0) {
            this.svg
                .attr("width", 0)
                .attr("height", 0);
            return
        } else {
            this.svg
                .attr("width", width)
                .attr("height", height);
        }

        //Option to show/hide the x axis 
        if (this.formattingSettings.enableAxis.show.value) {
            height -= margins.bottom;
        }

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
        widthChartStart = yShift 
        let xScale = scalePoint();
        let maxW_xAxis = 0;
        let total_label_coverage = 0;
        let bandwidth;

        for (let i = 0; i < 2; i++) { //should only run twice to "fit" the chart to size

            let inner_chartMargin = width - widthChartEnd
            bandwidth = data.n == 1 ? (widthChartEnd - widthChartStart) : (widthChartEnd - widthChartStart) / (data.n - 1); //each datapoint takes up one "bandwidth" of the chart area

            this.xAxis
                .style("font-size", 11)
                ;

            xScale = scalePoint()
                .domain(data.dataPoints.map(d => d.category))
                .range([widthChartStart, widthChartEnd])
                ;

            let span = [0, -1].map(i => new Date(data.dataPoints.at(i).category))
            let xAxis = axisBottom(xScale)
                .tickFormat(d => parseDateLabel(d, data.levelOfDateHeirarchy, span))
                ;

            let xAxisObject = this.xAxis
                .attr('transform', 'translate(0, ' + (height + 2) + ')')
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
            if (inner_chartMargin == 0){inner_chartMargin = 0.02*width}//if there is no final tick label then we need the margin to be 2% of the chart width
            if (widthChartEnd + inner_chartMargin > width) {
                widthChartEnd -= inner_chartMargin
                widthChartStart += inner_chartMargin
            } else {
                break
            }
        }

        let n_xTicks = Math.ceil(total_label_coverage * 1.2 / (widthChartEnd - widthChartStart))

        if (data.n > 1) {
            if (total_label_coverage / (widthChartEnd - widthChartStart) > 1) {
                this.xAxis
                    .selectAll(`.tick`)
                    .attr('display', 'none')

                this.xAxis
                    .selectAll(`.tick:nth-child(${n_xTicks}n + ${Math.floor(n_xTicks / 2)})`)
                    .attr('display', 'block')
            }

        }

        //Create target line
        if (this.formattingSettings.SPCSettings.logoOptions.show.value) {
            this.lineTarget
                .style("stroke-linecap", "round")
                .attr("class", "target")
                .attr("stroke-width", 1.5)
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) {
                    let val = yScale(data.target)
                    return isNaN(val) ? 0 : val;
                })
                .attr("y2", function (d) {
                    let val = yScale(data.target)
                    return isNaN(val) ? 0 : val;
                })
                .attr("fill", "none")
                .attr("stroke", this.formattingSettings.SPCSettings.lineOptions.targetColor.value.value)
                .attr("stroke-width", this.formattingSettings.SPCSettings.spcSetUp.target.value == '' && data.target == -Infinity ? 0 : 2)
        }


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

            let circlemarkers = this.dataMarkers
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
            .attr("r", function (d) { return data.markerSize })
            .attr("fill", function (d) { return d.color })
            .attr("opacity", 0);

        const invisibleBars = this.dataMarkers
            .data(this.dataPoints)
            .enter()
            .append("rect")
            .attr("class", "markers")
            .attr("width", bandwidth)
            .attr("height", height)
            .attr("x", function (d) { return xScale(d.category) - bandwidth / 2 })
            .attr("y", 0)
            .attr("fill", function (d) { return d.color }); //invisable rectangles 

        this.syncSelectionState(
            invisibleBars,
            circlemarkers,
            <ISelectionId[]>this.selectionManager.getSelectionIds()
        );

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
            .attr("opacity", 0); //invisable rectangles 

        //To allopw cross filtering
        invisibleBars.on('click', (event: Event, datum: SPCChartDataPoint) => {
            // Allow selection only if the visual is rendered in a view that supports interactivity (e.g. Report)
            if (this.host.hostCapabilities.allowInteractions) {
                const isCtrlPressed: boolean = (<MouseEvent>event).ctrlKey;

                this.selectionManager
                    .select(datum.selectionID, isCtrlPressed)
                    .then((ids: ISelectionId[]) => {
                        this.syncSelectionState(invisibleBars, circlemarkers, ids);
                    });
                (<Event>event).stopPropagation();
            }
        });
        this.dataMarkers
            .exit()
            .remove();
        this.handleClick(invisibleBars, circlemarkers);

        if (n > 1) {
            //Create mean line
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
        let logoX = widthChartStart
        if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == -1) {
            logoX = widthChartStart
        } if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == 0) {
            logoX = (widthChartEnd - widthChartStart) / 2 + widthChartStart - 50
        } if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == 1) {
            logoX = widthChartEnd - 100
        }
        let logo = logoSelector(data, "variation")
        if (this.formattingSettings.SPCSettings.logoOptions.show.value && n > 1) {
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
        if (this.formattingSettings.SPCSettings.logoOptions.show.value && data.target && n > 1) {
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

        //ToolTips
        let thissvg = this.svg;
        let tt = this.tooltipMarkers;
        let dm = this.dataPoints;

        this.svg
            .on('mouseover', function () {
                //console.log('on')
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
                //console.log('left')
            });

        this.tooltipServiceWrapper
            .addTooltip(
                this.svg.selectAll('rect.markers'),
                d => getTooltipData(d, data, this.formattingSettings),
                (d: SPCChartDataPoint) => null,
                true
            );

    }


}

export { SPCChart as Visual };