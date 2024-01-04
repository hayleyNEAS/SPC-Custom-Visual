import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import "regenerator-runtime/runtime";
import IVisual = powerbi.extensibility.IVisual;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
export declare class SPCChart implements IVisual {
    private svg;
    private host;
    private tooltipServiceWrapper;
    private locale;
    private logo;
    private logoTarget;
    private xAxis;
    private yAxis;
    private lineData;
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
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    getFormattingModel(): powerbi.visuals.FormattingModel;
    private getTooltipData;
}
export { SPCChart as Visual };
