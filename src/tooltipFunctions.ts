import { NumberValue } from "d3-scale";
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;

import { SPCChartDataPoint, SPCChartData } from "./dataStructure"
import { parseYLabels } from "./formattingFunctions"
import { VisualSettingsModel } from "./visualSettingsModel";

export function getTooltipData(d: SPCChartDataPoint, data: SPCChartData, formating: VisualSettingsModel): VisualTooltipDataItem[] {
  let tooltip_data: VisualTooltipDataItem[] = []

  const header = {
    header: d.category,
    displayName: data.measureName,
    value: parseYLabels(<number>d.value, formating.enableYAxis.formatter.time.value, data.decimalPlaces, data.measureFormat),
    color: d.color
  };
  tooltip_data = [header]

  //add mean to tooltip
  if (formating.SPCSettings.lineOptions.showMean) {
    tooltip_data.push({
      displayName: "Mean",
      value: parseYLabels(d.mean, formating.enableYAxis.formatter.time.value, data.decimalPlaces, data.measureFormat),
      color: formating.SPCSettings.lineOptions.meanColor.value.value
    })
  }

  //add target to tooltip
  if (data.target != -Infinity && formating.SPCSettings.lineOptions.showTarget.value) {
    const target = {
      displayName: "Target",
      value: parseYLabels(data.target, formating.enableYAxis.formatter.time.value, data.decimalPlaces, data.measureFormat),
      color: formating.SPCSettings.lineOptions.targetColor.value.value
    };
    tooltip_data.push(target)
  }

  //add limits to tooltip
  if (formating.SPCSettings.lineOptions.showControl.value) {
    tooltip_data.push({
      displayName: "Upper Control Limit",
      value: parseYLabels(<number>d.UCLValue, formating.enableYAxis.formatter.time.value, data.decimalPlaces, data.measureFormat),
      color: formating.SPCSettings.lineOptions.upperCL.value.value
    });

    tooltip_data.push({
      displayName: "Lower Control Limit",
      value: parseYLabels(<number>d.LCLValue, formating.enableYAxis.formatter.time.value, data.decimalPlaces, data.measureFormat),
      color: formating.SPCSettings.lineOptions.lowerCL.value.value
    });

  }

  
  //add sub-limits to tooltip
  if (formating.SPCSettings.lineOptions.showSubControl.value) {
    tooltip_data.push({
      displayName: "Upper Zone A Limit",
      value: parseYLabels(<number>d.Upper_Zone_A, formating.enableYAxis.formatter.time.value, data.decimalPlaces, data.measureFormat),
      color: 'Black'
    });

    tooltip_data.push({
      displayName: "Lower Zone A Limit",
      value: parseYLabels(<number>d.Lower_Zone_A, formating.enableYAxis.formatter.time.value, data.decimalPlaces, data.measureFormat),
      color: 'Black'
    });

  }

  //add additional data to tooltip
  for (let j = 0, len = d.additionalTooltipData.length; j < len; j++) {
    const value = <NumberValue>d.additionalTooltipData[j].values[0];
    const tooltip_extra = {
      displayName: d.additionalTooltipData[j].name,
      value: parseYLabels(<number>value, false, d.additionalTooltipData[j].decimalPlaces, d.additionalTooltipData[j].format),
      color: "#00C0FFEE"
    };
    tooltip_data.push(tooltip_extra)
  }

  return tooltip_data

}
