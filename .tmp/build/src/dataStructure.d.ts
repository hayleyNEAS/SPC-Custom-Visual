export type PrimitiveValue = string | number | boolean | Date;
export interface SPCChartDataPoint {
    value: PrimitiveValue;
    category: string;
    breakP: number;
    difference: number;
    mean: number;
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
}
