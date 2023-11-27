import { SPCChartDataPoint, SPCChartData } from "./dataStructure";
import { BarChartSettingsModel } from "./barChartSettingsModel";
export declare function identifyOutliers(data: SPCChartDataPoint[], formatSettings: BarChartSettingsModel, displayMarkerSize: number, UCLValue: number, LCLValue: number): SPCChartDataPoint[];
export declare function twoInThreeRule(value: any, Upper_Zone_A: any, Lower_Zone_A: any, Direction: any): 0 | 1 | -1;
export declare function logoSelector(data: SPCChartData, option: any): any;
