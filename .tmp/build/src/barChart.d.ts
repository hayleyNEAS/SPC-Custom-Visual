import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import "regenerator-runtime/runtime";
import ISelectionId = powerbi.visuals.ISelectionId;
import IVisual = powerbi.extensibility.IVisual;
import PrimitiveValue = powerbi.PrimitiveValue;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
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
export declare class SPCChart implements IVisual {
    private svg;
    private logo;
    private logoTarget;
    private host;
    private xAxis;
    private yAxis;
    private lineData;
    private lineData_Diff;
    private lineMean;
    private lineUCL;
    private lineLCL;
    private lineUpperZoneA;
    private lineUpperZoneB;
    private lineLowerZoneA;
    private lineLowerZoneB;
    private lineTarget;
    private dataMarkers;
    private tooltipMarkers;
    private dataPoints;
    private formattingSettings;
    private formattingSettingsService;
    private tooltipServiceWrapper;
    private locale;
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
    };
    /**
     * Creates instance of SPCChart. This method is only called once.
     *
     * @constructor
     * @param {VisualConstructorOptions} options - Contains references to the element that will
     *                                             contain the visual and a reference to the host
     *                                             which contains services.
     */
    constructor(options: VisualConstructorOptions);
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
    private getTooltipData;
}
export { SPCChart as Visual };
