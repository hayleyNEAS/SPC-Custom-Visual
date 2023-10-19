import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import SimpleCard = formattingSettings.SimpleCard;
import CompCard = formattingSettings.CompositeCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Enable x-Axis Formatting Card
 */
declare class EnableAxisCardSettings extends SimpleCard {
    show: formattingSettings.ToggleSwitch;
    fill: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * Enable y-Axis Formatting Card
 */
declare class YAxisFormatter extends SimpleCard {
    fill: formattingSettings.ColorPicker;
    time: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class EnableYAxisCardSettings extends CompCard {
    show: formattingSettings.ToggleSwitch;
    topLevelSlice: formattingSettings.ToggleSwitch;
    formatter: YAxisFormatter;
    name: string;
    displayName: string;
    groups: YAxisFormatter[];
}
/**
* BarChart settings model class
*
*/
export declare class BarChartSettingsModel extends FormattingSettingsModel {
    enableAxis: EnableAxisCardSettings;
    enableYAxis: EnableYAxisCardSettings;
    cards: (EnableAxisCardSettings | EnableYAxisCardSettings)[];
}
export {};
