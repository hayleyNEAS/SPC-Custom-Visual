//import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import * as d3 from "d3";


import { SPCChartDataPoint, SPCChartData } from "./dataStructure"
import { VisualSettingsModel } from "./visualSettingsModel";


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

export function identifyOutliers(dataset: SPCChartData, formatSettings: VisualSettingsModel) {
    let data = dataset.datapoints
    let outlierColor = formatSettings.SPCSettings.markerOptions.outlier.value.value
    let outlierShow = Number(formatSettings.SPCSettings.markerOptions.showOutlier.value)

    if (dataset.n > 1) {
        for (let i = 0, len = dataset.n; i < len; i++) {
            if (<number>data[i].value > data[i].UCLValue) {
                data[i].color = outlierColor
                data[i].markerSize = dataset.markerSize * outlierShow
                data[i].outlier = 1
            }
            if (<number>data[i].value < data[i].LCLValue) {
                data[i].color = outlierColor
                data[i].markerSize = dataset.markerSize * outlierShow
                data[i].outlier = -1
            }

        }

    }

    return {
        datapoints: data,

        n: dataset.n,
        numberOfTimePeriods: dataset.numberOfTimePeriods,
        direction: dataset.direction,
        target: dataset.target,

        strokeWidth: dataset.strokeWidth,
        strokeColor: dataset.strokeColor,
        markerSize: dataset.markerSize,

        measureName: dataset.measureName,
        measureFormat: dataset.measureFormat,
        decimalPlaces: dataset.decimalPlaces,
        levelOfDateHeirarchy: dataset.levelOfDateHeirarchy,

        outlier: dataset.outlier,
        run: dataset.run,
        shift: dataset.shift,
        twoInThree: dataset.twoInThree
    }
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
                if (data.target < data.datapoints[data.n - 1].LCLValue) {
                    return fail_above
                } if (data.target >= data.datapoints[data.n - 1].UCLValue) {
                    return pass_below
                } else {
                    return atTarget
                }

            } if (data.direction > 0) {
                if (data.target < data.datapoints[data.n - 1].LCLValue) {
                    return pass_above
                } if (data.target >= data.datapoints[data.n - 1].UCLValue) {
                    return fail_below
                } else {
                    return atTarget
                }
            } if (data.direction == 0) {
                if (data.target < data.datapoints[data.n - 1].LCLValue) {
                    return above
                } if (data.target >= data.datapoints[data.n - 1].UCLValue) {
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

export function directionColors(formatSettings: VisualSettingsModel): [number, string, string] {
    let direction = <number>formatSettings.SPCSettings.spcSetUp.direction.value.value
    let up_color = ""
    let down_color = ""
    if (direction == 1) {
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

export function getMean(dataset: SPCChartData): SPCChartData {
    let data = dataset.datapoints
    let numberTimePeriods = dataset.numberOfTimePeriods

    for (let i = 0, len = numberTimePeriods + 1; i < len; i++) {
        let subset = data.filter((d) => d.breakP == i);
        let subset_forMean = subset.filter(d => d.value !== null);

        let meanValue = null
        if (subset_forMean.length > 0) {
            meanValue = subset_forMean
                .map((d) => <number>d.value)
                .reduce((a, b) => a + b, 0) / subset_forMean.length;
        }
        subset.forEach((d) => d.mean = meanValue)
    }

    return {
        datapoints: data,

        n: dataset.n,
        numberOfTimePeriods: dataset.numberOfTimePeriods,
        direction: dataset.direction,
        target: dataset.target,

        strokeWidth: dataset.strokeWidth,
        strokeColor: dataset.strokeColor,
        markerSize: dataset.markerSize,

        measureName: dataset.measureName,
        measureFormat: dataset.measureFormat,
        decimalPlaces: dataset.decimalPlaces,
        levelOfDateHeirarchy: dataset.levelOfDateHeirarchy,

        outlier: dataset.outlier,
        run: dataset.run,
        shift: dataset.shift,
        twoInThree: dataset.twoInThree
    }
}

export function getControlLimits(dataset: SPCChartData): SPCChartData {
    let data = dataset.datapoints;
    let numberTimePeriods = dataset.numberOfTimePeriods;

    for (let i = 0, len = numberTimePeriods + 1; i < len; i++) {
        let subset = data.filter((d) => d.breakP == i);
        let subset_forAvg = subset.filter(d => d.value !== null);

        let avgDiff = subset_forAvg
            .map((d) => <number>Math.abs(d.difference))
            .reduce((a, b) => a + b, 0) / (subset_forAvg.length - 1);

        if (subset_forAvg.length <= 1) {
            avgDiff = null
        };

        subset.forEach((d) => d.UCLValue = avgDiff !== null ? d.mean + 2.66 * avgDiff : null);
        subset.forEach((d) => d.LCLValue = avgDiff !== null ? d.mean - 2.66 * avgDiff : null);

        subset.forEach((d) => d.Upper_Zone_A = avgDiff !== null ? d.mean + 2.66 * avgDiff * 2 / 3 : null);
        subset.forEach((d) => d.Lower_Zone_A = avgDiff !== null ? d.mean - 2.66 * avgDiff * 2 / 3 : null);

        subset.forEach((d) => d.Upper_Zone_B = avgDiff !== null ? d.mean + 2.66 * avgDiff * 1 / 3 : null);
        subset.forEach((d) => d.Lower_Zone_B = avgDiff !== null ? d.mean - 2.66 * avgDiff * 1 / 3 : null);

    }


    return {
        datapoints: data,

        n: dataset.n,
        numberOfTimePeriods: dataset.numberOfTimePeriods,
        direction: dataset.direction,
        target: dataset.target,

        strokeWidth: dataset.strokeWidth,
        strokeColor: dataset.strokeColor,
        markerSize: dataset.markerSize,

        measureName: dataset.measureName,
        measureFormat: dataset.measureFormat,
        decimalPlaces: dataset.decimalPlaces,
        levelOfDateHeirarchy: dataset.levelOfDateHeirarchy,

        outlier: dataset.outlier,
        run: dataset.run,
        shift: dataset.shift,
        twoInThree: dataset.twoInThree
    }
}

export function getMarkerColors(dataset: SPCChartData, formatSettings: VisualSettingsModel): SPCChartData {
    let data = dataset.datapoints
    let [direction, up_color, down_color] = directionColors(formatSettings)

    for (let i = 0; i < dataset.n; i++) {
        if (i > 3) { //two in three rules 
            let latest3 = data.slice(i - 3 + 1, i + 1)
            let twoInThreeCheck = latest3
                .map((d) => twoInThreeRule(d.value, d.Upper_Zone_A, d.Lower_Zone_A, dataset.direction))
                .reduce((a, b) => a + b, 0)
            if (Math.abs(twoInThreeCheck) >= 2) {
                latest3.forEach(d => d.color = up_color)
                latest3.forEach(d => d.markerSize = dataset.markerSize)
                latest3.forEach(d => d.twoInThree = 1)
            } else if (Math.abs(twoInThreeCheck) <= -2) {
                latest3.forEach(d => d.color = down_color)
                latest3.forEach(d => d.markerSize = dataset.markerSize)
                latest3.forEach(d => d.twoInThree = 1)
            }
        }
        let p = formatSettings.SPCSettings.markerOptions.runNumber.value
        if (i > p) {
            let latest7 = data.slice(i - p + 1, i + 1)
            //run of 7
            let runOfNumbers = latest7
                .map((d) => Math.sign(d.difference))
                .reduce((a, b) => a + b, 0)
            if (runOfNumbers == p) {
                latest7.forEach(d => d.color = up_color)
                latest7.forEach(d => d.markerSize = dataset.markerSize)
                latest7.forEach(d => d.run = 1)
            } if (runOfNumbers == -1 * p) {
                latest7.forEach(d => d.color = down_color)
                latest7.forEach(d => d.markerSize = dataset.markerSize)
                latest7.forEach(d => d.run = -1)
            }
            //oneside of mean 
            let shift7 = latest7
                .map((d) => Math.sign(<number>d.value - d.mean))
                .reduce((a, b) => a + b, 0)
            if (shift7 == p) {
                latest7.forEach(d => d.color = up_color)
                latest7.forEach(d => d.markerSize = dataset.markerSize)
                latest7.forEach(d => d.shift = 1)
            } if (shift7 == -1 * p) {
                latest7.forEach(d => d.color = down_color)
                latest7.forEach(d => d.markerSize = dataset.markerSize)
                latest7.forEach(d => d.shift = -1)
            }
        }
        if (i > 15) {
            let latest15 = data.slice(i - 15 + 1, i + 1)
        }
    }

    if (dataset.n == 1) { 
        data.forEach(d => d.markerSize = dataset.markerSize)
        data.forEach(d => d.color = dataset.strokeColor) 
    }
    
    return {
        datapoints: data, //this is the pivitol step

        n: dataset.n,
        numberOfTimePeriods: dataset.numberOfTimePeriods,
        direction: dataset.direction,
        target: dataset.target,

        strokeWidth: dataset.strokeWidth,
        strokeColor: dataset.strokeColor,
        markerSize: dataset.markerSize,

        measureName: dataset.measureName,
        measureFormat: dataset.measureFormat,
        decimalPlaces: dataset.decimalPlaces,
        levelOfDateHeirarchy: dataset.levelOfDateHeirarchy,

        outlier: dataset.outlier,
        run: data[dataset.n - 1].run,
        shift: data[dataset.n - 1].shift,
        twoInThree: data[dataset.n - 1].twoInThree
    }
}