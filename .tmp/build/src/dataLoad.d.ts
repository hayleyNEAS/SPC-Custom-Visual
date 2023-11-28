import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import { SPCChartDataPoint } from "./dataStructure";
import { BarChartSettingsModel } from "./barChartSettingsModel";
export declare function getTarget(target_input: any[], formatSettings: BarChartSettingsModel): number;
export declare function createSelectorDataPoints(options: VisualUpdateOptions, host: IVisualHost): SPCChartDataPoint[];
export declare function dataLoad(options: VisualUpdateOptions, host: IVisualHost): [any[], any[], any[]];
