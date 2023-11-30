import { SPCChartDataPoint, SPCChartData } from "./dataStructure";
import { BarChartSettingsModel } from "./barChartSettingsModel";
export declare function identifyOutliers(dataset: SPCChartData, formatSettings: BarChartSettingsModel): {
    datapoints: SPCChartDataPoint[];
    n: number;
    numberOfTimePeriods: number;
    direction: number;
    target: number;
    UCLValue: number;
    LCLValue: number;
    Upper_Zone_A: number;
    Upper_Zone_B: number;
    Lower_Zone_A: number;
    Lower_Zone_B: number;
    strokeWidth: number;
    strokeColor: string;
    markerSize: number;
    measureName: string;
    measureFormat: string;
    decimalPlaces: number;
    outlier: number;
    run: number;
    shift: number;
    twoInThree: number;
};
export declare function twoInThreeRule(value: any, Upper_Zone_A: any, Lower_Zone_A: any, Direction: any): 1 | 0 | -1;
export declare function logoSelector(data: SPCChartData, option: any): any;
export declare function directionColors(formatSettings: BarChartSettingsModel): [number, string, string];
export declare function getMean(dataset: SPCChartData): SPCChartData;
export declare function getControlLimits(dataset: SPCChartData): SPCChartData;
export declare function getMarkerColors(dataset: SPCChartData, formatSettings: BarChartSettingsModel): SPCChartData;
