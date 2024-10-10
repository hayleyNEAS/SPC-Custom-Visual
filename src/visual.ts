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
import IVisualEventService = powerbi.extensibility.IVisualEventService;

import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import { createTooltipServiceWrapper, ITooltipServiceWrapper } from "powerbi-visuals-utils-tooltiputils";

import { VisualSettingsModel } from "./visualSettingsModel";

//Importing functions from file
import { SPCChartData, SPCChartDataPoint } from "./dataStructure";
import { parseDateLabel, parseinHMS, parseYLabels } from "./formattingFunctions"
import { yAxisDomain, getFillColor, getYAxisTextFillColor } from "./chartFunctions"
import { createDataset } from "./dataLoad"
import { logoSelector } from "./spcFunctions";
import { getTooltipData } from "./tooltipFunctions"

type Selection<T1, T2 = T1> = d3.Selection<any, T1, any, T2>;

export class SPCChart implements IVisual {
  //Physical objects in the chart 
  //The Chart
  private svg: Selection<any>;                            //Chart
  private clipBox: Selection<SVGElement>;                 //Inner plot clipping area
  private host: IVisualHost;                              //Interactability 
  private tooltipServiceWrapper: ITooltipServiceWrapper;  //ToolTips
  private selectionManager: ISelectionManager;            //Right click menu
  private locale: string;                                 //Locale of user
  private events: IVisualEventService;                    //VisualEvents

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
      width: 0,
      yprop: 1
    },

    yTicks: 5,
    bandwidth: 0

  };

  //Creates formatting pane
  public getFormattingModel(): powerbi.visuals.FormattingModel {
    return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
  }

  //This initialises the chart - only ran once
  //Basically a load of empty objects waiting to be filled
  constructor(options: VisualConstructorOptions) {
    this.events = options.host.eventService;

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
    
    this.clipBox = this.svg
      .append('g');
    
    this.clipBox
      .append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "#00000000")
      .attr("x", 0)
      .attr("y", 0);

    this.lineData = this.clipBox
      .append('path')
      .classed('line', true);

    this.lineMean = this.clipBox
      .append('path')
      .classed('line', true);

    this.lineUCL = this.clipBox
      .append('path')
      .classed('line', true);

    this.lineLCL = this.clipBox
      .append('path')
      .classed('line', true);

    this.lineUpperZoneA = this.clipBox
      .append('path')
      .classed('line', true);

    this.lineUpperZoneB = this.clipBox
      .append('path')
      .classed('line', true);

    this.lineLowerZoneA = this.clipBox
      .append('path')
      .classed('line', true);

    this.lineLowerZoneB = this.clipBox
      .append('path')
      .classed('line', true);

    this.lineTarget = this.clipBox
      .append('line')
      .classed('line', true);

    this.dataMarkers = this.clipBox
      .append('g')
      .classed('dataMarkers', true)
      .selectAll();

    this.tooltipMarkers = this.clipBox
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

  private syncSelectionState(selection: Selection<SPCChartDataPoint>, circle: Selection<SPCChartDataPoint>, selectionIds: ISelectionId[]): void {
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

      circle.each(((self) => function (datapoint: SPCChartDataPoint) {
        d3Select(this)
          .attr("r", self.data.n == 1 ? self.data.markerSize : datapoint.markerSize)//datapoint.markerSize)
      })(this));
      return;
    }

    this.lineData
      .style("opacity", 0.3)

    circle
      .style("opacity", 1)

    selection.each(((self) => function (datapoint: SPCChartDataPoint) {
      const isSelected: boolean = self.isSelectionIdInArray(selectionIds, datapoint.selectionID);

      const opacity: number = isSelected ? 0 : 0;
      d3Select(this)
        .style("fill-opacity", opacity)
        .style("stroke-opacity", opacity);
    })(this));

    circle.each(((self) => function (datapoint: SPCChartDataPoint) {
      const isSelected: boolean = self.isSelectionIdInArray(selectionIds, datapoint.selectionID);
      d3Select(this)
        .attr("r", isSelected ? self.data.markerSize : datapoint.markerSize)
      if (self.formattingSettings.SPCSettings.markerOptions.showMarker.value) {
        d3Select(this)
          .style("opacity", isSelected ? 1 : 0.3)
      } else {
        d3Select(this)
          .style("opacity", isSelected ? 1 : 0)
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

  public tooltipMouseMove(xScale: d3.ScalePoint<string>, thissvg: Selection<any, any>, dm: SPCChartDataPoint[]) {
    return function (ev: Event) {
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

  public tooltipMouseOff(thissvg) {
    return function () {
      thissvg
        .selectAll('.markers.tooltip')
        .attr("opacity", 0);
    }
  }

  public logoDisplayer() {

    let logoX = SPCChart.Config.chartWidth.start
    const size = this.formattingSettings.SPCSettings.logoOptions.size.value < 0 ? 0 : this.formattingSettings.SPCSettings.logoOptions.size.value

    if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == -1) {
      logoX = SPCChart.Config.chartWidth.start
    } if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == 0) {
      logoX = (SPCChart.Config.chartWidth.end - SPCChart.Config.chartWidth.start) / 2 + SPCChart.Config.chartWidth.start - size
    } if (this.formattingSettings.SPCSettings.logoOptions.location.value.value == 1) {
      logoX = SPCChart.Config.chartWidth.end - size * 2
    }
    const logo = logoSelector(this.data, "variation")
    if (this.formattingSettings.SPCSettings.logoOptions.show.value && this.data.n > 1) {
      this.logo
        .attr('href', logo)
        .attr('width', size)
        .attr('height', size)
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
        .attr('width', size)
        .attr('height', size)
        .attr('x', logoX + size)
        .attr('y', 0)
    } else {
      this.logoTarget
        .attr('width', 0)
        .attr('height', 0)
    }
  }

  public meanDisplayer(xScale: d3.ScalePoint<string>, yScale: d3.ScaleLinear<number, number, never>) {
    if (this.formattingSettings.SPCSettings.lineOptions.showMean.value) {
      this.lineMean
        .datum(this.dataPoints.filter(d => !isNaN(d.mean)))
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

  public targetDisplayer(yScale: d3.ScaleLinear<number, number, never> ) {
    if (this.formattingSettings.SPCSettings.lineOptions.showTarget.value) {
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

  public controlLimitDisplayer(xScale: d3.ScalePoint<string>, yScale: d3.ScaleLinear<number, number, never>) {
    if (this.formattingSettings.SPCSettings.lineOptions.showControl.value && SPCChart.Config.chartWidth.height > 0) {
      this.lineUCL
        .datum(this.dataPoints.filter(d => !isNaN(d.UCLValue)&&d.UCLValue))
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
        .datum(this.dataPoints.filter(d => !isNaN(d.LCLValue)&&d.LCLValue))
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
  }

  public controlSubLimitDisplayer(xScale: d3.ScalePoint<string>, yScale: d3.ScaleLinear<number, number, never>) {
    if (this.formattingSettings.SPCSettings.lineOptions.showSubControl.value) {
      this.lineUpperZoneA
        .datum(this.dataPoints.filter(d => !isNaN(d.Upper_Zone_A)&&d.Upper_Zone_A))
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
        .datum(this.dataPoints.filter(d => !isNaN(d.Upper_Zone_B)&&d.Upper_Zone_B))
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
        .datum(this.dataPoints.filter(d => !isNaN(d.Lower_Zone_A)&&d.Lower_Zone_A))
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
        .datum(this.dataPoints.filter(d => !isNaN(d.Lower_Zone_B)&&d.Lower_Zone_B))
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

  public dataDisplayer(xScale: d3.ScalePoint<string>, yScale: d3.ScaleLinear<number, number, never>) {
    const w = (SPCChart.Config.chartWidth.width < 0 ? 0 :SPCChart.Config.chartWidth.width);
    const h = (SPCChart.Config.chartWidth.height < 0 ? 0 :SPCChart.Config.chartWidth.height);
    const l = (SPCChart.Config.margins.left);
    this.clipBox
      .attr("clip-path", `xywh(${l}px 0px ${w}px ${h}px)`);

    this.lineData
      .datum(this.dataPoints)
      .style("stroke-linecap", "round")
      .attr("fill", "none")
      .attr("stroke", ((self) => function () { return self.data.strokeColor })(this))
      .attr("stroke-width", ((self) => function () { return self.data.strokeWidth })(this))
      .attr("stroke-linejoin", "round")
      .attr("d", d3.line<SPCChartDataPoint>()
        .x(function (d) { return xScale(d.category) })
        .y(function (d) { return yScale(<number>d.value) })
      )

    this.svg.selectAll('.markers').remove();
    const circlemarkers = this.dataMarkers
      .data(this.dataPoints).enter()
      .append("circle")
      .attr("class", "markers")
      .attr("cx", function (d) { return xScale(d.category) })
      .attr("cy", function (d) { return yScale(<number>d.value) })
      .attr("r", function (d) { return d.markerSize })
      .attr("fill", function (d) { return d.color });

    this.tooltipMarkers
      .data(this.dataPoints).enter()
      .append("circle")
      .attr("class", "markers tooltip")
      .attr("cx", function (d) { return xScale(d.category) })
      .attr("cy", function (d) { return yScale(<number>d.value) })
      .attr("r", ((self) => function () { return self.data.markerSize })(this))
      .attr("fill", function (d) { return d.color })
      .attr("opacity", 0);

    const invisibleBars = this.dataMarkers
      .data(this.dataPoints).enter()
      .append("rect")
      .attr("class", "markers")
      .attr("width", SPCChart.Config.bandwidth)
      .attr("height", SPCChart.Config.chartWidth.height)
      .attr("x", function (d) { return xScale(d.category) - SPCChart.Config.bandwidth / 2 })
      .attr("y", 0)
      .attr("fill", function (d) { return d.color }); //invisable rectangles 

    this.syncSelectionState(invisibleBars, circlemarkers, <ISelectionId[]>this.selectionManager.getSelectionIds());
    this.tooltipMarkers
      .data(this.dataPoints).enter()
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
    }});

    this.dataMarkers
      .exit()
      .remove();
    this.handleClick(invisibleBars, circlemarkers);
    this.svg.selectAll('.datalabels').remove();
    if (this.formattingSettings.dataLabels.show.value) {
      this.svg.selectAll('.datalabels')
        .data(this.dataPoints).enter()
        .append("text")
        .attr("class", "datalabels")
        .attr("text-anchor", ((self) => function (d, i) {
          if (i == 0) {return "start"
          } else if (i == self.data.n - 1) {return "end"
          } else {return "middle"}
        })(this))
        .attr("x",
          ((self) => function (d, i) {
            if (i == 0) {return xScale(d.category)
            } else if (i == self.data.n - 1) {return xScale(d.category)
            } else {return xScale(d.category)}
          })(this))
        .attr("y", function (d, i) { const n = i%2 
          console.log(n)
          return yScale(<number>d.value)  + 20*n - 5})
        .text(((self) => function (d, i) {
          if (i < self.data.n - 1) {
            if (self.formattingSettings.dataLabels.last.value) {return ''
            } else {return parseYLabels(<number>d.value, self.formattingSettings.enableYAxis.formatter.format.value.value == "time", self.data.decimalPlaces, self.data.measureFormat)
            }
          } else {return parseYLabels(<number>d.value, self.formattingSettings.enableYAxis.formatter.format.value.value == "time", self.data.decimalPlaces, self.data.measureFormat)
          }
        })(this))
        .attr("font-size", 11)
        .attr("fill", ((self) => function () { return self.formattingSettings.dataLabels.fill.value.value })(this))
        ;
    }
  }

  public fitX(options: VisualUpdateOptions) {
    let xScale = scalePoint();
    let maxW_xAxis = 0;
    let total_label_coverage = 0;
    let n_xTicks = 1;
    
    if (this.data.n > 0) {
      for (let i = 0; i < 2; i++) { //should only run twice to "fit" the chart to size
        let inner_chartMargin = SPCChart.Config.chartWidth.width - SPCChart.Config.chartWidth.end
        let inner_chartWidth = SPCChart.Config.chartWidth.end - SPCChart.Config.chartWidth.start
        SPCChart.Config.bandwidth = this.data.n == 1
          ? (inner_chartWidth)
          : (inner_chartWidth) / (this.data.n - 1); //each datapoint takes up one "bandwidth" of the chart area

        xScale = scalePoint()
          .domain(this.data.dataPoints.map(d => d.category))
          .range([SPCChart.Config.chartWidth.start, SPCChart.Config.chartWidth.end]);

        const span = [0, -1].map(i => new Date(this.data.dataPoints.at(i).category));
        const xAxis = axisBottom(xScale)
          .tickFormat(d => parseDateLabel(d, this.data.levelOfDateHeirarchy, span, n_xTicks));

        const xAxisObject = this.xAxis
          .attr('transform', 'translate(0, ' + (SPCChart.Config.chartWidth.height + 2) + ')')
          .style("font-size", 11)
          .call(xAxis)
          //.transition().duration(500)
          .attr("color", getFillColor(
            options,
            'enableAxis',
            'fill',
            this.host.colorPalette,
            this.formattingSettings.enableAxis.formatter.fill.value.value
          ));

        xAxisObject.selectAll('.xAxis path, line')
          .attr('opacity', 0);

        //XAxis label reducer  
        total_label_coverage = 0;
        this.xAxis
          .selectAll("text")
          .each(((self) => function (this: SVGGraphicsElement, d, i) {
            total_label_coverage += parseDateLabel(<string>d, self.data.levelOfDateHeirarchy, span, n_xTicks) == '' ? 0 : this.getBBox().width
            if (this.getBBox().width > maxW_xAxis) maxW_xAxis = this.getBBox().width;
            if (i == self.dataPoints.length - 1) {
              inner_chartMargin = this.getBBox().width / 2.;
            }
          })(this));
        if (inner_chartMargin == 0) { inner_chartMargin = 0.02 * SPCChart.Config.chartWidth.width }//if there is no final tick label then we need the margin to be 2% of the chart width
        if (SPCChart.Config.chartWidth.end + inner_chartMargin > SPCChart.Config.chartWidth.width) {
          SPCChart.Config.chartWidth.end -= inner_chartMargin
          SPCChart.Config.chartWidth.start += inner_chartMargin
        } else { break }//catch run away loops


        inner_chartWidth = SPCChart.Config.chartWidth.end - SPCChart.Config.chartWidth.start
        n_xTicks = Math.ceil(total_label_coverage / inner_chartWidth)
      }
    }
    return xScale
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  //This updates the chart - ran each time anything changes in the visual (ie filters, mouse moves, drilling up/down)
  public update(options: VisualUpdateOptions) {
    this.events.renderingStarted(options);

    //Set up the charting object 
    this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualSettingsModel, options.dataViews[0]);

    this.data = createDataset(options, this.host, this.formattingSettings);
    const data = this.data
    this.dataPoints = data.dataPoints.filter(d => d.value !== null);

    const dataExists = !isNaN(this.dataPoints.map(d => <number>d.value).reduce((a, b) => a+b,0))
    if(!dataExists){ //if you removed the measure then yeet the chart
      SPCChart.Config.chartWidth.height = 0;
      SPCChart.Config.chartWidth.width = 0;
    } else if (this.dataPoints.length > 0 ) { //Define the chart size
      SPCChart.Config.chartWidth.height = options.viewport.height;
      SPCChart.Config.chartWidth.width = options.viewport.width;
    }

    this.svg //Give the chart image a width and a height based on the size of the image in the report. If no data then the chart has no size
      .attr("width", SPCChart.Config.chartWidth.width < 0 ? 0 : SPCChart.Config.chartWidth.width )
      .attr("height", SPCChart.Config.chartWidth.height < 0 ? 0 :SPCChart.Config.chartWidth.height );
    
    SPCChart.Config.chartWidth.end = options.viewport.width;
    SPCChart.Config.chartWidth.height -= this.formattingSettings.enableAxis.show.value ? SPCChart.Config.margins.bottom : 0
    
    //Set up the Y Axis
    const yScale = scaleLinear()
      .domain(yAxisDomain(data, this.formattingSettings))
      .range([SPCChart.Config.chartWidth.height, 20]);

    let yAxis = axisLeft(yScale)
      .tickSizeInner(-SPCChart.Config.chartWidth.end);

    if (this.formattingSettings.enableYAxis.formatter.format.value.value == "time") {
      yAxis = yAxis
        .ticks(SPCChart.Config.yTicks)
        .tickFormat(d => parseinHMS(d));
    } else {
      yAxis = yAxis
        .ticks(SPCChart.Config.yTicks, data.measureFormat); //format n=yTicks ticks into SI units
    }

    const yAxisObject = this.yAxis
      .call(yAxis)
      //.transition().duration(500)
      .attr("color", getYAxisTextFillColor(
        options,
        this.host.colorPalette,
        this.formattingSettings.enableYAxis.formatter.fill.value.value
      ));

    yAxisObject.selectAll('.yAxis line')
      .attr('stroke', this.formattingSettings.enableYAxis.formatter.fill.value.value)
      .attr('opacity', 0.2);
    yAxisObject.selectAll('.yAxis path')
      .attr('opacity', 0);

    let yShift = 0;
    let maxW = 0;

    this.yAxis
      .selectAll("text")
      .each(function (this: SVGGraphicsElement) {
        if (this.getBBox().width > maxW) maxW = this.getBBox().width;
      });

    if (this.formattingSettings.enableYAxis.show.value || this.formattingSettings.enableYAxis.formatter.format.value.value == "time") { yShift = maxW + 10; }//longest "word" plus 10 pixels

    this.yAxis
      .style('font-family', 'inherit')
      .style('font-size', 11) //TODO make this a drop down
      .attr('transform', 'translate(' + (yShift) + ',0)')

    //Set up the X Axis
    SPCChart.Config.chartWidth.start = yShift

    const xScale = this.fitX(options)

    //Create data line
    if(dataExists){
      this.dataDisplayer(xScale, yScale)
      this.controlLimitDisplayer(xScale, yScale)      //Create limit lines 
      this.meanDisplayer(xScale, yScale)              //Create mean line
      this.targetDisplayer(yScale)                    //Create target line  
      this.controlSubLimitDisplayer(xScale, yScale)   //Create Zone lines 
      this.logoDisplayer()                            //Move logo
    } 

    //ToolTips
    this.svg
      .on('mousemove', this.tooltipMouseMove(xScale, this.svg, this.dataPoints))
      .on('mouseleave', this.tooltipMouseOff(this.svg));

    this.tooltipServiceWrapper
      .addTooltip(
        this.svg.selectAll('rect.markers'),
        (d: SPCChartDataPoint) => getTooltipData(d, data, this.formattingSettings)
      );

    this.events.renderingFinished(options);
  }
}

export { SPCChart as Visual };