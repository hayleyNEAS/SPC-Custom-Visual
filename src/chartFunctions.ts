import ISandboxExtendedColorPalette = powerbi.extensibility.ISandboxExtendedColorPalette;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;

import Fill = powerbi.Fill;

import { getValue } from "./objectEnumerationUtility";
import { SPCChartData } from "./dataStructure"



export function yAxisDomain(data: SPCChartData){
    const dataPoints = data.dataPoints.filter(d => d.value !== null)
    const yData = dataPoints.map(d => <number>d.value)
    const UCLData = dataPoints.map(d => <number>d.UCLValue)
    const LCLData = dataPoints.map(d => <number>d.LCLValue)

    const maxData = yData.reduce((a,b) => Math.max(a,b), -Infinity)
    const maxUCL = data.n > 1 ? UCLData.reduce((a,b) => Math.max(a,b), -Infinity) : -Infinity
    const yScale_maxData = Math.max(maxData, maxUCL, data.target)

    const minData = yData.reduce((a,b) => Math.min(a,b), Infinity)
    const minLCL = data.n > 1 ? LCLData.reduce((a,b) => Math.min(a,b), Infinity) : Infinity

    let yScale_minData = Math.min(minData, minLCL) //If a target is removed it get assigned the value -inf, so initially we calculate the min of a data without it 
    if(data.target > -Infinity){
        yScale_minData = Math.min(minData, minLCL, data.target)
    }
    

    const yScale_increase_window = yScale_maxData*1.1 - yScale_maxData
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