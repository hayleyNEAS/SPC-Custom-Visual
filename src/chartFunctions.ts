import ISandboxExtendedColorPalette = powerbi.extensibility.ISandboxExtendedColorPalette;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;

import Fill = powerbi.Fill;

import { getValue } from "./objectEnumerationUtility";
import { SPCChartData } from "./dataStructure"
import { VisualSettingsModel } from "./visualSettingsModel";



export function yAxisDomain(data: SPCChartData, formating: VisualSettingsModel) {
  const dataPoints = data.dataPoints.filter(d => d.value !== null)
  const yData = dataPoints.map(d => <number>d.value)
  const UCLData = dataPoints.map(d => <number>d.UCLValue)
  const LCLData = dataPoints.map(d => <number>d.LCLValue)

  const maxData = isNaN(yData.reduce((a, b) => a+b,0)) ? -Infinity : yData.reduce((a, b) => Math.max(a, b), -Infinity) 
  const maxUCL = isNaN(yData.reduce((a, b) => a+b,0)) ? - Infinity : (data.n > 1 ? UCLData.reduce((a, b) => Math.max(a, b), -Infinity) : -Infinity)
  const  yScale_maxData = Math.max(maxData, maxUCL, data.target)

  const minData = isNaN(yData.reduce((a, b) => a+b,0)) ? Infinity : yData.reduce((a, b) => Math.min(a, b), Infinity)
  const minLCL = isNaN(yData.reduce((a, b) => a+b,0)) ? Infinity : (data.n > 1 ? LCLData.reduce((a, b) => Math.min(a, b), Infinity) : Infinity)

  const yScale_increase_window = yScale_maxData * 1.1 - yScale_maxData

  let yScale_minData = Math.min(minData, minLCL) //If a target is removed it get assigned the value -inf, so initially we calculate the min of a data without it 
  if (data.target > -Infinity) {
    yScale_minData = Math.min(minData, minLCL, data.target)
  }
  let return_min = yScale_minData-yScale_increase_window
  let return_max = yScale_maxData+yScale_increase_window

  if (formating.enableYAxis.formatter.min0.value) {
    yScale_minData = 0
    return_min = yScale_minData
  } else {
    if(formating.enableYAxis.limits.minY.value != ''){
      return_min = Number(formating.enableYAxis.limits.minY.value)
    }
    
    if(formating.enableYAxis.limits.maxY.value != ''){
      return_max = Number(formating.enableYAxis.limits.maxY.value)
    }
  }
  console.log(return_min, return_max)
  return [return_min, return_max]

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