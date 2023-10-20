import powerbi from "powerbi-visuals-api";
import { dataViewWildcard } from "powerbi-visuals-utils-dataviewutils";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import { SPCChartDataPoint } from "./barChart";

import SimpleCard = formattingSettings.SimpleCard;
import CompCard = formattingSettings.CompositeCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

class SPCSetUp extends SimpleCard {
    direction = new formattingSettings.ItemDropdown({
        items: [{value: 1, displayName: "Up"}, {value: 0, displayName: "No Direction"}, {value: -1, displayName: "Down"}],
        name: "direction",
        displayName: "Direction of improvement",
        value: {value: 0, displayName: "No Direction"}
    })
    name: string = "SPCSetUp";
    displayName?: string = "SPC Set Up";
    slices: Array<FormattingSettingsSlice> = [this.direction];
}

class LogoOptions extends SimpleCard {
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: undefined,
        value: false
    });
    name: string = "logoOptions";
    displayName?: string = "Logo Options";
    slices: Array<FormattingSettingsSlice> = [this.show];
}


class MarkerOptions extends SimpleCard {
    showMarker = new formattingSettings.ToggleSwitch({
        name: "showMarker",
        displayName: undefined,
        value: true
    });
    topLevelSlice = this.showMarker;

    outlier = new formattingSettings.ColorPicker({
        name: "outlier",
        displayName: "Outlier Color",
        value: { value: "#777777" }
    });

    run = new formattingSettings.ColorPicker({
        name: "run",
        displayName: "Run Color",
        value: { value: "purple" }
    });

    
    oneside = new formattingSettings.ColorPicker({
        name: "oneside",
        displayName: "Oneside of Mean Color",
        value: { value: "orange" }
    });

    name: string = "markerOptions";
    displayName?: string = "Marker Options";
    slices: Array<FormattingSettingsSlice> = [this.outlier, this.run, this.oneside];
}

class SPC extends CompCard {
    spcSetUp = new SPCSetUp();
    logoOptions = new LogoOptions();
    markerOptions = new MarkerOptions();

    name: string = "SPCSettings";
    displayName: string = 'SPC Settings';
    groups = [this.spcSetUp, this.logoOptions, this.markerOptions]
}
/**
 * Enable x-Axis Formatting Card
 */
class EnableAxisCardSettings extends SimpleCard {
    // Formatting property `show` toggle switch (formatting simple slice)
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: undefined,
        value: false,
        //topLevelSlice: true
    });

    // Formatting property `fill` color picker (formatting simple slice)
    fill = new formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Color",
        value: { value: "#777777" }
    });

    name: string = "enableAxis";
    displayName: string = "X-axis";
    slices: Array<FormattingSettingsSlice> = [this.show, this.fill];
}

/**
 * Enable y-Axis Formatting Card
 */
class YAxisFormatter extends SimpleCard {

    // Formatting property `fill` color picker (formatting simple slice)
    fill = new formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Axis Font Color",
        value: { value: "#777777" }
    });

    // Option for formatting y axis as time
    time = new formattingSettings.ToggleSwitch({
        name: "time",
        displayName: "Format as HH:mm:ss",
        value: false
    });

    
    name: string = "YAxisFormatter";
    displayName: string = "Y-Axis Formatter";
    slices: Array<FormattingSettingsSlice> = [this.fill, this.time];
}

class EnableYAxisCardSettings extends CompCard {
    // Formatting property `show` toggle switch (formatting simple slice)
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: undefined,
        value: false,
        //topLevelToggle: true
    });
    topLevelSlice = this.show;
    formatter = new YAxisFormatter()

    name: string = "enableYAxis";
    displayName: string = "Y-axis";
    groups = [this.formatter];
}


/**
* BarChart settings model class
*
*/
export class BarChartSettingsModel extends FormattingSettingsModel {

    // Create formatting settings model formatting cards
    SPCSettings = new SPC();
    enableAxis = new EnableAxisCardSettings();
    enableYAxis = new EnableYAxisCardSettings();
    //colorSelector = new ColorSelectorCardSettings();
    cards = [this.SPCSettings, this.enableAxis, this.enableYAxis];


    /**
     * populate colorSelector object categories formatting properties
     * @param dataPoints 
     */

}

