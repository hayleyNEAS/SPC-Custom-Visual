import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import { SPCChartData, SPCChartDataPoint } from "./dataStructure";
import { BarChartSettingsModel } from "./barChartSettingsModel";
export declare function getTarget(target_input: any[], formatSettings: BarChartSettingsModel): number;
export declare function dataLoad(options: VisualUpdateOptions): [any[], any[], any[], any[]];
export declare function dataSet(dates: any, input: any): SPCChartDataPoint[];
export declare function fullData(options: VisualUpdateOptions, formatSettings: BarChartSettingsModel): SPCChartData;
export declare function createDataset(options: VisualUpdateOptions, host: IVisualHost, formatSettings: BarChartSettingsModel): SPCChartData;
