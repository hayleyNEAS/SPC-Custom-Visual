import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import ISelectionId = powerbi.visuals.ISelectionId;
import * as d3 from "d3";


import { SPCChartDataPoint } from "./dataStructure"
import { BarChartSettingsModel } from "./barChartSettingsModel";


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

export function dataLoad(options: VisualUpdateOptions, host: IVisualHost): [any[], any[], any[], any[]] {
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

    dates_input = dataViews[0].categorical.categories[0].values

    return [dates_input, value_input, target_input, breakPoint_input]
}

export function dataSet(dates:any, input: any): SPCChartDataPoint[] {
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
            difference: diff,
            category: <string>dates[i],

            outlier: 0,
            run: 0,
            shift: 0,
            twoInThree: 0
        });
    }

    return SPCChartDataPoints;
}