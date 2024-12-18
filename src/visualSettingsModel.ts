import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import SimpleCard = formattingSettings.SimpleCard;
import CompCard = formattingSettings.CompositeCard;
import FormattingSettingsSlice = formattingSettings.Slice;
//import FormattingSettingsCompositeSlice = formattingSettings.CompositeSlice;
import FormattingSettingsModel = formattingSettings.Model;

class SPCSetUp extends SimpleCard {
  direction = new formattingSettings.ItemDropdown({
    items: [{ value: 1, displayName: "Up" }, { value: 0, displayName: "No Direction" }, { value: -1, displayName: "Down" }],
    name: "direction",
    displayName: "Direction of improvement",
    value: { value: 0, displayName: "No Direction" }
  })

  target = new formattingSettings.TextInput({
    name: "target",
    displayName: "Target (if not supplied)",
    value: "",
    placeholder: "Value"

  })

  runNumber = new formattingSettings.NumUpDown({
    name: "runNumber",
    displayName: "Number of points",
    value: 7
  });

  name: string = "SPCSetUp";
  displayName?: string = "SPC Set Up";
  slices: Array<FormattingSettingsSlice> = [this.direction, this.target, this.runNumber];
}

class LogoOptions extends SimpleCard {
  show = new formattingSettings.ToggleSwitch({
    name: "show",
    displayName: undefined,
    value: true
  });
  topLevelSlice = this.show;

  location = new formattingSettings.ItemDropdown({
    items: [{ value: -1, displayName: "Left" }, { value: 0, displayName: "Middle" }, { value: 1, displayName: "Right" }],
    name: "location",
    displayName: "Location of Logo",
    value: { value: -1, displayName: "Left" }
  })

  
  size = new formattingSettings.NumUpDown({
    name: "size",
    displayName: "Size of Logo (px)",
    value: 50,
    options: {
        minValue: {
        type: powerbi.visuals.ValidatorType.Min,
        value: 0
        }
     }
  });

  name: string = "logoOptions";
  displayName?: string = "Logo Options";
  slices: Array<FormattingSettingsSlice> = [this.location, this.size];
}

class LineOptions extends SimpleCard {
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

  meanColor = new formattingSettings.ColorPicker({
    name: "meanColor",
    displayName: undefined,
    value: { value: "black" }
  });

  showTarget = new formattingSettings.ToggleSwitch({
    name: "showTarget",
    displayName: "Show Target",
    value: true
  });

  targetColor = new formattingSettings.ColorPicker({
    name: "targetColor",
    displayName: undefined,
    value: { value: "red" }
  });

  dataColor = new formattingSettings.ColorPicker({
    name: "dataColor",
    displayName: "Data Line",
    value: { value: "steelblue" }
  });

  name: string = "lineOptions";
  displayName?: string = "Line Options";
  slices: Array<FormattingSettingsSlice> = [this.dataColor, this.showControl, this.upperCL, this.lowerCL, this.showSubControl, this.showMean, this.meanColor, this.showTarget, this.targetColor];
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

  showCC = new formattingSettings.ToggleSwitch({
    name: "showCC",
    displayName: "Show Common Cause Markers",
    value: false
  });
  
  commonCause = new formattingSettings.ColorPicker({
    name: "commonCause",
    displayName: undefined,
    value: { value: "#CCCCCC" }
  });

  improvement = new formattingSettings.ColorPicker({
    name: "improvement",
    displayName: "Improvement",
    value: { value: "#005EB8" }
  });

  deterioration = new formattingSettings.ColorPicker({
    name: "deterioration",
    displayName: "Deterioration",
    value: { value: "orange" }
  });

  name: string = "markerOptions";
  displayName?: string = "Marker Options";
  slices: Array<FormattingSettingsSlice> = [this.showOutlier, this.outlier, this.showCC, this.commonCause, this.improvement, this.deterioration];
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
 * Data Formatting Card
 */

class dataManipulator extends SimpleCard {

  // Option to pad missing values with 0's
  fillMissing0 = new formattingSettings.ToggleSwitch({
    name: "fillMissing0",
    displayName: "Pad missing values with 0s",
    value: false
  });

  name: string = "dataManipulator";
  displayName: string = "Advanced Settings (beta)";
  slices: Array<FormattingSettingsSlice> = [this.fillMissing0];

}/**
 * Enable x-Axis Formatting Card
 */
class EnableAxisCardSettings extends CompCard {
  // Formatting property `show` toggle switch (formatting simple slice)
  show = new formattingSettings.ToggleSwitch({
    name: "show",
    displayName: undefined,
    value: true
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

  // Option for formatting y axis as time or percentage
  // JB next task is to add currency/pounds here. not this week though  
  format = new formattingSettings.ItemDropdown({
    items: [{ value: "standard", displayName: "Standard" }, { value: "time", displayName: "HH:mm:ss" }, { value: "percent", displayName: "Percentage" }, { value: "currency", displayName: "Currency £" }],
    name: "format",
    displayName: "Format of y-axis",
    value: { value: "standard", displayName: "Standard" }
  })

  name: string = "YAxisFormatter";
  displayName: string = "Y-Axis Formatter";
  slices: Array<FormattingSettingsSlice> = [this.fill, this.format];
}
class YAxisLimits extends SimpleCard {

  minY = new formattingSettings.TextInput({
    name: "minY",
    displayName: "Minimum",
    value: "",
    placeholder: "Auto"
  });
  maxY = new formattingSettings.TextInput({
    name: "maxY",
    displayName: "Maximum",
    value: "",
    placeholder: "Auto"
  });

  name: string = "YAxisLimits";
  displayName: string = "Y-Axis Limits";
  slices: Array<FormattingSettingsSlice> = [this.minY, this.maxY];
}

class EnableYAxisCardSettings extends CompCard {
  // Formatting property `show` toggle switch (formatting simple slice)
  show = new formattingSettings.ToggleSwitch({
    name: "show",
    displayName: undefined,
    value: true,
    //topLevelToggle: true
  });
  topLevelSlice = this.show;
  formatter = new YAxisFormatter()
  limits = new YAxisLimits()

  name: string = "enableYAxis";
  displayName: string = "Y-axis";
  groups = [this.formatter, this.limits];
}

/**
 * Enable data labels Formatting Card
 */
class dataLabelsCard extends SimpleCard {
  show = new formattingSettings.ToggleSwitch({
    name: "show",
    displayName: undefined,
    value: false,
  });
  topLevelSlice = this.show;

  // Formatting property `fill` color picker (formatting simple slice)
  fill = new formattingSettings.ColorPicker({
    name: "fill",
    displayName: "Data Label Font Color",
    value: { value: "#777777" }
  });

  // Option for formatting y axis as time
  last = new formattingSettings.ToggleSwitch({
    name: "last",
    displayName: "Only Display Last Label",
    value: true
  });

  name: string = "dataLabels";
  displayName: string = "Data Labels";
  slices: Array<FormattingSettingsSlice> = [this.fill, this.last];
}


/**
 * Tooltip Formatting Card
 */
class tooltipFormattingCard extends SimpleCard {
  /*show = new formattingSettings.ToggleSwitch({
    name: "show",
    displayName: undefined,
    value: false,
  });
  topLevelSlice = this.show;*/

  // Formatting property `fill` color picker (formatting simple slice)
  SPCDecimal = new formattingSettings.NumUpDown({
    name: "SPCDecimal",
    displayName: "SPC Decimal places",
    value: 2,
    options: {
        minValue: {
        type: powerbi.visuals.ValidatorType.Min,
        value: 0
        },
        maxValue: {
          type: powerbi.visuals.ValidatorType.Max,
          value: 10
          }
     }
  });
  name: string = "tooltipFormatting";
  displayName: string = "Tooltip Settings";
  slices: Array<FormattingSettingsSlice> = [this.SPCDecimal];
}


/**
* BarChart settings model class
*
*/
export class VisualSettingsModel extends FormattingSettingsModel {

  // Create formatting settings model formatting cards
  SPCSettings = new SPC();
  dataManipulator = new dataManipulator();
  enableAxis = new EnableAxisCardSettings();
  enableYAxis = new EnableYAxisCardSettings();
  dataLabels = new dataLabelsCard();
  tooltipFormatting = new tooltipFormattingCard();
  //colorSelector = new ColorSelectorCardSettings();
  cards = [this.SPCSettings, this.dataManipulator, this.enableAxis, this.enableYAxis, this.dataLabels, this.tooltipFormatting];


  /**
   * populate colorSelector object categories formatting properties
   * @param dataPoints 
   */

}

