import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;

import * as d3 from "d3";


import { SPCChartData, SPCChartDataPoint } from "./dataStructure"
import { VisualSettingsModel } from "./visualSettingsModel";
import { PBIformatingKeeper, parseDates, getDayDiff, parseDateLabel } from "./formattingFunctions";
import { getMean, getControlLimits, getMarkerColors, identifyOutliers } from "./spcFunctions";


var getDatesArray = function(min, max, levelOfDateHeirarchy: string) {
    var start = Date.parse(min)
    var end  = Date.parse(max)
    for(var allDays=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        allDays.push(new Date(dt));
    }

    let arr = []
    for(let i = 0, len = allDays.length; i < len; i++){
        let dt = allDays[i]
        if (  levelOfDateHeirarchy == "Year" && dt.getMonth() == 0 && dt.getDate() == 1) {
            arr.push(new Date(dt));
        } else if (  levelOfDateHeirarchy == "Quarter" && dt.getDate() == 1 && (dt.getMonth() == 0 || dt.getMonth() == 3 || dt.getMonth() == 6 || dt.getMonth(9))) {
            arr.push(new Date(dt));
        }  else if (  levelOfDateHeirarchy == "Month" && dt.getDate() == 1 ) {
            arr.push(new Date(dt));
        }   else if (  levelOfDateHeirarchy == "Day"  ) {
            arr.push(new Date(dt));
        } 
        
    }

    return arr.map(d => parseDates(d) )
};

export function getTarget(target_input: any[], formatSettings: VisualSettingsModel): number {
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
    let dates_input_parsed = dates_input.map(d => parseDates(d) )
    return [dates_input_parsed, value_input, target_input, breakPoint_input]
}

export function dataSet(dates:any, input: any[], breakPoints: any[], levelOfDateHeirarchy: string, formatSettings:VisualSettingsModel): SPCChartDataPoint[] {
    let SPCChartDataPoints: SPCChartDataPoint[] = []


    let allDates = getDatesArray(dates.at(0), dates.at(-1), levelOfDateHeirarchy)

    for (let i = 0, len = formatSettings.dataManipulator.fillMissing0.value? allDates.length : dates.length; i < len; i++){
        let value:number;
        let breakP:number;
        let category:string;

        if(formatSettings.dataManipulator.fillMissing0.value){
            value = input[dates.indexOf(allDates[i])] ? input[dates.indexOf(allDates[i])] : 0;
            breakP = <number>breakPoints[dates.indexOf(allDates[i])] ? <number>breakPoints[dates.indexOf(allDates[i])] : 0;
            category= <string>allDates[i];
        } else {
            value = input[i]
            breakP = breakPoints[i]
            category = dates[i]
        }

        let difference = null
        let previous_not_null_values = SPCChartDataPoints.filter(d => d.value !== null)
        if (i > 0) {
            if( value !== null && previous_not_null_values.length > 0){
            difference = <number>value - <number>previous_not_null_values.at(-1).value
            }
        }

        SPCChartDataPoints.push({
            color: 'steelblue',
            markerSize: 0,

            value,
            category,
            breakP,

            difference,
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

export function fullData(options: VisualUpdateOptions, formatSettings: VisualSettingsModel): SPCChartData {
    let [dates_input, value_input, target_input, breakPoint_input] = dataLoad(options)
    let [measureName, measureFormat, decimalPlaces, levelOfDateHeirarchy] = PBIformatingKeeper(options)
    let data = dataSet(dates_input, value_input, breakPoint_input, levelOfDateHeirarchy, formatSettings)
    let target = getTarget(target_input, formatSettings)
    
    let numberOfTimePeriods = data
        .map((d) => <number>d.breakP)
        .reduce((a,b) => Math.max(a,b), 0 )

    return {
        dataPoints: data,

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
        levelOfDateHeirarchy,

        outlier: 0,
        run: 0,
        shift: 0,
        twoInThree: 0
    };
}

export function createDataset(options: VisualUpdateOptions, host: IVisualHost, formatSettings: VisualSettingsModel): SPCChartData {
    //MEASURES INPUT
    let allData = fullData(options, formatSettings)
    
    allData = getMean(allData)
    allData = getControlLimits(allData)

    //SPC Marker Colors Rules 
    allData = getMarkerColors(allData, formatSettings)
    allData = identifyOutliers(allData, formatSettings)
    console.log("allData", allData)

    if( allData.n == 0 ){
        return allData
    } else {
        let outlier = allData.dataPoints[allData.n - 1].outlier
        let run = allData.dataPoints[allData.n - 1].run
        let shift = allData.dataPoints[allData.n - 1].shift
        let twoInThree = allData.dataPoints[allData.n - 1].twoInThree
        
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