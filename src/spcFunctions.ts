//import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import * as d3 from "d3";


import { BarChartSettingsModel } from "./barChartSettingsModel";
import { SPCChartDataPoint } from "./dataStructure"
    
export function identifyOutliers(data: SPCChartDataPoint[], formatSettings: BarChartSettingsModel, displayMarkerSize: number, UCLValue: number, LCLValue: number) {
    let outlierColor = formatSettings.SPCSettings.markerOptions.outlier.value.value
    let outlierShow = Number(formatSettings.SPCSettings.markerOptions.showOutlier.value)
    
    let nPoints = data.length

    for (let i = 0, len = nPoints; i < len; i++) {
        if (<number>data[i].value > UCLValue) {
            data[i].color = outlierColor
            data[i].markerSize = displayMarkerSize * outlierShow
            data[i].outlier = 1
        }
        if (<number>data[i].value < LCLValue) {
            data[i].color = outlierColor
            data[i].markerSize = displayMarkerSize * outlierShow
            data[i].outlier = -1
        }

    }

    return data
}

export function twoInThreeRule(value, Upper_Zone_A, Lower_Zone_A, Direction) {
    if (Direction = 1) {
        if (value > Upper_Zone_A) {
            return 1
        } else {
            return 0
        }
    } else {
        if (value < Lower_Zone_A) {
            return -1
        } else {
            0
        }
    }
}