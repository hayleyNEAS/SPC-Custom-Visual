import powerbi from "powerbi-visuals-api";
import { dataViewWildcard } from "powerbi-visuals-utils-dataviewutils";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import { SPCChartDataPoint } from "./barChart";

import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

/**
 * Enable x-Axis Formatting Card
 */
class EnableAxisCardSettings extends FormattingSettingsCard {
    // Formatting property `show` toggle switch (formatting simple slice)
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: undefined,
        value: false,
        topLevelToggle: true
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
class EnableYAxisCardSettings extends FormattingSettingsCard {
    // Formatting property `show` toggle switch (formatting simple slice)
    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: undefined,
        value: false,
        topLevelToggle: true
    });

    // Formatting property `fill` color picker (formatting simple slice)
    fill = new formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Color",
        value: { value: "#777777" }
    });

    // Option for formatting y axis as time
    time = new formattingSettings.ToggleSwitch({
        name: "time",
        displayName: "Format as HH:mm:ss",
        value: false
    });

    name: string = "enableYAxis";
    displayName: string = "Y-axis";
    slices: Array<FormattingSettingsSlice> = [this.show, this.fill, this.time];
}

/**
 * Color Selector Formatting Card
 */

class ColorSelectorCardSettings extends FormattingSettingsCard {
    name: string = "colorSelector";
    displayName: string = "Data Colors";

    // slices will be populated in barChart settings model `populateColorSelector` method
    slices: Array<FormattingSettingsSlice> = [];
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