
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;

import { SPCChartDataPoint, SPCChartData, PrimitiveValue } from "./dataStructure"
import { parseDateLabel, parseinHMS, parseXLabels, parseYLabels } from "./formattingFunctions"
import { VisualSettingsModel } from "./visualSettingsModel";

export function getTooltipData(d: SPCChartDataPoint, data: SPCChartData, formating: VisualSettingsModel): VisualTooltipDataItem[] {
    let tooltip_data: VisualTooltipDataItem[] = []

    let header = {
        header: d.category,
        displayName: data.measureName,
        value: parseYLabels(<number>d.value, formating.enableYAxis.formatter.time.value),
        color: d.color
    };

    let UCL = {
        displayName: "Upper Control Limit",
        value: parseYLabels(<number>d.UCLValue, formating.enableYAxis.formatter.time.value),
        color: formating.SPCSettings.lineOptions.upperCL.value.value
    };

    let LCL = {
        displayName: "Lower Control Limit",
        value: parseYLabels(<number>d.LCLValue, formating.enableYAxis.formatter.time.value),
        color: formating.SPCSettings.lineOptions.lowerCL.value.value
    };

    tooltip_data = [header, UCL, LCL]

    //add target to tooltip
    if (data.target != -Infinity) {
        let target = {
            displayName: "Target",
            value: parseYLabels(data.target, formating.enableYAxis.formatter.time.value),
            color: formating.SPCSettings.lineOptions.targetColor.value.value
        };
        tooltip_data.push(target)
    }

    //add additional data to tooltip
    for (let j = 0, len = d.additionalTooltipData.length; j < len; j++) {
        let tooltip_extra = {
            displayName: d.additionalTooltipData[j].name,
            value: d.additionalTooltipData[j].values.toString(),
            color: "#00000000"
        };
        tooltip_data.push(tooltip_extra)
    }

    return tooltip_data

/*     if (data.target == -Infinity) {
        return [header, UCL, LCL];
    } else {
        return [header, UCL, LCL, target];
    } */

}