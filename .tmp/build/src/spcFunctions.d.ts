import { BarChartSettingsModel } from "./barChartSettingsModel";
import { SPCChartDataPoint } from "./dataStructure";
export declare function identifyOutliers(data: SPCChartDataPoint[], formatSettings: BarChartSettingsModel, displayMarkerSize: number, UCLValue: number, LCLValue: number): SPCChartDataPoint[];
export declare function twoInThreeRule(value: any, Upper_Zone_A: any, Lower_Zone_A: any, Direction: any): 0 | 1 | -1;
