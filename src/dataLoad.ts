import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import ISelectionId = powerbi.visuals.ISelectionId;
import DataViewCategoryColumn = powerbi.DataViewCategoryColumn;

import { PrimitiveValue, SPCChartData, SPCChartDataPoint, additionalKeyValue } from "./dataStructure"
import { VisualSettingsModel } from "./visualSettingsModel";
import { PBIformatingKeeper, parseDates } from "./formattingFunctions";
import { getMean, getControlLimits, getMarkerColors, identifyOutliers } from "./spcFunctions";


const getDatesArray = function (min, max, levelOfDateHeirarchy: string) {
  const start = Date.parse(min)
  const end = Date.parse(max)
  const allDays = []
  for (let dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
    allDays.push(new Date(dt));
  }

  const arr = []
  for (let i = 0, len = allDays.length; i < len; i++) {
    const dt = allDays[i]
    if (levelOfDateHeirarchy == "Year" && dt.getMonth() == 0 && dt.getDate() == 1) {
      arr.push(new Date(dt));
    } else if (levelOfDateHeirarchy == "Quarter" && dt.getDate() == 1 && (dt.getMonth() == 0 || dt.getMonth() == 3 || dt.getMonth() == 6 || dt.getMonth(9))) {
      arr.push(new Date(dt));
    } else if (levelOfDateHeirarchy == "Month" && dt.getDate() == 1) {
      arr.push(new Date(dt));
    } else if (levelOfDateHeirarchy == "Day") {
      arr.push(new Date(dt));
    }

  }

  return arr.map(d => parseDates(d))
};

export function getTarget(target_input: any[], formatSettings: VisualSettingsModel): number {
  let target = -Infinity
  if (formatSettings.SPCSettings.spcSetUp.target.value != '') {
    target = 0
    const targetSplit = formatSettings.SPCSettings.spcSetUp.target.value.valueOf().split(":").reverse()
    const toSeconds = [1, 60, 3600, 86400]
    for (let i = 0, len = targetSplit.length; i < len; i++) {
      target = target + Number(targetSplit[i]) * toSeconds[i]
    }
  } else {
    target = -Infinity
  }
  target = target_input[0] ? target_input[0] : target //if target is supplied as a measure then use that else use it from settings
  return target
}

export function dataLoad(options: VisualUpdateOptions): [DataViewCategoryColumn, any[], any[], any[], additionalKeyValue[]] {
  let value_input: PrimitiveValue[] = [];
  let target_input = [];
  const breakPoint_input: additionalKeyValue[] = [];
  const tooltip_input: additionalKeyValue[] = [];

  const dataViews = options.dataViews;
  if (!dataViews //checks data exists
    || !dataViews[0]
    || !dataViews[0].categorical
    || !dataViews[0].categorical.categories
    || !dataViews[0].categorical.categories[0].source
    || !dataViews[0].categorical.values
  ) {
    return [undefined, [], [], [], []];
  }

  for (let i = 0, len = options.dataViews[0].categorical.values.length; i < len; i++) {
    if (Object.keys(options.dataViews[0].categorical.values[i].source.roles)[0] == 'measure') {
      value_input = options.dataViews[0].categorical.values[i].values
    } else if (Object.keys(options.dataViews[0].categorical.values[i].source.roles)[0] == 'target_measure') {
      target_input = options.dataViews[0].categorical.values[i].values
    } else if (Object.keys(options.dataViews[0].categorical.values[i].source.roles)[0] == 'break_points') {
      breakPoint_input.push({
        name: options.dataViews[0].categorical.values[i].source.displayName,
        values: options.dataViews[0].categorical.values[i].values,
        format: '',
        decimalPlaces: 0
      })
    } else if (Object.keys(options.dataViews[0].categorical.values[i].source.roles)[0] == 'tooltip_extra') {
      let format = 's'
      let decimalPlaces = 0
      for (let j = 0, len = options.dataViews[0].metadata.columns.length; j < len; j++) {
        const meta = options.dataViews[0].metadata.columns[j]
        if (Object.keys(options.dataViews[0].metadata.columns[j].roles)[0] == 'tooltip_extra') {
          if (!meta.format) {
            format = 's';
          } else if (meta.format.includes('%')) {
            format = '%'
            decimalPlaces = meta.format.substring(meta.format.indexOf('.') + 1).length;
          } else if (meta.format.includes('.')) {
            decimalPlaces = meta.format.substring(meta.format.indexOf('.') + 1).length;
            format = 's';
          } else {
            format = 's';
          }
        }
      }
      tooltip_input.push({
        name: options.dataViews[0].categorical.values[i].source.displayName,
        values: options.dataViews[0].categorical.values[i].values,
        format,
        decimalPlaces
      })
    }
  }

  let breakPoint_parsed = []
  const n = value_input.length
  breakPoint_parsed = new Array(n); for (let i = 0; i < n; ++i) breakPoint_parsed[i] = 0;

  for (let j = 0, len = breakPoint_input.length; j < len; j++) {
    breakPoint_parsed = breakPoint_parsed.map((d, i) => d + breakPoint_input[j].values[i])

  }
  const dates_input = dataViews[0].categorical.categories[0];
  const dates_input_parsed = dates_input;
  dates_input_parsed.values = dates_input.values.map(d => parseDates(<string>d))


  const indx = value_input.map((e, i) => typeof e != "number" ? i : "").filter(String) as number[]

  const value_input_parsed = [...value_input]
  for (const i of indx.reverse()) {
    dates_input_parsed.values.splice(i, 1)
    value_input_parsed.splice(i, 1)
    target_input.splice(i, 1)
    breakPoint_parsed.splice(i, 1)
    tooltip_input.forEach((t) => t.values.splice(i, 1))
  }

  return [dates_input_parsed, value_input_parsed, target_input, breakPoint_parsed, tooltip_input]
}

export function dataSet(host: IVisualHost, options: VisualUpdateOptions, levelOfDateHeirarchy: string, formatSettings: VisualSettingsModel): [SPCChartDataPoint[], any[]] {
  const [dates_input_column, value_input, target_input, breakPoint_input, tooltip_input] = dataLoad(options)
  const dates_input = dates_input_column.values
  const SPCChartDataPoints: SPCChartDataPoint[] = []

  const allDates = getDatesArray(dates_input.at(0), dates_input.at(-1), levelOfDateHeirarchy)

  for (let i = 0, len = formatSettings.dataManipulator.fillMissing0.value ? allDates.length : dates_input.length; i < len; i++) {
    let value: number;
    let breakP: number;
    let category: PrimitiveValue;
    const addTooltip: additionalKeyValue[] = []

    if (formatSettings.dataManipulator.fillMissing0.value) {
      value = value_input[dates_input.indexOf(allDates[i])] ? value_input[dates_input.indexOf(allDates[i])] : 0;
      breakP = <number>breakPoint_input[dates_input.indexOf(allDates[i])] ? <number>breakPoint_input[dates_input.indexOf(allDates[i])] : 0;
      category = allDates[i];

      for (let j = 0, len = tooltip_input.length; j < len; j++) {
        addTooltip.push({
          name: tooltip_input[j].name,
          values: [tooltip_input[j].values.at(dates_input.indexOf(allDates[i]))],
          format: tooltip_input[j].format,
          decimalPlaces: tooltip_input[j].decimalPlaces
        });
      }

    } else {
      value = value_input[i];
      breakP = breakPoint_input[i];
      category = dates_input[i];

      for (let j = 0, len = tooltip_input.length; j < len; j++) {
        addTooltip.push({
          name: tooltip_input[j].name,
          values: [tooltip_input[j].values.at(i)],
          format: tooltip_input[j].format,
          decimalPlaces: tooltip_input[j].decimalPlaces
        });
      }
    }

    let difference = null
    const previous_not_null_values = SPCChartDataPoints.filter(d => d.value !== null)
    if (i > 0) {
      if (value !== null && previous_not_null_values.length > 0) {
        difference = <number>value - <number>previous_not_null_values.at(-1).value
      }
    }

    breakP = breakP < SPCChartDataPoints.map((d) => d.breakP).at(-1) ? SPCChartDataPoints.map((d) => d.breakP).at(-1) : breakP;

    const selectionID: ISelectionId = host.createSelectionIdBuilder()
      .withCategory(dates_input_column, i)
      .createSelectionId();
    
    const color = formatSettings.SPCSettings.markerOptions.commonCause.value.value
    const markerSize = Number(formatSettings.SPCSettings.markerOptions.showCC.value)*3

    SPCChartDataPoints.push({
      color,
      markerSize,

      value,
      category: category as string,
      breakP,

      difference,
      mean: value_input[0],
      UCLValue: Infinity,
      LCLValue: -Infinity,

      Upper_Zone_A: Infinity,
      Upper_Zone_B: Infinity,
      Lower_Zone_A: -Infinity,
      Lower_Zone_B: -Infinity,

      outlier: 0,
      run: 0,
      shift: 0,
      twoInThree: 0,

      additionalTooltipData: addTooltip,

      selectionID
    });
  }
  return [SPCChartDataPoints, target_input];
}

export function fullData(host: IVisualHost, options: VisualUpdateOptions, formatSettings: VisualSettingsModel): SPCChartData {
  //let [dates_input, value_input, target_input, breakPoint_input, tooltip_input] = dataLoad(options)
  const [measureName, measureFormat, decimalPlaces, levelOfDateHeirarchy] = PBIformatingKeeper(options)
  const [data, target_input] = dataSet(host, options, levelOfDateHeirarchy, formatSettings)
  const target = getTarget(target_input, formatSettings)

  const numberOfTimePeriods = data
    .map((d) => <number>d.breakP)
    .reduce((a, b) => Math.max(a, b), 0)

  return {
    dataPoints: data,

    n: data.length,
    numberOfTimePeriods,
    direction: <number>formatSettings.SPCSettings.spcSetUp.direction.value.value,
    target,

    strokeWidth: 2,
    strokeColor: formatSettings.SPCSettings.lineOptions.dataColor.value.value,
    markerSize: 3,

    measureName,
    measureFormat: formatSettings.enableYAxis.formatter.percentage.value ? '%' : measureFormat,
    decimalPlaces,
    levelOfDateHeirarchy,

    outlier: 0,
    run: 0,
    shift: 0,
    twoInThree: 0
  };
}

export function createDataset(options: VisualUpdateOptions, host: IVisualHost, formatSettings: VisualSettingsModel): SPCChartData {
  //MEASURES INPUT
  let allData = fullData(host, options, formatSettings)

  allData = getMean(allData)
  allData = getControlLimits(allData)

  //SPC Marker Colors Rules 
  allData = getMarkerColors(allData, formatSettings)
  allData = identifyOutliers(allData, formatSettings)

  if (allData.n == 0) {
    return allData
  } else {
    const outlier = allData.dataPoints[allData.n - 1].outlier
    const run = allData.dataPoints[allData.n - 1].run
    const shift = allData.dataPoints[allData.n - 1].shift
    const twoInThree = allData.dataPoints[allData.n - 1].twoInThree

    return {
      dataPoints: allData.dataPoints,

      n: allData.n,
      numberOfTimePeriods: allData.numberOfTimePeriods,
      direction: allData.direction,
      target: allData.target,

      strokeWidth: allData.strokeWidth,
      strokeColor: allData.strokeColor,
      markerSize: allData.markerSize,

      measureName: allData.measureName,
      measureFormat: allData.measureFormat,
      decimalPlaces: allData.decimalPlaces,
      levelOfDateHeirarchy: allData.levelOfDateHeirarchy,

      outlier,
      run,
      shift,
      twoInThree

    }
  }
}