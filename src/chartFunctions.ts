import * as d3 from "d3";

import ISandboxExtendedColorPalette = powerbi.extensibility.ISandboxExtendedColorPalette;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import DataViewObjects = powerbi.DataViewObjects;
import Fill = powerbi.Fill;

import { getValue } from "./objectEnumerationUtility";
import {SPCChartDataPoint, SPCChartData, PrimitiveValue} from "./dataStructure"



export function yAxisDomain(data: SPCChartData){
    let yData = data.datapoints.map(d => <number>d.value)

    let maxData = yData.reduce((a,b) => Math.max(a,b), -Infinity)
    let yScale_maxData = Math.max(maxData, data.UCLValue, data.target)

    
    let minData = yData.reduce((a,b) => Math.min(a,b), Infinity)
    let yScale_minData = Math.min(minData, data.LCLValue) //If a target is removed it get assigned the value -inf, so initially we calcualte the min of a data without it 
    if(data.target > -Infinity){
        yScale_minData = Math.min(minData, data.LCLValue, data.target)
    }


    let yScale_increase_window = yScale_maxData*1.1 - yScale_maxData

    return [yScale_minData - yScale_increase_window, yScale_maxData + yScale_increase_window]

}

export function getFillColor(
    objects: DataViewObjects,
    objectString: string,
    propString: string,
    colorPalette: ISandboxExtendedColorPalette,
    defaultColor: string
): string {
    if (colorPalette.isHighContrast) {
        return colorPalette.foreground.value;
    }

    return getValue<Fill>(
        objects,
        objectString,
        propString,
        {
            solid: {
                color: defaultColor,
            }
        },
    ).solid.color;
}

export function getYAxisTextFillColor(
    objects: DataViewObjects,
    colorPalette: ISandboxExtendedColorPalette,
    defaultColor: string
): string {
    if (colorPalette.isHighContrast) {
        return colorPalette.foreground.value;
    }

    return getValue<Fill>(
        objects,
        "enableYAxis",
        "fill",
        {
            solid: {
                color: defaultColor,
            }
        },
    ).solid.color;
}