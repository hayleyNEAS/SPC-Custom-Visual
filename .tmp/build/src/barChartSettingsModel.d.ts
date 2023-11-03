import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import SimpleCard = formattingSettings.SimpleCard;
import CompCard = formattingSettings.CompositeCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
declare class SPCSetUp extends SimpleCard {
    direction: formattingSettings.ItemDropdown;
    target: formattingSettings.TextInput;
    name: string;
    displayName?: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class LogoOptions extends SimpleCard {
    show: formattingSettings.ToggleSwitch;
    topLevelSlice: formattingSettings.ToggleSwitch;
    location: formattingSettings.ItemDropdown;
    name: string;
    displayName?: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class LineOptions extends SimpleCard {
    showControl: formattingSettings.ToggleSwitch;
    upperCL: formattingSettings.ColorPicker;
    lowerCL: formattingSettings.ColorPicker;
    showSubControl: formattingSettings.ToggleSwitch;
    showMean: formattingSettings.ToggleSwitch;
    name: string;
    displayName?: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class MarkerOptions extends SimpleCard {
    showMarker: formattingSettings.ToggleSwitch;
    topLevelSlice: formattingSettings.ToggleSwitch;
    outlier: formattingSettings.ColorPicker;
    run: formattingSettings.ColorPicker;
    oneside: formattingSettings.ColorPicker;
    twoInThree: formattingSettings.ColorPicker;
    name: string;
    displayName?: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class SPC extends CompCard {
    spcSetUp: SPCSetUp;
    logoOptions: LogoOptions;
    lineOptions: LineOptions;
    markerOptions: MarkerOptions;
    name: string;
    displayName: string;
    groups: (SPCSetUp | MarkerOptions | LogoOptions | LineOptions)[];
}
/**
 * Enable x-Axis Formatting Card
 */
declare class EnableAxisCardSettings extends CompCard {
    show: formattingSettings.ToggleSwitch;
    topLevelSlice: formattingSettings.ToggleSwitch;
    formatter: XAxisFormatter;
    name: string;
    displayName: string;
    groups: XAxisFormatter[];
}
declare class XAxisFormatter extends SimpleCard {
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
    SPCSettings: SPC;
    enableAxis: EnableAxisCardSettings;
    enableYAxis: EnableYAxisCardSettings;
    cards: (SPC | EnableAxisCardSettings | EnableYAxisCardSettings)[];
}
export {};
