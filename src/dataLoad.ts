import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;

import * as d3 from "d3";


import { SPCChartData, SPCChartDataPoint } from "./dataStructure"
import { BarChartSettingsModel } from "./barChartSettingsModel";
import { PBIformatingKeeper } from "./formattingFunctions";
import { getMean, getControlLimits, getMarkerColors, identifyOutliers } from "./spcFunctions";


export function getTarget(target_input: any[], formatSettings: BarChartSettingsModel): number {
    let target = -Infinity
    if (formatSettings.SPCSettings.spcSetUp.target.value != '') {
        target = 0
        let targetSplit = formatSettings.SPCSettings.spcSetUp.target.value.valueOf().split(":").reverse()
        let toSeconds = [1, 60, 3600, 86400]
        for (let i = 0, len = targetSplit.length; i < len; i++) {
            target = target + Number(targetSplit[i]) * toSeconds[i]
        }
    } else {
        target = -Infinity
    }
    target = target_input[0] ? target_input[0] : target //if target is supplied as a measure then use that else use it from settings
    return target
}

export function dataLoad(options: VisualUpdateOptions): [any[], any[], any[], any[]] {
    let value_input = []
    let target_input = []
    let breakPoint_input = []
    let dates_input = []

    let dataViews = options.dataViews;
    if (!dataViews //checks data exists
        || !dataViews[0]
        || !dataViews[0].categorical
        || !dataViews[0].categorical.categories
        || !dataViews[0].categorical.categories[0].source
        || !dataViews[0].categorical.values
    ) {
        return [[], [], [], []];
    }

    for (let i = 0, len = options.dataViews[0].categorical.values.length; i < len; i++) {
        if (Object.keys(options.dataViews[0].categorical.values[i].source.roles)[0] == 'measure') {
            value_input = options.dataViews[0].categorical.values[i].values
        } else if (Object.keys(options.dataViews[0].categorical.values[i].source.roles)[0] == 'target_measure') {
            target_input = options.dataViews[0].categorical.values[i].values
        } else if (Object.keys(options.dataViews[0].categorical.values[i].source.roles)[0] == 'break_points') {
            breakPoint_input = options.dataViews[0].categorical.values[i].values
        }
    }
    
    if(breakPoint_input.length == 0){
        let n = value_input.length
        breakPoint_input = new Array(n); for (let i=0; i<n; ++i) breakPoint_input[i] = 0; //if there are no break points provided then set the break point array to 0
    }

    dates_input = dataViews[0].categorical.categories[0].values

    //console.log(dates_input) 
    //console.log(dates_input.map(d => new Date(Date.parse(d))))
    //console.log(itemsArray.sort((a, b) => sortingArr.indexOf(a) - sortingArr.indexOf(b)))

    return [dates_input, value_input, target_input, breakPoint_input]
}

export function dataSet(dates:any, input: any[], breakP: any[]): SPCChartDataPoint[] {
    let SPCChartDataPoints: SPCChartDataPoint[] = []

    for (let i = 0, len = input.length; i < len; i++) {

        let diff = 0
        if (i > 0) {
            diff = <number>input[i] - <number>input[i - 1]
        }

        SPCChartDataPoints.push({
            color: 'steelblue',
            markerSize: 0,

            value: input[i],
            category: <string>dates[i],
            breakP: <number>breakP[i],

            difference: diff,
            mean: input[0],
            UCLValue: Infinity,
            LCLValue: -Infinity,
    
            Upper_Zone_A: Infinity,
            Upper_Zone_B: Infinity,
            Lower_Zone_A: -Infinity,
            Lower_Zone_B: -Infinity,

            outlier: 0,
            run: 0,
            shift: 0,
            twoInThree: 0
        });
    }

    return SPCChartDataPoints;
}

export function fullData(options: VisualUpdateOptions, formatSettings: BarChartSettingsModel): SPCChartData {
    let [dates_input, value_input, target_input, breakPoint_input] = dataLoad(options)
    let data = dataSet(dates_input, value_input, breakPoint_input)
    let [measureName, measureFormat, decimalPlaces] = PBIformatingKeeper(options)
    let target = getTarget(target_input, formatSettings)

    
    let numberOfTimePeriods = data
        .map((d) => <number>d.breakP)
        .reduce((a,b) => Math.max(a,b), 0 )

    return {
        datapoints: data,

        n: data.length,
        numberOfTimePeriods,
        direction: <number>formatSettings.SPCSettings.spcSetUp.direction.value.value,
        target,

        strokeWidth: 2,
        strokeColor: 'steelblue',
        markerSize: 3,

        measureName, 
        measureFormat,
        decimalPlaces,

        outlier: 0,
        run: 0,
        shift: 0,
        twoInThree: 0
    };
}

export function createDataset(options: VisualUpdateOptions, host: IVisualHost, formatSettings: BarChartSettingsModel): SPCChartData {
    //MEASURES INPUT
    let allData = fullData(options, formatSettings)
    
    allData = getMean(allData)
    allData = getControlLimits(allData)

    //SPC Marker Colors Rules 
    allData = getMarkerColors(allData, formatSettings)
    allData = identifyOutliers(allData, formatSettings)

    let outlier = allData.datapoints[allData.n - 1].outlier
    let run = allData.datapoints[allData.n - 1].run
    let shift = allData.datapoints[allData.n - 1].shift
    let twoInThree = allData.datapoints[allData.n - 1].twoInThree


    return {
        datapoints: allData.datapoints,

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

        outlier,
        run,
        shift,
        twoInThree
    }
}