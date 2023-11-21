import powerbi from "powerbi-visuals-api";
import { dataViewWildcard } from "powerbi-visuals-utils-dataviewutils";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import { SPCChartDataPoint } from "./barChart";

import visuals = powerbi.visuals;

import SimpleCard = formattingSettings.SimpleCard;
import CompCard = formattingSettings.CompositeCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsCompositeSlice = formattingSettings.CompositeSlice;
import FormattingSettingsModel = formattingSettings.Model;
import { ColorPicker, CompositeSlice, ToggleSwitch } from "powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents";

class SPCSetUp extends SimpleCard {
    direction = new formattingSettings.ItemDropdown({
        items: [{value: 1, displayName: "Up"}, {value: 0, displayName: "No Direction"}, {value: -1, displayName: "Down"}],
        name: "direction",
        displayName: "Direction of improvement",
        value: {value: 0, displayName: "No Direction"}
    })

    target = new formattingSettings.TextInput({
        name: "target",
        displayName: "Target",
        value: "7",
        placeholder: "Value" 

    })
    name: string = "SPCSetUp";
    displayName?: string = "SPC Set Up";
    slices: Array<FormattingSettingsSlice> = [this.direction, this.target];
}

class LogoOptions extends SimpleCard {
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: undefined,
        value: false
    });
    topLevelSlice = this.show;

    location = new formattingSettings.ItemDropdown({
        items: [{value: -1, displayName: "Left"}, {value: 0, displayName: "Middle"}, {value: 1, displayName: "Right"}],
        name: "location",
        displayName: "Location of Logo",
        value: {value: -1, displayName: "Left"}
    })

    name: string = "logoOptions";
    displayName?: string = "Logo Options";
    slices: Array<FormattingSettingsSlice> = [this.location];
}

class LineOptions extends SimpleCard{
    showControl = new formattingSettings.ToggleSwitch({
        name: "showControl",
        displayName: "Show Control Limits",
        value: true
    });

    upperCL = new formattingSettings.ColorPicker({
        name: "upperCL",
        displayName: "Upper Control Limit Color",
        value: { value: "#777777" }
    });

    lowerCL = new formattingSettings.ColorPicker({
        name: "lowerCL",
        displayName: "Lower Control Limit Color",
        value: { value: "#777777" },
        isNoFillItemSupported: true
    });

    showSubControl = new formattingSettings.ToggleSwitch({
        name: "showSubControl",
        displayName: "Show Sub-Control Limits",
        value: false
    });

    showMean = new formattingSettings.ToggleSwitch({
        name: "showMean",
        displayName: "Show Average",
        value: true
    });
    

    name: string = "lineOptions";
    displayName?: string = "Line Options";
    slices: Array<FormattingSettingsSlice> = [this.showControl, this.upperCL, this.lowerCL, this.showSubControl, this.showMean];
}


class MarkerOptions extends SimpleCard {
    showMarker = new formattingSettings.ToggleSwitch({
        name: "showMarker",
        displayName: undefined,
        value: true
    });
    topLevelSlice = this.showMarker;

    showOutlier = new formattingSettings.ToggleSwitch({
        name: "showOutlier",
        displayName: "Outlier",
        value: true
    });

    outlier = new formattingSettings.ColorPicker({
        name: "outlier",
        displayName: undefined,
        value: { value: "#DA291C" }
    });

    showTrend = new formattingSettings.ToggleSwitch({
        name: "showTrend",
        displayName: "Trend",
        value: true
    });
    run = new formattingSettings.ColorPicker({
        name: "run",
        displayName: undefined,
        value: { value: "#FAE100" }
    });
    runNumber = new formattingSettings.NumUpDown({
        name: "runNumber",
        displayName: "Number of points",
        value: 7
    }); 

    
    improvement = new formattingSettings.ColorPicker({
        name: "improvement",
        displayName: "Improvement",
        value: { value: "orange" }
    });

    deterioration = new formattingSettings.ColorPicker({
        name: "deterioration",
        displayName: "Deterioration",
        value: { value: "#005EB8" }
    });

    name: string = "markerOptions";
    displayName?: string = "Marker Options";
    slices: Array<FormattingSettingsSlice> = [this.showOutlier, this.outlier, this.runNumber, this.showTrend,  this.run, this.improvement, this.deterioration];
}

class SPC extends CompCard {
    spcSetUp = new SPCSetUp();
    logoOptions = new LogoOptions();
    lineOptions = new LineOptions();
    markerOptions = new MarkerOptions();


    name: string = "SPCSettings";
    displayName: string = 'SPC Settings';
    groups = [this.spcSetUp, this.logoOptions, this.lineOptions, this.markerOptions]
}
/**
 * Enable x-Axis Formatting Card
 */
class EnableAxisCardSettings extends CompCard {
    // Formatting property `show` toggle switch (formatting simple slice)
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: undefined,
        value: false
    });
    topLevelSlice = this.show;
    formatter = new XAxisFormatter()

    name: string = "enableXAxis";
    displayName: string = "X-axis";
    groups = [this.formatter];
}

class XAxisFormatter extends SimpleCard {

    // Formatting property `fill` color picker (formatting simple slice)
    fill = new formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Color",
        value: { value: "#777777" }
    });

    name: string = "XAxisFormatter";
    displayName: string = "X-axis Formatter";
    slices: Array<FormattingSettingsSlice> = [this.fill];
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

