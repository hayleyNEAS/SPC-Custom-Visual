import powerbi from "powerbi-visuals-api";


import FormattingGroup = powerbi.visuals.FormattingGroup;


export function getFormattingModel(): powerbi.visuals.FormattingModel {
    // Building data card, We are going to add two formatting groups "Font Control Group" and "Data Design Group"
    let dataCard: powerbi.visuals.FormattingCard = {
        description: "Data Card Description",
        displayName: "Data Card",
        uid: "dataCard_uid",
        groups: []
    }

    // Building formatting group "Font Control Group"
    // Notice that "descriptor" objectName and propertyName should match capabilities object and property names
    let group1_dataFont: powerbi.visuals.FormattingGroup = {
        displayName: "Font Control Group",
        uid: "dataCard_fontControl_group_uid",
        slices: [
            {
                uid: "dataCard_fontControl_displayUnits_uid",
                displayName:"display units",
                control: {
                    type: powerbi.visuals.FormattingComponent.Dropdown,
                    properties: {
                        descriptor: {
                            objectName: "dataCard",
                            propertyName:"displayUnitsProperty"
                        },
                        value: 0
                    }
                }
            },
            // FontControl slice is composite slice, It means it contain multiple properties inside it
            {
                uid: "data_font_control_slice_uid",
                displayName: "Font",
                control: {
                    type: powerbi.visuals.FormattingComponent.FontControl,
                    properties: {
                        fontFamily: {
                            descriptor: {
                                objectName: "dataCard",
                                propertyName: "fontFamily"
                            },
                            value: "wf_standard-font, helvetica, arial, sans-serif"
                        },
                        fontSize: {
                            descriptor: {
                                objectName: "dataCard",
                                propertyName: "fontSize"
                            },
                            value: 16
                        },
                        bold: {
                            descriptor: {
                                objectName: "dataCard",
                                propertyName: "fontBold"
                            },
                            value: false
                        },
                        italic: {
                            descriptor: {
                                objectName: "dataCard",
                                propertyName: "fontItalic"
                            },
                            value: false
                        },
                        underline: {
                            descriptor: {
                                objectName: "dataCard",
                                propertyName: "fontUnderline"
                            },
                            value: false
                        }
                    }
                }
            }
        ],
    };
    // Building formatting group "Font Control Group"
    // Notice that "descriptor" objectName and propertyName should match capabilities object and property names
    let group2_dataDesign: powerbi.visuals.FormattingGroup = {
        displayName: "Data Design Group",
        uid: "dataCard_dataDesign_group_uid",
        slices: [
            // Adding ColorPicker simple slice for font color
            {
                displayName: "Font Color",
                uid: "dataCard_dataDesign_fontColor_slice",
                control: {
                    type: powerbi.visuals.FormattingComponent.ColorPicker,
                    properties: {
                        descriptor:
                        {
                            objectName: "dataCard",
                            propertyName: "fontColor"
                        },
                        value: { value: "#01B8AA" }
                    }
                }
            },
            // Adding AlignmentGroup simple slice for line alignment
            {
                displayName: "Line Alignment",
                uid: "dataCard_dataDesign_lineAlignment_slice",
                control: {
                    type: powerbi.visuals.FormattingComponent.AlignmentGroup,
                    properties: {
                        descriptor:
                        {
                            objectName: "dataCard",
                            propertyName: "lineAlignment"
                        },
                        mode: powerbi.visuals.AlignmentGroupMode.Horizonal,
                        value: "right"
                    }
                }
            },
        ]
    };

    // Add formatting groups to data card
    dataCard.groups.push(group1_dataFont);
    dataCard.groups.push(group2_dataDesign);

    // Build and return formatting model with data card
    const formattingModel: powerbi.visuals.FormattingModel = { cards: [dataCard] };
    return formattingModel;
}