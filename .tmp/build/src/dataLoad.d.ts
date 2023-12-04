import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import { SPCChartData, SPCChartDataPoint } from "./dataStructure";
import { VisualSettingsModel } from "./visualSettingsModel";
export declare function getTarget(target_input: any[], formatSettings: VisualSettingsModel): number;
export declare function dataLoad(options: VisualUpdateOptions): [any[], any[], any[], any[]];
export declare function dataSet(dates: any, input: any[], breakP: any[]): SPCChartDataPoint[];
export declare function fullData(options: VisualUpdateOptions, formatSettings: VisualSettingsModel): SPCChartData;
export declare function createDataset(options: VisualUpdateOptions, host: IVisualHost, formatSettings: VisualSettingsModel): SPCChartData;
