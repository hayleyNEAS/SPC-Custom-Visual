import * as d3 from "d3";

import ISandboxExtendedColorPalette = powerbi.extensibility.ISandboxExtendedColorPalette;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import DataViewObjects = powerbi.DataViewObjects;
import Fill = powerbi.Fill;

import { getValue } from "./objectEnumerationUtility";
import {SPCChartDataPoint, SPCChartData, PrimitiveValue} from "./dataStructure"



export function yAxisDomain(data: SPCChartData){
    let yData = data.datapoints.map(d => <number>d.value)
    let UCLData = data.datapoints.map(d => <number>d.UCLValue)
    let LCLData = data.datapoints.map(d => <number>d.LCLValue)

    let maxData = yData.reduce((a,b) => Math.max(a,b), -Infinity)
    let maxUCL = UCLData.reduce((a,b) => Math.max(a,b), -Infinity)
    let yScale_maxData = Math.max(maxData, maxUCL, data.target)

    
    let minData = yData.reduce((a,b) => Math.min(a,b), Infinity)
    let minLCL = LCLData.reduce((a,b) => Math.min(a,b), Infinity)

    let yScale_minData = Math.min(minData, minLCL) //If a target is removed it get assigned the value -inf, so initially we calcualte the min of a data without it 
    if(data.target > -Infinity){
        yScale_minData = Math.min(minData, minLCL, data.target)
    }


    let yScale_increase_window = yScale_maxData*1.1 - yScale_maxData

    return [yScale_minData - yScale_increase_window, yScale_maxData + yScale_increase_window]

}

export function getFillColor(
    options: VisualUpdateOptions,
    objectString: string,
    propString: string,
    colorPalette: ISandboxExtendedColorPalette,
    defaultColor: string
): string {
    if (colorPalette.isHighContrast) {
        return colorPalette.foreground.value;
    }

    const colorObjects = options.dataViews[0] ? options.dataViews[0].metadata.objects : null;
    return getValue<Fill>(
        colorObjects,
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
    options: VisualUpdateOptions,
    colorPalette: ISandboxExtendedColorPalette,
    defaultColor: string
): string {
    if (colorPalette.isHighContrast) {
        return colorPalette.foreground.value;
    }
    const colorObjects = options.dataViews[0] ? options.dataViews[0].metadata.objects : null;
    return getValue<Fill>(
        colorObjects,
        "enableYAxis",
        "fill",
        {
            solid: {
                color: defaultColor,
            }
        },
    ).solid.color;
}