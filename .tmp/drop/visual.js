var barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DP: () => (/* binding */ CompositeCard),
/* harmony export */   Hn: () => (/* binding */ Model),
/* harmony export */   Zh: () => (/* binding */ ToggleSwitch),
/* harmony export */   sF: () => (/* binding */ SimpleCard),
/* harmony export */   zH: () => (/* binding */ ColorPicker),
/* harmony export */   zt: () => (/* binding */ ItemDropdown)
/* harmony export */ });
/* unused harmony exports CardGroupEntity, Group, SimpleSlice, AlignmentGroup, NumUpDown, Slider, DatePicker, AutoDropdown, DurationPicker, ErrorRangeControl, FieldPicker, ItemFlagsSelection, AutoFlagsSelection, TextInput, TextArea, FontPicker, GradientBar, ImageUpload, ListEditor, ReadOnlyText, ShapeMapSelector, CompositeSlice, FontControl, MarginPadding, Container, ContainerItem */
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3827);
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */

class NamedEntity {
}
class CardGroupEntity extends NamedEntity {
}
class Model {
}
/** CompositeCard is use to populate a card into the formatting pane with multiple groups */
class CompositeCard extends NamedEntity {
}
class Group extends (/* unused pure expression or super */ null && (CardGroupEntity)) {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
/** SimpleCard is use to populate a card into the formatting pane in a single group */
class SimpleCard extends CardGroupEntity {
}
class SimpleSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const sliceDisplayName = (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName;
        const sliceDescription = (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description;
        const componentDisplayName = {
            displayName: sliceDisplayName,
            description: sliceDescription,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName, localizationManager)
            } });
    }
    getFormattingComponent(objectName, localizationManager) {
        return {
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getDescriptor */ .B(objectName, this),
            value: this.value,
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return [{
                objectName: objectName,
                propertyName: this.name
            }];
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a;
        let newValue = (_a = dataViewObjects === null || dataViewObjects === void 0 ? void 0 : dataViewObjects[objectName]) === null || _a === void 0 ? void 0 : _a[this.name];
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyValue */ .S(this, newValue, this.value);
    }
}
class AlignmentGroup extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "AlignmentGroup" /* visuals.FormattingComponent.AlignmentGroup */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mode: this.mode, supportsNoSelection: this.supportsNoSelection });
    }
}
class ToggleSwitch extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ToggleSwitch" /* visuals.FormattingComponent.ToggleSwitch */;
    }
}
class ColorPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ColorPicker" /* visuals.FormattingComponent.ColorPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { defaultColor: this.defaultColor, isNoFillItemSupported: this.isNoFillItemSupported });
    }
}
class NumUpDown extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "NumUpDown" /* visuals.FormattingComponent.NumUpDown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { options: this.options });
    }
}
class Slider extends (/* unused pure expression or super */ null && (NumUpDown)) {
    constructor() {
        super(...arguments);
        this.type = "Slider" /* visuals.FormattingComponent.Slider */;
    }
}
class DatePicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "DatePicker" /* visuals.FormattingComponent.DatePicker */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: (localizationManager && this.placeholderKey) ? localizationManager.getDisplayName(this.placeholderKey) : this.placeholder, validators: this.validators });
    }
}
class ItemDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoDropdown extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mergeValues: this.mergeValues, filterValues: this.filterValues });
    }
}
class DurationPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "DurationPicker" /* visuals.FormattingComponent.DurationPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class ErrorRangeControl extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "ErrorRangeControl" /* visuals.FormattingComponent.ErrorRangeControl */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class FieldPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "FieldPicker" /* visuals.FormattingComponent.FieldPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators, allowMultipleValues: this.allowMultipleValues });
    }
}
class ItemFlagsSelection extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoFlagsSelection extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
}
class TextInput extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "TextInput" /* visuals.FormattingComponent.TextInput */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: this.placeholder });
    }
}
class TextArea extends (/* unused pure expression or super */ null && (TextInput)) {
    constructor() {
        super(...arguments);
        this.type = "TextArea" /* visuals.FormattingComponent.TextArea */;
    }
}
class FontPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "FontPicker" /* visuals.FormattingComponent.FontPicker */;
    }
}
class GradientBar extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "GradientBar" /* visuals.FormattingComponent.GradientBar */;
    }
}
class ImageUpload extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ImageUpload" /* visuals.FormattingComponent.ImageUpload */;
    }
}
class ListEditor extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ListEditor" /* visuals.FormattingComponent.ListEditor */;
    }
}
class ReadOnlyText extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ReadOnlyText" /* visuals.FormattingComponent.ReadOnlyText */;
    }
}
class ShapeMapSelector extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "ShapeMapSelector" /* visuals.FormattingComponent.ShapeMapSelector */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { isAzMapReferenceSelector: this.isAzMapReferenceSelector });
    }
}
class CompositeSlice extends (/* unused pure expression or super */ null && (NamedEntity)) {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const componentDisplayName = {
            displayName: (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName,
            description: (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName)
            } });
    }
}
class FontControl extends (/* unused pure expression or super */ null && (CompositeSlice)) {
    constructor(object) {
        super(object);
        this.type = "FontControl" /* visuals.FormattingComponent.FontControl */;
    }
    getFormattingComponent(objectName) {
        var _a, _b, _c;
        return {
            fontFamily: this.fontFamily.getFormattingComponent(objectName),
            fontSize: this.fontSize.getFormattingComponent(objectName),
            bold: (_a = this.bold) === null || _a === void 0 ? void 0 : _a.getFormattingComponent(objectName),
            italic: (_b = this.italic) === null || _b === void 0 ? void 0 : _b.getFormattingComponent(objectName),
            underline: (_c = this.underline) === null || _c === void 0 ? void 0 : _c.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.fontFamily.getRevertToDefaultDescriptor(objectName)
            .concat(this.fontSize.getRevertToDefaultDescriptor(objectName))
            .concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a, _b, _c;
        this.fontFamily.setPropertiesValues(dataViewObjects, objectName);
        this.fontSize.setPropertiesValues(dataViewObjects, objectName);
        (_a = this.bold) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, objectName);
        (_b = this.italic) === null || _b === void 0 ? void 0 : _b.setPropertiesValues(dataViewObjects, objectName);
        (_c = this.underline) === null || _c === void 0 ? void 0 : _c.setPropertiesValues(dataViewObjects, objectName);
    }
}
class MarginPadding extends (/* unused pure expression or super */ null && (CompositeSlice)) {
    constructor(object) {
        super(object);
        this.type = "MarginPadding" /* visuals.FormattingComponent.MarginPadding */;
    }
    getFormattingComponent(objectName) {
        return {
            left: this.left.getFormattingComponent(objectName),
            right: this.right.getFormattingComponent(objectName),
            top: this.top.getFormattingComponent(objectName),
            bottom: this.bottom.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.left.getRevertToDefaultDescriptor(objectName)
            .concat(this.right.getRevertToDefaultDescriptor(objectName))
            .concat(this.top.getRevertToDefaultDescriptor(objectName))
            .concat(this.bottom.getRevertToDefaultDescriptor(objectName));
    }
    setPropertiesValues(dataViewObjects, objectName) {
        this.left.setPropertiesValues(dataViewObjects, objectName);
        this.right.setPropertiesValues(dataViewObjects, objectName);
        this.top.setPropertiesValues(dataViewObjects, objectName);
        this.bottom.setPropertiesValues(dataViewObjects, objectName);
    }
}
class Container extends (/* unused pure expression or super */ null && (NamedEntity)) {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
class ContainerItem extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ 4261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormattingSettingsService */
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(706);

class FormattingSettingsService {
    constructor(localizationManager) {
        this.localizationManager = localizationManager;
    }
    /**
     * Build visual formatting settings model from metadata dataView
     *
     * @param dataViews metadata dataView object
     * @returns visual formatting settings model
     */
    populateFormattingSettingsModel(typeClass, dataView) {
        var _a, _b;
        let defaultSettings = new typeClass();
        let dataViewObjects = (_a = dataView === null || dataView === void 0 ? void 0 : dataView.metadata) === null || _a === void 0 ? void 0 : _a.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_b = defaultSettings.cards) === null || _b === void 0 ? void 0 : _b.forEach((card) => {
                var _a;
                if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .DP)
                    (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .sF ? [card] : card.groups);
                cardGroupInstances.forEach((cardGroupInstance) => {
                    var _a, _b, _c, _d;
                    // Set current top level toggle value
                    (_a = cardGroupInstance.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                    (_b = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.slices) === null || _b === void 0 ? void 0 : _b.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                    });
                    (_d = (_c = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.container) === null || _c === void 0 ? void 0 : _c.containerItems) === null || _d === void 0 ? void 0 : _d.forEach((containerItem) => {
                        var _a;
                        (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                            slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                        });
                    });
                });
            });
        }
        return defaultSettings;
    }
    /**
     * Build formatting model by parsing formatting settings model object
     *
     * @returns powerbi visual formatting model
     */
    buildFormattingModel(formattingSettingsModel) {
        let formattingModel = {
            cards: []
        };
        formattingSettingsModel.cards
            .filter(({ visible = true }) => visible)
            .forEach((card) => {
            var _a;
            let formattingCard = {
                displayName: (this.localizationManager && card.displayNameKey) ? this.localizationManager.getDisplayName(card.displayNameKey) : card.displayName,
                description: (this.localizationManager && card.descriptionKey) ? this.localizationManager.getDisplayName(card.descriptionKey) : card.description,
                groups: [],
                uid: card.name + "-card",
                analyticsPane: card.analyticsPane,
            };
            const objectName = card.name;
            if (card.topLevelSlice) {
                let topLevelToggleSlice = card.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                topLevelToggleSlice.suppressDisplayName = true;
                formattingCard.topLevelToggle = topLevelToggleSlice;
            }
            (_a = card.onPreProcess) === null || _a === void 0 ? void 0 : _a.call(card);
            const isSimpleCard = card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .sF;
            const cardGroupInstances = (isSimpleCard ?
                [card].filter(({ visible = true }) => visible) :
                card.groups.filter(({ visible = true }) => visible));
            cardGroupInstances
                .forEach((cardGroupInstance) => {
                const groupUid = cardGroupInstance.name + "-group";
                // Build formatting group for each group
                const formattingGroup = {
                    displayName: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.displayNameKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.displayNameKey) : cardGroupInstance.displayName,
                    description: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.descriptionKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.descriptionKey) : cardGroupInstance.description,
                    slices: [],
                    uid: groupUid,
                    collapsible: cardGroupInstance.collapsible,
                    delaySaveSlices: cardGroupInstance.delaySaveSlices,
                    disabled: cardGroupInstance.disabled,
                    disabledReason: cardGroupInstance.disabledReason,
                };
                formattingCard.groups.push(formattingGroup);
                // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
                // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
                // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
                const sliceNames = {};
                // Build formatting container slice for each property
                if (cardGroupInstance.container) {
                    const container = cardGroupInstance.container;
                    const containerUid = groupUid + "-container";
                    const formattingContainer = {
                        displayName: (this.localizationManager && container.displayNameKey)
                            ? this.localizationManager.getDisplayName(container.displayNameKey) : container.displayName,
                        description: (this.localizationManager && container.descriptionKey)
                            ? this.localizationManager.getDisplayName(container.descriptionKey) : container.description,
                        containerItems: [],
                        uid: containerUid
                    };
                    container.containerItems.forEach((containerItem) => {
                        // Build formatting container item object
                        const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
                        const containerItemUid = containerUid + containerIemName;
                        let formattingContainerItem = {
                            displayName: (this.localizationManager && containerItem.displayNameKey)
                                ? this.localizationManager.getDisplayName(containerItem.displayNameKey) : containerItem.displayName,
                            slices: [],
                            uid: containerItemUid
                        };
                        // Build formatting slices and add them to current formatting container item
                        this.buildFormattingSlices({ slices: containerItem.slices, objectName, sliceNames, formattingSlices: formattingContainerItem.slices });
                        formattingContainer.containerItems.push(formattingContainerItem);
                    });
                    formattingGroup.container = formattingContainer;
                }
                if (cardGroupInstance.slices) {
                    if (cardGroupInstance.topLevelSlice) {
                        let topLevelToggleSlice = cardGroupInstance.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                        topLevelToggleSlice.suppressDisplayName = true;
                        (formattingGroup.displayName == undefined ? formattingCard : formattingGroup).topLevelToggle = topLevelToggleSlice;
                    }
                    // Build formatting slice for each property
                    this.buildFormattingSlices({ slices: cardGroupInstance.slices, objectName, sliceNames, formattingSlices: formattingGroup.slices });
                }
            });
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
            formattingModel.cards.push(formattingCard);
        });
        return formattingModel;
    }
    buildFormattingSlices({ slices, objectName, sliceNames, formattingSlices }) {
        // Filter slices based on their visibility
        slices === null || slices === void 0 ? void 0 : slices.filter(({ visible = true }) => visible).forEach((slice) => {
            let formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
            if (formattingSlice) {
                // Modify formatting slice uid if needed
                if (sliceNames[slice.name] === undefined) {
                    sliceNames[slice.name] = 0;
                }
                else {
                    sliceNames[slice.name]++;
                    formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                }
                formattingSlices.push(formattingSlice);
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        let revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors;
        let cardContainerSlicesDefaultDescriptors = [];
        if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .DP && card.topLevelSlice)
            revertToDefaultDescriptors.push(...(_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.getRevertToDefaultDescriptor(card.name));
        const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .sF ?
            [card].filter(({ visible = true }) => visible) :
            card.groups.filter(({ visible = true }) => visible));
        cardGroupInstances.forEach((cardGroupInstance) => {
            var _a, _b;
            cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, cardGroupInstance.slices, sliceNames, cardGroupInstance.topLevelSlice);
            (_b = (_a = cardGroupInstance.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
                cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
            });
            revertToDefaultDescriptors.push(...cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors));
        });
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames, topLevelSlice) {
        let revertToDefaultDescriptors = [];
        if (topLevelSlice) {
            sliceNames[topLevelSlice.name] = true;
            revertToDefaultDescriptors = revertToDefaultDescriptors.concat(topLevelSlice.getRevertToDefaultDescriptor(cardName));
        }
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            if (slice && !sliceNames[slice.name]) {
                sliceNames[slice.name] = true;
                revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
            }
        });
        return revertToDefaultDescriptors;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
//# sourceMappingURL=FormattingSettingsService.js.map

/***/ }),

/***/ 3827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ getDescriptor),
/* harmony export */   S: () => (/* binding */ getPropertyValue)
/* harmony export */ });
/**
 * Build and return formatting descriptor for simple slice
 *
 * @param objectName Object name from capabilities
 * @param slice formatting simple slice
 * @returns simple slice formatting descriptor
 */
function getDescriptor(objectName, slice) {
    return {
        objectName: objectName,
        propertyName: slice.name,
        selector: slice.selector,
        altConstantValueSelector: slice.altConstantSelector,
        instanceKind: slice.instanceKind
    };
}
/**
 * Get property value from dataview objects if exists
 * Else return the default value from formatting settings object
 *
 * @param value dataview object value
 * @param defaultValue formatting settings default value
 * @returns formatting property value
 */
function getPropertyValue(slice, value, defaultValue) {
    if (value == null || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    if (value.solid) {
        return { value: value === null || value === void 0 ? void 0 : value.solid.color };
    }
    if (slice === null || slice === void 0 ? void 0 : slice.items) {
        let itemsArray = slice.items;
        return itemsArray.find(item => item.value == value);
    }
    return value;
}
//# sourceMappingURL=FormattingSettingsUtils.js.map

/***/ }),

/***/ 5666:
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable || iterable === "") {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    throw new TypeError(typeof iterable + " is not iterable");
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 7800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ SPCChart)
/* harmony export */ });
/* unused harmony export SPCChart */
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5036);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7808);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3838);
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(924);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5666);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4261);
/* harmony import */ var _barChartSettingsModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2446);
/* harmony import */ var _objectEnumerationUtility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6363);









//import logo_variation_nochange from "./../assets/Variation_noChange.png"
const variation_noChange = __webpack_require__(845);
const variation_ciHigh = __webpack_require__(3484);
const variation_ccHigh = __webpack_require__(4201);
const variation_ciLow = __webpack_require__(4837);
const variation_ccLow = __webpack_require__(1069);
function logoSelector(data) {
    //let dataPoints = data.datapoints
    if (data.direction > 0) {
        if (data.outlier == 1 || data.run == 1 || data.shift == 1 || data.twoInThree == 1) {
            return variation_ciHigh;
        }
        if (data.outlier == -1 || data.run == -1 || data.shift == -1 || data.twoInThree == -1) {
            return variation_ccLow;
        }
        else {
            return variation_noChange;
        }
    }
    if (data.direction < 0) {
        if (data.outlier == -1 || data.run == -1 || data.shift == -1 || data.twoInThree == -1) {
            return variation_ciLow;
        }
        if (data.outlier == 1 || data.run == 1 || data.shift == 1 || data.twoInThree == 1) {
            return variation_ccHigh;
        }
        else {
            return variation_noChange;
        }
    }
    if (data.direction = 0) {
        console.log("no direction");
    }
}
function twoInThreeRule(value, Upper_Zone_A, Lower_Zone_A, Direction) {
    if (Direction = 1) {
        if (value > Upper_Zone_A) {
            return 1;
        }
        else {
            return 0;
        }
    }
    else {
        if (value < Lower_Zone_A) {
            return 1;
        }
        else {
            0;
        }
    }
}
function createSelectorData(options, host, formatSettings) {
    let SPCChartDataPoints = createSelectorDataPoints(options, host);
    let direction = formatSettings.SPCSettings.spcSetUp.direction.value.value;
    let metadata = options.dataViews[0].metadata.columns;
    let measureFormat = '';
    for (let i = 0, len = metadata.length; i < len; i++) {
        let meta = metadata[i];
        if (meta.isMeasure) {
            if (meta.format.includes('%')) {
                measureFormat = '%';
            }
            else {
                measureFormat = 's';
            }
        }
    }
    let nPoints = SPCChartDataPoints.length;
    let meanValue = SPCChartDataPoints
        .map((d) => d.value)
        .reduce((a, b) => a + b, 0) / nPoints;
    let avgDiff = SPCChartDataPoints
        .map((d) => Math.abs(d.difference))
        .reduce((a, b) => a + b, 0) / (nPoints - 1);
    let UCLValue = meanValue + 2.66 * avgDiff;
    let LCLValue = meanValue - 2.66 * avgDiff;
    let Upper_Zone_A = meanValue + 2.66 * avgDiff * 2 / 3;
    let Lower_Zone_A = meanValue - 2.66 * avgDiff * 2 / 3;
    let Upper_Zone_B = meanValue + 2.66 * avgDiff * 1 / 3;
    let Lower_Zone_B = meanValue - 2.66 * avgDiff * 1 / 3;
    let outlier = 0;
    let run = 0;
    let shift = 0;
    let twoInThree = 0;
    //SPC Marker Colors Rules        
    //find group of 7
    for (let i = 0; i < nPoints; i++) {
        if (i > 3) { //two in three rules 
            let latest3 = SPCChartDataPoints.slice(i - 3 + 1, i + 1);
            let twoInThreeCheck = latest3
                .map((d) => twoInThreeRule(d.value, Upper_Zone_A, Lower_Zone_A, direction))
                .reduce((a, b) => a + b, 0);
            if (Math.abs(twoInThreeCheck) >= 2) {
                latest3.forEach(d => d.color = formatSettings.SPCSettings.markerOptions.twoInThree.value.value);
                latest3.forEach(d => d.markerSize = 3);
                latest3.forEach(d => d.twoInThree = 1);
            }
        }
        let p = 7;
        if (i > p) {
            let latest7 = SPCChartDataPoints.slice(i - p + 1, i + 1);
            //run of 7
            let runOfNumbers = latest7
                .map((d) => Math.sign(d.difference))
                .reduce((a, b) => a + b, 0);
            if (runOfNumbers == p) {
                latest7.forEach(d => d.color = formatSettings.SPCSettings.markerOptions.run.value.value);
                latest7.forEach(d => d.markerSize = 3);
                latest7.forEach(d => d.run = 1);
            }
            if (runOfNumbers == -1 * p) {
                latest7.forEach(d => d.color = formatSettings.SPCSettings.markerOptions.run.value.value);
                latest7.forEach(d => d.markerSize = 3);
                latest7.forEach(d => d.run = -1);
            }
            //oneside of mean 
            let shift7 = latest7
                .map((d) => Math.sign(d.value - meanValue))
                .reduce((a, b) => a + b, 0);
            if (shift7 == p) {
                latest7.forEach(d => d.color = formatSettings.SPCSettings.markerOptions.oneside.value.value);
                latest7.forEach(d => d.markerSize = 3);
                latest7.forEach(d => d.shift = 1);
            }
            if (shift7 == -1 * p) {
                latest7.forEach(d => d.color = formatSettings.SPCSettings.markerOptions.oneside.value.value);
                latest7.forEach(d => d.markerSize = 3);
                latest7.forEach(d => d.shift = -1);
            }
        }
        if (i > 15) {
            let latest15 = SPCChartDataPoints.slice(i - 15 + 1, i + 1);
        }
    }
    //SPC Marker Colors Rules 
    //find outliers
    for (let i = 0, len = nPoints; i < len; i++) {
        if (SPCChartDataPoints[i].value > UCLValue) {
            SPCChartDataPoints[i].color = formatSettings.SPCSettings.markerOptions.outlier.value.value;
            SPCChartDataPoints[i].markerSize = 3;
            SPCChartDataPoints[i].outlier = 1;
        }
        if (SPCChartDataPoints[i].value < LCLValue) {
            SPCChartDataPoints[i].color = formatSettings.SPCSettings.markerOptions.outlier.value.value;
            SPCChartDataPoints[i].markerSize = 3;
            SPCChartDataPoints[i].outlier = -1;
        }
    }
    outlier = SPCChartDataPoints[nPoints - 1].outlier;
    run = SPCChartDataPoints[nPoints - 1].run;
    shift = SPCChartDataPoints[nPoints - 1].shift;
    twoInThree = SPCChartDataPoints[nPoints - 1].twoInThree;
    return {
        datapoints: SPCChartDataPoints,
        n: SPCChartDataPoints.length,
        direction,
        target: null,
        meanValue,
        UCLValue,
        LCLValue,
        Upper_Zone_A,
        Upper_Zone_B,
        Lower_Zone_A,
        Lower_Zone_B,
        strokeWidth: 2,
        strokeColor: 'steelblue',
        measureFormat,
        outlier,
        run,
        shift,
        twoInThree
    };
}
function createSelectorDataPoints(options, host) {
    let SPCChartDataPoints = [];
    let dataViews = options.dataViews;
    if (!dataViews //checks data exists
        || !dataViews[0]
        || !dataViews[0].categorical
        || !dataViews[0].categorical.categories
        || !dataViews[0].categorical.categories[0].source
        || !dataViews[0].categorical.values) {
        return SPCChartDataPoints;
    }
    let categorical = dataViews[0].categorical;
    let category = categorical.categories[0];
    let dataValue = categorical.values[0];
    let colorPalette = host.colorPalette;
    for (let i = 0, len = Math.max(category.values.length, dataValue.values.length); i < len; i++) {
        const selectionId = host.createSelectionIdBuilder()
            .withCategory(category, i)
            .createSelectionId();
        let diff = 0;
        if (i > 0) {
            diff = dataValue.values[i] - dataValue.values[i - 1];
        }
        SPCChartDataPoints.push({
            color: 'steelblue',
            markerSize: 0,
            selectionId,
            value: dataValue.values[i],
            difference: diff,
            category: category.values[i],
            outlier: 0,
            run: 0,
            shift: 0,
            twoInThree: 0
        });
    }
    return SPCChartDataPoints;
}
function getFillColor(objects, objectString, propString, colorPalette, defaultColor) {
    if (colorPalette.isHighContrast) {
        return colorPalette.foreground.value;
    }
    return (0,_objectEnumerationUtility__WEBPACK_IMPORTED_MODULE_3__/* .getValue */ .N)(objects, objectString, propString, {
        solid: {
            color: defaultColor,
        }
    }).solid.color;
}
function getYAxisTextFillColor(objects, colorPalette, defaultColor) {
    if (colorPalette.isHighContrast) {
        return colorPalette.foreground.value;
    }
    return (0,_objectEnumerationUtility__WEBPACK_IMPORTED_MODULE_3__/* .getValue */ .N)(objects, "enableYAxis", "fill", {
        solid: {
            color: defaultColor,
        }
    }).solid.color;
}
class SPCChart {
    svg;
    tooltip;
    logo;
    host;
    //private barContainer: Selection<SVGElement>;
    xAxis;
    yAxis;
    lineData;
    lineData_Diff;
    lineMean;
    lineUCL;
    lineLCL;
    lineUpperZoneA;
    lineUpperZoneB;
    lineLowerZoneA;
    lineLowerZoneB;
    dataMarkers;
    dataPoints;
    formattingSettings;
    formattingSettingsService;
    chartSelection;
    static Config = {
        xScalePadding: 0.1,
        solidOpacity: 1,
        transparentOpacity: 1,
        margins: {
            top: 0,
            right: 30,
            bottom: 25,
            left: 30,
        },
    };
    /**
     * Creates instance of SPCChart. This method is only called once.
     *
     * @constructor
     * @param {VisualConstructorOptions} options - Contains references to the element that will
     *                                             contain the visual and a reference to the host
     *                                             which contains services.
     */
    constructor(options) {
        this.host = options.host;
        const localizationManager = this.host.createLocalizationManager();
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(localizationManager);
        this.svg = (0,d3_selection__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(options.element)
            .append('svg')
            .classed('SPCChart', true);
        this.xAxis = this.svg
            .append('g')
            .classed('xAxis', true);
        this.yAxis = this.svg
            .append('g')
            .classed('yAxis', true);
        this.logo = this.svg
            .append('image');
        this.lineData = this.svg
            .append('path')
            .classed('line', true);
        this.lineData_Diff = this.svg
            .append('path')
            .classed('line', true);
        this.dataMarkers = this.svg
            .selectAll('dot.Markers');
        this.lineMean = this.svg
            .append('line')
            .classed('line', true);
        this.lineUCL = this.svg
            .append('line')
            .classed('line', true);
        this.lineLCL = this.svg
            .append('line')
            .classed('line', true);
        this.lineUpperZoneA = this.svg
            .append('line')
            .classed('line', true);
        this.lineUpperZoneB = this.svg
            .append('line')
            .classed('line', true);
        this.lineLowerZoneA = this.svg
            .append('line')
            .classed('line', true);
        this.lineLowerZoneB = this.svg
            .append('line')
            .classed('line', true);
    }
    parseDateLabel(label, index) {
        let formatter = d3__WEBPACK_IMPORTED_MODULE_0__/* .timeParse */ .Z1g('%Y');
        let parsed = formatter(label);
        if (parsed) {
            return parsed.getFullYear().toString();
        }
        formatter = d3__WEBPACK_IMPORTED_MODULE_0__/* .timeParse */ .Z1g('%Y Qtr %q');
        parsed = formatter(label);
        if (parsed) {
            if (parsed.getMonth() == 0) {
                return parsed.getFullYear().toString();
            }
            else {
                return '';
            }
        }
        formatter = d3__WEBPACK_IMPORTED_MODULE_0__/* .timeParse */ .Z1g('%Y Qtr %q %B');
        parsed = formatter(label);
        if (parsed) {
            if (parsed.getMonth() == 0) {
                return parsed.getFullYear().toString();
            }
            else {
                return '';
            }
        }
        formatter = d3__WEBPACK_IMPORTED_MODULE_0__/* .timeParse */ .Z1g('%Y Qtr %q %B %-d');
        parsed = formatter(label);
        if (parsed) {
            if (parsed.getMonth() == 0 && parsed.getDate() == 1) {
                return parsed.getFullYear().toString();
            }
            else {
                return '';
            }
        }
        formatter = d3__WEBPACK_IMPORTED_MODULE_0__/* .timeParse */ .Z1g('%B');
        parsed = formatter(label);
        if (parsed) {
            return label.slice(0, 3);
        }
        return label;
    }
    parseYLabel(label) {
        //let formatter = d3.timeParse('%Y');
        //let parsed = formatter(label);
        //if( this.formattingSettings.enableYAxis.time.value ){
        //   return 'test'
        // }
        return 'ff';
    }
    /**
     * Updates the state of the visual. Every sequential databinding and resize will call update.
     *
     * @function
     * @param {VisualUpdateOptions} options - Contains references to the size of the container
     *                                        and the dataView which contains all the data
     *                                        the visual had queried.
     */
    update(options) {
        //Set up the charting object 
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(_barChartSettingsModel__WEBPACK_IMPORTED_MODULE_2__/* .BarChartSettingsModel */ .f, options.dataViews[0]);
        let data = createSelectorData(options, this.host, this.formattingSettings);
        this.dataPoints = data.datapoints;
        // this.formattingSettings.populateColorSelector(this.dataPoints);
        let width = options.viewport.width;
        let height = options.viewport.height;
        let margins = SPCChart.Config.margins;
        let widthChartStart = 0;
        let widthChartEnd = 0.99 * width;
        this.svg
            .attr("width", width)
            .attr("height", height);
        if (this.formattingSettings.enableAxis.show.value) {
            height -= margins.bottom;
        }
        const colorObjects = options.dataViews[0] ? options.dataViews[0].metadata.objects : null;
        //Set up the Y Axis
        let yScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)()
            .domain([Math.min(options.dataViews[0].categorical.values[0].minLocal) * 0.9,
            Math.max(options.dataViews[0].categorical.values[0].maxLocal) * 1.1])
            .range([height, 5]);
        let yTicks = 5;
        let yAxis = (0,d3_axis__WEBPACK_IMPORTED_MODULE_7__/* .axisLeft */ .y4)(yScale)
            .tickSizeInner(-widthChartEnd);
        if (this.formattingSettings.enableYAxis.formatter.time.value) {
            yAxis = yAxis
                .ticks(yTicks)
                .tickFormat(function (d) {
                let sign = '';
                if (d < 0) {
                    sign = '-', d = Math.abs(d);
                }
                let minutes = Math.floor(d / 60);
                let hours = Math.floor(minutes / 60);
                if (hours > 0) {
                    minutes = minutes % 60;
                }
                let seconds = d % 60;
                return sign + String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
            });
        }
        else {
            yAxis = yAxis
                .ticks(yTicks, data.measureFormat); //format n=yTicks ticks into SI units
            ;
        }
        ;
        let yAxisObject = this.yAxis
            .call(yAxis)
            .transition().duration(500)
            .attr("color", getYAxisTextFillColor(colorObjects, this.host.colorPalette, this.formattingSettings.enableYAxis.formatter.fill.value.value));
        yAxisObject.selectAll('.yAxis line')
            .attr('stroke', this.formattingSettings.enableYAxis.formatter.fill.value.value)
            .attr('opacity', 0.2);
        yAxisObject.selectAll('.yAxis path')
            .attr('opacity', 0);
        let yShift = 0;
        let maxW = 0;
        this.yAxis
            .selectAll("text")
            .each(function () {
            if (this.getBBox().width > maxW)
                maxW = this.getBBox().width;
        });
        if (this.formattingSettings.enableYAxis.show.value) {
            yShift = maxW + 10; //longest "word" plus 10 pixels
        }
        if (this.formattingSettings.enableYAxis.formatter.time.value) {
            yShift = maxW + 10; //longest "word" plus 10 pixels
        }
        widthChartStart = yShift + (width - widthChartEnd);
        this.yAxis
            .style('font-family', 'inherit')
            .style('font-size', 11) //TODO make this a drop down
            .attr('transform', 'translate(' + (yShift) + ',0)');
        // Move logo 
        let logo = logoSelector(data);
        this.logo
            .attr('href', logo)
            .attr('width', 50)
            .attr('height', 50)
            .attr('x', widthChartStart)
            .attr('y', 0);
        //Set up the X Axis
        this.xAxis
            .style("font-size", 11);
        let xScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_8__/* .point */ .x)()
            .domain(this.dataPoints.map(d => d.category))
            .range([widthChartStart, widthChartEnd]);
        let xAxis = (0,d3_axis__WEBPACK_IMPORTED_MODULE_7__/* .axisBottom */ .LL)(xScale)
            .tickFormat(this.parseDateLabel);
        let xAxisObject = this.xAxis
            .attr('transform', 'translate(0, ' + (height + 2) + ')')
            .call(xAxis)
            .transition().duration(500)
            .attr("color", getFillColor(colorObjects, 'enableAxis', 'fill', this.host.colorPalette, this.formattingSettings.enableAxis.fill.value.value));
        xAxisObject.selectAll('.xAxis path, line')
            .attr('opacity', 0);
        //Create data line
        this.lineData
            .datum(this.dataPoints)
            .style("stroke-linecap", "round")
            .attr("fill", "none")
            .attr("stroke", function (d) { return data.strokeColor; })
            .attr("stroke-width", function (d) { return data.strokeWidth; })
            .attr("stroke-linejoin", "round")
            .attr("d", d3__WEBPACK_IMPORTED_MODULE_0__/* .line */ .jvg()
            .x(function (d) { return xScale(d.category); })
            .y(function (d) { return yScale(d.value); }));
        this.svg.selectAll('.markers').remove();
        this.dataMarkers
            .data(this.dataPoints)
            .enter()
            .append("circle")
            .attr("class", "markers")
            .attr("cx", function (d) { return xScale(d.category); })
            .attr("cy", function (d) { return yScale(d.value); })
            .attr("r", function (d) { return d.markerSize; })
            .attr("fill", function (d) { return d.color; });
        /*
    this.lineData_Diff
        .datum(this.dataPoints)
        .style("stroke-linecap", "round")
        .attr("fill", "none")
        .attr("stroke", "purple")
        .attr("stroke-width", 2)
        .attr("stroke-linejoin", "round")
        .attr("d", d3.line<SPCChartDataPoint>()
            .x(function (d) { return xScale(d.category) })
            .y(function (d) { return yScale(<number>d.difference) })
        )*/
        //Create mean line
        if (this.formattingSettings.SPCSettings.lineOptions.showMean.value) {
            this.lineMean
                .style("stroke-linecap", "round")
                .attr("class", "mean")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.meanValue); })
                .attr("y2", function (d) { return yScale(data.meanValue); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1.5);
        }
        else {
            this.lineMean
                .attr("stroke-width", 0);
        }
        //Create limit lines   
        if (this.formattingSettings.SPCSettings.lineOptions.showControl.value) {
            this.lineUCL
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "ControlLimit")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.UCLValue); })
                .attr("y2", function (d) { return yScale(data.UCLValue); })
                .attr("fill", "none")
                .attr("stroke", this.formattingSettings.SPCSettings.lineOptions.upperCL.value.value)
                .attr("stroke-width", 2);
            this.lineLCL
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "ControlLimit")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.LCLValue); })
                .attr("y2", function (d) { return yScale(data.LCLValue); })
                .attr("fill", "none")
                .attr("stroke", this.formattingSettings.SPCSettings.lineOptions.upperCL.value.value)
                .attr("stroke-width", 2);
        }
        else {
            this.lineUCL
                .attr("stroke-width", 0);
            this.lineLCL
                .attr("stroke-width", 0);
        }
        //Create Zone lines 
        if (this.formattingSettings.SPCSettings.lineOptions.showSubControl.value) {
            this.lineUpperZoneA
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "subControl")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.Upper_Zone_A); })
                .attr("y2", function (d) { return yScale(data.Upper_Zone_A); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1);
            this.lineUpperZoneB
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "subControl")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.Upper_Zone_B); })
                .attr("y2", function (d) { return yScale(data.Upper_Zone_B); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1);
            this.lineLowerZoneA
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "subControl")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.Lower_Zone_A); })
                .attr("y2", function (d) { return yScale(data.Lower_Zone_A); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1);
            this.lineLowerZoneB
                .style("stroke-dasharray", ("5,5"))
                .style("stroke-linecap", "round")
                .attr("class", "subControl")
                .attr("x1", widthChartStart)
                .attr("x2", widthChartEnd)
                .attr("y1", function (d) { return yScale(data.Lower_Zone_B); })
                .attr("y2", function (d) { return yScale(data.Lower_Zone_B); })
                .attr("fill", "none")
                .attr("stroke", "black")
                .attr("stroke-width", 1);
        }
        else {
            this.lineUpperZoneA
                .attr("stroke-width", 0);
            this.lineUpperZoneB
                .attr("stroke-width", 0);
            this.lineLowerZoneA
                .attr("stroke-width", 0);
            this.lineLowerZoneB
                .attr("stroke-width", 0);
        }
    }
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
}



/***/ }),

/***/ 2446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ BarChartSettingsModel)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(706);

var SimpleCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .sF;
var CompCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .DP;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .Model */ .Hn;
class SPCSetUp extends SimpleCard {
    direction = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ItemDropdown */ .zt({
        items: [{ value: 1, displayName: "Up" }, { value: 0, displayName: "No Direction" }, { value: -1, displayName: "Down" }],
        name: "direction",
        displayName: "Direction of improvement",
        value: { value: 0, displayName: "No Direction" }
    });
    name = "SPCSetUp";
    displayName = "SPC Set Up";
    slices = [this.direction];
}
class LogoOptions extends SimpleCard {
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "show",
        displayName: undefined,
        value: false
    });
    name = "logoOptions";
    displayName = "Logo Options";
    slices = [this.show];
}
class LineOptions extends SimpleCard {
    showControl = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "showControl",
        displayName: "Show Control Limits",
        value: true
    });
    upperCL = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "upperCL",
        displayName: "Upper Control Limit Color",
        value: { value: "#777777" }
    });
    lowerCL = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "lowerCL",
        displayName: "Lower Control Limit Color",
        value: { value: "#777777" }
    });
    showSubControl = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "showSubControl",
        displayName: "Show Sub-Control Limits",
        value: true
    });
    showMean = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "showMean",
        displayName: "Show Average",
        value: true
    });
    name = "lineOptions";
    displayName = "Line Options";
    slices = [this.showControl, this.upperCL, this.lowerCL, this.showSubControl, this.showMean];
}
class MarkerOptions extends SimpleCard {
    showMarker = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "showMarker",
        displayName: undefined,
        value: true
    });
    topLevelSlice = this.showMarker;
    outlier = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "outlier",
        displayName: "Outlier Color",
        value: { value: "#777777" }
    });
    run = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "run",
        displayName: "Run Color",
        value: { value: "purple" }
    });
    oneside = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "oneside",
        displayName: "Oneside of Mean Color",
        value: { value: "orange" }
    });
    twoInThree = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "twoInThree",
        displayName: "Two In three",
        value: { value: "pink" }
    });
    name = "markerOptions";
    displayName = "Marker Options";
    slices = [this.outlier, this.run, this.oneside, this.twoInThree];
}
class SPC extends CompCard {
    spcSetUp = new SPCSetUp();
    logoOptions = new LogoOptions();
    lineOptions = new LineOptions();
    markerOptions = new MarkerOptions();
    name = "SPCSettings";
    displayName = 'SPC Settings';
    groups = [this.spcSetUp, this.logoOptions, this.lineOptions, this.markerOptions];
}
/**
 * Enable x-Axis Formatting Card
 */
class EnableAxisCardSettings extends SimpleCard {
    // Formatting property `show` toggle switch (formatting simple slice)
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "show",
        displayName: undefined,
        value: false,
        //topLevelSlice: true
    });
    // Formatting property `fill` color picker (formatting simple slice)
    fill = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "fill",
        displayName: "Color",
        value: { value: "#777777" }
    });
    name = "enableAxis";
    displayName = "X-axis";
    slices = [this.show, this.fill];
}
/**
 * Enable y-Axis Formatting Card
 */
class YAxisFormatter extends SimpleCard {
    // Formatting property `fill` color picker (formatting simple slice)
    fill = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "fill",
        displayName: "Axis Font Color",
        value: { value: "#777777" }
    });
    // Option for formatting y axis as time
    time = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "time",
        displayName: "Format as HH:mm:ss",
        value: false
    });
    name = "YAxisFormatter";
    displayName = "Y-Axis Formatter";
    slices = [this.fill, this.time];
}
class EnableYAxisCardSettings extends CompCard {
    // Formatting property `show` toggle switch (formatting simple slice)
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "show",
        displayName: undefined,
        value: false,
        //topLevelToggle: true
    });
    topLevelSlice = this.show;
    formatter = new YAxisFormatter();
    name = "enableYAxis";
    displayName = "Y-axis";
    groups = [this.formatter];
}
/**
* BarChart settings model class
*
*/
class BarChartSettingsModel extends FormattingSettingsModel {
    // Create formatting settings model formatting cards
    SPCSettings = new SPC();
    enableAxis = new EnableAxisCardSettings();
    enableYAxis = new EnableYAxisCardSettings();
    //colorSelector = new ColorSelectorCardSettings();
    cards = [this.SPCSettings, this.enableAxis, this.enableYAxis];
}


/***/ }),

/***/ 6363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ getValue)
/* harmony export */ });
/* unused harmony export getCategoricalObjectValue */
/**
 * Gets property value for a particular object.
 *
 * @function
 * @param {DataViewObjects} objects - Map of defined objects.
 * @param {string} objectName       - Name of desired object.
 * @param {string} propertyName     - Name of desired property.
 * @param {T} defaultValue          - Default value of desired property.
 */
function getValue(objects, objectName, propertyName, defaultValue) {
    if (objects) {
        const object = objects[objectName];
        if (object) {
            const property = object[propertyName];
            if (property !== undefined) {
                return property;
            }
        }
    }
    return defaultValue;
}
/**
 * Gets property value for a particular object in a category.
 *
 * @function
 * @param {DataViewCategoryColumn} category - List of category objects.
 * @param {number} index                    - Index of category object.
 * @param {string} objectName               - Name of desired object.
 * @param {string} propertyName             - Name of desired property.
 * @param {T} defaultValue                  - Default value of desired property.
 */
function getCategoricalObjectValue(category, index, objectName, propertyName, defaultValue) {
    const categoryObjects = category.objects;
    if (categoryObjects) {
        const categoryObject = categoryObjects[index];
        if (categoryObject) {
            const object = categoryObject[objectName];
            if (object) {
                const property = object[propertyName];
                if (property !== undefined) {
                    return property;
                }
            }
        }
    }
    return defaultValue;
}


/***/ }),

/***/ 845:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 4201:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 1069:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 3484:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 4837:
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ 9757:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ascending)
/* harmony export */ });
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ 2461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports bisectRight, bisectLeft, bisectCenter */
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9757);
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(477);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9215);




const ascendingBisect = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(_ascending_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = (0,_bisector_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(_number_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z).center;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bisectRight);


/***/ }),

/***/ 477:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ bisector)
/* harmony export */ });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9757);
/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8837);



function bisector(f) {
  let compare1, compare2, delta;

  // If an accessor is specified, promote it to a comparator. In this case we
  // can test whether the search value is (self-) comparable. We can’t do this
  // for a comparator (except for specific, known comparators) because we can’t
  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
  // used to test whether a single value is comparable.
  if (f.length !== 2) {
    compare1 = _ascending_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    compare2 = (d, x) => (0,_ascending_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === _ascending_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z || f === _descending_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z ? f : zero;
    compare2 = f;
    delta = f;
  }

  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function zero() {
  return 0;
}


/***/ }),

/***/ 8837:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ descending)
/* harmony export */ });
function descending(a, b) {
  return a == null || b == null ? NaN
    : b < a ? -1
    : b > a ? 1
    : b >= a ? 0
    : NaN;
}


/***/ }),

/***/ 9215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ number)
/* harmony export */ });
/* unused harmony export numbers */
function number(x) {
  return x === null ? NaN : +x;
}

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}


/***/ }),

/***/ 5162:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ range)
/* harmony export */ });
function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}


/***/ }),

/***/ 3896:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G9: () => (/* binding */ tickIncrement),
/* harmony export */   ZP: () => (/* binding */ ticks),
/* harmony export */   ly: () => (/* binding */ tickStep)
/* harmony export */ });
const e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log10(step)),
      error = step / Math.pow(10, power),
      factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}

function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
  }
  return ticks;
}

function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}

function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}


/***/ }),

/***/ 924:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LL: () => (/* binding */ axisBottom),
/* harmony export */   y4: () => (/* binding */ axisLeft)
/* harmony export */ });
/* unused harmony exports axisTop, axisRight */
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2705);


var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number(scale) {
  return d => +scale(d);
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => +scale(d) + offset;
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient === right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d) + offset); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = Array.from(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function(_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),

/***/ 2705:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x;
}


/***/ }),

/***/ 3137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports brushSelection, brushX, brushY */
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3399);









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

const {abs, max, min} = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) { return xy == null ? null : number2(xy); },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush(X);
}

function brushY() {
  return brush(Y);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return brush(XY);
}

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = dispatch("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection, event) {
    if (group.tween) {
      group
          .on("start.brush", function(event) { emitter(this, arguments).beforestart().start(event); })
          .on("interrupt.brush end.brush", function(event) { emitter(this, arguments).end(event); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = interpolate(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
          });
    }
  };

  brush.clear = function(group, event) {
    brush.move(group, null, event);
  };

  function redraw() {
    var group = select(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type, event, mode) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new BrushEvent(type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
          const i = t.identifier;
          t = pointer(t, that);
          t.point0 = t.slice();
          t.identifier = i;
          return t;
        });

    interrupt(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[
          w0 = dim === Y ? W : min(pts[0][0], pts[1][0]),
          n0 = dim === X ? N : min(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y ? E : max(pts[0][0], pts[1][0]),
          s0 = dim === X ? S : max(pts[0][1], pts[1][1])
        ]];
      if (points.length > 1) move(event);
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select(event.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)

      dragDisable(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = pointer(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point of points)
        if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      noevent(event);
      move(event);
    }

    function move(event) {
      const point = points[0], point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
            if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
          if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      nopropagation(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        dragEnable(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move(event);
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move(event);
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move(event);
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}


/***/ }),

/***/ 9961:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _brush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3137);



/***/ }),

/***/ 4447:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B8: () => (/* binding */ rgb),
/* harmony export */   ZP: () => (/* binding */ color)
/* harmony export */ });
/* unused harmony exports Color, darker, brighter, rgbConvert, Rgb, hslConvert, hsl */
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9531);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ 9531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   l: () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ 6057:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ 2067:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tw: () => (/* binding */ cubicInOut)
/* harmony export */ });
/* unused harmony exports cubicIn, cubicOut */
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ 5386:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WU: () => (/* binding */ format),
/* harmony export */   jH: () => (/* binding */ formatPrefix)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2150);


var locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ 5368:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8613);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__/* .formatDecimalParts */ .V)(Math.abs(x)), x ? x[1] : NaN;
}


/***/ }),

/***/ 8613:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ formatDecimalParts),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}


/***/ }),

/***/ 5831:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}


/***/ }),

/***/ 3148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}


/***/ }),

/***/ 1281:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   y: () => (/* binding */ prefixExponent)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8613);


var prefixExponent;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, p) {
  var d = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__/* .formatDecimalParts */ .V)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__/* .formatDecimalParts */ .V)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}


/***/ }),

/***/ 6006:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8613);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, p) {
  var d = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__/* .formatDecimalParts */ .V)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}


/***/ }),

/***/ 2035:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ formatSpecifier)
/* harmony export */ });
/* unused harmony export FormatSpecifier */
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ 2403:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}


/***/ }),

/***/ 3495:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8613);
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1281);
/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6006);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => (0,_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(x * 100, p),
  "r": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  "s": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
});


/***/ }),

/***/ 5225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x;
}


/***/ }),

/***/ 2150:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5368);
/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5831);
/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3148);
/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2035);
/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2403);
/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3495);
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1281);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5225);









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z : (0,_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z : (0,_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = (0,_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = (0,_formatTrim_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__/* .prefixExponent */ .y / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = (0,_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor((0,_exponent_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}


/***/ }),

/***/ 3987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5368);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(step) {
  return Math.max(0, -(0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Math.abs(step)));
}


/***/ }),

/***/ 7017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5368);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) / 3))) * 3 - (0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Math.abs(step)));
}


/***/ }),

/***/ 3482:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5368);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, (0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(max) - (0,_exponent_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(step)) + 1;
}


/***/ }),

/***/ 1606:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ genericArray)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5326);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = (0,_value_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ 7265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t: () => (/* binding */ basis)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ 6068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7265);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__/* .basis */ .t)((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ 8280:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ nogamma),
/* harmony export */   yi: () => (/* binding */ gamma)
/* harmony export */ });
/* unused harmony export hue */
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2954);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(isNaN(a) ? b : a);
}


/***/ }),

/***/ 2954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ 6246:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}


/***/ }),

/***/ 8063:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}


/***/ }),

/***/ 5401:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   v: () => (/* binding */ isNumberArray)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ 8296:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5326);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = (0,_value_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}


/***/ }),

/***/ 6354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports rgbBasis, rgbBasisClosed */
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4447);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7265);
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6068);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8280);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__/* .gamma */ .yi)(y);

  function rgb(start, end) {
    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .B8)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .B8)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .B8)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);


/***/ }),

/***/ 4635:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}


/***/ }),

/***/ 6773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8063);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}


/***/ }),

/***/ 8569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   y: () => (/* binding */ identity)
/* harmony export */ });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}


/***/ }),

/***/ 3465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ interpolateTransformCss),
/* harmony export */   w: () => (/* binding */ interpolateTransformSvg)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8063);
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5821);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__/* .parseCss */ .z, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__/* .parseSvg */ .X, ", ", ")", ")");


/***/ }),

/***/ 5821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ parseSvg),
/* harmony export */   z: () => (/* binding */ parseCss)
/* harmony export */ });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8569);


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y : (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y;
  value = value.matrix;
  return (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ 5326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4447);
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6354);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1606);
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6246);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8063);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8296);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6773);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2954);
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5401);










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
      : t === "string" ? ((c = (0,d3_color__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP) : _string_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP ? _rgb_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
      : (0,_numberArray_js__WEBPACK_IMPORTED_MODULE_6__/* .isNumberArray */ .v)(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_7__/* .genericArray */ .M
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
      : _number_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(a, b);
}


/***/ }),

/***/ 9906:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y$: () => (/* binding */ Path)
/* harmony export */ });
/* unused harmony exports path, pathRound */
const pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}

function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}

class Path {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x, y) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x, y) {
    this._append`L${this._x1 = +x},${this._y1 = +y}`;
  }
  quadraticCurveTo(x1, y1, x, y) {
    this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);

    let x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    }

    // Otherwise, draw an arc!
    else {
      let x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }

      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);

    let dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w, h) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
}

function path() {
  return new Path;
}

// Allow instanceof d3.path
path.prototype = Path.prototype;

function pathRound(digits = 3) {
  return new Path(+digits);
}


/***/ }),

/***/ 7808:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ point)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5162);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4182);
/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8973);




function band() {
  var scale = (0,_ordinal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = (0,d3_array__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__/* .initRange */ .o.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}


/***/ }),

/***/ 8698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ constants)
/* harmony export */ });
function constants(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ 421:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JG: () => (/* binding */ copy),
/* harmony export */   ZP: () => (/* binding */ continuous)
/* harmony export */ });
/* unused harmony exports identity, transformer */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2461);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5326);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8063);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4635);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8698);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6938);





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = (0,d3_array__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}


/***/ }),

/***/ 4182:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ initRange)
/* harmony export */ });
/* unused harmony export initInterpolator */
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}


/***/ }),

/***/ 5036:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ linear)
/* harmony export */ });
/* unused harmony export linearish */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3896);
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(421);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4182);
/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9879);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return (0,d3_array__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return (0,_tickFormat_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__/* .tickIncrement */ .G9)(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = (0,_continuous_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)();

  scale.copy = function() {
    return (0,_continuous_js__WEBPACK_IMPORTED_MODULE_2__/* .copy */ .JG)(scale, linear());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_3__/* .initRange */ .o.apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ 6938:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ number)
/* harmony export */ });
function number(x) {
  return +x;
}


/***/ }),

/***/ 8973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ordinal)
/* harmony export */ });
/* unused harmony export implicit */
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(909);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4182);



const implicit = Symbol("implicit");

function ordinal() {
  var index = new d3_array__WEBPACK_IMPORTED_MODULE_0__/* .InternMap */ .L(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    let i = index.get(d);
    if (i === undefined) {
      if (unknown !== implicit) return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range[i % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new d3_array__WEBPACK_IMPORTED_MODULE_0__/* .InternMap */ .L();
    for (const value of _) {
      if (index.has(value)) continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  _init_js__WEBPACK_IMPORTED_MODULE_1__/* .initRange */ .o.apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ 9879:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ tickFormat)
/* harmony export */ });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3896);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2035);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7017);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5386);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3482);
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3987);



function tickFormat(start, stop, count, specifier) {
  var step = (0,d3_array__WEBPACK_IMPORTED_MODULE_0__/* .tickStep */ .ly)(start, stop, count),
      precision;
  specifier = (0,d3_format__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = (0,d3_format__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(step, value))) specifier.precision = precision;
      return (0,d3_format__WEBPACK_IMPORTED_MODULE_3__/* .formatPrefix */ .jH)(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = (0,d3_format__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = (0,d3_format__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return (0,d3_format__WEBPACK_IMPORTED_MODULE_3__/* .format */ .WU)(specifier);
}


/***/ }),

/***/ 9898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ array)
/* harmony export */ });
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


/***/ }),

/***/ 364:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ 4708:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1663);
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1226);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* .xhtml */ .P && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* .xhtml */ .P
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}


/***/ }),

/***/ 4421:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ childMatcher),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ 1663:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1226);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}


/***/ }),

/***/ 1226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ xhtml),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ 3838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .root */ .Jz);
}


/***/ }),

/***/ 7911:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4708);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}


/***/ }),

/***/ 7405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1663);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}


/***/ }),

/***/ 5772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}


/***/ }),

/***/ 5016:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}


/***/ }),

/***/ 5122:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}


/***/ }),

/***/ 4764:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8390);
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2270);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__/* .EnterNode */ .F(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__/* .EnterNode */ .F(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Selection */ .Y1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ 5667:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}


/***/ }),

/***/ 3790:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);


function dispatchEvent(node, type, params) {
  var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}


/***/ }),

/***/ 6347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}


/***/ }),

/***/ 7844:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return !this.node();
}


/***/ }),

/***/ 2270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ EnterNode),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1586);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ 6790:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1586);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z), this._parents);
}


/***/ }),

/***/ 5777:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8390);
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .Y1(subgroups, this._parents);
}


/***/ }),

/***/ 655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}


/***/ }),

/***/ 8390:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jz: () => (/* binding */ root),
/* harmony export */   Y1: () => (/* binding */ Selection),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6932);
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4735);
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5777);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4764);
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2270);
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6790);
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1474);
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6359);
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4729);
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9548);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5772);
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(426);
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(838);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6909);
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7844);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6347);
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7405);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2627);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9714);
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5016);
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8386);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(655);
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1903);
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6017);
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7911);
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2504);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8349);
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(5122);
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5667);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2017);
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(3790);
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(3536);



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  data: _data_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
  join: _join_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
  selection: selection_selection,
  order: _order_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
  call: _call_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
  node: _node_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
  size: _size_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
  each: _each_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
  style: _style_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
  property: _property_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
  text: _text_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
  html: _html_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
  append: _append_js__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z,
  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z,
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z,
  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z,
  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z,
  on: _on_js__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z,
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);


/***/ }),

/***/ 2504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4708);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3010);



function constantNull() {
  return null;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}


/***/ }),

/***/ 3536:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}


/***/ }),

/***/ 1474:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}


/***/ }),

/***/ 6017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(lower);
}


/***/ }),

/***/ 6359:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(merges, this._parents);
}


/***/ }),

/***/ 838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}


/***/ }),

/***/ 426:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}


/***/ }),

/***/ 2017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}


/***/ }),

/***/ 4729:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}


/***/ }),

/***/ 9714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}


/***/ }),

/***/ 1903:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(raise);
}


/***/ }),

/***/ 8349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(remove);
}


/***/ }),

/***/ 486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8390);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3010);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select !== "function") select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .Y1(subgroups, this._parents);
}


/***/ }),

/***/ 6932:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8390);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9898);
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9701);




function arrayAll(select) {
  return function() {
    return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Selection */ .Y1(subgroups, parents);
}


/***/ }),

/***/ 4735:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* .childMatcher */ .P)(match)));
}


/***/ }),

/***/ 467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* .childMatcher */ .P)(match)));
}


/***/ }),

/***/ 6909:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}


/***/ }),

/***/ 9548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ 1586:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {
  return new Array(update.length);
}


/***/ }),

/***/ 2627:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ styleValue),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ 8386:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}


/***/ }),

/***/ 3010:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ 9701:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ 9920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ 4788:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export slice */
var slice = Array.prototype.slice;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ 309:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function constant() {
    return x;
  };
}


/***/ }),

/***/ 5925:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // falls through
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  return new Linear(context);
}


/***/ }),

/***/ 8285:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jv: () => (/* reexport safe */ _line_js__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7281);




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!

















































/***/ }),

/***/ 7281:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4788);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5925);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8229);
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6810);






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {
  var defined = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
      output = null,
      path = (0,_path_js__WEBPACK_IMPORTED_MODULE_2__/* .withPath */ .d)(line);

  x = typeof x === "function" ? x : (x === undefined) ? _point_js__WEBPACK_IMPORTED_MODULE_3__.x : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(x);
  y = typeof y === "function" ? y : (y === undefined) ? _point_js__WEBPACK_IMPORTED_MODULE_3__.y : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(y);

  function line(data) {
    var i,
        n = (data = (0,_array_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}


/***/ }),

/***/ 8229:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ withPath)
/* harmony export */ });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9906);


function withPath(shape) {
  let digits = 3;

  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };

  return () => new d3_path__WEBPACK_IMPORTED_MODULE_0__/* .Path */ .y$(digits);
}


/***/ }),

/***/ 6810:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ x),
/* harmony export */   y: () => (/* binding */ y)
/* harmony export */ });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ 2138:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z1: () => (/* binding */ timeParse)
/* harmony export */ });
/* unused harmony exports timeFormat, utcFormat, utcParse, default */
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7238);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = (0,_locale_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ 4809:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z1: () => (/* reexport safe */ _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__.Z1)
/* harmony export */ });
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2138);






/***/ }),

/***/ 7238:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ formatLocale)
/* harmony export */ });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5235);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6199);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8887);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcMonday */ .l6.ceil(week) : (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcMonday */ .l6)(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_1__/* .utcDay */ .AN.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeMonday */ .Ox.ceil(week) : (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeMonday */ .Ox)(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_1__/* .timeDay */ .rr.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_1__/* .timeDay */ .rr.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .jB)(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeSunday */ .Zy.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .jB)(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Ig)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Ig.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Ig.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .jB)(d), d) + ((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .jB)(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeMonday */ .Ox.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .timeYear */ .jB)(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Ig)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__/* .timeThursday */ .Ig.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_1__/* .utcDay */ .AN.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .ol)(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcSunday */ .pI.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .ol)(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .hB)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .hB.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .hB.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .ol)(d), d) + ((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .ol)(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcMonday */ .l6.count((0,d3_time__WEBPACK_IMPORTED_MODULE_2__/* .utcYear */ .ol)(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? (0,d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .hB)(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__/* .utcThursday */ .hB.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ 6199:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AN: () => (/* binding */ utcDay),
/* harmony export */   rr: () => (/* binding */ timeDay)
/* harmony export */ });
/* unused harmony exports timeDays, utcDays, unixDay, unixDays */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2576);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1262);



const timeDay = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .J)(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .yB) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .UD,
  date => date.getDate() - 1
);

const timeDays = timeDay.range;

const utcDay = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .J)((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .UD;
}, (date) => {
  return date.getUTCDate() - 1;
});

const utcDays = utcDay.range;

const unixDay = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .J)((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .UD;
}, (date) => {
  return Math.floor(date / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationDay */ .UD);
});

const unixDays = unixDay.range;


/***/ }),

/***/ 1262:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UD: () => (/* binding */ durationDay),
/* harmony export */   iM: () => (/* binding */ durationWeek),
/* harmony export */   yB: () => (/* binding */ durationMinute)
/* harmony export */ });
/* unused harmony exports durationSecond, durationHour, durationMonth, durationYear */
const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;


/***/ }),

/***/ 2576:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ timeInterval)
/* harmony export */ });
const t0 = new Date, t1 = new Date;

function timeInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = (date) => {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = (date) => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = (date) => {
    const d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = (date, step) => {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = (start, stop, step) => {
    const range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    let previous;
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = (test) => {
    return timeInterval((date) => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? (d) => field(d) % step === 0
              : (d) => interval.count(0, d) % step === 0);
    };
  }

  return interval;
}


/***/ }),

/***/ 5235:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ig: () => (/* binding */ timeThursday),
/* harmony export */   Ox: () => (/* binding */ timeMonday),
/* harmony export */   Zy: () => (/* binding */ timeSunday),
/* harmony export */   hB: () => (/* binding */ utcThursday),
/* harmony export */   l6: () => (/* binding */ utcMonday),
/* harmony export */   pI: () => (/* binding */ utcSunday)
/* harmony export */ });
/* unused harmony exports timeTuesday, timeWednesday, timeFriday, timeSaturday, timeSundays, timeMondays, timeTuesdays, timeWednesdays, timeThursdays, timeFridays, timeSaturdays, utcTuesday, utcWednesday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2576);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1262);



function timeWeekday(i) {
  return (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .J)((date) => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationMinute */ .yB) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationWeek */ .iM;
  });
}

const timeSunday = timeWeekday(0);
const timeMonday = timeWeekday(1);
const timeTuesday = timeWeekday(2);
const timeWednesday = timeWeekday(3);
const timeThursday = timeWeekday(4);
const timeFriday = timeWeekday(5);
const timeSaturday = timeWeekday(6);

const timeSundays = timeSunday.range;
const timeMondays = timeMonday.range;
const timeTuesdays = timeTuesday.range;
const timeWednesdays = timeWednesday.range;
const timeThursdays = timeThursday.range;
const timeFridays = timeFriday.range;
const timeSaturdays = timeSaturday.range;

function utcWeekday(i) {
  return (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .J)((date) => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__/* .durationWeek */ .iM;
  });
}

const utcSunday = utcWeekday(0);
const utcMonday = utcWeekday(1);
const utcTuesday = utcWeekday(2);
const utcWednesday = utcWeekday(3);
const utcThursday = utcWeekday(4);
const utcFriday = utcWeekday(5);
const utcSaturday = utcWeekday(6);

const utcSundays = utcSunday.range;
const utcMondays = utcMonday.range;
const utcTuesdays = utcTuesday.range;
const utcWednesdays = utcWednesday.range;
const utcThursdays = utcThursday.range;
const utcFridays = utcFriday.range;
const utcSaturdays = utcSaturday.range;


/***/ }),

/***/ 8887:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jB: () => (/* binding */ timeYear),
/* harmony export */   ol: () => (/* binding */ utcYear)
/* harmony export */ });
/* unused harmony exports timeYears, utcYears */
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2576);


const timeYear = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .J)((date) => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date) => {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .J)((date) => {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

const timeYears = timeYear.range;

const utcYear = (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .J)((date) => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date) => {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0,_interval_js__WEBPACK_IMPORTED_MODULE_0__/* .timeInterval */ .J)((date) => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

const utcYears = utcYear.range;


/***/ }),

/***/ 6084:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1739);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__/* .Timer */ .B7;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}


/***/ }),

/***/ 1739:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B7: () => (/* binding */ Timer),
/* harmony export */   HT: () => (/* binding */ timer),
/* harmony export */   zO: () => (/* binding */ now)
/* harmony export */ });
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ 3399:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5781);






/***/ }),

/***/ 8640:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .STARTING */ .KE && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .ENDING */ .wS;
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .ENDED */ .Ku;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}


/***/ }),

/***/ 5781:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1689);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7207);




d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;


/***/ }),

/***/ 1689:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8640);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  return this.each(function() {
    (0,_interrupt_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, name);
  });
}


/***/ }),

/***/ 7207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6365);
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2067);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1739);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_0__/* .cubicInOut */ .tw
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .uT) {
    id = name._id, name = name._name;
  } else {
    id = (0,_transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .newId */ .pZ)(), (timing = defaultTiming).time = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* .now */ .zO)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0,_transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .uT(groups, this._parents, name, id);
}


/***/ }),

/***/ 5114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3465);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1663);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9040);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4548);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__/* .interpolateTransformSvg */ .w : _interpolate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_3__/* .tweenValue */ .x)(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}


/***/ }),

/***/ 8061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1663);


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}


/***/ }),

/***/ 6882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function delayFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1)(this, id).delay = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).delay;
}


/***/ }),

/***/ 4786:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function durationFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).duration = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).duration;
}


/***/ }),

/***/ 3353:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).ease = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).ease;
}


/***/ }),

/***/ 5778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).ease = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}


/***/ }),

/***/ 5355:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}


/***/ }),

/***/ 9579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6365);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .uT(subgroups, this._parents, this._name, this._id);
}


/***/ }),

/***/ 6365:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pZ: () => (/* binding */ newId),
/* harmony export */   uT: () => (/* binding */ Transition)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5114);
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8061);
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6882);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4786);
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3353);
/* harmony import */ var _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5778);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9579);
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9858);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7349);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9935);
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4417);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5174);
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3836);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8508);
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5109);
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5699);
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4987);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4085);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9040);
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5355);






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
  style: _style_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
  text: _text_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
  easeVarying: _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
  end: _end_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};


/***/ }),

/***/ 4548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4447);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8063);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6354);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6773);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP
      : (c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(a, b);
}


/***/ }),

/***/ 9858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6365);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Transition */ .uT(merges, this._parents, this._name, this._id);
}


/***/ }),

/***/ 7349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1 : _schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}


/***/ }),

/***/ 9935:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.on("end.remove", removeFunction(this._id));
}


/***/ }),

/***/ 9882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KE: () => (/* binding */ STARTING),
/* harmony export */   Ku: () => (/* binding */ ENDED),
/* harmony export */   S1: () => (/* binding */ init),
/* harmony export */   U2: () => (/* binding */ get),
/* harmony export */   ZP: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t8: () => (/* binding */ set),
/* harmony export */   wS: () => (/* binding */ ENDING)
/* harmony export */ });
/* unused harmony exports CREATED, SCHEDULED, STARTED, RUNNING */
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6057);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1739);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6084);



var emptyOn = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .HT)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ 4417:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3010);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6365);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(subgroup[i], name, id, i, subgroup, (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .uT(subgroups, this._parents, name, id);
}


/***/ }),

/***/ 5174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9701);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6365);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .uT(subgroups, parents, name, id);
}


/***/ }),

/***/ 3836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype.constructor;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new Selection(this._groups, this._parents);
}


/***/ }),

/***/ 8508:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3465);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2627);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9040);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4548);






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name),
        string1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .set */ .t8)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* .interpolateTransformCss */ .Y : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_4__/* .tweenValue */ .x)(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}


/***/ }),

/***/ 5109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}


/***/ }),

/***/ 5699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9040);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction((0,_tween_js__WEBPACK_IMPORTED_MODULE_0__/* .tweenValue */ .x)(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}


/***/ }),

/***/ 4987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}


/***/ }),

/***/ 4085:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6365);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var name = this._name,
      id0 = this._id,
      id1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newId */ .pZ)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(node, id0);
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Transition */ .uT(groups, this._parents, name, id1);
}


/***/ }),

/***/ 9040:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   x: () => (/* binding */ tweenValue)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(node, id).value[name];
  };
}


/***/ }),

/***/ 5180:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2714);




/***/ }),

/***/ 2714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports Transform, identity, default */
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}


/***/ }),

/***/ 1395:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3399);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2714);










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = interpolateZoom,
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = pointer(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = pointer(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      dragEnable(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    noevent(event);
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}


/***/ }),

/***/ 8976:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z1g: () => (/* reexport safe */ d3_time_format__WEBPACK_IMPORTED_MODULE_2__.Z1),
/* harmony export */   jvg: () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_1__.jv)
/* harmony export */ });
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9961);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8285);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4809);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3399);
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5180);
































/***/ }),

/***/ 909:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ InternMap)
/* harmony export */ });
/* unused harmony export InternSet */
class InternMap extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});
    if (entries != null) for (const [key, value] of entries) this.set(key, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
}

class InternSet extends (/* unused pure expression or super */ null && (Set)) {
  constructor(values, key = keyof) {
    super();
    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});
    if (values != null) for (const value of values) this.add(value);
  }
  has(value) {
    return super.has(intern_get(this, value));
  }
  add(value) {
    return super.add(intern_set(this, value));
  }
  delete(value) {
    return super.delete(intern_delete(this, value));
  }
}

function intern_get({_intern, _key}, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}

function intern_set({_intern, _key}, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}

function intern_delete({_intern, _key}, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}

function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_barChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7800);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG = {
    name: 'barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG',
    displayName: 'BarChart',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_barChart__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u) {
            return new _src_barChart__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG);

})();

barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map