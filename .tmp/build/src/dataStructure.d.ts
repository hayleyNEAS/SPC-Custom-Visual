import powerbi from "powerbi-visuals-api";
import ISelectionId = powerbi.visuals.ISelectionId;
export type PrimitiveValue = string | number | boolean | Date;
export interface SPCChartDataPoint {
    value: PrimitiveValue;
    category: string;
    difference: number;
    color: string;
    markerSize: number;
    selectionId: ISelectionId;
    outlier: number;
    run: number;
    shift: number;
    twoInThree: number;
}
export interface SPCChartDataPoint2 {
    value: PrimitiveValue;
    category: string;
    difference: number;
    color: string;
    markerSize: number;
    outlier: number;
    run: number;
    shift: number;
    twoInThree: number;
}
export interface SPCChartData {
    datapoints: SPCChartDataPoint[];
    n: number;
    direction: number;
    target: number;
    meanValue: number;
    UCLValue: number;
    LCLValue: number;
    Upper_Zone_A: number;
    Upper_Zone_B: number;
    Lower_Zone_A: number;
    Lower_Zone_B: number;
    strokeWidth: number;
    strokeColor: string;
    measureName: string;
    measureFormat: string;
    decimalPlaces: number;
    outlier: number;
    run: number;
    shift: number;
    twoInThree: number;
}
