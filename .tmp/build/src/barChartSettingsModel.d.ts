import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import { SPCChartDataPoint } from "./barChart";
import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Enable x-Axis Formatting Card
 */
declare class EnableAxisCardSettings extends FormattingSettingsCard {
    show: formattingSettings.ToggleSwitch;
    fill: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Enable y-Axis Formatting Card
 */
declare class EnableYAxisCardSettings extends FormattingSettingsCard {
    show: formattingSettings.ToggleSwitch;
    fill: formattingSettings.ColorPicker;
    time: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Color Selector Formatting Card
 */
declare class ColorSelectorCardSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
* BarChart settings model class
*
*/
export declare class BarChartSettingsModel extends FormattingSettingsModel {
    enableAxis: EnableAxisCardSettings;
    enableYAxis: EnableYAxisCardSettings;
    colorSelector: ColorSelectorCardSettings;
    cards: (EnableAxisCardSettings | EnableYAxisCardSettings | ColorSelectorCardSettings)[];
    /**
     * populate colorSelector object categories formatting properties
     * @param dataPoints
     */
    populateColorSelector(dataPoints: SPCChartDataPoint[]): void;
}
export {};
