import ISandboxExtendedColorPalette = powerbi.extensibility.ISandboxExtendedColorPalette;
import DataViewObjects = powerbi.DataViewObjects;
import { SPCChartData } from "./dataStructure";
export declare function yAxisDomain(data: SPCChartData): number[];
export declare function getFillColor(objects: DataViewObjects, objectString: string, propString: string, colorPalette: ISandboxExtendedColorPalette, defaultColor: string): string;
export declare function getYAxisTextFillColor(objects: DataViewObjects, colorPalette: ISandboxExtendedColorPalette, defaultColor: string): string;
