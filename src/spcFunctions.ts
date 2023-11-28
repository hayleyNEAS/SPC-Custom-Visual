//import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import * as d3 from "d3";


import { SPCChartDataPoint, SPCChartData, PrimitiveValue} from "./dataStructure" 
import { BarChartSettingsModel } from "./barChartSettingsModel";


//Images

const variation_noChange = require("./../assets/Variation_noChange.png")
const variation_ciHigh = require("./../assets/variation_ciHigh.png")
const variation_ccHigh = require("./../assets/variation_ccHigh.png")
const variation_ciLow = require("./../assets/variation_ciLow.png")
const variation_ccLow = require("./../assets/variation_ccLow.png")
const variation_High = require("./../assets/variation_high.png")
const variation_Low = require("./../assets/variation_low.png")

const atTarget = require("./../assets/assurance_atTarget.png")
const fail_above = require("./../assets/fail_above.png")
const fail_below = require("./../assets/fail_below.png")
const pass_above = require("./../assets/pass_above.png")
const pass_below = require("./../assets/pass_below.png")
const above = require("./../assets/above.png")
const below = require("./../assets/below.png")
const none = require("./../assets/no_image.png")

//Functions

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

export function logoSelector(data: SPCChartData, option): any {
    if (option == "variation") {
        //let dataPoints = data.datapoints
        if (data.direction > 0) {
            if (data.outlier == 1 || data.run == 1 || data.shift == 1 || data.twoInThree == 1) {
                return variation_ciHigh
            } if (data.outlier == -1 || data.run == -1 || data.shift == -1 || data.twoInThree == -1) {
                return variation_ccLow
            } else {
                return variation_noChange
            }
        } if (data.direction < 0) {
            if (data.outlier == -1 || data.run == -1 || data.shift == -1 || data.twoInThree == -1) {
                return variation_ciLow
            } if (data.outlier == 1 || data.run == 1 || data.shift == 1 || data.twoInThree == 1) {
                return variation_ccHigh
            } else {
                return variation_noChange
            }
        } if (data.direction == 0) {
            if (data.outlier == -1 || data.run == -1 || data.shift == -1 || data.twoInThree == -1) {
                return variation_Low
            } if (data.outlier == 1 || data.run == 1 || data.shift == 1 || data.twoInThree == 1) {
                return variation_High
            } else {
                return variation_noChange
            }
        }
    }

    if (option == "target") {
        if (data.target > -Infinity) {
            if (data.direction < 0) {
                if (data.target < data.LCLValue) {
                    return fail_above
                } if (data.target >= data.UCLValue) {
                    return pass_below
                } else { 
                    return atTarget
                }

            } if (data.direction > 0) {
                if (data.target < data.LCLValue) {
                    return pass_above
                } if (data.target >= data.UCLValue) {
                    return fail_below
                } else {
                    return atTarget
                }
            } if (data.direction == 0) {
                if (data.target < data.LCLValue) {
                    return above
                } if (data.target >= data.UCLValue) {
                    return below
                } else {
                    return atTarget
                }
            }
        } else {
            return none
        }
    }

}

export function directionColors(formatSettings: BarChartSettingsModel):[number, string, string]{
    let direction = <number>formatSettings.SPCSettings.spcSetUp.direction.value.value
    let up_color = ""
    let down_color = ""
    if(direction == 1){
        up_color = formatSettings.SPCSettings.markerOptions.improvement.value.value
        down_color = formatSettings.SPCSettings.markerOptions.deterioration.value.value
    } else if (direction == -1) {
        up_color = formatSettings.SPCSettings.markerOptions.deterioration.value.value
        down_color = formatSettings.SPCSettings.markerOptions.improvement.value.value
    } else {
        up_color = formatSettings.SPCSettings.markerOptions.improvement.value.value
        down_color = formatSettings.SPCSettings.markerOptions.deterioration.value.value
    }
    return [direction, up_color, down_color]
}