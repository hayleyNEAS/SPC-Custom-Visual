import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import { SPCChartData, SPCChartDataPoint } from "./dataStructure";
import { BarChartSettingsModel } from "./barChartSettingsModel";
export declare function getTarget(target_input: any[], formatSettings: BarChartSettingsModel): number;
export declare function dataLoad(options: VisualUpdateOptions): [any[], any[], any[], any[]];
export declare function dataSet(dates: any, input: any): SPCChartDataPoint[];
export declare function fullData(data: SPCChartDataPoint[], options: VisualUpdateOptions): SPCChartData;
export declare function fullData2(options: VisualUpdateOptions, formatSettings: BarChartSettingsModel): SPCChartData;
