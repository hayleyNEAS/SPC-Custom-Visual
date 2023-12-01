import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import * as d3 from "d3";
export declare function parseDateLabel(label: string, index: number): string;
export declare function parseXLabels(d: string, index: number, n: number): string;
export declare function parseinHMS(d: d3.NumberValue): string;
export declare function parseYLabels(d: d3.NumberValue, hms: boolean): string;
export declare function PBIformatingKeeper(options: VisualUpdateOptions): [string, string, number];
