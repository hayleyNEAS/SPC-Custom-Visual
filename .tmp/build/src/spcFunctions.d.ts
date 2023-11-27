import { BarChartSettingsModel } from "./barChartSettingsModel";
import { SPCChartDataPoint } from "./dataStructure";
export declare function identifyOutliers(data: SPCChartDataPoint[], formatSettings: BarChartSettingsModel, displayMarkerSize: number, UCLValue: number, LCLValue: number): SPCChartDataPoint[];
