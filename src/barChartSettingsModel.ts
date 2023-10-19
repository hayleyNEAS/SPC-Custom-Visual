import powerbi from "powerbi-visuals-api";
import { dataViewWildcard } from "powerbi-visuals-utils-dataviewutils";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import { SPCChartDataPoint } from "./barChart";

import SimpleCard = formattingSettings.SimpleCard;
import CompCard = formattingSettings.CompositeCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
import { CompositeSlice, Container } from "powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents";

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
    enableAxis = new EnableAxisCardSettings();
    enableYAxis = new EnableYAxisCardSettings();
    //colorSelector = new ColorSelectorCardSettings();
    cards = [this.enableAxis, this.enableYAxis];


    /**
     * populate colorSelector object categories formatting properties
     * @param dataPoints 
     */
    /*
    populateColorSelector(dataPoints: SPCChartDataPoint[]) {
        let slices = this.colorSelector.slices;
        if (dataPoints) {
            dataPoints.forEach(dataPoint => {
                slices.push(new formattingSettings.ColorPicker({
                    name: "fill",
                    displayName: dataPoint.category,
                    value: { value: dataPoint.color },
                    selector: dataViewWildcard.createDataViewWildcardSelector(dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals),
                    altConstantSelector: dataPoint.selectionId.getSelector(),
                    instanceKind: powerbi.VisualEnumerationInstanceKinds.ConstantOrRule
                }));
            });
        }
    }
    */
}

