import { Visual } from "../../src/barChart";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG: IVisualPlugin = {
    name: 'barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG',
    displayName: 'BarChart',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = (<any>globalThis).dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG"] = barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG;
}
export default barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG;