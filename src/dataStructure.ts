import powerbi from "powerbi-visuals-api";
import ISelectionId = powerbi.visuals.ISelectionId;

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

  color: string; //for the marker
  markerSize: number;

  outlier: number;
  run: number;
  shift: number;
  twoInThree: number;

  additionalTooltipData: additionalKeyValue[];

  selectionID: ISelectionId
}

export interface SPCChartData {
  dataPoints: SPCChartDataPoint[];

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
  levelOfDateHeirarchy: string,

  outlier: number;
  run: number;
  shift: number;
  twoInThree: number;
}

export interface additionalKeyValue {
  name: string;
  values: any[];
  format: string;
  decimalPlaces: number;
}