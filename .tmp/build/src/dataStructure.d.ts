export type PrimitiveValue = string | number | boolean | Date;
export interface SPCChartDataPoint {
    value: PrimitiveValue;
    category: string;
    breakP: number;
    difference: number;
    mean: number;
    UCLValue: number;
    LCLValue: number;
    Upper_Zone_A: number;
    Upper_Zone_B: number;
    Lower_Zone_A: number;
    Lower_Zone_B: number;
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
    numberOfTimePeriods: number;
    direction: number;
    target: number;
    strokeWidth: number;
    strokeColor: string;
    markerSize: number;
    measureName: string;
    measureFormat: string;
    decimalPlaces: number;
    levelOfDateHeirarchy: string;
    outlier: number;
    run: number;
    shift: number;
    twoInThree: number;
}
