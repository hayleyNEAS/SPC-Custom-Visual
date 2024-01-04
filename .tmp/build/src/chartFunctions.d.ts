import ISandboxExtendedColorPalette = powerbi.extensibility.ISandboxExtendedColorPalette;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import { SPCChartData } from "./dataStructure";
export declare function yAxisDomain(data: SPCChartData): number[];
export declare function getFillColor(options: VisualUpdateOptions, objectString: string, propString: string, colorPalette: ISandboxExtendedColorPalette, defaultColor: string): string;
export declare function getYAxisTextFillColor(options: VisualUpdateOptions, colorPalette: ISandboxExtendedColorPalette, defaultColor: string): string;
