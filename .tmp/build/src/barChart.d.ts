import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import "regenerator-runtime/runtime";
import ISelectionId = powerbi.visuals.ISelectionId;
import IVisual = powerbi.extensibility.IVisual;
import PrimitiveValue = powerbi.PrimitiveValue;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
export interface BarChartDataPoint {
    value: PrimitiveValue;
    category: string;
    difference: number;
    color: string;
    strokeColor: string;
    strokeWidth: number;
    selectionId: ISelectionId;
}
export declare class BarChart implements IVisual {
    private svg;
    private host;
    private xAxis;
    private yAxis;
    private yGridLines;
    private line;
    private lineMean;
    private lineUCL;
    private lineLCL;
    private dataPoints;
    private formattingSettings;
    private formattingSettingsService;
    private chartSelection;
    static Config: {
        xScalePadding: number;
        solidOpacity: number;
        transparentOpacity: number;
        margins: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        xAxisFontMultiplier: number;
        yAxisFontMultiplier: number;
    };
    /**
     * Creates instance of BarChart. This method is only called once.
     *
     * @constructor
     * @param {VisualConstructorOptions} options - Contains references to the element that will
     *                                             contain the visual and a reference to the host
     *                                             which contains services.
     */
    constructor(options: VisualConstructorOptions);
    private parseDateLabel;
    /**
     * Updates the state of the visual. Every sequential databinding and resize will call update.
     *
     * @function
     * @param {VisualUpdateOptions} options - Contains references to the size of the container
     *                                        and the dataView which contains all the data
     *                                        the visual had queried.
     */
    update(options: VisualUpdateOptions): void;
    getFormattingModel(): powerbi.visuals.FormattingModel;
}
export { BarChart as Visual };
