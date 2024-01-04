import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;
import { SPCChartDataPoint, SPCChartData } from "./dataStructure";
import { VisualSettingsModel } from "./visualSettingsModel";
export declare function getTooltipData(d: SPCChartDataPoint, data: SPCChartData, formating: VisualSettingsModel): VisualTooltipDataItem[];
