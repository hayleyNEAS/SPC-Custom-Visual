var barChart690B60A9B92A4B3F9CD47387F807847E_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoryIsAlsoSeriesRole: () => (/* binding */ categoryIsAlsoSeriesRole),
/* harmony export */   getMiscellaneousTypeDescriptor: () => (/* binding */ getMiscellaneousTypeDescriptor),
/* harmony export */   getSeriesName: () => (/* binding */ getSeriesName),
/* harmony export */   hasImageUrlColumn: () => (/* binding */ hasImageUrlColumn),
/* harmony export */   isImageUrlColumn: () => (/* binding */ isImageUrlColumn),
/* harmony export */   isWebUrlColumn: () => (/* binding */ isWebUrlColumn)
/* harmony export */ });
/* harmony import */ var _dataRoleHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6070);
// powerbi.extensibility.utils.dataview

function categoryIsAlsoSeriesRole(dataView, seriesRoleName, categoryRoleName) {
    if (dataView.categories && dataView.categories.length > 0) {
        // Need to pivot data if our category soure is a series role
        const category = dataView.categories[0];
        return category.source &&
            _dataRoleHelper__WEBPACK_IMPORTED_MODULE_0__.hasRole(category.source, seriesRoleName) &&
            _dataRoleHelper__WEBPACK_IMPORTED_MODULE_0__.hasRole(category.source, categoryRoleName);
    }
    return false;
}
function getSeriesName(source) {
    return (source.groupName !== undefined)
        ? source.groupName
        : source.queryName;
}
function isImageUrlColumn(column) {
    const misc = getMiscellaneousTypeDescriptor(column);
    return misc != null && misc.imageUrl === true;
}
function isWebUrlColumn(column) {
    const misc = getMiscellaneousTypeDescriptor(column);
    return misc != null && misc.webUrl === true;
}
function getMiscellaneousTypeDescriptor(column) {
    return column
        && column.type
        && column.type.misc;
}
function hasImageUrlColumn(dataView) {
    if (!dataView || !dataView.metadata || !dataView.metadata.columns || !dataView.metadata.columns.length) {
        return false;
    }
    return dataView.metadata.columns.some((column) => isImageUrlColumn(column) === true);
}
//# sourceMappingURL=converterHelper.js.map

/***/ }),

/***/ 6070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCategoryIndexOfRole: () => (/* binding */ getCategoryIndexOfRole),
/* harmony export */   getMeasureIndexOfRole: () => (/* binding */ getMeasureIndexOfRole),
/* harmony export */   hasRole: () => (/* binding */ hasRole),
/* harmony export */   hasRoleInDataView: () => (/* binding */ hasRoleInDataView),
/* harmony export */   hasRoleInValueColumn: () => (/* binding */ hasRoleInValueColumn)
/* harmony export */ });
function getMeasureIndexOfRole(grouped, roleName) {
    if (!grouped || !grouped.length) {
        return -1;
    }
    const firstGroup = grouped[0];
    if (firstGroup.values && firstGroup.values.length > 0) {
        for (let i = 0, len = firstGroup.values.length; i < len; ++i) {
            const value = firstGroup.values[i];
            if (value && value.source) {
                if (hasRole(value.source, roleName)) {
                    return i;
                }
            }
        }
    }
    return -1;
}
function getCategoryIndexOfRole(categories, roleName) {
    if (categories && categories.length) {
        for (let i = 0, ilen = categories.length; i < ilen; i++) {
            if (hasRole(categories[i].source, roleName)) {
                return i;
            }
        }
    }
    return -1;
}
function hasRole(column, name) {
    const roles = column.roles;
    return roles && roles[name];
}
function hasRoleInDataView(dataView, name) {
    return dataView != null
        && dataView.metadata != null
        && dataView.metadata.columns
        && dataView.metadata.columns.some((c) => c.roles && c.roles[name] !== undefined); // any is an alias of some
}
function hasRoleInValueColumn(valueColumn, name) {
    return valueColumn
        && valueColumn.source
        && valueColumn.source.roles
        && (valueColumn.source.roles[name] === true);
}
//# sourceMappingURL=dataRoleHelper.js.map

/***/ }),

/***/ 9567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFillColorByPropertyName: () => (/* binding */ getFillColorByPropertyName),
/* harmony export */   getValue: () => (/* binding */ getValue)
/* harmony export */ });
function getValue(object, propertyName, defaultValue) {
    if (!object) {
        return defaultValue;
    }
    const propertyValue = object[propertyName];
    if (propertyValue === undefined) {
        return defaultValue;
    }
    return propertyValue;
}
/** Gets the solid color from a fill property using only a propertyName */
function getFillColorByPropertyName(object, propertyName, defaultColor) {
    const value = getValue(object, propertyName);
    if (!value || !value.solid) {
        return defaultColor;
    }
    return value.solid.color;
}
//# sourceMappingURL=dataViewObject.js.map

/***/ }),

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCommonValue: () => (/* binding */ getCommonValue),
/* harmony export */   getFillColor: () => (/* binding */ getFillColor),
/* harmony export */   getObject: () => (/* binding */ getObject),
/* harmony export */   getValue: () => (/* binding */ getValue)
/* harmony export */ });
/* harmony import */ var _dataViewObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9567);

/** Gets the value of the given object/property pair. */
function getValue(objects, propertyId, defaultValue) {
    if (!objects) {
        return defaultValue;
    }
    return _dataViewObject__WEBPACK_IMPORTED_MODULE_0__.getValue(objects[propertyId.objectName], propertyId.propertyName, defaultValue);
}
/** Gets an object from objects. */
function getObject(objects, objectName, defaultValue) {
    if (objects && objects[objectName]) {
        return objects[objectName];
    }
    return defaultValue;
}
/** Gets the solid color from a fill property. */
function getFillColor(objects, propertyId, defaultColor) {
    const value = getValue(objects, propertyId);
    if (!value || !value.solid) {
        return defaultColor;
    }
    return value.solid.color;
}
function getCommonValue(objects, propertyId, defaultValue) {
    const value = getValue(objects, propertyId, defaultValue);
    if (value && value.solid) {
        return value.solid.color;
    }
    if (value === undefined
        || value === null
        || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    return value;
}
//# sourceMappingURL=dataViewObjects.js.map

/***/ }),

/***/ 4554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataViewObjectsParser: () => (/* binding */ DataViewObjectsParser)
/* harmony export */ });
/* harmony import */ var _dataViewObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(982);

class DataViewObjectsParser {
    static getDefault() {
        return new this();
    }
    static createPropertyIdentifier(objectName, propertyName) {
        return {
            objectName,
            propertyName
        };
    }
    static parse(dataView) {
        const dataViewObjectParser = this.getDefault();
        if (!dataView || !dataView.metadata || !dataView.metadata.objects) {
            return dataViewObjectParser;
        }
        const properties = dataViewObjectParser.getProperties();
        for (const objectName in properties) {
            for (const propertyName in properties[objectName]) {
                const defaultValue = dataViewObjectParser[objectName][propertyName];
                dataViewObjectParser[objectName][propertyName] = _dataViewObjects__WEBPACK_IMPORTED_MODULE_0__.getCommonValue(dataView.metadata.objects, properties[objectName][propertyName], defaultValue);
            }
        }
        return dataViewObjectParser;
    }
    static isPropertyEnumerable(propertyName) {
        return !DataViewObjectsParser.InnumerablePropertyPrefix.test(propertyName);
    }
    static enumerateObjectInstances(dataViewObjectParser, options) {
        const dataViewProperties = dataViewObjectParser && dataViewObjectParser[options.objectName];
        if (!dataViewProperties) {
            return [];
        }
        const instance = {
            objectName: options.objectName,
            selector: null,
            properties: {}
        };
        for (const key in dataViewProperties) {
            if (Object.prototype.hasOwnProperty.call(dataViewProperties, key)) {
                instance.properties[key] = dataViewProperties[key];
            }
        }
        return {
            instances: [instance]
        };
    }
    getProperties() {
        const properties = {}, objectNames = Object.keys(this);
        objectNames.forEach((objectName) => {
            if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                const propertyNames = Object.keys(this[objectName]);
                properties[objectName] = {};
                propertyNames.forEach((propertyName) => {
                    if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                        properties[objectName][propertyName] =
                            DataViewObjectsParser.createPropertyIdentifier(objectName, propertyName);
                    }
                });
            }
        });
        return properties;
    }
}
DataViewObjectsParser.InnumerablePropertyPrefix = /^_/;
//# sourceMappingURL=dataViewObjectsParser.js.map

/***/ }),

/***/ 989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createValueColumns: () => (/* binding */ createValueColumns),
/* harmony export */   groupValues: () => (/* binding */ groupValues),
/* harmony export */   setGrouped: () => (/* binding */ setGrouped)
/* harmony export */ });
// TODO: refactor & focus DataViewTransform into a service with well-defined dependencies.
// TODO: refactor this, setGrouped, and groupValues to a test helper to stop using it in the product
function createValueColumns(values = [], valueIdentityFields, source) {
    const result = values;
    setGrouped(result);
    if (valueIdentityFields) {
        result.identityFields = valueIdentityFields;
    }
    if (source) {
        result.source = source;
    }
    return result;
}
function setGrouped(values, groupedResult) {
    values.grouped = groupedResult
        ? () => groupedResult
        : () => groupValues(values);
}
/** Group together the values with a common identity. */
function groupValues(values) {
    const groups = [];
    let currentGroup;
    for (let i = 0, len = values.length; i < len; i++) {
        const value = values[i];
        if (!currentGroup || currentGroup.identity !== value.identity) {
            currentGroup = {
                values: []
            };
            if (value.identity) {
                currentGroup.identity = value.identity;
                const source = value.source;
                // allow null, which will be formatted as (Blank).
                if (source.groupName !== undefined) {
                    currentGroup.name = source.groupName;
                }
                else if (source.displayName) {
                    currentGroup.name = source.displayName;
                }
            }
            groups.push(currentGroup);
        }
        currentGroup.values.push(value);
    }
    return groups;
}
//# sourceMappingURL=dataViewTransform.js.map

/***/ }),

/***/ 2581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDataViewWildcardSelector: () => (/* binding */ createDataViewWildcardSelector)
/* harmony export */ });
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
function createDataViewWildcardSelector(dataViewWildcardMatchingOption) {
    if (dataViewWildcardMatchingOption == null) {
        dataViewWildcardMatchingOption = 0 /* DataViewWildcardMatchingOption.InstancesAndTotals */;
    }
    const selector = {
        data: [
            {
                dataViewWildcard: {
                    matchingOption: dataViewWildcardMatchingOption
                }
            }
        ]
    };
    return selector;
}
//# sourceMappingURL=dataViewWildcard.js.map

/***/ }),

/***/ 1706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   converterHelper: () => (/* reexport module object */ _converterHelper__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   dataRoleHelper: () => (/* reexport module object */ _dataRoleHelper__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   dataViewObject: () => (/* reexport module object */ _dataViewObject__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   dataViewObjects: () => (/* reexport module object */ _dataViewObjects__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   dataViewObjectsParser: () => (/* reexport module object */ _dataViewObjectsParser__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   dataViewTransform: () => (/* reexport module object */ _dataViewTransform__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   dataViewWildcard: () => (/* reexport module object */ _dataViewWildcard__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   validationHelper: () => (/* reexport module object */ _validationHelper__WEBPACK_IMPORTED_MODULE_7__)
/* harmony export */ });
/* harmony import */ var _converterHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7701);
/* harmony import */ var _dataRoleHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6070);
/* harmony import */ var _dataViewObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9567);
/* harmony import */ var _dataViewObjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(982);
/* harmony import */ var _dataViewObjectsParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4554);
/* harmony import */ var _dataViewTransform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(989);
/* harmony import */ var _dataViewWildcard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2581);
/* harmony import */ var _validationHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5250);









//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFileImage: () => (/* binding */ isFileImage),
/* harmony export */   isImageUrlAllowed: () => (/* binding */ isImageUrlAllowed)
/* harmony export */ });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
function isImageUrlAllowed(url) {
    // Excludes all URLs that don't contain .gif .jpg .png or .svg extensions and don't start from "http(s)://".
    // Base64 incoded images are allowable too.
    return (/^https?:\/\/.+\.(gif|jpg|png|svg)$/i).test(url) || (/^data:image\/(gif|jpeg|png|svg\+xml);base64,/i).test(url);
}
function isFileImage(url, imageCheckResultCallBack) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState !== this.HEADERS_RECEIVED) {
            return;
        }
        const contentType = request.getResponseHeader("Content-Type"), supportedTypes = ["image/png", "image/jpeg", "image/gif", "image/svg+xml"];
        if (supportedTypes.indexOf(contentType) > -1) {
            return imageCheckResultCallBack(true, contentType);
        }
        return imageCheckResultCallBack(false, contentType);
    };
    request.open("HEAD", url, true);
    request.send();
}
//# sourceMappingURL=validationHelper.js.map

/***/ }),

/***/ 9538:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
 * Globalize Cultures
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */
var powerbiGlobalizeLocales_1 = __webpack_require__(5323);
function injectCultures(Globalize) {
    Object.keys(powerbiGlobalizeLocales_1.locales).forEach(function (locale) { return Globalize.addCultureInfo.apply(Globalize, powerbiGlobalizeLocales_1.locales[locale]); });
}
exports["default"] = injectCultures;
//# sourceMappingURL=globalize.cultures.js.map

/***/ }),

/***/ 4818:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseNegativePattern = exports.parseExact = exports.getEraYear = exports.getEra = exports.getTokenRegExp = exports.formatNumber = exports.formatDate = exports.expandFormat = exports.appendPreOrPostMatch = exports.zeroPad = exports.trim = exports.startsWith = exports.isObject = exports.isFunction = exports.isArray = exports.extend = exports.endsWith = exports.arrayIndexOf = exports.regexTrim = exports.regexParseFloat = exports.regexInfinity = exports.regexHex = exports.Globalize = void 0;
// Global variable (Globalize) or CommonJS module (globalize)
exports.Globalize = function (cultureSelector) {
    return new exports.Globalize.prototype.init(cultureSelector);
};
exports.Globalize.cultures = {};
exports.Globalize.prototype = {
    constructor: exports.Globalize,
    init: function (cultureSelector) {
        this.cultures = exports.Globalize.cultures;
        this.cultureSelector = cultureSelector;
        return this;
    }
};
exports.Globalize.prototype.init.prototype = exports.Globalize.prototype;
// 1.	 When defining a culture, all fields are required except the ones stated as optional.
// 2.	 Each culture should have a ".calendars" object with at least one calendar named "standard"
//		 which serves as the default calendar in use by that culture.
// 3.	 Each culture should have a ".calendar" object which is the current calendar being used,
//		 it may be dynamically changed at any time to one of the calendars in ".calendars".
exports.Globalize.cultures["default"] = {
    // A unique name for the culture in the form <language code>-<country/region code>
    name: "en",
    // the name of the culture in the english language
    englishName: "English",
    // the name of the culture in its own language
    nativeName: "English",
    // whether the culture uses right-to-left text
    isRTL: false,
    // "language" is used for so-called "specific" cultures.
    // For example, the culture "es-CL" means "Spanish, in Chili".
    // It represents the Spanish-speaking culture as it is in Chili,
    // which might have different formatting rules or even translations
    // than Spanish in Spain. A "neutral" culture is one that is not
    // specific to a region. For example, the culture "es" is the generic
    // Spanish culture, which may be a more generalized version of the language
    // that may or may not be what a specific culture expects.
    // For a specific culture like "es-CL", the "language" field refers to the
    // neutral, generic culture information for the language it is using.
    // This is not always a simple matter of the string before the dash.
    // For example, the "zh-Hans" culture is netural (Simplified Chinese).
    // And the "zh-SG" culture is Simplified Chinese in Singapore, whose lanugage
    // field is "zh-CHS", not "zh".
    // This field should be used to navigate from a specific culture to it's
    // more general, neutral culture. If a culture is already as general as it
    // can get, the language may refer to itself.
    language: "en",
    // numberFormat defines general number formatting rules, like the digits in
    // each grouping, the group separator, and how negative numbers are displayed.
    numberFormat: {
        // [negativePattern]
        // Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
        // but is still defined as an array for consistency with them.
        //   negativePattern: one of "(n)|-n|- n|n-|n -"
        pattern: ["-n"],
        // number of decimal places normally shown
        decimals: 2,
        // string that separates number groups, as in 1,000,000
        ",": ",",
        // string that separates a number from the fractional portion, as in 1.99
        ".": ".",
        // array of numbers indicating the size of each number group.
        // TODO: more detailed description and example
        groupSizes: [3],
        // symbol used for positive numbers
        "+": "+",
        // symbol used for negative numbers
        "-": "-",
        percent: {
            // [negativePattern, positivePattern]
            //   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
            //   positivePattern: one of "n %|n%|%n|% n"
            pattern: ["-n %", "n %"],
            // number of decimal places normally shown
            decimals: 2,
            // array of numbers indicating the size of each number group.
            // TODO: more detailed description and example
            groupSizes: [3],
            // string that separates number groups, as in 1,000,000
            ",": ",",
            // string that separates a number from the fractional portion, as in 1.99
            ".": ".",
            // symbol used to represent a percentage
            symbol: "%"
        },
        currency: {
            // [negativePattern, positivePattern]
            //   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
            //   positivePattern: one of "$n|n$|$ n|n $"
            pattern: ["($n)", "$n"],
            // number of decimal places normally shown
            decimals: 2,
            // array of numbers indicating the size of each number group.
            // TODO: more detailed description and example
            groupSizes: [3],
            // string that separates number groups, as in 1,000,000
            ",": ",",
            // string that separates a number from the fractional portion, as in 1.99
            ".": ".",
            // symbol used to represent currency
            symbol: "$"
        }
    },
    // calendars defines all the possible calendars used by this culture.
    // There should be at least one defined with name "standard", and is the default
    // calendar used by the culture.
    // A calendar contains information about how dates are formatted, information about
    // the calendar's eras, a standard set of the date formats,
    // translations for day and month names, and if the calendar is not based on the Gregorian
    // calendar, conversion functions to and from the Gregorian calendar.
    calendars: {
        standard: {
            // name that identifies the type of calendar this is
            name: "Gregorian_USEnglish",
            // separator of parts of a date (e.g. "/" in 11/05/1955)
            "/": "/",
            // separator of parts of a time (e.g. ":" in 05:44 PM)
            ":": ":",
            // the first day of the week (0 = Sunday, 1 = Monday, etc)
            firstDay: 0,
            days: {
                // full day names
                names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                // abbreviated day names
                namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                // shortest day names
                namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
            },
            months: {
                // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
                names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                // abbreviated month names
                namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
            },
            // AM and PM designators in one of these forms:
            // The usual view, and the upper and lower case versions
            //   [ standard, lowercase, uppercase ]
            // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
            //   null
            AM: ["AM", "am", "AM"],
            PM: ["PM", "pm", "PM"],
            eras: [
                // eras in reverse chronological order.
                // name: the name of the era in this culture (e.g. A.D., C.E.)
                // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
                // offset: offset in years from gregorian calendar
                {
                    "name": "A.D.",
                    "start": null,
                    "offset": 0
                }
            ],
            // when a two digit year is given, it will never be parsed as a four digit
            // year greater than this year (in the appropriate era for the culture)
            // Set it as a full year (e.g. 2029) or use an offset format starting from
            // the current year: "+19" would correspond to 2029 if the current year 2010.
            twoDigitYearMax: 2029,
            // set of predefined date and time patterns used by the culture
            // these represent the format someone in this culture would expect
            // to see given the portions of the date that are shown.
            patterns: {
                // short date pattern
                d: "M/d/yyyy",
                // long date pattern
                D: "dddd, MMMM dd, yyyy",
                // short time pattern
                t: "h:mm tt",
                // long time pattern
                T: "h:mm:ss tt",
                // long date, short time pattern
                f: "dddd, MMMM dd, yyyy h:mm tt",
                // long date, long time pattern
                F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                // month/day pattern
                M: "MMMM dd",
                // month/year pattern
                Y: "yyyy MMMM",
                // S is a sortable format that does not vary by culture
                S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
            }
            // optional fields for each calendar:
            /*
            monthsGenitive:
                Same as months but used when the day preceeds the month.
                Omit if the culture has no genitive distinction in month names.
                For an explaination of genitive months, see http://blogs.msdn.com/michkap/archive/2004/12/25/332259.aspx
            convert:
                Allows for the support of non-gregorian based calendars. This convert object is used to
                to convert a date to and from a gregorian calendar date to handle parsing and formatting.
                The two functions:
                    fromGregorian( date )
                        Given the date as a parameter, return an array with parts [ year, month, day ]
                        corresponding to the non-gregorian based year, month, and day for the calendar.
                    toGregorian( year, month, day )
                        Given the non-gregorian year, month, and day, return a new Date() object
                        set to the corresponding date in the gregorian calendar.
            */
        }
    },
    // For localized strings
    messages: {}
};
exports.Globalize.cultures["default"].calendar = exports.Globalize.cultures["default"].calendars.standard;
exports.Globalize.cultures.en = exports.Globalize.cultures["default"];
exports.Globalize.cultureSelector = "en";
//
// private variables
//
exports.regexHex = /^0x[a-f0-9]+$/i;
exports.regexInfinity = /^[+-]?infinity$/i;
exports.regexParseFloat = /^[+-]?\d*\.?\d*(e[+-]?\d+)?$/;
exports.regexTrim = /^\s+|\s+$/g;
//
// private JavaScript utility functions
//
exports.arrayIndexOf = function (array, item) {
    if (array.indexOf) {
        return array.indexOf(item);
    }
    for (var i = 0, length = array.length; i < length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
};
exports.endsWith = function (value, pattern) {
    return value.substring(value.length - pattern.length) === pattern;
};
exports.extend = function (deep) {
    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
    // Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== "object" && !(0, exports.isFunction)(target)) {
        target = {};
    }
    for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
            // Extend the base object
            for (name in options) {
                src = target[name];
                copy = options[name];
                // Prevent never-ending loop
                if (target === copy) {
                    continue;
                }
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && ((0, exports.isObject)(copy) || (copyIsArray = (0, exports.isArray)(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && (0, exports.isArray)(src) ? src : [];
                    }
                    else {
                        clone = src && (0, exports.isObject)(src) ? src : {};
                    }
                    // Never move original objects, clone them
                    target[name] = (0, exports.extend)(deep, clone, copy);
                    // Don't bring in undefined values
                }
                else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    // Return the modified object
    return target;
};
exports.isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
};
exports.isFunction = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Function]";
};
exports.isObject = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
};
exports.startsWith = function (value, pattern) {
    return value.indexOf(pattern) === 0;
};
exports.trim = function (value) {
    return (value + "").replace(exports.regexTrim, "");
};
exports.zeroPad = function (str, count, left) {
    var l;
    for (l = str.length; l < count; l += 1) {
        str = (left ? ("0" + str) : (str + "0"));
    }
    return str;
};
//
// private Globalization utility functions
//
exports.appendPreOrPostMatch = function (preMatch, strings) {
    // appends pre- and post- token match strings while removing escaped characters.
    // Returns a single quote count which is used to determine if the token occurs
    // in a string literal.
    var quoteCount = 0, escaped = false;
    for (var i = 0, il = preMatch.length; i < il; i++) {
        var c = preMatch.charAt(i);
        switch (c) {
            case "\'":
                if (escaped) {
                    strings.push("\'");
                }
                else {
                    quoteCount++;
                }
                escaped = false;
                break;
            case "\\":
                if (escaped) {
                    strings.push("\\");
                }
                escaped = !escaped;
                break;
            default:
                strings.push(c);
                escaped = false;
                break;
        }
    }
    return quoteCount;
};
exports.expandFormat = function (cal, format) {
    // expands unspecified or single character date formats into the full pattern.
    format = format || "F";
    var pattern, patterns = cal.patterns, len = format.length;
    if (len === 1) {
        pattern = patterns[format];
        if (!pattern) {
            throw "Invalid date format string \'" + format + "\'.";
        }
        format = pattern;
    }
    else if (len === 2 && format.charAt(0) === "%") {
        // %X escape format -- intended as a custom format string that is only one character, not a built-in format.
        format = format.charAt(1);
    }
    return format;
};
exports.formatDate = function (value, format, culture) {
    var cal = culture.calendar, convert = cal.convert;
    if (!format || !format.length || format === "i") {
        var ret;
        if (culture && culture.name.length) {
            if (convert) {
                // non-gregorian calendar, so we cannot use built-in toLocaleString()
                ret = (0, exports.formatDate)(value, cal.patterns.F, culture);
            }
            else {
                var eraDate = new Date(value.getTime()), era = (0, exports.getEra)(value, cal.eras);
                eraDate.setFullYear((0, exports.getEraYear)(value, cal, era));
                ret = eraDate.toLocaleString();
            }
        }
        else {
            ret = value.toString();
        }
        return ret;
    }
    var eras = cal.eras, sortable = format === "s";
    format = (0, exports.expandFormat)(cal, format);
    // Start with an empty string
    ret = [];
    var hour, zeros = ["0", "00", "000"], foundDay, checkedDay, dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g, quoteCount = 0, tokenRegExp = (0, exports.getTokenRegExp)(), converted;
    function padZeros(num, c) {
        var r, s = num + "";
        if (c > 1 && s.length < c) {
            r = (zeros[c - 2] + s);
            return r.substring(r.length - c, r.length);
        }
        else {
            r = s;
        }
        return r;
    }
    function hasDay() {
        if (foundDay || checkedDay) {
            return foundDay;
        }
        foundDay = dayPartRegExp.test(format);
        checkedDay = true;
        return foundDay;
    }
    function getPart(date, part) {
        if (converted) {
            return converted[part];
        }
        switch (part) {
            case 0: return date.getFullYear();
            case 1: return date.getMonth();
            case 2: return date.getDate();
        }
    }
    if (!sortable && convert) {
        converted = convert.fromGregorian(value);
    }
    for (;;) {
        // Save the current index
        var index = tokenRegExp.lastIndex, 
        // Look for the next pattern
        ar = tokenRegExp.exec(format);
        // Append the text before the pattern (or the end of the string if not found)
        var preMatch = format.slice(index, ar ? ar.index : format.length);
        quoteCount += (0, exports.appendPreOrPostMatch)(preMatch, ret);
        if (!ar) {
            break;
        }
        // do not replace any matches that occur inside a string literal.
        if (quoteCount % 2) {
            ret.push(ar[0]);
            continue;
        }
        var current = ar[0], clength = current.length;
        switch (current) {
            case "ddd":
            //Day of the week, as a three-letter abbreviation
            case "dddd":
                // Day of the week, using the full name
                var names = (clength === 3) ? cal.days.namesAbbr : cal.days.names;
                ret.push(names[value.getDay()]);
                break;
            case "d":
            // Day of month, without leading zero for single-digit days
            case "dd":
                // Day of month, with leading zero for single-digit days
                foundDay = true;
                ret.push(padZeros(getPart(value, 2), clength));
                break;
            case "MMM":
            // Month, as a three-letter abbreviation
            case "MMMM":
                // Month, using the full name
                var part = getPart(value, 1);
                ret.push((cal.monthsGenitive && hasDay())
                    ?
                        cal.monthsGenitive[clength === 3 ? "namesAbbr" : "names"][part]
                    :
                        cal.months[clength === 3 ? "namesAbbr" : "names"][part]);
                break;
            case "M":
            // Month, as digits, with no leading zero for single-digit months
            case "MM":
                // Month, as digits, with leading zero for single-digit months
                ret.push(padZeros(getPart(value, 1) + 1, clength));
                break;
            case "y":
            // Year, as two digits, but with no leading zero for years less than 10
            case "yy":
            // Year, as two digits, with leading zero for years less than 10
            case "yyyy":
                // Year represented by four full digits
                part = converted ? converted[0] : (0, exports.getEraYear)(value, cal, (0, exports.getEra)(value, eras), sortable);
                if (clength < 4) {
                    part = part % 100;
                }
                ret.push(padZeros(part, clength));
                break;
            case "h":
            // Hours with no leading zero for single-digit hours, using 12-hour clock
            case "hh":
                // Hours with leading zero for single-digit hours, using 12-hour clock
                hour = value.getHours() % 12;
                if (hour === 0)
                    hour = 12;
                ret.push(padZeros(hour, clength));
                break;
            case "H":
            // Hours with no leading zero for single-digit hours, using 24-hour clock
            case "HH":
                // Hours with leading zero for single-digit hours, using 24-hour clock
                ret.push(padZeros(value.getHours(), clength));
                break;
            case "m":
            // Minutes with no leading zero for single-digit minutes
            case "mm":
                // Minutes with leading zero for single-digit minutes
                ret.push(padZeros(value.getMinutes(), clength));
                break;
            case "s":
            // Seconds with no leading zero for single-digit seconds
            case "ss":
                // Seconds with leading zero for single-digit seconds
                ret.push(padZeros(value.getSeconds(), clength));
                break;
            case "t":
            // One character am/pm indicator ("a" or "p")
            case "tt":
                // Multicharacter am/pm indicator
                part = value.getHours() < 12 ? (cal.AM ? cal.AM[0] : " ") : (cal.PM ? cal.PM[0] : " ");
                ret.push(clength === 1 ? part.charAt(0) : part);
                break;
            case "f":
            // Deciseconds
            case "ff":
            // Centiseconds
            case "fff":
                // Milliseconds
                ret.push(padZeros(value.getMilliseconds(), 3).substring(0, clength));
                break;
            case "z":
            // Time zone offset, no leading zero
            case "zz":
                // Time zone offset with leading zero
                hour = value.getTimezoneOffset() / 60;
                ret.push((hour <= 0 ? "+" : "-") + padZeros(Math.floor(Math.abs(hour)), clength));
                break;
            case "zzz":
                // Time zone offset with leading zero
                hour = value.getTimezoneOffset() / 60;
                ret.push((hour <= 0 ? "+" : "-") + padZeros(Math.floor(Math.abs(hour)), 2)
                    // Hard coded ":" separator, rather than using cal.TimeSeparator
                    // Repeated here for consistency, plus ":" was already assumed in date parsing.
                    + ":" + padZeros(Math.abs(value.getTimezoneOffset() % 60), 2));
                break;
            case "g":
            case "gg":
                if (cal.eras) {
                    ret.push(cal.eras[(0, exports.getEra)(value, eras)].name);
                }
                break;
            case "/":
                ret.push(cal["/"]);
                break;
            default:
                throw "Invalid date format pattern \'" + current + "\'.";
        }
    }
    return ret.join("");
};
// formatNumber
(function () {
    var expandNumber;
    expandNumber = function (number, precision, formatInfo) {
        var groupSizes = formatInfo.groupSizes, curSize = groupSizes[0], curGroupIndex = 1, factor = Math.pow(10, precision), rounded = Math.round(number * factor) / factor;
        if (!isFinite(rounded)) {
            rounded = number;
        }
        number = rounded;
        var numberString = number + "", right = "", split = numberString.split(/e/i), exponent = split.length > 1 ? parseInt(split[1], 10) : 0;
        numberString = split[0];
        split = numberString.split(".");
        numberString = split[0];
        right = split.length > 1 ? split[1] : "";
        var l;
        if (exponent > 0) {
            right = (0, exports.zeroPad)(right, exponent, false);
            numberString += right.slice(0, exponent);
            right = right.substring(exponent);
        }
        else if (exponent < 0) {
            exponent = -exponent;
            numberString = (0, exports.zeroPad)(numberString, exponent + 1);
            right = numberString.slice(-exponent, numberString.length) + right;
            numberString = numberString.slice(0, -exponent);
        }
        if (precision > 0) {
            right = formatInfo["."] +
                ((right.length > precision) ? right.slice(0, precision) : (0, exports.zeroPad)(right, precision));
        }
        else {
            right = "";
        }
        var stringIndex = numberString.length - 1, sep = formatInfo[","], ret = "";
        while (stringIndex >= 0) {
            if (curSize === 0 || curSize > stringIndex) {
                return numberString.slice(0, stringIndex + 1) + (ret.length ? (sep + ret + right) : right);
            }
            ret = numberString.slice(stringIndex - curSize + 1, stringIndex + 1) + (ret.length ? (sep + ret) : "");
            stringIndex -= curSize;
            if (curGroupIndex < groupSizes.length) {
                curSize = groupSizes[curGroupIndex];
                curGroupIndex++;
            }
        }
        return numberString.slice(0, stringIndex + 1) + sep + ret + right;
    };
    exports.formatNumber = function (value, format, culture) {
        if (!format || format === "i") {
            return culture.name.length ? value.toLocaleString() : value.toString();
        }
        format = format || "D";
        var nf = culture.numberFormat, number = Math.abs(value), precision = -1, pattern;
        if (format.length > 1)
            precision = parseInt(format.slice(1), 10);
        var current = format.charAt(0).toUpperCase(), formatInfo;
        switch (current) {
            case "D":
                pattern = "n";
                if (precision !== -1) {
                    number = (0, exports.zeroPad)("" + number, precision, true);
                }
                if (value < 0)
                    number = -number;
                break;
            case "N":
                formatInfo = nf;
            // fall through
            case "C":
                formatInfo = formatInfo || nf.currency;
            // fall through
            case "P":
                formatInfo = formatInfo || nf.percent;
                pattern = value < 0 ? formatInfo.pattern[0] : (formatInfo.pattern[1] || "n");
                if (precision === -1)
                    precision = formatInfo.decimals;
                number = expandNumber(number * (current === "P" ? 100 : 1), precision, formatInfo);
                break;
            default:
                throw "Bad number format specifier: " + current;
        }
        var patternParts = /n|\$|-|%/g, ret = "";
        for (;;) {
            var index = patternParts.lastIndex, ar = patternParts.exec(pattern);
            ret += pattern.slice(index, ar ? ar.index : pattern.length);
            if (!ar) {
                break;
            }
            switch (ar[0]) {
                case "n":
                    ret += number;
                    break;
                case "$":
                    ret += nf.currency.symbol;
                    break;
                case "-":
                    // don't make 0 negative
                    if (/[1-9]/.test(number.toString())) {
                        ret += nf["-"];
                    }
                    break;
                case "%":
                    ret += nf.percent.symbol;
                    break;
            }
        }
        return ret;
    };
}());
exports.getTokenRegExp = function () {
    // regular expression for matching date and time tokens in format strings.
    return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g;
};
exports.getEra = function (date, eras) {
    if (!eras)
        return 0;
    var start, ticks = date.getTime();
    for (var i = 0, l = eras.length; i < l; i++) {
        start = eras[i].start;
        if (start === null || ticks >= start) {
            return i;
        }
    }
    return 0;
};
exports.getEraYear = function (date, cal, era, sortable) {
    var year = date.getFullYear();
    if (!sortable && cal.eras) {
        // convert normal gregorian year to era-shifted gregorian
        // year by subtracting the era offset
        year -= cal.eras[era].offset;
    }
    return year;
};
// parseExact
(function () {
    var expandYear, getDayIndex, getMonthIndex, getParseRegExp, outOfRange, toUpper, toUpperArray;
    expandYear = function (cal, year) {
        // expands 2-digit year into 4 digits.
        var now = new Date(), era = (0, exports.getEra)(now);
        if (year < 100) {
            var twoDigitYearMax = cal.twoDigitYearMax;
            twoDigitYearMax = typeof twoDigitYearMax === "string" ? new Date().getFullYear() % 100 + parseInt(twoDigitYearMax, 10) : twoDigitYearMax;
            var curr = (0, exports.getEraYear)(now, cal, era);
            year += curr - (curr % 100);
            if (year > twoDigitYearMax) {
                year -= 100;
            }
        }
        return year;
    };
    getDayIndex = function (cal, value, abbr) {
        var ret, days = cal.days, upperDays = cal._upperDays;
        if (!upperDays) {
            cal._upperDays = upperDays = [
                toUpperArray(days.names),
                toUpperArray(days.namesAbbr),
                toUpperArray(days.namesShort)
            ];
        }
        value = toUpper(value);
        if (abbr) {
            ret = (0, exports.arrayIndexOf)(upperDays[1], value);
            if (ret === -1) {
                ret = (0, exports.arrayIndexOf)(upperDays[2], value);
            }
        }
        else {
            ret = (0, exports.arrayIndexOf)(upperDays[0], value);
        }
        return ret;
    };
    getMonthIndex = function (cal, value, abbr) {
        var months = cal.months, monthsGen = cal.monthsGenitive || cal.months, upperMonths = cal._upperMonths, upperMonthsGen = cal._upperMonthsGen;
        if (!upperMonths) {
            cal._upperMonths = upperMonths = [
                toUpperArray(months.names),
                toUpperArray(months.namesAbbr)
            ];
            cal._upperMonthsGen = upperMonthsGen = [
                toUpperArray(monthsGen.names),
                toUpperArray(monthsGen.namesAbbr)
            ];
        }
        value = toUpper(value);
        var i = (0, exports.arrayIndexOf)(abbr ? upperMonths[1] : upperMonths[0], value);
        if (i < 0) {
            i = (0, exports.arrayIndexOf)(abbr ? upperMonthsGen[1] : upperMonthsGen[0], value);
        }
        return i;
    };
    getParseRegExp = function (cal, format) {
        // converts a format string into a regular expression with groups that
        // can be used to extract date fields from a date string.
        // check for a cached parse regex.
        var re = cal._parseRegExp;
        if (!re) {
            cal._parseRegExp = re = {};
        }
        else {
            var reFormat = re[format];
            if (reFormat) {
                return reFormat;
            }
        }
        // expand single digit formats, then escape regular expression characters.
        var expFormat = (0, exports.expandFormat)(cal, format).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), regexp = ["^"], groups = [], index = 0, quoteCount = 0, tokenRegExp = (0, exports.getTokenRegExp)(), match;
        // iterate through each date token found.
        while ((match = tokenRegExp.exec(expFormat)) !== null) {
            var preMatch = expFormat.slice(index, match.index);
            index = tokenRegExp.lastIndex;
            // don't replace any matches that occur inside a string literal.
            quoteCount += (0, exports.appendPreOrPostMatch)(preMatch, regexp);
            if (quoteCount % 2) {
                regexp.push(match[0]);
                continue;
            }
            // add a regex group for the token.
            var m = match[0], len = m.length, add;
            switch (m) {
                case "dddd":
                case "ddd":
                case "MMMM":
                case "MMM":
                case "gg":
                case "g":
                    add = "(\\D+)";
                    break;
                case "tt":
                case "t":
                    add = "(\\D*)";
                    break;
                case "yyyy":
                case "fff":
                case "ff":
                case "f":
                    add = "(\\d{" + len + "})";
                    break;
                case "dd":
                case "d":
                case "MM":
                case "M":
                case "yy":
                case "y":
                case "HH":
                case "H":
                case "hh":
                case "h":
                case "mm":
                case "m":
                case "ss":
                case "s":
                    add = "(\\d\\d?)";
                    break;
                case "zzz":
                    add = "([+-]?\\d\\d?:\\d{2})";
                    break;
                case "zz":
                case "z":
                    add = "([+-]?\\d\\d?)";
                    break;
                case "/":
                    add = "(\\" + cal["/"] + ")";
                    break;
                default:
                    throw "Invalid date format pattern \'" + m + "\'.";
            }
            if (add) {
                regexp.push(add);
            }
            groups.push(match[0]);
        }
        (0, exports.appendPreOrPostMatch)(expFormat.slice(index), regexp);
        regexp.push("$");
        // allow whitespace to differ when matching formats.
        var regexpStr = regexp.join("").replace(/\s+/g, "\\s+"), parseRegExp = { "regExp": regexpStr, "groups": groups };
        // cache the regex for this format.
        return re[format] = parseRegExp;
    };
    outOfRange = function (value, low, high) {
        return value < low || value > high;
    };
    toUpper = function (value) {
        // "he-IL" has non-breaking space in weekday names.
        return value.split("\u00A0").join(" ").toUpperCase();
    };
    toUpperArray = function (arr) {
        var results = [];
        for (var i = 0, l = arr.length; i < l; i++) {
            results[i] = toUpper(arr[i]);
        }
        return results;
    };
    exports.parseExact = function (value, format, culture) {
        // try to parse the date string by matching against the format string
        // while using the specified culture for date field names.
        value = (0, exports.trim)(value);
        var cal = culture.calendar, 
        // convert date formats into regular expressions with groupings.
        // use the regexp to determine the input format and extract the date fields.
        parseInfo = getParseRegExp(cal, format), match = new RegExp(parseInfo.regExp).exec(value);
        if (match === null) {
            return null;
        }
        // found a date format that matches the input.
        var groups = parseInfo.groups, era = null, year = null, month = null, date = null, weekDay = null, hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null, pmHour = false;
        // iterate the format groups to extract and set the date fields.
        for (var j = 0, jl = groups.length; j < jl; j++) {
            var matchGroup = match[j + 1];
            if (matchGroup) {
                var current = groups[j], clength = current.length, matchInt = parseInt(matchGroup, 10);
                switch (current) {
                    case "dd":
                    case "d":
                        // Day of month.
                        date = matchInt;
                        // check that date is generally in valid range, also checking overflow below.
                        if (outOfRange(date, 1, 31))
                            return null;
                        break;
                    case "MMM":
                    case "MMMM":
                        month = getMonthIndex(cal, matchGroup, clength === 3);
                        if (outOfRange(month, 0, 11))
                            return null;
                        break;
                    case "M":
                    case "MM":
                        // Month.
                        month = matchInt - 1;
                        if (outOfRange(month, 0, 11))
                            return null;
                        break;
                    case "y":
                    case "yy":
                    case "yyyy":
                        year = clength < 4 ? expandYear(cal, matchInt) : matchInt;
                        if (outOfRange(year, 0, 9999))
                            return null;
                        break;
                    case "h":
                    case "hh":
                        // Hours (12-hour clock).
                        hour = matchInt;
                        if (hour === 12)
                            hour = 0;
                        if (outOfRange(hour, 0, 11))
                            return null;
                        break;
                    case "H":
                    case "HH":
                        // Hours (24-hour clock).
                        hour = matchInt;
                        if (outOfRange(hour, 0, 23))
                            return null;
                        break;
                    case "m":
                    case "mm":
                        // Minutes.
                        min = matchInt;
                        if (outOfRange(min, 0, 59))
                            return null;
                        break;
                    case "s":
                    case "ss":
                        // Seconds.
                        sec = matchInt;
                        if (outOfRange(sec, 0, 59))
                            return null;
                        break;
                    case "tt":
                    case "t":
                        // AM/PM designator.
                        // see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
                        // the AM tokens. If not, fail the parse for this format.
                        pmHour = cal.PM && (matchGroup === cal.PM[0] || matchGroup === cal.PM[1] || matchGroup === cal.PM[2]);
                        if (!pmHour && (!cal.AM || (matchGroup !== cal.AM[0] && matchGroup !== cal.AM[1] && matchGroup !== cal.AM[2])))
                            return null;
                        break;
                    case "f":
                    // Deciseconds.
                    case "ff":
                    // Centiseconds.
                    case "fff":
                        // Milliseconds.
                        msec = matchInt * Math.pow(10, 3 - clength);
                        if (outOfRange(msec, 0, 999))
                            return null;
                        break;
                    case "ddd":
                    // Day of week.
                    case "dddd":
                        // Day of week.
                        weekDay = getDayIndex(cal, matchGroup, clength === 3);
                        if (outOfRange(weekDay, 0, 6))
                            return null;
                        break;
                    case "zzz":
                        // Time zone offset in +/- hours:min.
                        var offsets = matchGroup.split(/:/);
                        if (offsets.length !== 2)
                            return null;
                        hourOffset = parseInt(offsets[0], 10);
                        if (outOfRange(hourOffset, -12, 13))
                            return null;
                        var minOffset = parseInt(offsets[1], 10);
                        if (outOfRange(minOffset, 0, 59))
                            return null;
                        tzMinOffset = (hourOffset * 60) + ((0, exports.startsWith)(matchGroup, "-") ? -minOffset : minOffset);
                        break;
                    case "z":
                    case "zz":
                        // Time zone offset in +/- hours.
                        hourOffset = matchInt;
                        if (outOfRange(hourOffset, -12, 13))
                            return null;
                        tzMinOffset = hourOffset * 60;
                        break;
                    case "g":
                    case "gg":
                        var eraName = matchGroup;
                        if (!eraName || !cal.eras)
                            return null;
                        eraName = (0, exports.trim)(eraName.toLowerCase());
                        for (var i = 0, l = cal.eras.length; i < l; i++) {
                            if (eraName === cal.eras[i].name.toLowerCase()) {
                                era = i;
                                break;
                            }
                        }
                        // could not find an era with that name
                        if (era === null)
                            return null;
                        break;
                }
            }
        }
        var result = new Date(), defaultYear, convert = cal.convert;
        defaultYear = convert ? convert.fromGregorian(result)[0] : result.getFullYear();
        if (year === null) {
            year = defaultYear;
        }
        else if (cal.eras) {
            // year must be shifted to normal gregorian year
            // but not if year was not specified, its already normal gregorian
            // per the main if clause above.
            year += cal.eras[(era || 0)].offset;
        }
        // set default day and month to 1 and January, so if unspecified, these are the defaults
        // instead of the current day/month.
        if (month === null) {
            month = 0;
        }
        if (date === null) {
            date = 1;
        }
        // now have year, month, and date, but in the culture's calendar.
        // convert to gregorian if necessary
        if (convert) {
            result = convert.toGregorian(year, month, date);
            // conversion failed, must be an invalid match
            if (result === null)
                return null;
        }
        else {
            // have to set year, month and date together to avoid overflow based on current date.
            result.setFullYear(year, month, date);
            // check to see if date overflowed for specified month (only checked 1-31 above).
            if (result.getDate() !== date)
                return null;
            // invalid day of week.
            if (weekDay !== null && result.getDay() !== weekDay) {
                return null;
            }
        }
        // if pm designator token was found make sure the hours fit the 24-hour clock.
        if (pmHour && hour < 12) {
            hour += 12;
        }
        result.setHours(hour, min, sec, msec);
        if (tzMinOffset !== null) {
            // adjust timezone to utc before applying local offset.
            var adjustedMin = result.getMinutes() - (tzMinOffset + result.getTimezoneOffset());
            // Safari limits hours and minutes to the range of -127 to 127.	 We need to use setHours
            // to ensure both these fields will not exceed this range.	adjustedMin will range
            // somewhere between -1440 and 1500, so we only need to split this into hours.
            result.setHours(result.getHours() + parseInt((adjustedMin / 60).toString(), 10), adjustedMin % 60);
        }
        return result;
    };
}());
exports.parseNegativePattern = function (value, nf, negativePattern) {
    var neg = nf["-"], pos = nf["+"], ret;
    switch (negativePattern) {
        case "n -":
            neg = " " + neg;
            pos = " " + pos;
        // fall through
        case "n-":
            if ((0, exports.endsWith)(value, neg)) {
                ret = ["-", value.substring(0, value.length - neg.length)];
            }
            else if ((0, exports.endsWith)(value, pos)) {
                ret = ["+", value.substring(0, value.length - pos.length)];
            }
            break;
        case "- n":
            neg += " ";
            pos += " ";
        // fall through
        case "-n":
            if ((0, exports.startsWith)(value, neg)) {
                ret = ["-", value.substring(neg.length)];
            }
            else if ((0, exports.startsWith)(value, pos)) {
                ret = ["+", value.substring(pos.length)];
            }
            break;
        case "(n)":
            if ((0, exports.startsWith)(value, "(") && (0, exports.endsWith)(value, ")")) {
                ret = ["-", value.substring(1, value.length - 1)];
            }
            break;
    }
    return ret || ["", value];
};
//
// public instance functions
//
exports.Globalize.prototype.findClosestCulture = function (cultureSelector) {
    return exports.Globalize.findClosestCulture.call(this, cultureSelector);
};
exports.Globalize.prototype.format = function (value, format, cultureSelector) {
    return exports.Globalize.format.call(this, value, format, cultureSelector);
};
exports.Globalize.prototype.localize = function (key, cultureSelector) {
    return exports.Globalize.localize.call(this, key, cultureSelector);
};
exports.Globalize.prototype.parseInt = function (value, radix, cultureSelector) {
    return exports.Globalize.parseInt.call(this, value, radix, cultureSelector);
};
exports.Globalize.prototype.parseFloat = function (value, radix, cultureSelector) {
    return exports.Globalize.parseFloat.call(this, value, radix, cultureSelector);
};
exports.Globalize.prototype.culture = function (cultureSelector) {
    return exports.Globalize.culture.call(this, cultureSelector);
};
//
// public singleton functions
//
exports.Globalize.addCultureInfo = function (cultureName, baseCultureName, info) {
    var base = {}, isNew = false;
    if (typeof cultureName !== "string") {
        // cultureName argument is optional string. If not specified, assume info is first
        // and only argument. Specified info deep-extends current culture.
        info = cultureName;
        cultureName = this.culture().name;
        base = this.cultures[cultureName];
    }
    else if (typeof baseCultureName !== "string") {
        // baseCultureName argument is optional string. If not specified, assume info is second
        // argument. Specified info deep-extends specified culture.
        // If specified culture does not exist, create by deep-extending default
        info = baseCultureName;
        isNew = (this.cultures[cultureName] == null);
        base = this.cultures[cultureName] || this.cultures["default"];
    }
    else {
        // cultureName and baseCultureName specified. Assume a new culture is being created
        // by deep-extending an specified base culture
        isNew = true;
        base = this.cultures[baseCultureName];
    }
    this.cultures[cultureName] = (0, exports.extend)(true, {}, base, info);
    // Make the standard calendar the current culture if it's a new culture
    if (isNew) {
        this.cultures[cultureName].calendar = this.cultures[cultureName].calendars.standard;
    }
};
exports.Globalize.findClosestCulture = function (name) {
    var match;
    if (!name) {
        return this.cultures[this.cultureSelector] || this.cultures["default"];
    }
    if (typeof name === "string") {
        name = name.split(",");
    }
    if ((0, exports.isArray)(name)) {
        var lang, cultures = this.cultures, list = name, i, l = list.length, prioritized = [];
        for (i = 0; i < l; i++) {
            name = (0, exports.trim)(list[i]);
            var pri, parts = name.split(";");
            lang = (0, exports.trim)(parts[0]);
            if (parts.length === 1) {
                pri = 1;
            }
            else {
                name = (0, exports.trim)(parts[1]);
                if (name.indexOf("q=") === 0) {
                    name = name.substring(2);
                    pri = parseFloat(name);
                    pri = isNaN(pri) ? 0 : pri;
                }
                else {
                    pri = 1;
                }
            }
            prioritized.push({ lang: lang, pri: pri });
        }
        prioritized.sort(function (a, b) {
            return a.pri < b.pri ? 1 : -1;
        });
        // exact match
        for (i = 0; i < l; i++) {
            lang = prioritized[i].lang;
            match = cultures[lang];
            if (match) {
                return match;
            }
        }
        // neutral language match
        for (i = 0; i < l; i++) {
            lang = prioritized[i].lang;
            do {
                var index = lang.lastIndexOf("-");
                if (index === -1) {
                    break;
                }
                // strip off the last part. e.g. en-US => en
                lang = lang.substring(0, index);
                match = cultures[lang];
                if (match) {
                    return match;
                }
            } while (1);
        }
        // last resort: match first culture using that language
        for (i = 0; i < l; i++) {
            lang = prioritized[i].lang;
            for (var cultureKey in cultures) {
                var culture = cultures[cultureKey];
                if (culture.language == lang) {
                    return culture;
                }
            }
        }
    }
    else if (typeof name === "object") {
        return name;
    }
    return match || null;
};
exports.Globalize.format = function (value, format, cultureSelector) {
    var culture = this.findClosestCulture(cultureSelector);
    if (value instanceof Date) {
        value = (0, exports.formatDate)(value, format, culture);
    }
    else if (typeof value === "number") {
        value = (0, exports.formatNumber)(value, format, culture);
    }
    return value;
};
exports.Globalize.localize = function (key, cultureSelector) {
    return (this.findClosestCulture(cultureSelector).messages[key]
        ||
            this.cultures["default"].messages["key"]);
};
exports.Globalize.parseDate = function (value, formats, culture) {
    culture = this.findClosestCulture(culture);
    var date, prop, patterns;
    if (formats) {
        if (typeof formats === "string") {
            formats = [formats];
        }
        if (formats.length) {
            for (var i = 0, l = formats.length; i < l; i++) {
                var format = formats[i];
                if (format) {
                    date = (0, exports.parseExact)(value, format, culture);
                    if (date) {
                        break;
                    }
                }
            }
        }
    }
    else {
        patterns = culture.calendar.patterns;
        for (prop in patterns) {
            date = (0, exports.parseExact)(value, patterns[prop], culture);
            if (date) {
                break;
            }
        }
    }
    return date || null;
};
exports.Globalize.parseInt = function (value, radix, cultureSelector) {
    return Math.floor(exports.Globalize.parseFloat(value, radix, cultureSelector));
};
exports.Globalize.parseFloat = function (value, radix, cultureSelector) {
    // radix argument is optional
    if (typeof radix !== "number") {
        cultureSelector = radix;
        radix = 10;
    }
    var culture = this.findClosestCulture(cultureSelector);
    var ret = NaN, nf = culture.numberFormat;
    if (value.indexOf(culture.numberFormat.currency.symbol) > -1) {
        // remove currency symbol
        value = value.replace(culture.numberFormat.currency.symbol, "");
        // replace decimal seperator
        value = value.replace(culture.numberFormat.currency["."], culture.numberFormat["."]);
    }
    // trim leading and trailing whitespace
    value = (0, exports.trim)(value);
    // allow infinity or hexidecimal
    if (exports.regexInfinity.test(value)) {
        ret = parseFloat(value);
    }
    else if (!radix && exports.regexHex.test(value)) {
        ret = parseInt(value, 16);
    }
    else {
        var signInfo = (0, exports.parseNegativePattern)(value, nf, nf.pattern[0]), sign = signInfo[0], num = signInfo[1];
        // determine sign and number
        if (sign === "" && nf.pattern[0] !== "-n") {
            signInfo = (0, exports.parseNegativePattern)(value, nf, "-n");
            sign = signInfo[0];
            num = signInfo[1];
        }
        sign = sign || "+";
        // determine exponent and number
        var exponent, intAndFraction, exponentPos = num.indexOf("e");
        if (exponentPos < 0)
            exponentPos = num.indexOf("E");
        if (exponentPos < 0) {
            intAndFraction = num;
            exponent = null;
        }
        else {
            intAndFraction = num.substring(0, exponentPos);
            exponent = num.substring(exponentPos + 1);
        }
        // determine decimal position
        var integer, fraction, decSep = nf["."], decimalPos = intAndFraction.indexOf(decSep);
        if (decimalPos < 0) {
            integer = intAndFraction;
            fraction = null;
        }
        else {
            integer = intAndFraction.substring(0, decimalPos);
            fraction = intAndFraction.substring(decimalPos + decSep.length);
        }
        // handle groups (e.g. 1,000,000)
        var groupSep = nf[","];
        integer = integer.split(groupSep).join("");
        var altGroupSep = groupSep.replace(/\u00A0/g, " ");
        if (groupSep !== altGroupSep) {
            integer = integer.split(altGroupSep).join("");
        }
        // build a natively parsable number string
        var p = sign + integer;
        if (fraction !== null) {
            p += "." + fraction;
        }
        if (exponent !== null) {
            // exponent itself may have a number patternd
            var expSignInfo = (0, exports.parseNegativePattern)(exponent, nf, "-n");
            p += "e" + (expSignInfo[0] || "+") + expSignInfo[1];
        }
        if (exports.regexParseFloat.test(p)) {
            ret = parseFloat(p);
        }
    }
    return ret;
};
exports.Globalize.culture = function (cultureSelector) {
    // setter
    if (typeof cultureSelector !== "undefined") {
        this.cultureSelector = cultureSelector;
    }
    // getter
    return this.findClosestCulture(cultureSelector) || this.culture["default"];
};
//# sourceMappingURL=globalize.js.map

/***/ }),

/***/ 2594:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateTimeSequence = void 0;
var dateUtils = __webpack_require__(7042);
// powerbi.extensibility.utils.type
var powerbi_visuals_utils_typeutils_1 = __webpack_require__(2170);
var NumericSequence = powerbi_visuals_utils_typeutils_1.numericSequence.NumericSequence;
var NumericSequenceRange = powerbi_visuals_utils_typeutils_1.numericSequenceRange.NumericSequenceRange;
// powerbi.extensibility.utils.formatting
var iFormattingService_1 = __webpack_require__(1497);
// Repreasents the sequence of the dates/times
var DateTimeSequence = /** @class */ (function () {
    // Constructors
    // Creates new instance of the DateTimeSequence
    function DateTimeSequence(unit) {
        this.unit = unit;
        this.sequence = [];
        this.min = new Date("9999-12-31T23:59:59.999");
        this.max = new Date("0001-01-01T00:00:00.000");
    }
    // Methods
    /**
     * Add a new Date to a sequence.
     * @param date - date to add
     */
    DateTimeSequence.prototype.add = function (date) {
        if (date < this.min) {
            this.min = date;
        }
        if (date > this.max) {
            this.max = date;
        }
        this.sequence.push(date);
    };
    // Methods
    /**
     * Extends the sequence to cover new date range
     * @param min - new min to be covered by sequence
     * @param max - new max to be covered by sequence
     */
    DateTimeSequence.prototype.extendToCover = function (min, max) {
        var x = this.min;
        while (min < x) {
            x = DateTimeSequence.ADD_INTERVAL(x, -this.interval, this.unit);
            this.sequence.splice(0, 0, x);
        }
        this.min = x;
        x = this.max;
        while (x < max) {
            x = DateTimeSequence.ADD_INTERVAL(x, this.interval, this.unit);
            this.sequence.push(x);
        }
        this.max = x;
    };
    /**
     * Move the sequence to cover new date range
     * @param min - new min to be covered by sequence
     * @param max - new max to be covered by sequence
     */
    DateTimeSequence.prototype.moveToCover = function (min, max) {
        var delta = DateTimeSequence.getDelta(min, max, this.unit);
        var count = Math.floor(delta / this.interval);
        this.min = DateTimeSequence.ADD_INTERVAL(this.min, count * this.interval, this.unit);
        this.sequence = [];
        this.sequence.push(this.min);
        this.max = this.min;
        while (this.max < max) {
            this.max = DateTimeSequence.ADD_INTERVAL(this.max, this.interval, this.unit);
            this.sequence.push(this.max);
        }
    };
    // Static
    /**
     * Calculate a new DateTimeSequence
     * @param dataMin - Date representing min of the data range
     * @param dataMax - Date representing max of the data range
     * @param expectedCount - expected number of intervals in the sequence
     * @param unit - of the intervals in the sequence
     */
    DateTimeSequence.CALCULATE = function (dataMin, dataMax, expectedCount, unit) {
        if (!unit) {
            unit = DateTimeSequence.GET_INTERVAL_UNIT(dataMin, dataMax, expectedCount);
        }
        switch (unit) {
            case iFormattingService_1.DateTimeUnit.Year:
                return DateTimeSequence.CALCULATE_YEARS(dataMin, dataMax, expectedCount);
            case iFormattingService_1.DateTimeUnit.Month:
                return DateTimeSequence.CALCULATE_MONTHS(dataMin, dataMax, expectedCount);
            case iFormattingService_1.DateTimeUnit.Week:
                return DateTimeSequence.CALCULATE_WEEKS(dataMin, dataMax, expectedCount);
            case iFormattingService_1.DateTimeUnit.Day:
                return DateTimeSequence.CALCULATE_DAYS(dataMin, dataMax, expectedCount);
            case iFormattingService_1.DateTimeUnit.Hour:
                return DateTimeSequence.CALCULATE_HOURS(dataMin, dataMax, expectedCount);
            case iFormattingService_1.DateTimeUnit.Minute:
                return DateTimeSequence.CALCULATE_MINUTES(dataMin, dataMax, expectedCount);
            case iFormattingService_1.DateTimeUnit.Second:
                return DateTimeSequence.CALCULATE_SECONDS(dataMin, dataMax, expectedCount);
            case iFormattingService_1.DateTimeUnit.Millisecond:
                return DateTimeSequence.CALCULATE_MILLISECONDS(dataMin, dataMax, expectedCount);
        }
    };
    DateTimeSequence.CALCULATE_YEARS = function (dataMin, dataMax, expectedCount) {
        // Calculate range and sequence
        var yearsRange = NumericSequenceRange.calculateDataRange(dataMin.getFullYear(), dataMax.getFullYear(), false);
        // Calculate year sequence
        var sequence = NumericSequence.calculate(NumericSequenceRange.calculate(0, yearsRange.max - yearsRange.min), expectedCount, 0, null, null, [1, 2, 5]);
        var newMinYear = Math.floor(yearsRange.min / sequence.interval) * sequence.interval;
        var date = new Date(newMinYear, 0, 1);
        // Convert to date sequence
        return DateTimeSequence.fromNumericSequence(date, sequence, iFormattingService_1.DateTimeUnit.Year);
    };
    DateTimeSequence.CALCULATE_MONTHS = function (dataMin, dataMax, expectedCount) {
        // Calculate range
        var minYear = dataMin.getFullYear();
        var maxYear = dataMax.getFullYear();
        var minMonth = dataMin.getMonth();
        var maxMonth = (maxYear - minYear) * 12 + dataMax.getMonth();
        var date = new Date(minYear, 0, 1);
        // Calculate month sequence
        var sequence = NumericSequence.calculateUnits(minMonth, maxMonth, expectedCount, [1, 2, 3, 6, 12]);
        // Convert to date sequence
        return DateTimeSequence.fromNumericSequence(date, sequence, iFormattingService_1.DateTimeUnit.Month);
    };
    DateTimeSequence.CALCULATE_WEEKS = function (dataMin, dataMax, expectedCount) {
        var firstDayOfWeek = 0;
        var minDayOfWeek = dataMin.getDay();
        var dayOffset = (minDayOfWeek - firstDayOfWeek + 7) % 7;
        var minDay = dataMin.getDate() - dayOffset;
        // Calculate range
        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), minDay);
        var min = 0;
        var max = powerbi_visuals_utils_typeutils_1.double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, iFormattingService_1.DateTimeUnit.Week));
        // Calculate week sequence
        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 4, 8]);
        // Convert to date sequence
        return DateTimeSequence.fromNumericSequence(date, sequence, iFormattingService_1.DateTimeUnit.Week);
    };
    DateTimeSequence.CALCULATE_DAYS = function (dataMin, dataMax, expectedCount) {
        // Calculate range
        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
        var min = 0;
        var max = powerbi_visuals_utils_typeutils_1.double.ceilWithPrecision(DateTimeSequence.getDelta(dataMin, dataMax, iFormattingService_1.DateTimeUnit.Day));
        // Calculate day sequence
        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 7, 14]);
        // Convert to date sequence
        return DateTimeSequence.fromNumericSequence(date, sequence, iFormattingService_1.DateTimeUnit.Day);
    };
    DateTimeSequence.CALCULATE_HOURS = function (dataMin, dataMax, expectedCount) {
        // Calculate range
        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
        var min = powerbi_visuals_utils_typeutils_1.double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, iFormattingService_1.DateTimeUnit.Hour));
        var max = powerbi_visuals_utils_typeutils_1.double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, iFormattingService_1.DateTimeUnit.Hour));
        // Calculate hour sequence
        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 3, 6, 12, 24]);
        // Convert to date sequence
        return DateTimeSequence.fromNumericSequence(date, sequence, iFormattingService_1.DateTimeUnit.Hour);
    };
    DateTimeSequence.CALCULATE_MINUTES = function (dataMin, dataMax, expectedCount) {
        // Calculate range
        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours());
        var min = powerbi_visuals_utils_typeutils_1.double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, iFormattingService_1.DateTimeUnit.Minute));
        var max = powerbi_visuals_utils_typeutils_1.double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, iFormattingService_1.DateTimeUnit.Minute));
        // Calculate minutes numeric sequence
        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 3, 60 * 6, 60 * 12, 60 * 24]);
        // Convert to date sequence
        return DateTimeSequence.fromNumericSequence(date, sequence, iFormattingService_1.DateTimeUnit.Minute);
    };
    DateTimeSequence.CALCULATE_SECONDS = function (dataMin, dataMax, expectedCount) {
        // Calculate range
        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes());
        var min = powerbi_visuals_utils_typeutils_1.double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, iFormattingService_1.DateTimeUnit.Second));
        var max = powerbi_visuals_utils_typeutils_1.double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, iFormattingService_1.DateTimeUnit.Second));
        // Calculate minutes numeric sequence
        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 5, 60 * 10, 60 * 15, 60 * 30, 60 * 60]);
        // Convert to date sequence
        return DateTimeSequence.fromNumericSequence(date, sequence, iFormattingService_1.DateTimeUnit.Second);
    };
    DateTimeSequence.CALCULATE_MILLISECONDS = function (dataMin, dataMax, expectedCount) {
        // Calculate range
        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes(), dataMin.getSeconds());
        var min = DateTimeSequence.getDelta(date, dataMin, iFormattingService_1.DateTimeUnit.Millisecond);
        var max = DateTimeSequence.getDelta(date, dataMax, iFormattingService_1.DateTimeUnit.Millisecond);
        // Calculate milliseconds numeric sequence
        var sequence = NumericSequence.calculate(NumericSequenceRange.calculate(min, max), expectedCount, 0);
        // Convert to date sequence
        return DateTimeSequence.fromNumericSequence(date, sequence, iFormattingService_1.DateTimeUnit.Millisecond);
    };
    DateTimeSequence.ADD_INTERVAL = function (value, interval, unit) {
        interval = Math.round(interval);
        switch (unit) {
            case iFormattingService_1.DateTimeUnit.Year:
                return dateUtils.addYears(value, interval);
            case iFormattingService_1.DateTimeUnit.Month:
                return dateUtils.addMonths(value, interval);
            case iFormattingService_1.DateTimeUnit.Week:
                return dateUtils.addWeeks(value, interval);
            case iFormattingService_1.DateTimeUnit.Day:
                return dateUtils.addDays(value, interval);
            case iFormattingService_1.DateTimeUnit.Hour:
                return dateUtils.addHours(value, interval);
            case iFormattingService_1.DateTimeUnit.Minute:
                return dateUtils.addMinutes(value, interval);
            case iFormattingService_1.DateTimeUnit.Second:
                return dateUtils.addSeconds(value, interval);
            case iFormattingService_1.DateTimeUnit.Millisecond:
                return dateUtils.addMilliseconds(value, interval);
        }
    };
    DateTimeSequence.fromNumericSequence = function (date, sequence, unit) {
        var result = new DateTimeSequence(unit);
        for (var i = 0; i < sequence.sequence.length; i++) {
            var x = sequence.sequence[i];
            var d = DateTimeSequence.ADD_INTERVAL(date, x, unit);
            result.add(d);
        }
        result.interval = sequence.interval;
        result.intervalOffset = sequence.intervalOffset;
        return result;
    };
    DateTimeSequence.getDelta = function (min, max, unit) {
        var delta = 0;
        switch (unit) {
            case iFormattingService_1.DateTimeUnit.Year:
                delta = max.getFullYear() - min.getFullYear();
                break;
            case iFormattingService_1.DateTimeUnit.Month:
                delta = (max.getFullYear() - min.getFullYear()) * 12 + max.getMonth() - min.getMonth();
                break;
            case iFormattingService_1.DateTimeUnit.Week:
                delta = (max.getTime() - min.getTime()) / (7 * 24 * 3600000);
                break;
            case iFormattingService_1.DateTimeUnit.Day:
                delta = (max.getTime() - min.getTime()) / (24 * 3600000);
                break;
            case iFormattingService_1.DateTimeUnit.Hour:
                delta = (max.getTime() - min.getTime()) / 3600000;
                break;
            case iFormattingService_1.DateTimeUnit.Minute:
                delta = (max.getTime() - min.getTime()) / 60000;
                break;
            case iFormattingService_1.DateTimeUnit.Second:
                delta = (max.getTime() - min.getTime()) / 1000;
                break;
            case iFormattingService_1.DateTimeUnit.Millisecond:
                delta = max.getTime() - min.getTime();
                break;
        }
        return delta;
    };
    DateTimeSequence.GET_INTERVAL_UNIT = function (min, max, maxCount) {
        maxCount = Math.max(maxCount, 2);
        var totalDays = DateTimeSequence.getDelta(min, max, iFormattingService_1.DateTimeUnit.Day);
        if (totalDays > 356 && totalDays >= 30 * 6 * maxCount)
            return iFormattingService_1.DateTimeUnit.Year;
        if (totalDays > 60 && totalDays > 7 * maxCount)
            return iFormattingService_1.DateTimeUnit.Month;
        if (totalDays > 14 && totalDays > 2 * maxCount)
            return iFormattingService_1.DateTimeUnit.Week;
        var totalHours = DateTimeSequence.getDelta(min, max, iFormattingService_1.DateTimeUnit.Hour);
        if (totalDays > 2 && totalHours > 12 * maxCount)
            return iFormattingService_1.DateTimeUnit.Day;
        if (totalHours >= 24 && totalHours >= maxCount)
            return iFormattingService_1.DateTimeUnit.Hour;
        var totalMinutes = DateTimeSequence.getDelta(min, max, iFormattingService_1.DateTimeUnit.Minute);
        if (totalMinutes > 2 && totalMinutes >= maxCount)
            return iFormattingService_1.DateTimeUnit.Minute;
        var totalSeconds = DateTimeSequence.getDelta(min, max, iFormattingService_1.DateTimeUnit.Second);
        if (totalSeconds > 2 && totalSeconds >= 0.8 * maxCount)
            return iFormattingService_1.DateTimeUnit.Second;
        var totalMilliseconds = DateTimeSequence.getDelta(min, max, iFormattingService_1.DateTimeUnit.Millisecond);
        if (totalMilliseconds > 0)
            return iFormattingService_1.DateTimeUnit.Millisecond;
        // If the size of the range is 0 we need to guess the unit based on the date's non-zero values starting with milliseconds
        var date = min;
        if (date.getMilliseconds() !== 0)
            return iFormattingService_1.DateTimeUnit.Millisecond;
        if (date.getSeconds() !== 0)
            return iFormattingService_1.DateTimeUnit.Second;
        if (date.getMinutes() !== 0)
            return iFormattingService_1.DateTimeUnit.Minute;
        if (date.getHours() !== 0)
            return iFormattingService_1.DateTimeUnit.Hour;
        if (date.getDate() !== 1)
            return iFormattingService_1.DateTimeUnit.Day;
        if (date.getMonth() !== 0)
            return iFormattingService_1.DateTimeUnit.Month;
        return iFormattingService_1.DateTimeUnit.Year;
    };
    // Constants
    DateTimeSequence.MIN_COUNT = 1;
    DateTimeSequence.MAX_COUNT = 1000;
    return DateTimeSequence;
}());
exports.DateTimeSequence = DateTimeSequence;
//# sourceMappingURL=dateTimeSequence.js.map

/***/ }),

/***/ 7042:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addMilliseconds = exports.addSeconds = exports.addMinutes = exports.addHours = exports.addDays = exports.addWeeks = exports.addMonths = exports.addYears = void 0;
// dateUtils module provides DateTimeSequence with set of additional date manipulation routines
var MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var MonthDaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/**
 * Returns bool indicating weither the provided year is a leap year.
 * @param year - year value
 */
function isLeap(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
/**
 * Returns number of days in the provided year/month.
 * @param year - year value
 * @param month - month value
 */
function getMonthDays(year, month) {
    return isLeap(year) ? MonthDaysLeap[month] : MonthDays[month];
}
/**
 * Adds a specified number of years to the provided date.
 * @param date - date value
 * @param yearDelta - number of years to add
 */
function addYears(date, yearDelta) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var isLeapDay = month === 2 && day === 29;
    var result = new Date(date.getTime());
    year = year + yearDelta;
    if (isLeapDay && !isLeap(year)) {
        day = 28;
    }
    result.setFullYear(year, month, day);
    return result;
}
exports.addYears = addYears;
/**
 * Adds a specified number of months to the provided date.
 * @param date - date value
 * @param monthDelta - number of months to add
 */
function addMonths(date, monthDelta) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var result = new Date(date.getTime());
    year += (monthDelta - (monthDelta % 12)) / 12;
    month += monthDelta % 12;
    // VSTS 1325771: Certain column charts don't display any data
    // Wrap arround the month if is after december (value 11)
    if (month > 11) {
        month = month % 12;
        year++;
    }
    day = Math.min(day, getMonthDays(year, month));
    result.setFullYear(year, month, day);
    return result;
}
exports.addMonths = addMonths;
/**
 * Adds a specified number of weeks to the provided date.
 * @param date - date value
 * @param weeks - number of weeks to add
 */
function addWeeks(date, weeks) {
    return addDays(date, weeks * 7);
}
exports.addWeeks = addWeeks;
/**
 * Adds a specified number of days to the provided date.
 * @param date - date value
 * @param days - number of days to add
 */
function addDays(date, days) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var result = new Date(date.getTime());
    result.setFullYear(year, month, day + days);
    return result;
}
exports.addDays = addDays;
/**
 * Adds a specified number of hours to the provided date.
 * @param date - date value
 * @param hours - number of hours to add
 */
function addHours(date, hours) {
    return new Date(date.getTime() + hours * 3600000);
}
exports.addHours = addHours;
/**
 * Adds a specified number of minutes to the provided date.
 * @param date - date value
 * @param minutes - number of minutes to add
 */
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
exports.addMinutes = addMinutes;
/**
 * Adds a specified number of seconds to the provided date.
 * @param date - date value
 * @param seconds - number of seconds to add
 */
function addSeconds(date, seconds) {
    return new Date(date.getTime() + seconds * 1000);
}
exports.addSeconds = addSeconds;
/**
 * Adds a specified number of milliseconds to the provided date.
 * @param date - date value
 * @param milliseconds - number of milliseconds to add
 */
function addMilliseconds(date, milliseconds) {
    return new Date(date.getTime() + milliseconds);
}
exports.addMilliseconds = addMilliseconds;
//# sourceMappingURL=dateUtils.js.map

/***/ }),

/***/ 7254:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataLabelsDisplayUnitSystem = exports.WholeUnitsDisplayUnitSystem = exports.DefaultDisplayUnitSystem = exports.NoDisplayUnitSystem = exports.DisplayUnitSystem = exports.DisplayUnit = void 0;
/* eslint-disable no-useless-escape */
var formattingService_1 = __webpack_require__(5394);
var powerbi_visuals_utils_typeutils_1 = __webpack_require__(2170);
// Constants
var maxExponent = 24;
var defaultScientificBigNumbersBoundary = 1E15;
var scientificSmallNumbersBoundary = 1E-4;
var PERCENTAGE_FORMAT = "%";
var SCIENTIFIC_FORMAT = "E+0";
var DEFAULT_SCIENTIFIC_FORMAT = "0.##" + SCIENTIFIC_FORMAT;
// Regular expressions
/**
 * This regex looks for strings that match one of the following conditions:
 *   - Optionally contain "0", "#", followed by a period, followed by at least one "0" or "#" (Ex. ###,000.###)
 *   - Contains at least one of "0", "#", or "," (Ex. ###,000)
 *   - Contain a "g" (indicates to use the general .NET numeric format string)
 * The entire string (start to end) must match, and the match is not case-sensitive.
 */
var SUPPORTED_SCIENTIFIC_FORMATS = /^([0\#,]*\.[0\#]+|[0\#,]+|g)$/i;
var DisplayUnit = /** @class */ (function () {
    function DisplayUnit() {
    }
    // Methods
    DisplayUnit.prototype.project = function (value) {
        if (this.value) {
            return powerbi_visuals_utils_typeutils_1.double.removeDecimalNoise(value / this.value);
        }
        else {
            return value;
        }
    };
    DisplayUnit.prototype.reverseProject = function (value) {
        if (this.value) {
            return value * this.value;
        }
        else {
            return value;
        }
    };
    DisplayUnit.prototype.isApplicableTo = function (value) {
        value = Math.abs(value);
        var precision = powerbi_visuals_utils_typeutils_1.double.getPrecision(value, 3);
        return powerbi_visuals_utils_typeutils_1.double.greaterOrEqualWithPrecision(value, this.applicableRangeMin, precision) && powerbi_visuals_utils_typeutils_1.double.lessWithPrecision(value, this.applicableRangeMax, precision);
    };
    DisplayUnit.prototype.isScaling = function () {
        return this.value > 1;
    };
    return DisplayUnit;
}());
exports.DisplayUnit = DisplayUnit;
var DisplayUnitSystem = /** @class */ (function () {
    // Constructor
    function DisplayUnitSystem(units) {
        this.units = units ? units : [];
    }
    Object.defineProperty(DisplayUnitSystem.prototype, "title", {
        // Properties
        get: function () {
            return this.displayUnit ? this.displayUnit.title : undefined;
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    DisplayUnitSystem.prototype.update = function (value) {
        if (value === undefined)
            return;
        this.unitBaseValue = value;
        this.displayUnit = this.findApplicableDisplayUnit(value);
    };
    DisplayUnitSystem.prototype.findApplicableDisplayUnit = function (value) {
        for (var _i = 0, _a = this.units; _i < _a.length; _i++) {
            var unit = _a[_i];
            if (unit.isApplicableTo(value))
                return unit;
        }
        return undefined;
    };
    DisplayUnitSystem.prototype.format = function (value, format, decimals, trailingZeros, cultureSelector) {
        decimals = this.getNumberOfDecimalsForFormatting(format, decimals);
        var nonScientificFormat = "";
        if (this.isFormatSupported(format)
            && !this.hasScientitifcFormat(format)
            && this.isScalingUnit()
            && this.shouldRespectScalingUnit(format)) {
            value = this.displayUnit.project(value);
            nonScientificFormat = this.displayUnit.labelFormat;
        }
        return this.formatHelper({
            value: value,
            nonScientificFormat: nonScientificFormat,
            format: format,
            decimals: decimals,
            trailingZeros: trailingZeros,
            cultureSelector: cultureSelector
        });
    };
    DisplayUnitSystem.prototype.isFormatSupported = function (format) {
        return !DisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
    };
    DisplayUnitSystem.prototype.isPercentageFormat = function (format) {
        return format && format.indexOf(PERCENTAGE_FORMAT) >= 0;
    };
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    DisplayUnitSystem.prototype.shouldRespectScalingUnit = function (format) {
        return true;
    };
    DisplayUnitSystem.prototype.getNumberOfDecimalsForFormatting = function (format, decimals) {
        return decimals;
    };
    DisplayUnitSystem.prototype.isScalingUnit = function () {
        return this.displayUnit && this.displayUnit.isScaling();
    };
    DisplayUnitSystem.prototype.formatHelper = function (options) {
        var value = options.value, cultureSelector = options.cultureSelector, decimals = options.decimals, trailingZeros = options.trailingZeros;
        var nonScientificFormat = options.nonScientificFormat, format = options.format;
        // If the format is "general" and we want to override the number of decimal places then use the default numeric format string.
        if ((format === "g" || format === "G") && decimals != null) {
            format = "#,0.00";
        }
        format = formattingService_1.numberFormat.addDecimalsToFormat(format, decimals, trailingZeros);
        if (format && !formattingService_1.formattingService.isStandardNumberFormat(format)) {
            return formattingService_1.formattingService.formatNumberWithCustomOverride(value, format, nonScientificFormat, cultureSelector);
        }
        if (!format) {
            format = "G";
        }
        if (!nonScientificFormat) {
            nonScientificFormat = "{0}";
        }
        var text = formattingService_1.formattingService.formatValue(value, format, cultureSelector);
        return formattingService_1.formattingService.format(nonScientificFormat, [text]);
    };
    //  Formats a single value by choosing an appropriate base for the DisplayUnitSystem before formatting.
    DisplayUnitSystem.prototype.formatSingleValue = function (value, format, decimals, trailingZeros, cultureSelector) {
        // Change unit base to a value appropriate for this value
        this.update(this.shouldUseValuePrecision(value) ? powerbi_visuals_utils_typeutils_1.double.getPrecision(value, 8) : value);
        return this.format(value, format, decimals, trailingZeros, cultureSelector);
    };
    DisplayUnitSystem.prototype.shouldUseValuePrecision = function (value) {
        if (this.units.length === 0)
            return true;
        // Check if the value is big enough to have a valid unit by checking against the smallest unit (that it's value bigger than 1).
        var applicableRangeMin = 0;
        for (var i = 0; i < this.units.length; i++) {
            if (this.units[i].isScaling()) {
                applicableRangeMin = this.units[i].applicableRangeMin;
                break;
            }
        }
        return Math.abs(value) < applicableRangeMin;
    };
    DisplayUnitSystem.prototype.isScientific = function (value) {
        return value < -defaultScientificBigNumbersBoundary || value > defaultScientificBigNumbersBoundary ||
            (-scientificSmallNumbersBoundary < value && value < scientificSmallNumbersBoundary && value !== 0);
    };
    DisplayUnitSystem.prototype.hasScientitifcFormat = function (format) {
        return format && format.toUpperCase().indexOf("E") !== -1;
    };
    DisplayUnitSystem.prototype.supportsScientificFormat = function (format) {
        if (format)
            return SUPPORTED_SCIENTIFIC_FORMATS.test(format);
        return true;
    };
    DisplayUnitSystem.prototype.shouldFallbackToScientific = function (value, format) {
        return !this.hasScientitifcFormat(format)
            && this.supportsScientificFormat(format)
            && this.isScientific(value);
    };
    DisplayUnitSystem.prototype.getScientificFormat = function (data, format, decimals, trailingZeros) {
        // Use scientific format outside of the range
        if (this.isFormatSupported(format) && this.shouldFallbackToScientific(data, format)) {
            var numericFormat = formattingService_1.numberFormat.getNumericFormat(data, format);
            if (decimals)
                numericFormat = formattingService_1.numberFormat.addDecimalsToFormat(numericFormat ? numericFormat : "0", Math.abs(decimals), trailingZeros);
            if (numericFormat)
                return numericFormat + SCIENTIFIC_FORMAT;
            else
                return DEFAULT_SCIENTIFIC_FORMAT;
        }
        return format;
    };
    DisplayUnitSystem.UNSUPPORTED_FORMATS = /^(p\d*)|(e\d*)$/i;
    return DisplayUnitSystem;
}());
exports.DisplayUnitSystem = DisplayUnitSystem;
// Provides a unit system that is defined by formatting in the model, and is suitable for visualizations shown in single number visuals in explore mode.
var NoDisplayUnitSystem = /** @class */ (function (_super) {
    __extends(NoDisplayUnitSystem, _super);
    // Constructor
    function NoDisplayUnitSystem() {
        return _super.call(this, []) || this;
    }
    return NoDisplayUnitSystem;
}(DisplayUnitSystem));
exports.NoDisplayUnitSystem = NoDisplayUnitSystem;
/** Provides a unit system that creates a more concise format for displaying values. This is suitable for most of the cases where
    we are showing values (chart axes) and as such it is the default unit system. */
var DefaultDisplayUnitSystem = /** @class */ (function (_super) {
    __extends(DefaultDisplayUnitSystem, _super);
    // Constructor
    function DefaultDisplayUnitSystem(unitLookup) {
        return _super.call(this, DefaultDisplayUnitSystem.getUnits(unitLookup)) || this;
    }
    // Methods
    DefaultDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros, cultureSelector) {
        format = this.getScientificFormat(data, format, decimals, trailingZeros);
        return _super.prototype.format.call(this, data, format, decimals, trailingZeros, cultureSelector);
    };
    DefaultDisplayUnitSystem.RESET = function () {
        DefaultDisplayUnitSystem.units = null;
    };
    DefaultDisplayUnitSystem.getUnits = function (unitLookup) {
        if (!DefaultDisplayUnitSystem.units) {
            DefaultDisplayUnitSystem.units = createDisplayUnits(unitLookup, function (value, previousUnitValue, min) {
                // When dealing with millions/billions/trillions we need to switch to millions earlier: for example instead of showing 100K 200K 300K we should show 0.1M 0.2M 0.3M etc
                if (value - previousUnitValue >= 1000) {
                    return value / 10;
                }
                return min;
            });
            // Ensure last unit has max of infinity
            DefaultDisplayUnitSystem.units[DefaultDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
        }
        return DefaultDisplayUnitSystem.units;
    };
    return DefaultDisplayUnitSystem;
}(DisplayUnitSystem));
exports.DefaultDisplayUnitSystem = DefaultDisplayUnitSystem;
/** Provides a unit system that creates a more concise format for displaying values, but only allows showing a unit if we have at least
    one of those units (e.g. 0.9M is not allowed since it's less than 1 million). This is suitable for cases such as dashboard tiles
    where we have restricted space but do not want to show partial units. */
var WholeUnitsDisplayUnitSystem = /** @class */ (function (_super) {
    __extends(WholeUnitsDisplayUnitSystem, _super);
    // Constructor
    function WholeUnitsDisplayUnitSystem(unitLookup) {
        return _super.call(this, WholeUnitsDisplayUnitSystem.getUnits(unitLookup)) || this;
    }
    WholeUnitsDisplayUnitSystem.RESET = function () {
        WholeUnitsDisplayUnitSystem.units = null;
    };
    WholeUnitsDisplayUnitSystem.getUnits = function (unitLookup) {
        if (!WholeUnitsDisplayUnitSystem.units) {
            WholeUnitsDisplayUnitSystem.units = createDisplayUnits(unitLookup);
            // Ensure last unit has max of infinity
            WholeUnitsDisplayUnitSystem.units[WholeUnitsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
        }
        return WholeUnitsDisplayUnitSystem.units;
    };
    WholeUnitsDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros, cultureSelector) {
        format = this.getScientificFormat(data, format, decimals, trailingZeros);
        return _super.prototype.format.call(this, data, format, decimals, trailingZeros, cultureSelector);
    };
    return WholeUnitsDisplayUnitSystem;
}(DisplayUnitSystem));
exports.WholeUnitsDisplayUnitSystem = WholeUnitsDisplayUnitSystem;
var DataLabelsDisplayUnitSystem = /** @class */ (function (_super) {
    __extends(DataLabelsDisplayUnitSystem, _super);
    function DataLabelsDisplayUnitSystem(unitLookup) {
        return _super.call(this, DataLabelsDisplayUnitSystem.getUnits(unitLookup)) || this;
    }
    DataLabelsDisplayUnitSystem.prototype.isFormatSupported = function (format) {
        return !DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
    };
    DataLabelsDisplayUnitSystem.getUnits = function (unitLookup) {
        if (!DataLabelsDisplayUnitSystem.units) {
            var units = [];
            var adjustMinBasedOnPreviousUnit = function (value, previousUnitValue, min) {
                // Never returns true, we are always ignoring
                // We do not early switch (e.g. 100K instead of 0.1M)
                // Intended? If so, remove this function, otherwise, remove if statement
                if (value === -1)
                    if (value - previousUnitValue >= 1000) {
                        return value / 10;
                    }
                return min;
            };
            // Add Auto & None
            var names = unitLookup(-1);
            addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
            names = unitLookup(0);
            addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
            // Add normal units
            DataLabelsDisplayUnitSystem.units = units.concat(createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit));
            // Ensure last unit has max of infinity
            DataLabelsDisplayUnitSystem.units[DataLabelsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
        }
        return DataLabelsDisplayUnitSystem.units;
    };
    DataLabelsDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros, cultureSelector) {
        format = this.getScientificFormat(data, format, decimals, trailingZeros);
        return _super.prototype.format.call(this, data, format, decimals, trailingZeros, cultureSelector);
    };
    // Constants
    DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE = 0;
    DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE = 1;
    DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS = /^(e\d*)$/i;
    return DataLabelsDisplayUnitSystem;
}(DisplayUnitSystem));
exports.DataLabelsDisplayUnitSystem = DataLabelsDisplayUnitSystem;
function createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit) {
    var units = [];
    for (var i = 3; i < maxExponent; i++) {
        var names = unitLookup(i);
        if (names)
            addUnitIfNonEmpty(units, powerbi_visuals_utils_typeutils_1.double.pow10(i), names.title, names.format, adjustMinBasedOnPreviousUnit);
    }
    return units;
}
function addUnitIfNonEmpty(units, value, title, labelFormat, adjustMinBasedOnPreviousUnit) {
    if (title || labelFormat) {
        var min = value;
        if (units.length > 0) {
            var previousUnit = units[units.length - 1];
            if (adjustMinBasedOnPreviousUnit)
                min = adjustMinBasedOnPreviousUnit(value, previousUnit.value, min);
            previousUnit.applicableRangeMax = min;
        }
        var unit = new DisplayUnit();
        unit.value = value;
        unit.applicableRangeMin = min;
        unit.applicableRangeMax = min * 1000;
        unit.title = title;
        unit.labelFormat = labelFormat;
        units.push(unit);
    }
}
//# sourceMappingURL=displayUnitSystem.js.map

/***/ }),

/***/ 6585:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DisplayUnitSystemType = void 0;
// The system used to determine display units used during formatting
var DisplayUnitSystemType;
(function (DisplayUnitSystemType) {
    // Default display unit system, which saves space by using units such as K, M, bn with PowerView rules for when to pick a unit. Suitable for chart axes.
    DisplayUnitSystemType[DisplayUnitSystemType["Default"] = 0] = "Default";
    // A verbose display unit system that will only respect the formatting defined in the model. Suitable for explore mode single-value cards.
    DisplayUnitSystemType[DisplayUnitSystemType["Verbose"] = 1] = "Verbose";
    /**
     * A display unit system that uses units such as K, M, bn if we have at least one of those units (e.g. 0.9M is not valid as it's less than 1 million).
     * Suitable for dashboard tile cards
     */
    DisplayUnitSystemType[DisplayUnitSystemType["WholeUnits"] = 2] = "WholeUnits";
    // A display unit system that also contains Auto and None units for data labels
    DisplayUnitSystemType[DisplayUnitSystemType["DataLabels"] = 3] = "DataLabels";
})(DisplayUnitSystemType = exports.DisplayUnitSystemType || (exports.DisplayUnitSystemType = {}));
//# sourceMappingURL=displayUnitSystemType.js.map

/***/ }),

/***/ 9078:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Family = exports.fallbackFonts = void 0;
var familyInfo_1 = __webpack_require__(8069);
exports.fallbackFonts = ["helvetica", "arial", "sans-serif"];
exports.Family = {
    light: new familyInfo_1.FamilyInfo(exports.fallbackFonts),
    semilight: new familyInfo_1.FamilyInfo(exports.fallbackFonts),
    regular: new familyInfo_1.FamilyInfo(exports.fallbackFonts),
    semibold: new familyInfo_1.FamilyInfo(exports.fallbackFonts),
    bold: new familyInfo_1.FamilyInfo(exports.fallbackFonts),
    lightSecondary: new familyInfo_1.FamilyInfo(exports.fallbackFonts),
    regularSecondary: new familyInfo_1.FamilyInfo(exports.fallbackFonts),
    boldSecondary: new familyInfo_1.FamilyInfo(exports.fallbackFonts)
};
//# sourceMappingURL=family.js.map

/***/ }),

/***/ 8069:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FamilyInfo = void 0;
var FamilyInfo = /** @class */ (function () {
    function FamilyInfo(families) {
        this.families = families;
    }
    Object.defineProperty(FamilyInfo.prototype, "family", {
        /**
         * Gets the first font "wf_" font family since it will always be loaded.
         */
        get: function () {
            return this.getFamily();
        },
        enumerable: false,
        configurable: true
    });
    /**
    * Gets the first font family that matches regex (if provided).
    * Default regex looks for "wf_" fonts which are always loaded.
    */
    FamilyInfo.prototype.getFamily = function (regex) {
        if (regex === void 0) { regex = /^wf_/; }
        if (!this.families) {
            return null;
        }
        if (regex) {
            for (var _i = 0, _a = this.families; _i < _a.length; _i++) {
                var fontFamily = _a[_i];
                if (regex.test(fontFamily)) {
                    return fontFamily;
                }
            }
        }
        return this.families[0];
    };
    Object.defineProperty(FamilyInfo.prototype, "css", {
        /**
         * Gets the CSS string for the "font-family" CSS attribute.
         */
        get: function () {
            return this.getCSS();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the CSS string for the "font-family" CSS attribute.
     */
    FamilyInfo.prototype.getCSS = function () {
        return this.families ? this.families.map((function (font) { return font.indexOf(" ") > 0 ? "'" + font + "'" : font; })).join(", ") : null;
    };
    return FamilyInfo;
}());
exports.FamilyInfo = FamilyInfo;
//# sourceMappingURL=familyInfo.js.map

/***/ }),

/***/ 9297:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/* eslint-disable no-useless-escape */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fixDateTimeFormat = exports.findDateFormat = void 0;
var regexCache;
/**
 * Translate .NET format into something supported by Globalize.
 */
function findDateFormat(value, format, cultureName) {
    switch (format) {
        case "m":
            // Month + day
            format = "M";
            break;
        case "O":
        case "o":
            // Roundtrip
            format = "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'0000'";
            break;
        case "R":
        case "r":
            // RFC1123 pattern - - time must be converted to UTC before formatting
            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
            format = "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'";
            break;
        case "s":
            // Sortable - should use invariant culture
            format = "S";
            break;
        case "u":
            // Universal sortable - should convert to UTC before applying the "yyyy'-'MM'-'dd HH':'mm':'ss'Z' format.
            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
            format = "yyyy'-'MM'-'dd HH':'mm':'ss'Z'";
            break;
        case "U":
            // Universal full - the pattern is same as F but the time must be converted to UTC before formatting
            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
            format = "F";
            break;
        case "y":
        case "Y":
            // Year and month
            switch (cultureName) {
                case "default":
                case "en":
                case "en-US":
                    format = "MMMM, yyyy"; // Fix the default year-month pattern for english
                    break;
                default:
                    format = "Y"; // For other cultures - use the localized pattern
            }
            break;
    }
    return { value: value, format: format };
}
exports.findDateFormat = findDateFormat;
/**
 * Translates unsupported .NET custom format expressions to the custom expressions supported by Globalize.
 */
function fixDateTimeFormat(format) {
    // Fix for the "K" format (timezone):
    // T he js dates don't have a kind property so we'll support only local kind which is equavalent to zzz format.
    format = format.replace(/%K/g, "zzz");
    format = format.replace(/K/g, "zzz");
    format = format.replace(/fffffff/g, "fff0000");
    format = format.replace(/ffffff/g, "fff000");
    format = format.replace(/fffff/g, "fff00");
    format = format.replace(/ffff/g, "fff0");
    // Fix for the 5 digit year: "yyyyy" format.
    // The Globalize doesn't support dates greater than 9999 so we replace the "yyyyy" with "0yyyy".
    format = format.replace(/yyyyy/g, "0yyyy");
    // Fix for the 3 digit year: "yyy" format.
    // The Globalize doesn't support this formatting so we need to replace it with the 4 digit year "yyyy" format.
    format = format.replace(/(^y|^)yyy(^y|$)/g, "yyyy");
    if (!regexCache) {
        // Creating Regexes for cases "Using single format specifier"
        // - http://msdn.microsoft.com/en-us/library/8kb3ddd4.aspx#UsingSingleSpecifiers
        // This is not supported from The Globalize.
        // The case covers all single "%" lead specifier (like "%d" but not %dd)
        // The cases as single "%d" are filtered in if the bellow.
        // (?!S) where S is the specifier make sure that we only one symbol for specifier.
        regexCache = ["d", "f", "F", "g", "h", "H", "K", "m", "M", "s", "t", "y", "z", ":", "/"].map(function (s) {
            return { r: new RegExp("\%" + s + "(?!" + s + ")", "g"), s: s };
        });
    }
    if (format.indexOf("%") !== -1 && format.length > 2) {
        for (var i = 0; i < regexCache.length; i++) {
            format = format.replace(regexCache[i].r, regexCache[i].s);
        }
    }
    return format;
}
exports.fixDateTimeFormat = fixDateTimeFormat;
//# sourceMappingURL=formatting.js.map

/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.format = exports.canFormat = void 0;
var formatting_1 = __webpack_require__(9297);
var formattingEncoder = __webpack_require__(4249);
var stringExtensions = __webpack_require__(7918);
var globalize_1 = __webpack_require__(4818);
var _currentCachedFormat;
var _currentCachedProcessedFormat;
// Evaluates if the value can be formatted using the NumberFormat
function canFormat(value) {
    return value instanceof Date;
}
exports.canFormat = canFormat;
// Formats the date using provided format and culture
function format(value, format, culture) {
    format = format || "G";
    var isStandard = format.length === 1;
    try {
        if (isStandard) {
            return formatDateStandard(value, format, culture);
        }
        else {
            return formatDateCustom(value, format, culture);
        }
    }
    catch (e) {
        return formatDateStandard(value, "G", culture);
    }
}
exports.format = format;
// Formats the date using standard format expression
function formatDateStandard(value, format, culture) {
    // In order to provide parity with .NET we have to support additional set of DateTime patterns.
    var patterns = culture.calendar.patterns;
    // Extend supported set of patterns
    ensurePatterns(culture.calendar);
    // Handle extended set of formats
    var output = (0, formatting_1.findDateFormat)(value, format, culture.name);
    if (output.format.length === 1)
        format = patterns[output.format];
    else
        format = output.format;
    // need to revisit when globalization is enabled
    if (!culture) {
        culture = this.getCurrentCulture();
    }
    return globalize_1.Globalize.format(output.value, format, culture);
}
// Formats the date using custom format expression
function formatDateCustom(value, format, culture) {
    var result;
    var literals = [];
    format = formattingEncoder.preserveLiterals(format, literals);
    if (format.indexOf("F") > -1) {
        // F is not supported so we need to replace the F with f based on the milliseconds
        // Replace all sequences of F longer than 3 with "FFF"
        format = stringExtensions.replaceAll(format, "FFFF", "FFF");
        // Based on milliseconds update the format to use fff
        var milliseconds = value.getMilliseconds();
        if (milliseconds % 10 >= 1) {
            format = stringExtensions.replaceAll(format, "FFF", "fff");
        }
        format = stringExtensions.replaceAll(format, "FFF", "FF");
        if ((milliseconds % 100) / 10 >= 1) {
            format = stringExtensions.replaceAll(format, "FF", "ff");
        }
        format = stringExtensions.replaceAll(format, "FF", "F");
        if ((milliseconds % 1000) / 100 >= 1) {
            format = stringExtensions.replaceAll(format, "F", "f");
        }
        format = stringExtensions.replaceAll(format, "F", "");
        if (format === "" || format === "%")
            return "";
    }
    format = processCustomDateTimeFormat(format);
    result = globalize_1.Globalize.format(value, format, culture);
    result = localize(result, culture.calendar);
    result = formattingEncoder.restoreLiterals(result, literals, false);
    return result;
}
// Translates unsupported .NET custom format expressions to the custom expressions supported by JQuery.Globalize
function processCustomDateTimeFormat(format) {
    if (format === _currentCachedFormat) {
        return _currentCachedProcessedFormat;
    }
    _currentCachedFormat = format;
    format = (0, formatting_1.fixDateTimeFormat)(format);
    _currentCachedProcessedFormat = format;
    return format;
}
// Localizes the time separator symbol
function localize(value, dictionary) {
    var timeSeparator = dictionary[":"];
    if (timeSeparator === ":") {
        return value;
    }
    var result = "";
    var count = value.length;
    for (var i = 0; i < count; i++) {
        var char = value.charAt(i);
        switch (char) {
            case ":":
                result += timeSeparator;
                break;
            default:
                result += char;
                break;
        }
    }
    return result;
}
function ensurePatterns(calendar) {
    var patterns = calendar.patterns;
    if (patterns["g"] === undefined) {
        patterns["g"] = patterns["f"].replace(patterns["D"], patterns["d"]); // Generic: Short date, short time
        patterns["G"] = patterns["F"].replace(patterns["D"], patterns["d"]); // Generic: Short date, long time
    }
}
//# sourceMappingURL=dateTimeFormat.js.map

/***/ }),

/***/ 4249:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.restoreLiterals = exports.preserveLiterals = exports.removeLiterals = void 0;
// quoted and escaped literal patterns
// NOTE: the final three cases match .NET behavior
var literalPatterns = [
    "'[^']*'",
    "\"[^\"]*\"",
    "\\\\.",
    "'[^']*$",
    "\"[^\"]*$",
    "\\\\$", // backslash at end of string
];
var literalMatcher = new RegExp(literalPatterns.join("|"), "g");
// Unicode U+E000 - U+F8FF is a private area and so we can use the chars from the range to encode the escaped sequences
function removeLiterals(format) {
    literalMatcher.lastIndex = 0;
    // just in case consecutive non-literals have some meaning
    return format.replace(literalMatcher, "\uE100");
}
exports.removeLiterals = removeLiterals;
function preserveLiterals(format, literals) {
    literalMatcher.lastIndex = 0;
    for (;;) {
        var match = literalMatcher.exec(format);
        if (!match)
            break;
        var literal = match[0];
        var literalOffset = literalMatcher.lastIndex - literal.length;
        var token = String.fromCharCode(0xE100 + literals.length);
        literals.push(literal);
        format = format.substring(0, literalOffset) + token + format.substring(literalMatcher.lastIndex);
        // back to avoid skipping due to removed literal substring
        literalMatcher.lastIndex = literalOffset + 1;
    }
    return format;
}
exports.preserveLiterals = preserveLiterals;
function restoreLiterals(format, literals, quoted) {
    if (quoted === void 0) { quoted = true; }
    var count = literals.length;
    for (var i = 0; i < count; i++) {
        var token = String.fromCharCode(0xE100 + i);
        var literal = literals[i];
        if (!quoted) {
            // caller wants literals to be re-inserted without escaping
            var firstChar = literal[0];
            if (firstChar === "\\" || literal.length === 1 || literal[literal.length - 1] !== firstChar) {
                // either escaped literal OR quoted literal that's missing the trailing quote
                // in either case we only remove the leading character
                literal = literal.substring(1);
            }
            else {
                // so must be a quoted literal with both starting and ending quote
                literal = literal.substring(1, literal.length - 1);
            }
        }
        format = format.replace(token, literal);
    }
    return format;
}
exports.restoreLiterals = restoreLiterals;
//# sourceMappingURL=formattingEncoder.js.map

/***/ }),

/***/ 5394:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/* eslint-disable no-useless-escape */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formattingEncoder = exports.dateTimeFormat = exports.numberFormat = exports.formattingService = exports.FormattingService = void 0;
var globalize_1 = __webpack_require__(4818);
var globalize_cultures_1 = __webpack_require__(9538);
(0, globalize_cultures_1.default)(globalize_1.Globalize);
var dateTimeFormat = __webpack_require__(41);
exports.dateTimeFormat = dateTimeFormat;
var numberFormat = __webpack_require__(5451);
exports.numberFormat = numberFormat;
var formattingEncoder = __webpack_require__(4249);
exports.formattingEncoder = formattingEncoder;
var iFormattingService_1 = __webpack_require__(1497);
var IndexedTokensRegex = /({{)|(}})|{(\d+[^}]*)}/g;
// Formatting Service
var FormattingService = /** @class */ (function () {
    function FormattingService() {
    }
    FormattingService.prototype.formatValue = function (value, formatValue, cultureSelector) {
        // Handle special cases
        if (value === undefined || value === null) {
            return "";
        }
        var gculture = this.getCulture(cultureSelector);
        if (dateTimeFormat.canFormat(value)) {
            // Dates
            return dateTimeFormat.format(value, formatValue, gculture);
        }
        else if (numberFormat.canFormat(value)) {
            // Numbers
            return numberFormat.format(value, formatValue, gculture);
        }
        // Other data types - return as string
        return value.toString();
    };
    FormattingService.prototype.format = function (formatWithIndexedTokens, args, culture) {
        var _this = this;
        if (!formatWithIndexedTokens) {
            return "";
        }
        return formatWithIndexedTokens.replace(IndexedTokensRegex, function (match, left, right, argToken) {
            if (left) {
                return "{";
            }
            else if (right) {
                return "}";
            }
            else {
                var parts = argToken.split(":");
                var argIndex = parseInt(parts[0], 10);
                var argFormat = parts[1];
                return _this.formatValue(args[argIndex], argFormat, culture);
            }
        });
    };
    FormattingService.prototype.isStandardNumberFormat = function (format) {
        return numberFormat.isStandardFormat(format);
    };
    FormattingService.prototype.formatNumberWithCustomOverride = function (value, format, nonScientificOverrideFormat, culture) {
        var gculture = this.getCulture(culture);
        return numberFormat.formatWithCustomOverride(value, format, nonScientificOverrideFormat, gculture);
    };
    FormattingService.prototype.dateFormatString = function (unit) {
        if (!this._dateTimeScaleFormatInfo)
            this.initialize();
        return this._dateTimeScaleFormatInfo.getFormatString(unit);
    };
    /**
     * Sets the current localization culture
     * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
     */
    FormattingService.prototype.setCurrentCulture = function (cultureSelector) {
        if (this._currentCultureSelector !== cultureSelector) {
            this._currentCulture = this.getCulture(cultureSelector);
            this._currentCultureSelector = cultureSelector;
            this._dateTimeScaleFormatInfo = new DateTimeScaleFormatInfo(this._currentCulture);
        }
    };
    /**
     * Gets the culture assotiated with the specified cultureSelector ("en", "en-US", "fr-FR" etc).
     * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
     * Exposing this function for testability of unsupported cultures
     */
    FormattingService.prototype.getCulture = function (cultureSelector) {
        if (cultureSelector == null) {
            if (this._currentCulture == null) {
                this.initialize();
            }
            return this._currentCulture;
        }
        else {
            var culture = globalize_1.Globalize.findClosestCulture(cultureSelector);
            if (!culture)
                culture = globalize_1.Globalize.culture("en-US");
            return culture;
        }
    };
    // By default the Globalization module initializes to the culture/calendar provided in the language/culture URL params
    FormattingService.prototype.initialize = function () {
        var cultureName = this.getCurrentCulture();
        this.setCurrentCulture(cultureName);
        var calendarName = this.getUrlParam("calendar");
        if (calendarName) {
            var culture = this._currentCulture;
            var c = culture.calendars[calendarName];
            if (c) {
                culture.calendar = c;
            }
        }
    };
    /**
     *  Exposing this function for testability
     */
    FormattingService.prototype.getCurrentCulture = function () {
        if (window === null || window === void 0 ? void 0 : window.navigator) {
            return window.navigator.userLanguage || window.navigator["language"];
        }
        return "en-US";
    };
    /**
     *  Exposing this function for testability
     *  @param name: queryString name
     */
    FormattingService.prototype.getUrlParam = function (name) {
        var param = window.location.search.match(RegExp("[?&]" + name + "=([^&]*)"));
        return param ? param[1] : undefined;
    };
    return FormattingService;
}());
exports.FormattingService = FormattingService;
// DateTimeScaleFormatInfo is used to calculate and keep the Date formats used for different units supported by the DateTimeScaleModel
var DateTimeScaleFormatInfo = /** @class */ (function () {
    // Constructor
    /**
     * Creates new instance of the DateTimeScaleFormatInfo class.
     * @param culture - culture which calendar info is going to be used to derive the formats.
     */
    function DateTimeScaleFormatInfo(culture) {
        var calendar = culture.calendar;
        var patterns = calendar.patterns;
        var monthAbbreviations = calendar["months"]["namesAbbr"];
        var cultureHasMonthAbbr = monthAbbreviations && monthAbbreviations[0];
        var yearMonthPattern = patterns["Y"];
        var monthDayPattern = patterns["M"];
        var fullPattern = patterns["f"];
        var longTimePattern = patterns["T"];
        var shortTimePattern = patterns["t"];
        var separator = fullPattern.indexOf(",") > -1 ? ", " : " ";
        var hasYearSymbol = yearMonthPattern.indexOf("yyyy'") === 0 && yearMonthPattern.length > 6 && yearMonthPattern[6] === "\'";
        this.YearPattern = hasYearSymbol ? yearMonthPattern.substring(0, 7) : "yyyy";
        var yearPos = fullPattern.indexOf("yy");
        var monthPos = fullPattern.indexOf("MMMM");
        this.MonthPattern = cultureHasMonthAbbr && monthPos > -1 ? (yearPos > monthPos ? "MMM yyyy" : "yyyy MMM") : yearMonthPattern;
        this.DayPattern = cultureHasMonthAbbr ? monthDayPattern.replace("MMMM", "MMM") : monthDayPattern;
        var minutePos = fullPattern.indexOf("mm");
        var pmPos = fullPattern.indexOf("tt");
        var shortHourPattern = pmPos > -1 ? shortTimePattern.replace(":mm ", "") : shortTimePattern;
        this.HourPattern = yearPos < minutePos ? this.DayPattern + separator + shortHourPattern : shortHourPattern + separator + this.DayPattern;
        this.MinutePattern = shortTimePattern;
        this.SecondPattern = longTimePattern;
        this.MillisecondPattern = longTimePattern.replace("ss", "ss.fff");
        // Special cases
        switch (culture.name) {
            case "fi-FI":
                this.DayPattern = this.DayPattern.replace("'ta'", ""); // Fix for finish 'ta' suffix for month names.
                this.HourPattern = this.HourPattern.replace("'ta'", "");
                break;
        }
    }
    // Methods
    /**
     * Returns the format string of the provided DateTimeUnit.
     * @param unit - date or time unit
     */
    DateTimeScaleFormatInfo.prototype.getFormatString = function (unit) {
        switch (unit) {
            case iFormattingService_1.DateTimeUnit.Year:
                return this.YearPattern;
            case iFormattingService_1.DateTimeUnit.Month:
                return this.MonthPattern;
            case iFormattingService_1.DateTimeUnit.Week:
            case iFormattingService_1.DateTimeUnit.Day:
                return this.DayPattern;
            case iFormattingService_1.DateTimeUnit.Hour:
                return this.HourPattern;
            case iFormattingService_1.DateTimeUnit.Minute:
                return this.MinutePattern;
            case iFormattingService_1.DateTimeUnit.Second:
                return this.SecondPattern;
            case iFormattingService_1.DateTimeUnit.Millisecond:
                return this.MillisecondPattern;
        }
    };
    return DateTimeScaleFormatInfo;
}());
var formattingService = new FormattingService();
exports.formattingService = formattingService;
//# sourceMappingURL=formattingService.js.map

/***/ }),

/***/ 1497:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateTimeUnit = void 0;
// Enumeration of DateTimeUnits
var DateTimeUnit;
(function (DateTimeUnit) {
    DateTimeUnit[DateTimeUnit["Year"] = 0] = "Year";
    DateTimeUnit[DateTimeUnit["Month"] = 1] = "Month";
    DateTimeUnit[DateTimeUnit["Week"] = 2] = "Week";
    DateTimeUnit[DateTimeUnit["Day"] = 3] = "Day";
    DateTimeUnit[DateTimeUnit["Hour"] = 4] = "Hour";
    DateTimeUnit[DateTimeUnit["Minute"] = 5] = "Minute";
    DateTimeUnit[DateTimeUnit["Second"] = 6] = "Second";
    DateTimeUnit[DateTimeUnit["Millisecond"] = 7] = "Millisecond";
})(DateTimeUnit = exports.DateTimeUnit || (exports.DateTimeUnit = {}));
//# sourceMappingURL=iFormattingService.js.map

/***/ }),

/***/ 5451:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCustomFormatMetadata = exports.formatWithCustomOverride = exports.format = exports.isStandardFormat = exports.canFormat = exports.getComponents = exports.hasFormatComponents = exports.addDecimalsToFormat = exports.getNumericFormat = exports.NumberFormatComponentsDelimeter = void 0;
/**
 * NumberFormat module contains the static methods for formatting the numbers.
 * It extends the Globalize functionality to support complete set of .NET
 * formatting expressions for numeric types including custom formats.
 */
/* eslint-disable no-useless-escape */
var globalize_1 = __webpack_require__(4818);
// powerbi.extensibility.utils.type
var powerbi_visuals_utils_typeutils_1 = __webpack_require__(2170);
// powerbi.extensibility.utils.formatting
var stringExtensions = __webpack_require__(7918);
var formattingEncoder = __webpack_require__(4249);
var formattingService_1 = __webpack_require__(5394);
var NumericalPlaceHolderRegex = /\{.+\}/;
var ScientificFormatRegex = /e[+-]*[0#]+/i;
var StandardFormatRegex = /^[a-z]\d{0,2}$/i; // a letter + up to 2 digits for precision specifier
var TrailingZerosRegex = /0+$/;
var DecimalFormatRegex = /\.([0#]*)/g;
var NumericFormatRegex = /[0#,\.]+[0,#]*/g;
// (?=...) is a positive lookahead assertion. The RE is asking for the last digit placeholder, [0#],
// which is followed by non-digit placeholders and the end of string, [^0#]*$. But it only matches
// the last digit placeholder, not anything that follows because the positive lookahead isn"t included
// in the match - it is only a condition.
var LastNumericPlaceholderRegex = /([0#])(?=[^0#]*$)/;
var DecimalFormatCharacter = ".";
var ZeroPlaceholder = "0";
var DigitPlaceholder = "#";
var ExponentialFormatChar = "E";
var NumericPlaceholders = [ZeroPlaceholder, DigitPlaceholder];
var NumericPlaceholderRegex = new RegExp(NumericPlaceholders.join("|"), "g");
exports.NumberFormatComponentsDelimeter = ";";
function getNonScientificFormatWithPrecision(baseFormat, numericFormat) {
    if (!numericFormat || baseFormat === undefined)
        return baseFormat;
    var newFormat = "{0:" + numericFormat + "}";
    return baseFormat.replace("{0}", newFormat);
}
function getNumericFormat(value, baseFormat) {
    if (baseFormat == null)
        return baseFormat;
    if (hasFormatComponents(baseFormat)) {
        var _a = getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
        if (value > 0)
            return getNumericFormatFromComponent(value, positive);
        else if (value === 0)
            return getNumericFormatFromComponent(value, zero);
        return getNumericFormatFromComponent(value, negative);
    }
    return getNumericFormatFromComponent(value, baseFormat);
}
exports.getNumericFormat = getNumericFormat;
function getNumericFormatFromComponent(value, format) {
    var match = powerbi_visuals_utils_typeutils_1.regExpExtensions.run(NumericFormatRegex, format);
    if (match)
        return match[0];
    return format;
}
function addDecimalsToFormat(baseFormat, decimals, trailingZeros) {
    if (decimals == null)
        return baseFormat;
    // Default format string
    if (baseFormat == null)
        baseFormat = ZeroPlaceholder;
    if (hasFormatComponents(baseFormat)) {
        var _a = getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
        var formats = [positive, negative, zero];
        for (var i = 0; i < formats.length; i++) {
            // Update format in formats array
            formats[i] = addDecimalsToFormatComponent(formats[i], decimals, trailingZeros);
        }
        return formats.join(exports.NumberFormatComponentsDelimeter);
    }
    return addDecimalsToFormatComponent(baseFormat, decimals, trailingZeros);
}
exports.addDecimalsToFormat = addDecimalsToFormat;
function addDecimalsToFormatComponent(format, decimals, trailingZeros) {
    decimals = Math.abs(decimals);
    if (decimals >= 0) {
        var literals = [];
        format = formattingEncoder.preserveLiterals(format, literals);
        var placeholder = trailingZeros ? ZeroPlaceholder : DigitPlaceholder;
        var decimalPlaceholders = stringExtensions.repeat(placeholder, Math.abs(decimals));
        var match = powerbi_visuals_utils_typeutils_1.regExpExtensions.run(DecimalFormatRegex, format);
        if (match) {
            var beforeDecimal = format.substring(0, match.index);
            var formatDecimal = format.substring(match.index + 1, match[1].length + match.index + 1);
            var afterDecimal = format.substring(match.index + match[0].length);
            if (trailingZeros)
                // Use explicit decimals argument as placeholders
                formatDecimal = decimalPlaceholders;
            else {
                var decimalChange = decimalPlaceholders.length - formatDecimal.length;
                if (decimalChange > 0)
                    // Append decimalPlaceholders to existing decimal portion of format string
                    formatDecimal = formatDecimal + decimalPlaceholders.slice(-decimalChange);
                else if (decimalChange < 0)
                    // Remove decimals from formatDecimal
                    formatDecimal = formatDecimal.slice(0, decimalChange);
            }
            if (formatDecimal.length > 0)
                formatDecimal = DecimalFormatCharacter + formatDecimal;
            format = beforeDecimal + formatDecimal + afterDecimal;
        }
        else if (decimalPlaceholders.length > 0) {
            // Replace last numeric placeholder with decimal portion
            format = format.replace(LastNumericPlaceholderRegex, "$1" + DecimalFormatCharacter + decimalPlaceholders);
        }
        if (literals.length !== 0)
            format = formattingEncoder.restoreLiterals(format, literals);
    }
    return format;
}
function hasFormatComponents(format) {
    return formattingEncoder.removeLiterals(format).indexOf(exports.NumberFormatComponentsDelimeter) !== -1;
}
exports.hasFormatComponents = hasFormatComponents;
function getComponents(format) {
    var signFormat = {
        hasNegative: false,
        positive: format,
        negative: format,
        zero: format,
    };
    // escape literals so semi-colon in a literal isn't interpreted as a delimiter
    // NOTE: OK to use the literals extracted here for all three components before since the literals are indexed.
    // For example, "'pos-lit';'neg-lit'" will get preserved as "\uE000;\uE001" and the literal array will be
    // ['pos-lit', 'neg-lit']. When the negative components is restored, its \uE001 will select the second
    // literal.
    var literals = [];
    format = formattingEncoder.preserveLiterals(format, literals);
    var signSpecificFormats = format.split(exports.NumberFormatComponentsDelimeter);
    var formatCount = signSpecificFormats.length;
    if (formatCount > 1) {
        if (literals.length !== 0)
            signSpecificFormats = signSpecificFormats.map(function (signSpecificFormat) { return formattingEncoder.restoreLiterals(signSpecificFormat, literals); });
        signFormat.hasNegative = true;
        signFormat.positive = signFormat.zero = signSpecificFormats[0];
        signFormat.negative = signSpecificFormats[1];
        if (formatCount > 2)
            signFormat.zero = signSpecificFormats[2];
    }
    return signFormat;
}
exports.getComponents = getComponents;
var _lastCustomFormatMeta;
// Evaluates if the value can be formatted using the NumberFormat
function canFormat(value) {
    return typeof (value) === "number";
}
exports.canFormat = canFormat;
function isStandardFormat(format) {
    return StandardFormatRegex.test(format);
}
exports.isStandardFormat = isStandardFormat;
// Formats the number using specified format expression and culture
function format(value, format, culture) {
    format = format || "G";
    try {
        if (isStandardFormat(format))
            return formatNumberStandard(value, format, culture);
        return formatNumberCustom(value, format, culture);
    }
    catch (e) {
        return globalize_1.Globalize.format(value, undefined, culture);
    }
}
exports.format = format;
// Performs a custom format with a value override.  Typically used for custom formats showing scaled values.
function formatWithCustomOverride(value, format, nonScientificOverrideFormat, culture) {
    return formatNumberCustom(value, format, culture, nonScientificOverrideFormat);
}
exports.formatWithCustomOverride = formatWithCustomOverride;
// Formats the number using standard format expression
function formatNumberStandard(value, format, culture) {
    var result;
    var precision = (format.length > 1 ? parseInt(format.substring(1, format.length), 10) : undefined);
    var numberFormatInfo = culture.numberFormat;
    var formatChar = format.charAt(0);
    var abs = Math.abs(value);
    switch (formatChar) {
        case "e":
        case "E":
            if (precision === undefined) {
                precision = 6;
            }
            format = "0." + stringExtensions.repeat("0", precision) + formatChar + "+000";
            result = formatNumberCustom(value, format, culture);
            break;
        case "f":
        case "F":
            result = precision !== undefined ? value.toFixed(precision) : value.toFixed(numberFormatInfo.decimals);
            result = localize(result, numberFormatInfo);
            break;
        case "g":
        case "G":
            if (abs === 0 || (1E-4 <= abs && abs < 1E15)) {
                // For the range of 0.0001 to 1,000,000,000,000,000 - use the normal form
                result = precision !== undefined ? value.toPrecision(precision) : value.toString();
            }
            else {
                // Otherwise use exponential
                // Assert that value is a number and fall back on returning value if it is not
                if (typeof (value) !== "number")
                    return String(value);
                result = precision !== undefined ? value.toExponential(precision) : value.toExponential();
                result = result.replace("e", "E");
            }
            result = localize(result, numberFormatInfo);
            break;
        case "r":
        case "R":
            result = value.toString();
            result = localize(result, numberFormatInfo);
            break;
        case "x":
        case "X":
            result = value.toString(16);
            if (formatChar === "X") {
                result = result.toUpperCase();
            }
            if (precision !== undefined) {
                var actualPrecision = result.length;
                var isNegative = value < 0;
                if (isNegative) {
                    actualPrecision--;
                }
                var paddingZerosCount = precision - actualPrecision;
                var paddingZeros = undefined;
                if (paddingZerosCount > 0) {
                    paddingZeros = stringExtensions.repeat("0", paddingZerosCount);
                }
                if (isNegative) {
                    result = "-" + paddingZeros + result.substring(1);
                }
                else {
                    result = paddingZeros + result;
                }
            }
            result = localize(result, numberFormatInfo);
            break;
        default:
            result = globalize_1.Globalize.format(value, format, culture);
    }
    return result;
}
// Formats the number using custom format expression
function formatNumberCustom(value, format, culture, nonScientificOverrideFormat) {
    var result;
    var numberFormatInfo = culture.numberFormat;
    if (isFinite(value)) {
        // Split format by positive[;negative;zero] pattern
        var formatComponents = getComponents(format);
        // Pick a format based on the sign of value
        if (value > 0) {
            format = formatComponents.positive;
        }
        else if (value === 0) {
            format = formatComponents.zero;
        }
        else {
            format = formatComponents.negative;
        }
        // Normalize value if we have an explicit negative format
        if (formatComponents.hasNegative)
            value = Math.abs(value);
        // Get format metadata
        var formatMeta = getCustomFormatMetadata(format, true /*calculatePrecision*/);
        // Preserve literals and escaped chars
        var literals = [];
        if (formatMeta.hasLiterals) {
            format = formattingEncoder.preserveLiterals(format, literals);
        }
        // Scientific format
        if (formatMeta.hasE && !nonScientificOverrideFormat) {
            var scientificMatch = powerbi_visuals_utils_typeutils_1.regExpExtensions.run(ScientificFormatRegex, format);
            if (scientificMatch) {
                // Case 2.1. Scientific custom format
                var formatM = format.substring(0, scientificMatch.index);
                var formatE = format.substring(scientificMatch.index + 2); // E(+|-)
                var precision = getCustomFormatPrecision(formatM, formatMeta);
                var scale = getCustomFormatScale(formatM, formatMeta);
                if (scale !== 1) {
                    value = value * scale;
                }
                // Assert that value is a number and fall back on returning value if it is not
                if (typeof (value) !== "number")
                    return String(value);
                var s = value.toExponential(precision);
                var indexOfE = s.indexOf("e");
                var mantissa = s.substring(0, indexOfE);
                var exp = s.substring(indexOfE + 1);
                var resultM = fuseNumberWithCustomFormat(mantissa, formatM, numberFormatInfo);
                var resultE = fuseNumberWithCustomFormat(exp, formatE, numberFormatInfo);
                if (resultE.charAt(0) === "+" && scientificMatch[0].charAt(1) !== "+") {
                    resultE = resultE.substring(1);
                }
                var e = scientificMatch[0].charAt(0);
                result = resultM + e + resultE;
            }
        }
        // Non scientific format
        if (result === undefined) {
            var valueFormatted = void 0;
            var isValueGlobalized = false;
            var precision = getCustomFormatPrecision(format, formatMeta);
            var scale = getCustomFormatScale(format, formatMeta);
            if (scale !== 1)
                value = value * scale;
            // Rounding
            value = parseFloat(toNonScientific(value, precision));
            if (!isFinite(value)) {
                // very large and small finite values can become infinite by parseFloat(toNonScientific())
                return globalize_1.Globalize.format(value, undefined);
            }
            if (nonScientificOverrideFormat) {
                // Get numeric format from format string
                var numericFormat = getNumericFormat(value, format);
                // Add separators and decimalFormat to nonScientificFormat
                nonScientificOverrideFormat = getNonScientificFormatWithPrecision(nonScientificOverrideFormat, numericFormat);
                // Format the value
                valueFormatted = formattingService_1.formattingService.format(nonScientificOverrideFormat, [value], culture.name);
                isValueGlobalized = true;
            }
            else
                valueFormatted = toNonScientific(value, precision);
            result = fuseNumberWithCustomFormat(valueFormatted, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized);
        }
        if (formatMeta.hasLiterals) {
            result = formattingEncoder.restoreLiterals(result, literals, false);
        }
        _lastCustomFormatMeta = formatMeta;
    }
    else {
        return globalize_1.Globalize.format(value, undefined);
    }
    return result;
}
// Returns string with the fixed point respresentation of the number
function toNonScientific(value, precision) {
    var result = "";
    var precisionZeros = 0;
    // Double precision numbers support actual 15-16 decimal digits of precision.
    if (precision > 16) {
        precisionZeros = precision - 16;
        precision = 16;
    }
    var digitsBeforeDecimalPoint = powerbi_visuals_utils_typeutils_1.double.log10(Math.abs(value));
    if (digitsBeforeDecimalPoint < 16) {
        if (digitsBeforeDecimalPoint > 0) {
            var maxPrecision = 16 - digitsBeforeDecimalPoint;
            if (precision > maxPrecision) {
                precisionZeros += precision - maxPrecision;
                precision = maxPrecision;
            }
        }
        result = value.toFixed(precision);
    }
    else if (digitsBeforeDecimalPoint === 16) {
        result = value.toFixed(0);
        precisionZeros += precision;
        if (precisionZeros > 0) {
            result += ".";
        }
    }
    else { // digitsBeforeDecimalPoint > 16
        // Different browsers have different implementations of the toFixed().
        // In IE it returns fixed format no matter what's the number. In FF and Chrome the method returns exponential format for numbers greater than 1E21.
        // So we need to check for range and convert the to exponential with the max precision.
        // Then we convert exponential string to fixed by removing the dot and padding with "power" zeros.
        // Assert that value is a number and fall back on returning value if it is not
        if (typeof (value) !== "number")
            return String(value);
        result = value.toExponential(15);
        var indexOfE = result.indexOf("e");
        if (indexOfE > 0) {
            var indexOfDot = result.indexOf(".");
            var mantissa = result.substring(0, indexOfE);
            var exp = result.substring(indexOfE + 1);
            var powerZeros = parseInt(exp, 10) - (mantissa.length - indexOfDot - 1);
            result = mantissa.replace(".", "") + stringExtensions.repeat("0", powerZeros);
            if (precision > 0) {
                result = result + "." + stringExtensions.repeat("0", precision);
            }
        }
    }
    if (precisionZeros > 0) {
        result = result + stringExtensions.repeat("0", precisionZeros);
    }
    return result;
}
/**
 * Returns the formatMetadata of the format
 * When calculating precision and scale, if format string of
 * positive[;negative;zero] => positive format will be used
 * @param (required) format - format string
 * @param (optional) calculatePrecision - calculate precision of positive format
 * @param (optional) calculateScale - calculate scale of positive format
 */
function getCustomFormatMetadata(format, calculatePrecision, calculateScale, calculatePartsPerScale) {
    if (_lastCustomFormatMeta !== undefined && format === _lastCustomFormatMeta.format) {
        return _lastCustomFormatMeta;
    }
    var literals = [];
    var escaped = formattingEncoder.preserveLiterals(format, literals);
    var result = {
        format: format,
        hasLiterals: literals.length !== 0,
        hasE: false,
        hasCommas: false,
        hasDots: false,
        hasPercent: false,
        hasPermile: false,
        precision: undefined,
        scale: undefined,
        partsPerScale: undefined,
    };
    for (var i = 0, length_1 = escaped.length; i < length_1; i++) {
        var c = escaped.charAt(i);
        switch (c) {
            case "e":
            case "E":
                result.hasE = true;
                break;
            case ",":
                result.hasCommas = true;
                break;
            case ".":
                result.hasDots = true;
                break;
            case "%":
                result.hasPercent = true;
                break;
            case "\u2030": // ‰
                result.hasPermile = true;
                break;
        }
    }
    // Use positive format for calculating these values
    var formatComponents = getComponents(format);
    if (calculatePrecision)
        result.precision = getCustomFormatPrecision(formatComponents.positive, result);
    if (calculatePartsPerScale)
        result.partsPerScale = getCustomFormatPartsPerScale(formatComponents.positive, result);
    if (calculateScale)
        result.scale = getCustomFormatScale(formatComponents.positive, result);
    return result;
}
exports.getCustomFormatMetadata = getCustomFormatMetadata;
/** Returns the decimal precision of format based on the number of # and 0 chars after the decimal point
     * Important: The input format string needs to be split to the appropriate pos/neg/zero portion to work correctly */
function getCustomFormatPrecision(format, formatMeta) {
    if (formatMeta.precision > -1) {
        return formatMeta.precision;
    }
    var result = 0;
    if (formatMeta.hasDots) {
        if (formatMeta.hasLiterals) {
            format = formattingEncoder.removeLiterals(format);
        }
        var dotIndex = format.indexOf(".");
        if (dotIndex > -1) {
            var count = format.length;
            for (var i = dotIndex; i < count; i++) {
                var char = format.charAt(i);
                if (char.match(NumericPlaceholderRegex))
                    result++;
                // 0.00E+0 :: Break before counting 0 in
                // exponential portion of format string
                if (char === ExponentialFormatChar)
                    break;
            }
            result = Math.min(19, result);
        }
    }
    formatMeta.precision = result;
    return result;
}
function getCustomFormatPartsPerScale(format, formatMeta) {
    if (formatMeta.partsPerScale != null)
        return formatMeta.partsPerScale;
    var result = 1;
    if (formatMeta.hasPercent && format.indexOf("%") > -1) {
        result = result * 100;
    }
    if (formatMeta.hasPermile && format.indexOf(/* ‰ */ "\u2030") > -1) {
        result = result * 1000;
    }
    formatMeta.partsPerScale = result;
    return result;
}
// Returns the scale factor of the format based on the "%" and scaling "," chars in the format
function getCustomFormatScale(format, formatMeta) {
    if (formatMeta.scale > -1) {
        return formatMeta.scale;
    }
    var result = getCustomFormatPartsPerScale(format, formatMeta);
    if (formatMeta.hasCommas) {
        var dotIndex = format.indexOf(".");
        if (dotIndex === -1) {
            dotIndex = format.length;
        }
        for (var i = dotIndex - 1; i > -1; i--) {
            var char = format.charAt(i);
            if (char === ",") {
                result = result / 1000;
            }
            else {
                break;
            }
        }
    }
    formatMeta.scale = result;
    return result;
}
function fuseNumberWithCustomFormat(value, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized) {
    var suppressModifyValue = !!nonScientificOverrideFormat;
    var formatParts = format.split(".", 2);
    if (formatParts.length === 2) {
        var wholeFormat = formatParts[0];
        var fractionFormat = formatParts[1];
        var displayUnit = "";
        // Remove display unit from value before splitting on "." as localized display units sometimes end with "."
        if (nonScientificOverrideFormat) {
            displayUnit = nonScientificOverrideFormat.replace(NumericalPlaceHolderRegex, "");
            value = value.replace(displayUnit, "");
        }
        var globalizedDecimalSeparator = numberFormatInfo["."];
        var decimalSeparator = isValueGlobalized ? globalizedDecimalSeparator : ".";
        var valueParts = value.split(decimalSeparator, 2);
        var wholeValue = valueParts.length === 1 ? valueParts[0] + displayUnit : valueParts[0];
        var fractionValue = valueParts.length === 2 ? valueParts[1] + displayUnit : "";
        fractionValue = fractionValue.replace(TrailingZerosRegex, "");
        var wholeFormattedValue = fuseNumberWithCustomFormatLeft(wholeValue, wholeFormat, numberFormatInfo, suppressModifyValue);
        var fractionFormattedValue = fuseNumberWithCustomFormatRight(fractionValue, fractionFormat, suppressModifyValue);
        if (fractionFormattedValue.fmtOnly || fractionFormattedValue.value === "")
            return wholeFormattedValue + fractionFormattedValue.value;
        return wholeFormattedValue + globalizedDecimalSeparator + fractionFormattedValue.value;
    }
    return fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue);
}
function fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue) {
    var groupSymbolIndex = format.indexOf(",");
    var enableGroups = groupSymbolIndex > -1 && groupSymbolIndex < Math.max(format.lastIndexOf("0"), format.lastIndexOf("#")) && numberFormatInfo[","];
    var groupDigitCount = 0;
    var groupIndex = 0;
    var groupSizes = numberFormatInfo.groupSizes || [3];
    var groupSize = groupSizes[0];
    var groupSeparator = numberFormatInfo[","];
    var sign = "";
    var firstChar = value.charAt(0);
    if (firstChar === "+" || firstChar === "-") {
        sign = numberFormatInfo[firstChar];
        value = value.substring(1);
    }
    var isZero = value === "0";
    var result = "";
    var leftBuffer = "";
    var vi = value.length - 1;
    var fmtOnly = true;
    // Iterate through format chars and replace 0 and # with the digits from the value string
    for (var fi = format.length - 1; fi > -1; fi--) {
        var formatChar = format.charAt(fi);
        switch (formatChar) {
            case ZeroPlaceholder:
            case DigitPlaceholder:
                fmtOnly = false;
                if (leftBuffer !== "") {
                    result = leftBuffer + result;
                    leftBuffer = "";
                }
                if (!suppressModifyValue) {
                    if (vi > -1 || formatChar === ZeroPlaceholder) {
                        if (enableGroups) {
                            // If the groups are enabled we'll need to keep track of the current group index and periodically insert group separator,
                            if (groupDigitCount === groupSize) {
                                result = groupSeparator + result;
                                groupIndex++;
                                if (groupIndex < groupSizes.length) {
                                    groupSize = groupSizes[groupIndex];
                                }
                                groupDigitCount = 1;
                            }
                            else {
                                groupDigitCount++;
                            }
                        }
                    }
                    if (vi > -1) {
                        if (isZero && formatChar === DigitPlaceholder) {
                            // Special case - if we need to format a zero value and the # symbol is used - we don't copy it into the result)
                        }
                        else {
                            result = value.charAt(vi) + result;
                        }
                        vi--;
                    }
                    else if (formatChar !== DigitPlaceholder) {
                        result = formatChar + result;
                    }
                }
                break;
            case ",":
                // We should skip all the , chars
                break;
            default:
                leftBuffer = formatChar + leftBuffer;
                break;
        }
    }
    // If the value didn't fit into the number of zeros provided in the format then we should insert the missing part of the value into the result
    if (!suppressModifyValue) {
        if (vi > -1 && result !== "") {
            if (enableGroups) {
                while (vi > -1) {
                    if (groupDigitCount === groupSize) {
                        result = groupSeparator + result;
                        groupIndex++;
                        if (groupIndex < groupSizes.length) {
                            groupSize = groupSizes[groupIndex];
                        }
                        groupDigitCount = 1;
                    }
                    else {
                        groupDigitCount++;
                    }
                    result = value.charAt(vi) + result;
                    vi--;
                }
            }
            else {
                result = value.substring(0, vi + 1) + result;
            }
        }
        // Insert sign in front of the leftBuffer and result
        return sign + leftBuffer + result;
    }
    if (fmtOnly)
        // If the format doesn't specify any digits to be displayed, then just return the format we've parsed up until now.
        return sign + leftBuffer + result;
    return sign + leftBuffer + value + result;
}
function fuseNumberWithCustomFormatRight(value, format, suppressModifyValue) {
    var formatLength = format.length;
    var valueLength = value.length;
    if (suppressModifyValue) {
        var lastChar = format.charAt(formatLength - 1);
        if (!lastChar.match(NumericPlaceholderRegex))
            return {
                value: value + lastChar,
                fmtOnly: value === "",
            };
        return {
            value: value,
            fmtOnly: value === "",
        };
    }
    var result = "", fmtOnly = true, vi = 0;
    for (var fi = 0; fi < formatLength; fi++) {
        var formatChar = format.charAt(fi);
        if (vi < valueLength) {
            switch (formatChar) {
                case ZeroPlaceholder:
                case DigitPlaceholder:
                    result += value[vi++];
                    fmtOnly = false;
                    break;
                default:
                    result += formatChar;
            }
        }
        else {
            if (formatChar !== DigitPlaceholder) {
                result += formatChar;
                fmtOnly = fmtOnly && (formatChar !== ZeroPlaceholder);
            }
        }
    }
    return {
        value: result,
        fmtOnly: fmtOnly,
    };
}
function localize(value, dictionary) {
    var plus = dictionary["+"];
    var minus = dictionary["-"];
    var dot = dictionary["."];
    var comma = dictionary[","];
    if (plus === "+" && minus === "-" && dot === "." && comma === ",") {
        return value;
    }
    var count = value.length;
    var result = "";
    for (var i = 0; i < count; i++) {
        var char = value.charAt(i);
        switch (char) {
            case "+":
                result = result + plus;
                break;
            case "-":
                result = result + minus;
                break;
            case ".":
                result = result + dot;
                break;
            case ",":
                result = result + comma;
                break;
            default:
                result = result + char;
                break;
        }
    }
    return result;
}
//# sourceMappingURL=numberFormat.js.map

/***/ }),

/***/ 4776:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.yF = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
var formatting = __webpack_require__(9297);
__webpack_unused_export__ = formatting;
var valueFormatter = __webpack_require__(9987);
__webpack_unused_export__ = valueFormatter;
var stringExtensions = __webpack_require__(7918);
__webpack_unused_export__ = stringExtensions;
var textMeasurementService = __webpack_require__(9246);
exports.yF = textMeasurementService;
var interfaces = __webpack_require__(6003);
__webpack_unused_export__ = interfaces;
var font = __webpack_require__(9078);
__webpack_unused_export__ = font;
var familyInfo = __webpack_require__(8069);
__webpack_unused_export__ = familyInfo;
var textUtil = __webpack_require__(4158);
__webpack_unused_export__ = textUtil;
var dateUtils = __webpack_require__(7042);
__webpack_unused_export__ = dateUtils;
var dateTimeSequence = __webpack_require__(2594);
__webpack_unused_export__ = dateTimeSequence;
var displayUnitSystem = __webpack_require__(7254);
__webpack_unused_export__ = displayUnitSystem;
var displayUnitSystemType = __webpack_require__(6585);
__webpack_unused_export__ = displayUnitSystemType;
var formattingService = __webpack_require__(5394);
__webpack_unused_export__ = formattingService;
var wordBreaker = __webpack_require__(1363);
__webpack_unused_export__ = wordBreaker;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6003:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 6116:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ephemeralStorageService = exports.EphemeralStorageService = void 0;
var EphemeralStorageService = /** @class */ (function () {
    function EphemeralStorageService(clearCacheInterval) {
        this.cache = {};
        this.clearCacheInterval = (clearCacheInterval != null)
            ? clearCacheInterval
            : EphemeralStorageService.defaultClearCacheInterval;
        this.clearCache();
    }
    EphemeralStorageService.prototype.getData = function (key) {
        return this.cache[key];
    };
    EphemeralStorageService.prototype.setData = function (key, data) {
        var _this = this;
        this.cache[key] = data;
        if (this.clearCacheTimerId == null) {
            this.clearCacheTimerId = setTimeout(function () { return _this.clearCache(); }, this.clearCacheInterval);
        }
    };
    EphemeralStorageService.prototype.clearCache = function () {
        this.cache = {};
        this.clearCacheTimerId = undefined;
    };
    EphemeralStorageService.defaultClearCacheInterval = (1000 * 60 * 60 * 24); // 1 day
    return EphemeralStorageService;
}());
exports.EphemeralStorageService = EphemeralStorageService;
exports.ephemeralStorageService = new EphemeralStorageService();
//# sourceMappingURL=ephemeralStorageService.js.map

/***/ }),

/***/ 7918:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stripTagDelimiters = exports.deriveClsCompliantName = exports.stringifyAsPrettyJSON = exports.normalizeFileName = exports.escapeStringForRegex = exports.constructNameFromList = exports.findUniqueName = exports.ensureUniqueNames = exports.replaceAll = exports.repeat = exports.getLengthDifference = exports.trimWhitespace = exports.trimTrailingWhitespace = exports.isWhitespace = exports.containsWhitespace = exports.isNullOrUndefinedOrWhiteSpaceString = exports.isNullOrEmpty = exports.stringToArrayBuffer = exports.normalizeCase = exports.containsIgnoreCase = exports.contains = exports.startsWith = exports.startsWithIgnoreCase = exports.equalIgnoreCase = exports.format = exports.endsWith = void 0;
/* eslint-disable no-useless-escape */
var HtmlTagRegex = new RegExp("[<>]", "g");
/**
 * Checks if a string ends with a sub-string.
 */
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
exports.endsWith = endsWith;
function format() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var s = args[0];
    if (isNullOrUndefinedOrWhiteSpaceString(s))
        return s;
    for (var i = 0; i < args.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, args[i + 1]);
    }
    return s;
}
exports.format = format;
/**
 * Compares two strings for equality, ignoring case.
 */
function equalIgnoreCase(a, b) {
    return normalizeCase(a) === normalizeCase(b);
}
exports.equalIgnoreCase = equalIgnoreCase;
function startsWithIgnoreCase(a, b) {
    var normalizedSearchString = normalizeCase(b);
    return normalizeCase(a).indexOf(normalizedSearchString) === 0;
}
exports.startsWithIgnoreCase = startsWithIgnoreCase;
function startsWith(a, b) {
    return a.indexOf(b) === 0;
}
exports.startsWith = startsWith;
// Determines whether a string contains a specified substring (by case-sensitive comparison).
function contains(source, substring) {
    if (source == null)
        return false;
    return source.indexOf(substring) !== -1;
}
exports.contains = contains;
// Determines whether a string contains a specified substring (while ignoring case).
function containsIgnoreCase(source, substring) {
    if (source == null)
        return false;
    return contains(normalizeCase(source), normalizeCase(substring));
}
exports.containsIgnoreCase = containsIgnoreCase;
/**
 * Normalizes case for a string.
 * Used by equalIgnoreCase method.
 */
function normalizeCase(value) {
    return value.toUpperCase();
}
exports.normalizeCase = normalizeCase;
/**
 * Receives a string and returns an ArrayBuffer of its characters.
 * @return An ArrayBuffer of the string's characters.
 * If the string is empty or null or undefined - returns null.
 */
function stringToArrayBuffer(str) {
    if (isNullOrEmpty(str)) {
        return null;
    }
    var buffer = new ArrayBuffer(str.length);
    var bufferView = new Uint8Array(buffer);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufferView[i] = str.charCodeAt(i);
    }
    return bufferView;
}
exports.stringToArrayBuffer = stringToArrayBuffer;
/**
 * Is string null or empty or undefined?
 * @return True if the value is null or undefined or empty string,
 * otherwise false.
 */
function isNullOrEmpty(value) {
    return (value == null) || (value.length === 0);
}
exports.isNullOrEmpty = isNullOrEmpty;
/**
 * Returns true if the string is null, undefined, empty, or only includes white spaces.
 * @return True if the str is null, undefined, empty, or only includes white spaces,
 * otherwise false.
 */
function isNullOrUndefinedOrWhiteSpaceString(str) {
    return isNullOrEmpty(str) || isNullOrEmpty(str.trim());
}
exports.isNullOrUndefinedOrWhiteSpaceString = isNullOrUndefinedOrWhiteSpaceString;
/**
 * Returns a value indicating whether the str contains any whitespace.
 */
function containsWhitespace(str) {
    var expr = /\s/;
    return expr.test(str);
}
exports.containsWhitespace = containsWhitespace;
/**
 * Returns a value indicating whether the str is a whitespace string.
 */
function isWhitespace(str) {
    return str.trim() === "";
}
exports.isWhitespace = isWhitespace;
/**
 * Returns the string with any trailing whitespace from str removed.
 */
function trimTrailingWhitespace(str) {
    return str.replace(/\s+$/, "");
}
exports.trimTrailingWhitespace = trimTrailingWhitespace;
/**
 * Returns the string with any leading and trailing whitespace from str removed.
 */
function trimWhitespace(str) {
    return str.replace(/^\s+/, "").replace(/\s+$/, "");
}
exports.trimWhitespace = trimWhitespace;
/**
 * Returns length difference between the two provided strings.
 */
function getLengthDifference(left, right) {
    return Math.abs(left.length - right.length);
}
exports.getLengthDifference = getLengthDifference;
/**
 * Repeat char or string several times.
 * @param char The string to repeat.
 * @param count How many times to repeat the string.
 */
function repeat(char, count) {
    var result = "";
    for (var i = 0; i < count; i++) {
        result += char;
    }
    return result;
}
exports.repeat = repeat;
/**
 * Replace all the occurrences of the textToFind in the text with the textToReplace.
 * @param text The original string.
 * @param textToFind Text to find in the original string.
 * @param textToReplace New text replacing the textToFind.
 */
function replaceAll(text, textToFind, textToReplace) {
    if (!textToFind)
        return text;
    var pattern = escapeStringForRegex(textToFind);
    return text.replace(new RegExp(pattern, "gi"), textToReplace);
}
exports.replaceAll = replaceAll;
function ensureUniqueNames(names) {
    var usedNames = {};
    // Make sure we are giving fair chance for all columns to stay with their original name
    // First we fill the used names map to contain all the original unique names from the list.
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        usedNames[name_1] = false;
    }
    var uniqueNames = [];
    // Now we go over all names and find a unique name for each
    for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
        var name_2 = names_2[_a];
        var uniqueName = name_2;
        // If the (original) column name is already taken lets try to find another name
        if (usedNames[uniqueName]) {
            var counter = 0;
            // Find a name that is not already in the map
            while (usedNames[uniqueName] !== undefined) {
                uniqueName = name_2 + "." + (++counter);
            }
        }
        uniqueNames.push(uniqueName);
        usedNames[uniqueName] = true;
    }
    return uniqueNames;
}
exports.ensureUniqueNames = ensureUniqueNames;
/**
 * Returns a name that is not specified in the values.
 */
function findUniqueName(usedNames, baseName) {
    // Find a unique name
    var i = 0, uniqueName = baseName;
    while (usedNames[uniqueName]) {
        uniqueName = baseName + (++i);
    }
    return uniqueName;
}
exports.findUniqueName = findUniqueName;
function constructNameFromList(list, separator, maxCharacter) {
    var labels = [];
    var exceeded;
    var length = 0;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        if (length + item.length > maxCharacter && labels.length > 0) {
            exceeded = true;
            break;
        }
        labels.push(item);
        length += item.length;
    }
    var separatorWithSpace = " " + separator + " ";
    var name = labels.join(separatorWithSpace);
    if (exceeded)
        name += separatorWithSpace + "...";
    return name;
}
exports.constructNameFromList = constructNameFromList;
function escapeStringForRegex(s) {
    return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
}
exports.escapeStringForRegex = escapeStringForRegex;
/**
 * Remove file name reserved characters <>:"/\|?* from input string.
 */
function normalizeFileName(fileName) {
    return fileName.replace(/[\<\>\:"\/\\\|\?*]/g, "");
}
exports.normalizeFileName = normalizeFileName;
/**
 * Similar to JSON.stringify, but strips away escape sequences so that the resulting
 * string is human-readable (and parsable by JSON formatting/validating tools).
 */
function stringifyAsPrettyJSON(object) {
    // let specialCharacterRemover = (key: string, value: string) => value.replace(/[^\w\s]/gi, "");
    return JSON.stringify(object /*, specialCharacterRemover*/);
}
exports.stringifyAsPrettyJSON = stringifyAsPrettyJSON;
/**
 * Derive a CLS-compliant name from a specified string.  If no allowed characters are present, return a fallback string instead.
 * (6708134): this should have a fully Unicode-aware implementation
 */
function deriveClsCompliantName(input, fallback) {
    var result = input.replace(/^[^A-Za-z]*/g, "").replace(/[ :\.\/\\\-\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]/g, "_").replace(/[\W]/g, "");
    return result.length > 0 ? result : fallback;
}
exports.deriveClsCompliantName = deriveClsCompliantName;
// Performs cheap sanitization by stripping away HTML tag (<>) characters.
function stripTagDelimiters(s) {
    return s.replace(HtmlTagRegex, "");
}
exports.stripTagDelimiters = stripTagDelimiters;
//# sourceMappingURL=stringExtensions.js.map

/***/ }),

/***/ 9246:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wordBreakOverflowingText = exports.wordBreak = exports.svgEllipsis = exports.getTailoredTextOrDefault = exports.getDivElementWidth = exports.getSvgMeasurementProperties = exports.getMeasurementProperties = exports.measureSvgTextElementWidth = exports.estimateSvgTextHeight = exports.estimateSvgTextBaselineDelta = exports.measureSvgTextHeight = exports.measureSvgTextRect = exports.measureSvgTextWidth = exports.removeSpanElement = void 0;
// powerbi.extensibility.utils.type
var powerbi_visuals_utils_typeutils_1 = __webpack_require__(2170);
// powerbi.extensibility.utils.formatting
var wordBreaker = __webpack_require__(1363);
var ephemeralStorageService_1 = __webpack_require__(6116);
var ellipsis = "...";
var spanElement;
var svgTextElement;
var canvasCtx;
var fallbackFontFamily;
/**
 * Idempotent function for adding the elements to the DOM.
 */
function ensureDOM() {
    if (spanElement) {
        return;
    }
    spanElement = document.createElement("span");
    document.body.appendChild(spanElement);
    // The style hides the svg element from the canvas, preventing canvas from scrolling down to show svg black square.
    /* eslint-disable-next-line powerbi-visuals/no-http-string */
    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("height", "0");
    svgElement.setAttribute("width", "0");
    svgElement.setAttribute("position", "absolute");
    svgElement.style.top = "0px";
    svgElement.style.left = "0px";
    svgElement.style.position = "absolute";
    svgElement.style.height = "0px";
    svgElement.style.width = "0px";
    /* eslint-disable-next-line powerbi-visuals/no-http-string */
    svgTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgElement.appendChild(svgTextElement);
    document.body.appendChild(svgElement);
    var canvasElement = document.createElement("canvas");
    canvasCtx = canvasElement.getContext("2d");
    var style = window.getComputedStyle(svgTextElement);
    if (style) {
        fallbackFontFamily = style.fontFamily;
    }
    else {
        fallbackFontFamily = "";
    }
}
/**
 * Removes spanElement from DOM.
 */
function removeSpanElement() {
    if (spanElement && spanElement.remove) {
        spanElement.remove();
    }
    spanElement = null;
}
exports.removeSpanElement = removeSpanElement;
/**
 * Measures the width of the text with the given SVG text properties.
 * @param textProperties The text properties to use for text measurement.
 * @param text The text to measure.
 */
function measureSvgTextWidth(textProperties, text) {
    ensureDOM();
    canvasCtx.font =
        (textProperties.fontStyle || "") + " " +
            (textProperties.fontVariant || "") + " " +
            (textProperties.fontWeight || "") + " " +
            textProperties.fontSize + " " +
            (textProperties.fontFamily || fallbackFontFamily);
    return canvasCtx.measureText(text || textProperties.text).width;
}
exports.measureSvgTextWidth = measureSvgTextWidth;
/**
 * Return the rect with the given SVG text properties.
 * @param textProperties The text properties to use for text measurement.
 * @param text The text to measure.
 */
function measureSvgTextRect(textProperties, text) {
    ensureDOM();
    // Removes DOM elements faster than innerHTML
    while (svgTextElement.firstChild) {
        svgTextElement.removeChild(svgTextElement.firstChild);
    }
    svgTextElement.setAttribute("style", null);
    svgTextElement.style.visibility = "hidden";
    svgTextElement.style.fontFamily = textProperties.fontFamily || fallbackFontFamily;
    svgTextElement.style.fontVariant = textProperties.fontVariant;
    svgTextElement.style.fontSize = textProperties.fontSize;
    svgTextElement.style.fontWeight = textProperties.fontWeight;
    svgTextElement.style.fontStyle = textProperties.fontStyle;
    svgTextElement.style.whiteSpace = textProperties.whiteSpace || "nowrap";
    svgTextElement.appendChild(document.createTextNode(text || textProperties.text));
    // We're expecting the browser to give a synchronous measurement here
    // We're using SVGTextElement because it works across all browsers
    return svgTextElement.getBBox();
}
exports.measureSvgTextRect = measureSvgTextRect;
/**
 * Measures the height of the text with the given SVG text properties.
 * @param textProperties The text properties to use for text measurement.
 * @param text The text to measure.
 */
function measureSvgTextHeight(textProperties, text) {
    return measureSvgTextRect(textProperties, text).height;
}
exports.measureSvgTextHeight = measureSvgTextHeight;
/**
 * Returns the text Rect with the given SVG text properties.
 * Does NOT return text width; obliterates text value
 * @param {TextProperties} textProperties - The text properties to use for text measurement
 */
function estimateSvgTextRect(textProperties) {
    var propertiesKey = textProperties.fontFamily + textProperties.fontSize;
    var rect = ephemeralStorageService_1.ephemeralStorageService.getData(propertiesKey);
    if (rect == null) {
        // To estimate we check the height of a particular character, once it is cached, subsequent
        // calls should always get the height from the cache (regardless of the text).
        var estimatedTextProperties = {
            fontFamily: textProperties.fontFamily,
            fontSize: textProperties.fontSize,
            text: "M",
        };
        rect = exports.measureSvgTextRect(estimatedTextProperties);
        // NOTE: In some cases (disconnected/hidden DOM) we may provide incorrect measurement results (zero sized bounding-box), so
        // we only store values in the cache if we are confident they are correct.
        if (rect.height > 0)
            ephemeralStorageService_1.ephemeralStorageService.setData(propertiesKey, rect);
    }
    return rect;
}
/**
 * Returns the text Rect with the given SVG text properties.
 * @param {TextProperties} textProperties - The text properties to use for text measurement
 */
function estimateSvgTextBaselineDelta(textProperties) {
    var rect = estimateSvgTextRect(textProperties);
    return rect.y + rect.height;
}
exports.estimateSvgTextBaselineDelta = estimateSvgTextBaselineDelta;
/**
 * Estimates the height of the text with the given SVG text properties.
 * @param {TextProperties} textProperties - The text properties to use for text measurement
 */
function estimateSvgTextHeight(textProperties, tightFightForNumeric) {
    if (tightFightForNumeric === void 0) { tightFightForNumeric = false; }
    var height = estimateSvgTextRect(textProperties).height;
    // replace it with new baseline calculation
    if (tightFightForNumeric)
        height *= 0.7;
    return height;
}
exports.estimateSvgTextHeight = estimateSvgTextHeight;
/**
 * Measures the width of the svgElement.
 * @param svgElement The SVGTextElement to be measured.
 */
function measureSvgTextElementWidth(svgElement) {
    return measureSvgTextWidth(getSvgMeasurementProperties(svgElement));
}
exports.measureSvgTextElementWidth = measureSvgTextElementWidth;
/**
 * Fetches the text measurement properties of the given DOM element.
 * @param element The selector for the DOM Element.
 */
function getMeasurementProperties(element) {
    var style = window.getComputedStyle(element);
    return {
        text: element.value || element.textContent,
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        fontStyle: style.fontStyle,
        fontVariant: style.fontVariant,
        whiteSpace: style.whiteSpace
    };
}
exports.getMeasurementProperties = getMeasurementProperties;
/**
 * Fetches the text measurement properties of the given SVG text element.
 * @param element The SVGTextElement to be measured.
 */
function getSvgMeasurementProperties(element) {
    var style = window.getComputedStyle(element);
    if (style) {
        return {
            text: element.textContent,
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            fontStyle: style.fontStyle,
            fontVariant: style.fontVariant,
            whiteSpace: style.whiteSpace
        };
    }
    else {
        return {
            text: element.textContent,
            fontFamily: "",
            fontSize: "0",
        };
    }
}
exports.getSvgMeasurementProperties = getSvgMeasurementProperties;
/**
 * Returns the width of a div element.
 * @param element The div element.
 */
function getDivElementWidth(element) {
    var style = window.getComputedStyle(element);
    if (style)
        return style.width;
    else
        return "0";
}
exports.getDivElementWidth = getDivElementWidth;
/**
 * Compares labels text size to the available size and renders ellipses when the available size is smaller.
 * @param textProperties The text properties (including text content) to use for text measurement.
 * @param maxWidth The maximum width available for rendering the text.
 */
function getTailoredTextOrDefault(textProperties, maxWidth) {
    ensureDOM();
    var strLength = textProperties.text.length;
    if (strLength === 0) {
        return textProperties.text;
    }
    var width = measureSvgTextWidth(textProperties);
    if (width < maxWidth) {
        return textProperties.text;
    }
    // Create a copy of the textProperties so we don't modify the one that's passed in.
    var copiedTextProperties = powerbi_visuals_utils_typeutils_1.prototype.inherit(textProperties);
    // Take the properties and apply them to svgTextElement
    // Then, do the binary search to figure out the substring we want
    // Set the substring on textElement argument
    var text = copiedTextProperties.text = ellipsis + copiedTextProperties.text;
    var min = 1;
    var max = text.length;
    var i = ellipsis.length;
    while (min <= max) {
        // num | 0 prefered to Math.floor(num) for performance benefits
        i = (min + max) / 2 | 0;
        copiedTextProperties.text = text.substring(0, i);
        width = measureSvgTextWidth(copiedTextProperties);
        if (maxWidth > width) {
            min = i + 1;
        }
        else if (maxWidth < width) {
            max = i - 1;
        }
        else {
            break;
        }
    }
    // Since the search algorithm almost never finds an exact match,
    // it will pick one of the closest two, which could result in a
    // value bigger with than 'maxWidth' thus we need to go back by
    // one to guarantee a smaller width than 'maxWidth'.
    copiedTextProperties.text = text.substring(0, i);
    width = measureSvgTextWidth(copiedTextProperties);
    if (width > maxWidth) {
        i--;
    }
    return text.substring(ellipsis.length, i) + ellipsis;
}
exports.getTailoredTextOrDefault = getTailoredTextOrDefault;
/**
 * Compares labels text size to the available size and renders ellipses when the available size is smaller.
 * @param textElement The SVGTextElement containing the text to render.
 * @param maxWidth The maximum width available for rendering the text.
 */
function svgEllipsis(textElement, maxWidth) {
    var properties = getSvgMeasurementProperties(textElement);
    var originalText = properties.text;
    var tailoredText = getTailoredTextOrDefault(properties, maxWidth);
    if (originalText !== tailoredText) {
        textElement.textContent = tailoredText;
    }
}
exports.svgEllipsis = svgEllipsis;
/**
 * Word break textContent of <text> SVG element into <tspan>s
 * Each tspan will be the height of a single line of text
 * @param textElement - the SVGTextElement containing the text to wrap
 * @param maxWidth - the maximum width available
 * @param maxHeight - the maximum height available (defaults to single line)
 * @param linePadding - (optional) padding to add to line height
 */
function wordBreak(textElement, maxWidth, maxHeight, linePadding) {
    if (linePadding === void 0) { linePadding = 0; }
    var properties = getSvgMeasurementProperties(textElement);
    var height = estimateSvgTextHeight(properties) + linePadding;
    var maxNumLines = Math.max(1, Math.floor(maxHeight / height));
    // Save y of parent textElement to apply as first tspan dy
    var firstDY = textElement ? textElement.getAttribute("y") : null;
    // Store and clear text content
    var labelText = textElement ? textElement.textContent : null;
    textElement.textContent = null;
    // Append a tspan for each word broken section
    var words = wordBreaker.splitByWidth(labelText, properties, measureSvgTextWidth, maxWidth, maxNumLines);
    var fragment = document.createDocumentFragment();
    for (var i = 0, ilen = words.length; i < ilen; i++) {
        var dy = i === 0 ? firstDY : height;
        properties.text = words[i];
        /* eslint-disable-next-line powerbi-visuals/no-http-string */
        var textElement_1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        textElement_1.setAttribute("x", "0");
        textElement_1.setAttribute("dy", dy ? dy.toString() : null);
        textElement_1.appendChild(document.createTextNode(getTailoredTextOrDefault(properties, maxWidth)));
        fragment.appendChild(textElement_1);
    }
    textElement.appendChild(fragment);
}
exports.wordBreak = wordBreak;
/**
 * Word break textContent of span element into <span>s
 * Each span will be the height of a single line of text
 * @param textElement - the element containing the text to wrap
 * @param maxWidth - the maximum width available
 * @param maxHeight - the maximum height available (defaults to single line)
 * @param linePadding - (optional) padding to add to line height
 */
function wordBreakOverflowingText(textElement, maxWidth, maxHeight, linePadding) {
    if (linePadding === void 0) { linePadding = 0; }
    var properties = getSvgMeasurementProperties(textElement);
    var height = estimateSvgTextHeight(properties) + linePadding;
    var maxNumLines = Math.max(1, Math.floor(maxHeight / height));
    // Store and clear text content
    var labelText = textElement.textContent;
    textElement.textContent = null;
    // Append a span for each word broken section
    var words = wordBreaker.splitByWidth(labelText, properties, measureSvgTextWidth, maxWidth, maxNumLines);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < words.length; i++) {
        var span = document.createElement("span");
        span.style.overflow = "hidden";
        span.style.whiteSpace = "nowrap";
        span.style.textOverflow = "ellipsis";
        span.style.display = "block";
        span.style.width = powerbi_visuals_utils_typeutils_1.pixelConverter.toString(maxWidth);
        span.appendChild(document.createTextNode(words[i]));
        span.appendChild(document.createTextNode(getTailoredTextOrDefault(properties, maxWidth)));
        fragment.appendChild(span);
    }
    textElement.appendChild(fragment);
}
exports.wordBreakOverflowingText = wordBreakOverflowingText;
//# sourceMappingURL=textMeasurementService.js.map

/***/ }),

/***/ 4158:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replaceSpaceWithNBSP = exports.removeEllipses = exports.removeBreakingSpaces = void 0;
/**
 * Contains functions/constants to aid in text manupilation.
 */
/**
 * Remove breaking spaces from given string and replace by none breaking space (&nbsp).
 */
function removeBreakingSpaces(str) {
    return str.toString().replace(new RegExp(" ", "g"), "&nbsp");
}
exports.removeBreakingSpaces = removeBreakingSpaces;
/**
 * Remove ellipses from a given string
 */
function removeEllipses(str) {
    return str.replace(/(…)|(\.\.\.)/g, "");
}
exports.removeEllipses = removeEllipses;
/**
* Replace every whitespace (0x20) with Non-Breaking Space (0xA0)
    * @param {string} txt String to replace White spaces
    * @returns Text after replcing white spaces
    */
function replaceSpaceWithNBSP(txt) {
    if (txt != null) {
        return txt.replace(/ /g, "\xA0");
    }
}
exports.replaceSpaceWithNBSP = replaceSpaceWithNBSP;
//# sourceMappingURL=textUtil.js.map

/***/ }),

/***/ 9987:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateExactDigitsPrecision = exports.getDisplayUnits = exports.formatListOr = exports.formatListAnd = exports.getFormatStringByColumn = exports.getFormatString = exports.createDisplayUnitSystem = exports.formatVariantMeasureValue = exports.format = exports.create = exports.checkValueInBounds = exports.createDefaultFormatter = exports.setLocaleOptions = exports.getFormatMetadata = exports.getLocalizedString = exports.DefaultDateFormat = exports.DefaultNumericFormat = exports.DefaultIntegerFormat = void 0;
var displayUnitSystem_1 = __webpack_require__(7254);
var displayUnitSystemType_1 = __webpack_require__(6585);
var stringExtensions = __webpack_require__(7918);
var formattingService_1 = __webpack_require__(5394);
var dateTimeSequence_1 = __webpack_require__(2594);
var powerbi_visuals_utils_typeutils_1 = __webpack_require__(2170);
var powerbi_visuals_utils_dataviewutils_1 = __webpack_require__(1706);
// powerbi.extensibility.utils.type
var ValueType = powerbi_visuals_utils_typeutils_1.valueType.ValueType;
var PrimitiveType = powerbi_visuals_utils_typeutils_1.valueType.PrimitiveType;
var StringExtensions = stringExtensions;
var BeautifiedFormat = {
    "0.00 %;-0.00 %;0.00 %": "Percentage",
    "0.0 %;-0.0 %;0.0 %": "Percentage1",
};
exports.DefaultIntegerFormat = "g";
exports.DefaultNumericFormat = "#,0.00";
exports.DefaultDateFormat = "d";
var defaultLocalizedStrings = {
    "NullValue": "(Blank)",
    "BooleanTrue": "True",
    "BooleanFalse": "False",
    "NaNValue": "NaN",
    "InfinityValue": "+Infinity",
    "NegativeInfinityValue": "-Infinity",
    "RestatementComma": "{0}, {1}",
    "RestatementCompoundAnd": "{0} and {1}",
    "RestatementCompoundOr": "{0} or {1}",
    "DisplayUnitSystem_EAuto_Title": "Auto",
    "DisplayUnitSystem_E0_Title": "None",
    "DisplayUnitSystem_E3_LabelFormat": "{0}K",
    "DisplayUnitSystem_E3_Title": "Thousands",
    "DisplayUnitSystem_E6_LabelFormat": "{0}M",
    "DisplayUnitSystem_E6_Title": "Millions",
    "DisplayUnitSystem_E9_LabelFormat": "{0}bn",
    "DisplayUnitSystem_E9_Title": "Billions",
    "DisplayUnitSystem_E12_LabelFormat": "{0}T",
    "DisplayUnitSystem_E12_Title": "Trillions",
    "Percentage": "#,0.##%",
    "Percentage1": "#,0.#%",
    "TableTotalLabel": "Total",
    "Tooltip_HighlightedValueDisplayName": "Highlighted",
    "Funnel_PercentOfFirst": "Percent of first",
    "Funnel_PercentOfPrevious": "Percent of previous",
    "Funnel_PercentOfFirst_Highlight": "Percent of first (highlighted)",
    "Funnel_PercentOfPrevious_Highlight": "Percent of previous (highlighted)",
    // Geotagging strings
    "GeotaggingString_Continent": "continent",
    "GeotaggingString_Continents": "continents",
    "GeotaggingString_Country": "country",
    "GeotaggingString_Countries": "countries",
    "GeotaggingString_State": "state",
    "GeotaggingString_States": "states",
    "GeotaggingString_City": "city",
    "GeotaggingString_Cities": "cities",
    "GeotaggingString_Town": "town",
    "GeotaggingString_Towns": "towns",
    "GeotaggingString_Province": "province",
    "GeotaggingString_Provinces": "provinces",
    "GeotaggingString_County": "county",
    "GeotaggingString_Counties": "counties",
    "GeotaggingString_Village": "village",
    "GeotaggingString_Villages": "villages",
    "GeotaggingString_Post": "post",
    "GeotaggingString_Zip": "zip",
    "GeotaggingString_Code": "code",
    "GeotaggingString_Place": "place",
    "GeotaggingString_Places": "places",
    "GeotaggingString_Address": "address",
    "GeotaggingString_Addresses": "addresses",
    "GeotaggingString_Street": "street",
    "GeotaggingString_Streets": "streets",
    "GeotaggingString_Longitude": "longitude",
    "GeotaggingString_Longitude_Short": "lon",
    "GeotaggingString_Longitude_Short2": "long",
    "GeotaggingString_Latitude": "latitude",
    "GeotaggingString_Latitude_Short": "lat",
    "GeotaggingString_PostalCode": "postal code",
    "GeotaggingString_PostalCodes": "postal codes",
    "GeotaggingString_ZipCode": "zip code",
    "GeotaggingString_ZipCodes": "zip codes",
    "GeotaggingString_Territory": "territory",
    "GeotaggingString_Territories": "territories",
};
function beautify(format) {
    var key = BeautifiedFormat[format];
    if (key)
        return defaultLocalizedStrings[key] || format;
    return format;
}
function describeUnit(exponent) {
    var exponentLookup = (exponent === -1) ? "Auto" : exponent.toString();
    var title = defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_Title"];
    var format = (exponent <= 0) ? "{0}" : defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_LabelFormat"];
    if (title || format)
        return { title: title, format: format };
}
function getLocalizedString(stringId) {
    return defaultLocalizedStrings[stringId];
}
exports.getLocalizedString = getLocalizedString;
// NOTE: Define default locale options, but these can be overriden by setLocaleOptions.
var localizationOptions = {
    nullValue: defaultLocalizedStrings["NullValue"],
    trueValue: defaultLocalizedStrings["BooleanTrue"],
    falseValue: defaultLocalizedStrings["BooleanFalse"],
    NaN: defaultLocalizedStrings["NaNValue"],
    infinity: defaultLocalizedStrings["InfinityValue"],
    negativeInfinity: defaultLocalizedStrings["NegativeInfinityValue"],
    beautify: function (format) { return beautify(format); },
    describe: function (exponent) { return describeUnit(exponent); },
    restatementComma: defaultLocalizedStrings["RestatementComma"],
    restatementCompoundAnd: defaultLocalizedStrings["RestatementCompoundAnd"],
    restatementCompoundOr: defaultLocalizedStrings["RestatementCompoundOr"],
};
var MaxScaledDecimalPlaces = 2;
var MaxValueForDisplayUnitRounding = 1000;
var MinIntegerValueForDisplayUnits = 10000;
var MinPrecisionForDisplayUnits = 2;
var DateTimeMetadataColumn = {
    displayName: "",
    type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.DateTime),
};
function getFormatMetadata(format) {
    return formattingService_1.numberFormat.getCustomFormatMetadata(format);
}
exports.getFormatMetadata = getFormatMetadata;
function setLocaleOptions(options) {
    localizationOptions = options;
    displayUnitSystem_1.DefaultDisplayUnitSystem.RESET();
    displayUnitSystem_1.WholeUnitsDisplayUnitSystem.RESET();
}
exports.setLocaleOptions = setLocaleOptions;
function createDefaultFormatter(formatString, allowFormatBeautification, cultureSelector) {
    var formatBeautified = allowFormatBeautification
        ? localizationOptions.beautify(formatString)
        : formatString;
    return {
        format: function (value) {
            if (value == null) {
                return localizationOptions.nullValue;
            }
            return formatCore({
                value: value,
                cultureSelector: cultureSelector,
                format: formatBeautified
            });
        }
    };
}
exports.createDefaultFormatter = createDefaultFormatter;
/**
 * Check that provided value is in provided bounds. If not -- replace it by minimal or maximal replacement value
 * @param targetNum checking value
 * @param min minimal bound of value
 * @param max maximal bound of value
 * @param lessMinReplacement value that will be returned if checking value is lesser than minimal
 * @param greaterMaxReplacement value that will be returned if checking value is greater than maximal
 */
function checkValueInBounds(targetNum, min, max, lessMinReplacement, greaterMaxReplacement) {
    if (lessMinReplacement === void 0) { lessMinReplacement = min; }
    if (greaterMaxReplacement === void 0) { greaterMaxReplacement = max; }
    if (max !== undefined && max !== null) {
        targetNum = targetNum <= max ? targetNum : greaterMaxReplacement;
    }
    if (min !== undefined && min !== null) {
        targetNum = targetNum > min ? targetNum : lessMinReplacement;
    }
    return targetNum;
}
exports.checkValueInBounds = checkValueInBounds;
// Creates an IValueFormatter to be used for a range of values.
function create(options) {
    var format = options.allowFormatBeautification
        ? localizationOptions.beautify(options.format)
        : options.format;
    var cultureSelector = options.cultureSelector;
    if (shouldUseNumericDisplayUnits(options)) {
        var displayUnitSystem_2 = createDisplayUnitSystem(options.displayUnitSystemType);
        var singleValueFormattingMode_1 = !!options.formatSingleValues;
        displayUnitSystem_2.update(Math.max(Math.abs(options.value || 0), Math.abs(options.value2 || 0)));
        var forcePrecision_1 = options.precision != null;
        var decimals_1;
        if (forcePrecision_1)
            decimals_1 = -options.precision;
        else if (displayUnitSystem_2.displayUnit && displayUnitSystem_2.displayUnit.value > 1)
            decimals_1 = -MaxScaledDecimalPlaces;
        return {
            format: function (value) {
                var formattedValue = getStringFormat(value, true /*nullsAreBlank*/);
                if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue)) {
                    return formattedValue;
                }
                // Round to Double.DEFAULT_PRECISION
                if (value
                    && !displayUnitSystem_2.isScalingUnit()
                    && Math.abs(value) < MaxValueForDisplayUnitRounding
                    && !forcePrecision_1) {
                    value = powerbi_visuals_utils_typeutils_1.double.roundToPrecision(value);
                }
                if (singleValueFormattingMode_1) {
                    return displayUnitSystem_2.formatSingleValue(value, format, decimals_1, forcePrecision_1, cultureSelector);
                }
                else {
                    return displayUnitSystem_2.format(value, format, decimals_1, forcePrecision_1, cultureSelector);
                }
            },
            displayUnit: displayUnitSystem_2.displayUnit,
            options: options
        };
    }
    if (shouldUseDateUnits(options.value, options.value2, options.tickCount)) {
        var unit_1 = dateTimeSequence_1.DateTimeSequence.GET_INTERVAL_UNIT(options.value /* minDate */, options.value2 /* maxDate */, options.tickCount);
        return {
            format: function (value) {
                if (value == null) {
                    return localizationOptions.nullValue;
                }
                var formatString = formattingService_1.formattingService.dateFormatString(unit_1);
                return formatCore({
                    value: value,
                    cultureSelector: cultureSelector,
                    format: formatString,
                });
            },
            options: options
        };
    }
    return createDefaultFormatter(format, false, cultureSelector);
}
exports.create = create;
function format(value, format, allowFormatBeautification, cultureSelector) {
    if (value == null) {
        return localizationOptions.nullValue;
    }
    var formatString = allowFormatBeautification
        ? localizationOptions.beautify(format)
        : format;
    return formatCore({
        value: value,
        cultureSelector: cultureSelector,
        format: formatString
    });
}
exports.format = format;
/**
 * Value formatting function to handle variant measures.
 * For a Date/Time value within a non-date/time field, it's formatted with the default date/time formatString instead of as a number
 * @param {any} value Value to be formatted
 * @param {DataViewMetadataColumn} column Field which the value belongs to
 * @param {DataViewObjectPropertyIdentifier} formatStringProp formatString Property ID
 * @param {boolean} nullsAreBlank? Whether to show "(Blank)" instead of empty string for null values
 * @returns Formatted value
 */
function formatVariantMeasureValue(value, column, formatStringProp, nullsAreBlank, cultureSelector) {
    // If column type is not datetime, but the value is of time datetime,
    // then use the default date format string
    if (!(column && column.type && column.type.dateTime) && value instanceof Date) {
        var valueFormat = getFormatString(DateTimeMetadataColumn, null, false);
        return formatCore({
            value: value,
            nullsAreBlank: nullsAreBlank,
            cultureSelector: cultureSelector,
            format: valueFormat
        });
    }
    else {
        var valueFormat = getFormatString(column, formatStringProp);
        return formatCore({
            value: value,
            nullsAreBlank: nullsAreBlank,
            cultureSelector: cultureSelector,
            format: valueFormat
        });
    }
}
exports.formatVariantMeasureValue = formatVariantMeasureValue;
function createDisplayUnitSystem(displayUnitSystemType) {
    if (displayUnitSystemType == null)
        return new displayUnitSystem_1.DefaultDisplayUnitSystem(localizationOptions.describe);
    switch (displayUnitSystemType) {
        case displayUnitSystemType_1.DisplayUnitSystemType.Default:
            return new displayUnitSystem_1.DefaultDisplayUnitSystem(localizationOptions.describe);
        case displayUnitSystemType_1.DisplayUnitSystemType.WholeUnits:
            return new displayUnitSystem_1.WholeUnitsDisplayUnitSystem(localizationOptions.describe);
        case displayUnitSystemType_1.DisplayUnitSystemType.Verbose:
            return new displayUnitSystem_1.NoDisplayUnitSystem();
        case displayUnitSystemType_1.DisplayUnitSystemType.DataLabels:
            return new displayUnitSystem_1.DataLabelsDisplayUnitSystem(localizationOptions.describe);
        default:
            return new displayUnitSystem_1.DefaultDisplayUnitSystem(localizationOptions.describe);
    }
}
exports.createDisplayUnitSystem = createDisplayUnitSystem;
function shouldUseNumericDisplayUnits(options) {
    var value = options.value;
    var value2 = options.value2;
    var format = options.format;
    // For singleValue visuals like card, gauge we don't want to roundoff data to the nearest thousands so format the whole number / integers below 10K to not use display units
    if (options.formatSingleValues && format) {
        if (Math.abs(value) < MinIntegerValueForDisplayUnits) {
            var isCustomFormat = !formattingService_1.numberFormat.isStandardFormat(format);
            if (isCustomFormat) {
                var precision = formattingService_1.numberFormat.getCustomFormatMetadata(format, true /*calculatePrecision*/).precision;
                if (precision < MinPrecisionForDisplayUnits)
                    return false;
            }
            else if (powerbi_visuals_utils_typeutils_1.double.isInteger(value))
                return false;
        }
    }
    if ((typeof value === "number") || (typeof value2 === "number")) {
        return true;
    }
}
function shouldUseDateUnits(value, value2, tickCount) {
    // must check both value and value2 because we'll need to get an interval for date units
    return (value instanceof Date) && (value2 instanceof Date) && (tickCount !== undefined && tickCount !== null);
}
/*
    * Get the column format. Order of precendence is:
    *  1. Column format
    *  2. Default PowerView policy for column type
    */
function getFormatString(column, formatStringProperty, suppressTypeFallback) {
    if (column) {
        if (formatStringProperty) {
            var propertyValue = powerbi_visuals_utils_dataviewutils_1.dataViewObjects.getValue(column.objects, formatStringProperty);
            if (propertyValue)
                return propertyValue;
        }
        if (!suppressTypeFallback) {
            var columnType = column.type;
            if (columnType) {
                if (columnType.dateTime)
                    return exports.DefaultDateFormat;
                if (columnType.integer) {
                    if (columnType.temporal && columnType.temporal.year)
                        return "0";
                    return exports.DefaultIntegerFormat;
                }
                if (columnType.numeric)
                    return exports.DefaultNumericFormat;
            }
        }
    }
}
exports.getFormatString = getFormatString;
function getFormatStringByColumn(column, suppressTypeFallback) {
    if (column) {
        if (column.format) {
            return column.format;
        }
        if (!suppressTypeFallback) {
            var columnType = column.type;
            if (columnType) {
                if (columnType.dateTime) {
                    return exports.DefaultDateFormat;
                }
                if (columnType.integer) {
                    if (columnType.temporal && columnType.temporal.year) {
                        return "0";
                    }
                    return exports.DefaultIntegerFormat;
                }
                if (columnType.numeric) {
                    return exports.DefaultNumericFormat;
                }
            }
        }
    }
    return undefined;
}
exports.getFormatStringByColumn = getFormatStringByColumn;
function formatListCompound(strings, conjunction) {
    var result;
    if (!strings) {
        return null;
    }
    var length = strings.length;
    if (length > 0) {
        result = strings[0];
        var lastIndex = length - 1;
        for (var i = 1, len = lastIndex; i < len; i++) {
            var value = strings[i];
            result = StringExtensions.format(localizationOptions.restatementComma, result, value);
        }
        if (length > 1) {
            var value = strings[lastIndex];
            result = StringExtensions.format(conjunction, result, value);
        }
    }
    else {
        result = null;
    }
    return result;
}
// The returned string will look like 'A, B, ..., and C'
function formatListAnd(strings) {
    return formatListCompound(strings, localizationOptions.restatementCompoundAnd);
}
exports.formatListAnd = formatListAnd;
// The returned string will look like 'A, B, ..., or C'
function formatListOr(strings) {
    return formatListCompound(strings, localizationOptions.restatementCompoundOr);
}
exports.formatListOr = formatListOr;
function formatCore(options) {
    var value = options.value, format = options.format, nullsAreBlank = options.nullsAreBlank, cultureSelector = options.cultureSelector;
    var formattedValue = getStringFormat(value, nullsAreBlank ? nullsAreBlank : false);
    if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue)) {
        return formattedValue;
    }
    return formattingService_1.formattingService.formatValue(value, format, cultureSelector);
}
function getStringFormat(value, nullsAreBlank) {
    if (value == null && nullsAreBlank) {
        return localizationOptions.nullValue;
    }
    if (value === true) {
        return localizationOptions.trueValue;
    }
    if (value === false) {
        return localizationOptions.falseValue;
    }
    if (typeof value === "number" && isNaN(value)) {
        return localizationOptions.NaN;
    }
    if (value === Number.NEGATIVE_INFINITY) {
        return localizationOptions.negativeInfinity;
    }
    if (value === Number.POSITIVE_INFINITY) {
        return localizationOptions.infinity;
    }
    return "";
}
function getDisplayUnits(displayUnitSystemType) {
    var displayUnitSystem = createDisplayUnitSystem(displayUnitSystemType);
    return displayUnitSystem.units;
}
exports.getDisplayUnits = getDisplayUnits;
/**
 * Precision calculating function to build values showing minimum 3 digits as 3.56 or 25.7 or 754 or 2345
 * @param {number} inputValue Value to be basement for precision calculation
 * @param {string} format Format that will be used for value formatting (to detect percentage values)
 * @param {number} displayUnits Dispaly units that will be used for value formatting (to correctly calculate precision)
 * @param {number} digitsNum Number of visible digits, including digits before separator
 * @returns calculated precision
 */
function calculateExactDigitsPrecision(inputValue, format, displayUnits, digitsNum) {
    if (!inputValue && inputValue !== 0) {
        return 0;
    }
    var precision = 0;
    var inPercent = format && format.indexOf("%") !== -1;
    var value = inPercent ? inputValue * 100 : inputValue;
    value = displayUnits > 0 ? value / displayUnits : value;
    var leftPartLength = parseInt(value).toString().length;
    if ((inPercent || displayUnits > 0) && leftPartLength >= digitsNum) {
        return 0;
    }
    // Auto units, calculate final value 
    if (displayUnits === 0) {
        var unitsDegree = Math.floor(leftPartLength / 3);
        unitsDegree = leftPartLength % 3 === 0 ? unitsDegree - 1 : unitsDegree;
        var divider = Math.pow(1000, unitsDegree);
        if (divider > 0) {
            value = value / divider;
        }
    }
    leftPartLength = parseInt(value).toString().length;
    var restOfDiv = leftPartLength % digitsNum;
    if (restOfDiv === 0) {
        precision = 0;
    }
    else {
        precision = digitsNum - restOfDiv;
    }
    return precision;
}
exports.calculateExactDigitsPrecision = calculateExactDigitsPrecision;
//# sourceMappingURL=valueFormatter.js.map

/***/ }),

/***/ 1363:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.splitByWidth = exports.getMaxWordWidth = exports.wordCount = exports.hasBreakers = exports.find = void 0;
var SPACE = " ";
var BREAKERS_REGEX = /[\s\n]+/g;
function search(index, content, backward) {
    if (backward) {
        for (var i = index - 1; i > -1; i--) {
            if (hasBreakers(content[i]))
                return i + 1;
        }
    }
    else {
        for (var i = index, ilen = content.length; i < ilen; i++) {
            if (hasBreakers(content[i]))
                return i;
        }
    }
    return backward ? 0 : content.length;
}
/**
 * Find the word nearest the cursor specified within content
 * @param index - point within content to search forward/backward from
 * @param content - string to search
*/
function find(index, content) {
    var result = { start: 0, end: 0 };
    if (content.length === 0) {
        return result;
    }
    result.start = search(index, content, true);
    result.end = search(index, content, false);
    return result;
}
exports.find = find;
/**
 * Test for presence of breakers within content
 * @param content - string to test
*/
function hasBreakers(content) {
    BREAKERS_REGEX.lastIndex = 0;
    return BREAKERS_REGEX.test(content);
}
exports.hasBreakers = hasBreakers;
/**
 * Count the number of pieces when broken by BREAKERS_REGEX
 * ~2.7x faster than WordBreaker.split(content).length
 * @param content - string to break and count
*/
function wordCount(content) {
    var count = 1;
    BREAKERS_REGEX.lastIndex = 0;
    BREAKERS_REGEX.exec(content);
    while (BREAKERS_REGEX.lastIndex !== 0) {
        count++;
        BREAKERS_REGEX.exec(content);
    }
    return count;
}
exports.wordCount = wordCount;
function getMaxWordWidth(content, textWidthMeasurer, properties) {
    var words = split(content);
    var maxWidth = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var w = words_1[_i];
        properties.text = w;
        maxWidth = Math.max(maxWidth, textWidthMeasurer(properties));
    }
    return maxWidth;
}
exports.getMaxWordWidth = getMaxWordWidth;
function split(content) {
    return content.split(BREAKERS_REGEX);
}
function getWidth(content, properties, textWidthMeasurer) {
    properties.text = content;
    return textWidthMeasurer(properties);
}
function truncate(content, properties, truncator, maxWidth) {
    properties.text = content;
    return truncator(properties, maxWidth);
}
/**
 * Split content by breakers (words) and greedy fit as many words
 * into each index in the result based on max width and number of lines
 * e.g. Each index in result corresponds to a line of content
 *      when used by AxisHelper.LabelLayoutStrategy.wordBreak
 * @param content - string to split
 * @param properties - text properties to be used by @param:textWidthMeasurer
 * @param textWidthMeasurer - function to calculate width of given text content
 * @param maxWidth - maximum allowed width of text content in each result
 * @param maxNumLines - maximum number of results we will allow, valid values must be greater than 0
 * @param truncator - (optional) if specified, used as a function to truncate content to a given width
*/
function splitByWidth(content, properties, textWidthMeasurer, maxWidth, maxNumLines, truncator) {
    // Default truncator returns string as-is
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    truncator = truncator ? truncator : function (properties, maxWidth) { return properties.text; };
    var result = [];
    var words = split(content);
    var usedWidth = 0;
    var wordsInLine = [];
    for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
        var word = words_2[_i];
        // Last line? Just add whatever is left
        if ((maxNumLines > 0) && (result.length >= maxNumLines - 1)) {
            wordsInLine.push(word);
            continue;
        }
        // Determine width if we add this word
        // Account for SPACE we will add when joining...
        var wordWidth = wordsInLine.length === 0
            ? getWidth(word, properties, textWidthMeasurer)
            : getWidth(SPACE + word, properties, textWidthMeasurer);
        // If width would exceed max width,
        // then push used words and start new split result
        if (usedWidth + wordWidth > maxWidth) {
            // Word alone exceeds max width, just add it.
            if (wordsInLine.length === 0) {
                result.push(truncate(word, properties, truncator, maxWidth));
                usedWidth = 0;
                wordsInLine = [];
                continue;
            }
            result.push(truncate(wordsInLine.join(SPACE), properties, truncator, maxWidth));
            usedWidth = 0;
            wordsInLine = [];
        }
        // ...otherwise, add word and continue
        wordsInLine.push(word);
        usedWidth += wordWidth;
    }
    // Push remaining words onto result (if any)
    if (wordsInLine && wordsInLine.length) {
        result.push(truncate(wordsInLine.join(SPACE), properties, truncator, maxWidth));
    }
    return result;
}
exports.splitByWidth = splitByWidth;
//# sourceMappingURL=wordBreaker.js.map

/***/ }),

/***/ 7802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_PRECISION: () => (/* binding */ DEFAULT_PRECISION),
/* harmony export */   DEFAULT_PRECISION_IN_DECIMAL_DIGITS: () => (/* binding */ DEFAULT_PRECISION_IN_DECIMAL_DIGITS),
/* harmony export */   EPSILON: () => (/* binding */ EPSILON),
/* harmony export */   LOG_E_10: () => (/* binding */ LOG_E_10),
/* harmony export */   MAX_EXP: () => (/* binding */ MAX_EXP),
/* harmony export */   MAX_VALUE: () => (/* binding */ MAX_VALUE),
/* harmony export */   MIN_EXP: () => (/* binding */ MIN_EXP),
/* harmony export */   MIN_VALUE: () => (/* binding */ MIN_VALUE),
/* harmony export */   NEGATIVE_POWERS: () => (/* binding */ NEGATIVE_POWERS),
/* harmony export */   POSITIVE_POWERS: () => (/* binding */ POSITIVE_POWERS),
/* harmony export */   ceilToPrecision: () => (/* binding */ ceilToPrecision),
/* harmony export */   ceilWithPrecision: () => (/* binding */ ceilWithPrecision),
/* harmony export */   detectPrecision: () => (/* binding */ detectPrecision),
/* harmony export */   ensureInRange: () => (/* binding */ ensureInRange),
/* harmony export */   equalWithPrecision: () => (/* binding */ equalWithPrecision),
/* harmony export */   floorToPrecision: () => (/* binding */ floorToPrecision),
/* harmony export */   floorWithPrecision: () => (/* binding */ floorWithPrecision),
/* harmony export */   getPrecision: () => (/* binding */ getPrecision),
/* harmony export */   greaterOrEqualWithPrecision: () => (/* binding */ greaterOrEqualWithPrecision),
/* harmony export */   greaterWithPrecision: () => (/* binding */ greaterWithPrecision),
/* harmony export */   isInteger: () => (/* binding */ isInteger),
/* harmony export */   lessOrEqualWithPrecision: () => (/* binding */ lessOrEqualWithPrecision),
/* harmony export */   lessWithPrecision: () => (/* binding */ lessWithPrecision),
/* harmony export */   log10: () => (/* binding */ log10),
/* harmony export */   pow10: () => (/* binding */ pow10),
/* harmony export */   project: () => (/* binding */ project),
/* harmony export */   removeDecimalNoise: () => (/* binding */ removeDecimalNoise),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   roundToPrecision: () => (/* binding */ roundToPrecision),
/* harmony export */   toIncrement: () => (/* binding */ toIncrement)
/* harmony export */ });
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/**
 * Module Double contains a set of constants and precision based utility methods
 * for dealing with doubles and their decimal garbage in the javascript.
 */
// Constants.
const MIN_VALUE = -Number.MAX_VALUE;
const MAX_VALUE = Number.MAX_VALUE;
const MIN_EXP = -308;
const MAX_EXP = 308;
const EPSILON = 1E-323;
const DEFAULT_PRECISION = 0.0001;
const DEFAULT_PRECISION_IN_DECIMAL_DIGITS = 12;
const LOG_E_10 = Math.log(10);
const POSITIVE_POWERS = [
    1E0, 1E1, 1E2, 1E3, 1E4, 1E5, 1E6, 1E7, 1E8, 1E9, 1E10, 1E11, 1E12, 1E13, 1E14, 1E15, 1E16, 1E17, 1E18, 1E19, 1E20, 1E21, 1E22, 1E23, 1E24, 1E25, 1E26, 1E27, 1E28, 1E29, 1E30, 1E31, 1E32, 1E33, 1E34, 1E35, 1E36, 1E37, 1E38, 1E39, 1E40, 1E41, 1E42, 1E43, 1E44, 1E45, 1E46, 1E47, 1E48, 1E49, 1E50, 1E51, 1E52, 1E53, 1E54, 1E55, 1E56, 1E57, 1E58, 1E59, 1E60, 1E61, 1E62, 1E63, 1E64, 1E65, 1E66, 1E67, 1E68, 1E69, 1E70, 1E71, 1E72, 1E73, 1E74, 1E75, 1E76, 1E77, 1E78, 1E79, 1E80, 1E81, 1E82, 1E83, 1E84, 1E85, 1E86, 1E87, 1E88, 1E89, 1E90, 1E91, 1E92, 1E93, 1E94, 1E95, 1E96, 1E97, 1E98, 1E99,
    1E100, 1E101, 1E102, 1E103, 1E104, 1E105, 1E106, 1E107, 1E108, 1E109, 1E110, 1E111, 1E112, 1E113, 1E114, 1E115, 1E116, 1E117, 1E118, 1E119, 1E120, 1E121, 1E122, 1E123, 1E124, 1E125, 1E126, 1E127, 1E128, 1E129, 1E130, 1E131, 1E132, 1E133, 1E134, 1E135, 1E136, 1E137, 1E138, 1E139, 1E140, 1E141, 1E142, 1E143, 1E144, 1E145, 1E146, 1E147, 1E148, 1E149, 1E150, 1E151, 1E152, 1E153, 1E154, 1E155, 1E156, 1E157, 1E158, 1E159, 1E160, 1E161, 1E162, 1E163, 1E164, 1E165, 1E166, 1E167, 1E168, 1E169, 1E170, 1E171, 1E172, 1E173, 1E174, 1E175, 1E176, 1E177, 1E178, 1E179, 1E180, 1E181, 1E182, 1E183, 1E184, 1E185, 1E186, 1E187, 1E188, 1E189, 1E190, 1E191, 1E192, 1E193, 1E194, 1E195, 1E196, 1E197, 1E198, 1E199,
    1E200, 1E201, 1E202, 1E203, 1E204, 1E205, 1E206, 1E207, 1E208, 1E209, 1E210, 1E211, 1E212, 1E213, 1E214, 1E215, 1E216, 1E217, 1E218, 1E219, 1E220, 1E221, 1E222, 1E223, 1E224, 1E225, 1E226, 1E227, 1E228, 1E229, 1E230, 1E231, 1E232, 1E233, 1E234, 1E235, 1E236, 1E237, 1E238, 1E239, 1E240, 1E241, 1E242, 1E243, 1E244, 1E245, 1E246, 1E247, 1E248, 1E249, 1E250, 1E251, 1E252, 1E253, 1E254, 1E255, 1E256, 1E257, 1E258, 1E259, 1E260, 1E261, 1E262, 1E263, 1E264, 1E265, 1E266, 1E267, 1E268, 1E269, 1E270, 1E271, 1E272, 1E273, 1E274, 1E275, 1E276, 1E277, 1E278, 1E279, 1E280, 1E281, 1E282, 1E283, 1E284, 1E285, 1E286, 1E287, 1E288, 1E289, 1E290, 1E291, 1E292, 1E293, 1E294, 1E295, 1E296, 1E297, 1E298, 1E299,
    1E300, 1E301, 1E302, 1E303, 1E304, 1E305, 1E306, 1E307, 1E308
];
const NEGATIVE_POWERS = [
    1E0, 1E-1, 1E-2, 1E-3, 1E-4, 1E-5, 1E-6, 1E-7, 1E-8, 1E-9, 1E-10, 1E-11, 1E-12, 1E-13, 1E-14, 1E-15, 1E-16, 1E-17, 1E-18, 1E-19, 1E-20, 1E-21, 1E-22, 1E-23, 1E-24, 1E-25, 1E-26, 1E-27, 1E-28, 1E-29, 1E-30, 1E-31, 1E-32, 1E-33, 1E-34, 1E-35, 1E-36, 1E-37, 1E-38, 1E-39, 1E-40, 1E-41, 1E-42, 1E-43, 1E-44, 1E-45, 1E-46, 1E-47, 1E-48, 1E-49, 1E-50, 1E-51, 1E-52, 1E-53, 1E-54, 1E-55, 1E-56, 1E-57, 1E-58, 1E-59, 1E-60, 1E-61, 1E-62, 1E-63, 1E-64, 1E-65, 1E-66, 1E-67, 1E-68, 1E-69, 1E-70, 1E-71, 1E-72, 1E-73, 1E-74, 1E-75, 1E-76, 1E-77, 1E-78, 1E-79, 1E-80, 1E-81, 1E-82, 1E-83, 1E-84, 1E-85, 1E-86, 1E-87, 1E-88, 1E-89, 1E-90, 1E-91, 1E-92, 1E-93, 1E-94, 1E-95, 1E-96, 1E-97, 1E-98, 1E-99,
    1E-100, 1E-101, 1E-102, 1E-103, 1E-104, 1E-105, 1E-106, 1E-107, 1E-108, 1E-109, 1E-110, 1E-111, 1E-112, 1E-113, 1E-114, 1E-115, 1E-116, 1E-117, 1E-118, 1E-119, 1E-120, 1E-121, 1E-122, 1E-123, 1E-124, 1E-125, 1E-126, 1E-127, 1E-128, 1E-129, 1E-130, 1E-131, 1E-132, 1E-133, 1E-134, 1E-135, 1E-136, 1E-137, 1E-138, 1E-139, 1E-140, 1E-141, 1E-142, 1E-143, 1E-144, 1E-145, 1E-146, 1E-147, 1E-148, 1E-149, 1E-150, 1E-151, 1E-152, 1E-153, 1E-154, 1E-155, 1E-156, 1E-157, 1E-158, 1E-159, 1E-160, 1E-161, 1E-162, 1E-163, 1E-164, 1E-165, 1E-166, 1E-167, 1E-168, 1E-169, 1E-170, 1E-171, 1E-172, 1E-173, 1E-174, 1E-175, 1E-176, 1E-177, 1E-178, 1E-179, 1E-180, 1E-181, 1E-182, 1E-183, 1E-184, 1E-185, 1E-186, 1E-187, 1E-188, 1E-189, 1E-190, 1E-191, 1E-192, 1E-193, 1E-194, 1E-195, 1E-196, 1E-197, 1E-198, 1E-199,
    1E-200, 1E-201, 1E-202, 1E-203, 1E-204, 1E-205, 1E-206, 1E-207, 1E-208, 1E-209, 1E-210, 1E-211, 1E-212, 1E-213, 1E-214, 1E-215, 1E-216, 1E-217, 1E-218, 1E-219, 1E-220, 1E-221, 1E-222, 1E-223, 1E-224, 1E-225, 1E-226, 1E-227, 1E-228, 1E-229, 1E-230, 1E-231, 1E-232, 1E-233, 1E-234, 1E-235, 1E-236, 1E-237, 1E-238, 1E-239, 1E-240, 1E-241, 1E-242, 1E-243, 1E-244, 1E-245, 1E-246, 1E-247, 1E-248, 1E-249, 1E-250, 1E-251, 1E-252, 1E-253, 1E-254, 1E-255, 1E-256, 1E-257, 1E-258, 1E-259, 1E-260, 1E-261, 1E-262, 1E-263, 1E-264, 1E-265, 1E-266, 1E-267, 1E-268, 1E-269, 1E-270, 1E-271, 1E-272, 1E-273, 1E-274, 1E-275, 1E-276, 1E-277, 1E-278, 1E-279, 1E-280, 1E-281, 1E-282, 1E-283, 1E-284, 1E-285, 1E-286, 1E-287, 1E-288, 1E-289, 1E-290, 1E-291, 1E-292, 1E-293, 1E-294, 1E-295, 1E-296, 1E-297, 1E-298, 1E-299,
    1E-300, 1E-301, 1E-302, 1E-303, 1E-304, 1E-305, 1E-306, 1E-307, 1E-308, 1E-309, 1E-310, 1E-311, 1E-312, 1E-313, 1E-314, 1E-315, 1E-316, 1E-317, 1E-318, 1E-319, 1E-320, 1E-321, 1E-322, 1E-323, 1E-324
];
/**
 * Returns powers of 10.
 * Unlike the Math.pow this function produces no decimal garbage.
 * @param exp Exponent.
 */
function pow10(exp) {
    // Positive & zero
    if (exp >= 0) {
        if (exp < POSITIVE_POWERS.length) {
            return POSITIVE_POWERS[exp];
        }
        else {
            return Infinity;
        }
    }
    // Negative
    exp = -exp;
    if (exp > 0 && exp < NEGATIVE_POWERS.length) { // if exp==int.MIN_VALUE then changing the sign will overflow and keep the number negative - we need to check for exp > 0 to filter out this corner case
        return NEGATIVE_POWERS[exp];
    }
    else {
        return 0;
    }
}
/**
 * Returns the 10 base logarithm of the number.
 * Unlike Math.log function this produces integer results with no decimal garbage.
 * @param val Positive value or zero.
 */
// eslint-disable-next-line max-lines-per-function
function log10(val) {
    // Fast Log10() algorithm
    if (val > 1 && val < 1E16) {
        if (val < 1E8) {
            if (val < 1E4) {
                if (val < 1E2) {
                    if (val < 1E1) {
                        return 0;
                    }
                    else {
                        return 1;
                    }
                }
                else {
                    if (val < 1E3) {
                        return 2;
                    }
                    else {
                        return 3;
                    }
                }
            }
            else {
                if (val < 1E6) {
                    if (val < 1E5) {
                        return 4;
                    }
                    else {
                        return 5;
                    }
                }
                else {
                    if (val < 1E7) {
                        return 6;
                    }
                    else {
                        return 7;
                    }
                }
            }
        }
        else {
            if (val < 1E12) {
                if (val < 1E10) {
                    if (val < 1E9) {
                        return 8;
                    }
                    else {
                        return 9;
                    }
                }
                else {
                    if (val < 1E11) {
                        return 10;
                    }
                    else {
                        return 11;
                    }
                }
            }
            else {
                if (val < 1E14) {
                    if (val < 1E13) {
                        return 12;
                    }
                    else {
                        return 13;
                    }
                }
                else {
                    if (val < 1E15) {
                        return 14;
                    }
                    else {
                        return 15;
                    }
                }
            }
        }
    }
    if (val > 1E-16 && val < 1) {
        if (val < 1E-8) {
            if (val < 1E-12) {
                if (val < 1E-14) {
                    if (val < 1E-15) {
                        return -16;
                    }
                    else {
                        return -15;
                    }
                }
                else {
                    if (val < 1E-13) {
                        return -14;
                    }
                    else {
                        return -13;
                    }
                }
            }
            else {
                if (val < 1E-10) {
                    if (val < 1E-11) {
                        return -12;
                    }
                    else {
                        return -11;
                    }
                }
                else {
                    if (val < 1E-9) {
                        return -10;
                    }
                    else {
                        return -9;
                    }
                }
            }
        }
        else {
            if (val < 1E-4) {
                if (val < 1E-6) {
                    if (val < 1E-7) {
                        return -8;
                    }
                    else {
                        return -7;
                    }
                }
                else {
                    if (val < 1E-5) {
                        return -6;
                    }
                    else {
                        return -5;
                    }
                }
            }
            else {
                if (val < 1E-2) {
                    if (val < 1E-3) {
                        return -4;
                    }
                    else {
                        return -3;
                    }
                }
                else {
                    if (val < 1E-1) {
                        return -2;
                    }
                    else {
                        return -1;
                    }
                }
            }
        }
    }
    // JS Math provides only natural log function so we need to calc the 10 base logarithm:
    // logb(x) = logk(x)/logk(b);
    const log10 = Math.log(val) / LOG_E_10;
    return floorWithPrecision(log10);
}
/**
 * Returns a power of 10 representing precision of the number based on the number of meaningful decimal digits.
 * For example the precision of 56,263.3767 with the 6 meaningful decimal digit is 0.1.
 * @param x Value.
 * @param decimalDigits How many decimal digits are meaningfull.
 */
function getPrecision(x, decimalDigits) {
    if (decimalDigits === undefined) {
        decimalDigits = DEFAULT_PRECISION_IN_DECIMAL_DIGITS;
    }
    if (!x || !isFinite(x)) {
        return undefined;
    }
    const exp = log10(Math.abs(x));
    if (exp < MIN_EXP) {
        return 0;
    }
    const precisionExp = Math.max(exp - decimalDigits, -NEGATIVE_POWERS.length + 1);
    return pow10(precisionExp);
}
/**
 * Checks if a delta between 2 numbers is less than provided precision.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function equalWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x === y || Math.abs(x - y) < precision;
}
/**
 * Checks if a first value is less than another taking
 * into account the loose precision based equality.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function lessWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x < y && Math.abs(x - y) > precision;
}
/**
 * Checks if a first value is less or equal than another taking
 * into account the loose precision based equality.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function lessOrEqualWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x < y || Math.abs(x - y) < precision;
}
/**
 * Checks if a first value is greater than another taking
 * into account the loose precision based equality.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function greaterWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x > y && Math.abs(x - y) > precision;
}
/**
 * Checks if a first value is greater or equal to another taking
 * into account the loose precision based equality.
 * @param x One value.
 * @param y Another value.
 * @param precision Precision value.
 */
function greaterOrEqualWithPrecision(x, y, precision) {
    precision = detectPrecision(precision, x, y);
    return x > y || Math.abs(x - y) < precision;
}
/**
 * Floors the number unless it's withing the precision distance from the higher int.
 * @param x One value.
 * @param precision Precision value.
 */
function floorWithPrecision(x, precision) {
    precision = precision != null ? precision : DEFAULT_PRECISION;
    const roundX = Math.round(x);
    if (Math.abs(x - roundX) < precision) {
        return roundX;
    }
    else {
        return Math.floor(x);
    }
}
/**
 * Ceils the number unless it's withing the precision distance from the lower int.
 * @param x One value.
 * @param precision Precision value.
 */
function ceilWithPrecision(x, precision) {
    precision = detectPrecision(precision, DEFAULT_PRECISION);
    const roundX = Math.round(x);
    if (Math.abs(x - roundX) < precision) {
        return roundX;
    }
    else {
        return Math.ceil(x);
    }
}
/**
 * Floors the number to the provided precision.
 * For example 234,578 floored to 1,000 precision is 234,000.
 * @param x One value.
 * @param precision Precision value.
 */
function floorToPrecision(x, precision) {
    precision = detectPrecision(precision, DEFAULT_PRECISION);
    if (precision === 0 || x === 0) {
        return x;
    }
    // Precision must be a Power of 10
    return Math.floor(x / precision) * precision;
}
/**
 * Ceils the number to the provided precision.
 * For example 234,578 floored to 1,000 precision is 235,000.
 * @param x One value.
 * @param precision Precision value.
 */
function ceilToPrecision(x, precision) {
    precision = detectPrecision(precision, DEFAULT_PRECISION);
    if (precision === 0 || x === 0) {
        return x;
    }
    // Precision must be a Power of 10
    return Math.ceil(x / precision) * precision;
}
/**
 * Rounds the number to the provided precision.
 * For example 234,578 floored to 1,000 precision is 235,000.
 * @param x One value.
 * @param precision Precision value.
 */
function roundToPrecision(x, precision) {
    precision = detectPrecision(precision, DEFAULT_PRECISION);
    if (precision === 0 || x === 0) {
        return x;
    }
    // Precision must be a Power of 10
    let result = Math.round(x / precision) * precision;
    const decimalDigits = Math.round(log10(Math.abs(x)) - log10(precision)) + 1;
    if (decimalDigits > 0 && decimalDigits < 16) {
        result = parseFloat(result.toPrecision(decimalDigits));
    }
    return result;
}
/**
 * Returns the value making sure that it's restricted to the provided range.
 * @param x One value.
 * @param min Range min boundary.
 * @param max Range max boundary.
 */
function ensureInRange(x, min, max) {
    if (x === undefined || x === null) {
        return x;
    }
    if (x < min) {
        return min;
    }
    if (x > max) {
        return max;
    }
    return x;
}
/**
 * Rounds the value - this method is actually faster than Math.round - used in the graphics utils.
 * @param x Value to round.
 */
function round(x) {
    return (0.5 + x) << 0;
}
/**
 * Projects the value from the source range into the target range.
 * @param value Value to project.
 * @param fromMin Minimum of the source range.
 * @param toMin Minimum of the target range.
 * @param toMax Maximum of the target range.
 */
function project(value, fromMin, fromSize, toMin, toSize) {
    if (fromSize === 0 || toSize === 0) {
        if (fromMin <= value && value <= fromMin + fromSize) {
            return toMin;
        }
        else {
            return NaN;
        }
    }
    const relativeX = (value - fromMin) / fromSize;
    const projectedX = toMin + relativeX * toSize;
    return projectedX;
}
/**
 * Removes decimal noise.
 * @param value Value to be processed.
 */
function removeDecimalNoise(value) {
    return roundToPrecision(value, getPrecision(value));
}
/**
 * Checks whether the number is integer.
 * @param value Value to be checked.
 */
function isInteger(value) {
    return value !== null && value % 1 === 0;
}
/**
 * Dividing by increment will give us count of increments
 * Round out the rough edges into even integer
 * Multiply back by increment to get rounded value
 * e.g. Rounder.toIncrement(0.647291, 0.05) => 0.65
 * @param value - value to round to nearest increment
 * @param increment - smallest increment to round toward
 */
function toIncrement(value, increment) {
    return Math.round(value / increment) * increment;
}
/**
 * Overrides the given precision with defaults if necessary. Exported only for tests
 *
 * precision defined returns precision
 * x defined with y undefined returns twelve digits of precision based on x
 * x defined but zero with y defined; returns twelve digits of precision based on y
 * x and y defined retursn twelve digits of precision based on the minimum of the two
 * if no applicable precision is found based on those (such as x and y being zero), the default precision is used
 */
function detectPrecision(precision, x, y) {
    if (precision !== undefined) {
        return precision;
    }
    let calculatedPrecision;
    if (!y) {
        calculatedPrecision = getPrecision(x);
    }
    else if (!x) {
        calculatedPrecision = getPrecision(y);
    }
    else {
        calculatedPrecision = getPrecision(Math.min(Math.abs(x), Math.abs(y)));
    }
    return calculatedPrecision || DEFAULT_PRECISION;
}
//# sourceMappingURL=double.js.map

/***/ }),

/***/ 1085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   createWithId: () => (/* binding */ createWithId),
/* harmony export */   createWithName: () => (/* binding */ createWithName),
/* harmony export */   diff: () => (/* binding */ diff),
/* harmony export */   distinct: () => (/* binding */ distinct),
/* harmony export */   emptyToNull: () => (/* binding */ emptyToNull),
/* harmony export */   ensureArray: () => (/* binding */ ensureArray),
/* harmony export */   extendWithId: () => (/* binding */ extendWithId),
/* harmony export */   extendWithName: () => (/* binding */ extendWithName),
/* harmony export */   findItemWithName: () => (/* binding */ findItemWithName),
/* harmony export */   findWithId: () => (/* binding */ findWithId),
/* harmony export */   indexOf: () => (/* binding */ indexOf),
/* harmony export */   indexWithName: () => (/* binding */ indexWithName),
/* harmony export */   insertSorted: () => (/* binding */ insertSorted),
/* harmony export */   intersect: () => (/* binding */ intersect),
/* harmony export */   isArrayOrInheritedArray: () => (/* binding */ isArrayOrInheritedArray),
/* harmony export */   isInArray: () => (/* binding */ isInArray),
/* harmony export */   isSorted: () => (/* binding */ isSorted),
/* harmony export */   isSortedNumeric: () => (/* binding */ isSortedNumeric),
/* harmony export */   isUndefinedOrEmpty: () => (/* binding */ isUndefinedOrEmpty),
/* harmony export */   range: () => (/* binding */ range),
/* harmony export */   removeFirst: () => (/* binding */ removeFirst),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   sequenceEqual: () => (/* binding */ sequenceEqual),
/* harmony export */   swap: () => (/* binding */ swap),
/* harmony export */   take: () => (/* binding */ take),
/* harmony export */   union: () => (/* binding */ union),
/* harmony export */   unionSingle: () => (/* binding */ unionSingle)
/* harmony export */ });
/**
 * Returns items that exist in target and other.
 */
function intersect(target, other) {
    const result = [];
    for (let i = target.length - 1; i >= 0; --i) {
        if (other.indexOf(target[i]) !== -1) {
            result.push(target[i]);
        }
    }
    return result;
}
/**
 * Return elements exists in target but not exists in other.
 */
function diff(target, other) {
    const result = [];
    for (let i = target.length - 1; i >= 0; --i) {
        const value = target[i];
        if (other.indexOf(value) === -1) {
            result.push(value);
        }
    }
    return result;
}
/**
 * Return an array with only the distinct items in the source.
 */
function distinct(source) {
    const result = [];
    for (let i = 0, len = source.length; i < len; i++) {
        const value = source[i];
        if (result.indexOf(value) === -1) {
            result.push(value);
        }
    }
    return result;
}
/**
 * Pushes content of source onto target,
 * for parts of course that do not already exist in target.
 */
function union(target, source) {
    for (let i = 0, len = source.length; i < len; ++i) {
        unionSingle(target, source[i]);
    }
}
/**
 * Pushes value onto target, if value does not already exist in target.
 */
function unionSingle(target, value) {
    if (target.indexOf(value) < 0) {
        target.push(value);
    }
}
/**
 * Returns an array with a range of items from source,
 * including the startIndex & endIndex.
 */
function range(source, startIndex, endIndex) {
    const result = [];
    for (let i = startIndex; i <= endIndex; ++i) {
        result.push(source[i]);
    }
    return result;
}
/**
 * Returns an array that includes items from source, up to the specified count.
 */
function take(source, count) {
    const result = [];
    for (let i = 0; i < count; ++i) {
        result.push(source[i]);
    }
    return result;
}
function copy(source) {
    return take(source, source.length);
}
/**
  * Returns a value indicating whether the arrays have the same values in the same sequence.
  */
function sequenceEqual(left, right, comparison) {
    // Normalize falsy to null
    if (!left) {
        left = null;
    }
    if (!right) {
        right = null;
    }
    // T can be same as U, and it is possible for left and right to be the same array object...
    if (left === right) {
        return true;
    }
    if (!!left !== !!right) {
        return false;
    }
    const len = left.length;
    if (len !== right.length) {
        return false;
    }
    let i = 0;
    while (i < len && comparison(left[i], right[i])) {
        ++i;
    }
    return i === len;
}
/**
 * Returns null if the specified array is empty.
 * Otherwise returns the specified array.
 */
function emptyToNull(array) {
    if (array && array.length === 0) {
        return null;
    }
    return array;
}
function indexOf(array, predicate) {
    for (let i = 0, len = array.length; i < len; ++i) {
        if (predicate(array[i])) {
            return i;
        }
    }
    return -1;
}
/**
 * Returns a copy of the array rotated by the specified offset.
 */
function rotate(array, offset) {
    if (offset === 0)
        return array.slice();
    const rotated = array.slice(offset);
    Array.prototype.push.apply(rotated, array.slice(0, offset));
    return rotated;
}
function createWithId() {
    return extendWithId([]);
}
function extendWithId(array) {
    const extended = array;
    extended.withId = withId;
    return extended;
}
/**
 * Finds and returns the first item with a matching ID.
 */
function findWithId(array, id) {
    for (let i = 0, len = array.length; i < len; i++) {
        const item = array[i];
        if (item.id === id)
            return item;
    }
}
function withId(id) {
    return findWithId(this, id);
}
function createWithName() {
    return extendWithName([]);
}
function extendWithName(array) {
    const extended = array;
    extended.withName = withName;
    return extended;
}
function findItemWithName(array, name) {
    const index = indexWithName(array, name);
    if (index >= 0)
        return array[index];
}
function indexWithName(array, name) {
    for (let i = 0, len = array.length; i < len; i++) {
        const item = array[i];
        if (item.name === name)
            return i;
    }
    return -1;
}
/**
 * Inserts a number in sorted order into a list of numbers already in sorted order.
 * @returns True if the item was added, false if it already existed.
 */
function insertSorted(list, value) {
    const len = list.length;
    // NOTE: iterate backwards because incoming values tend to be sorted already.
    for (let i = len - 1; i >= 0; i--) {
        const diff = list[i] - value;
        if (diff === 0)
            return false;
        if (diff > 0)
            continue;
        // diff < 0
        list.splice(i + 1, 0, value);
        return true;
    }
    list.unshift(value);
    return true;
}
/**
 * Removes the first occurrence of a value from a list if it exists.
 * @returns True if the value was removed, false if it did not exist in the list.
 */
function removeFirst(list, value) {
    const index = list.indexOf(value);
    if (index < 0)
        return false;
    list.splice(index, 1);
    return true;
}
/**
 * Finds and returns the first item with a matching name.
 */
function withName(name) {
    return findItemWithName(this, name);
}
/**
 * Deletes all items from the array.
 */
function clear(array) {
    if (!array)
        return;
    while (array.length > 0)
        array.pop();
}
function isUndefinedOrEmpty(array) {
    if (!array || array.length === 0) {
        return true;
    }
    return false;
}
function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
function isInArray(array, lookupItem, compareCallback) {
    return array.some(item => compareCallback(item, lookupItem));
}
/** Checks if the given object is an Array, and looking all the way up the prototype chain. */
function isArrayOrInheritedArray(obj) {
    let nextPrototype = obj;
    while (nextPrototype != null) {
        if (Array.isArray(nextPrototype))
            return true;
        nextPrototype = Object.getPrototypeOf(nextPrototype);
    }
    return false;
}
/**
 * Returns true if the specified values array is sorted in an order as determined by the specified compareFunction.
 */
function isSorted(values, compareFunction) {
    const ilen = values.length;
    if (ilen >= 2) {
        for (let i = 1; i < ilen; i++) {
            if (compareFunction(values[i - 1], values[i]) > 0) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Returns true if the specified number values array is sorted in ascending order
 * (or descending order if the specified descendingOrder is truthy).
 */
function isSortedNumeric(values, descendingOrder) {
    const compareFunction = descendingOrder ?
        (a, b) => b - a :
        (a, b) => a - b;
    return isSorted(values, compareFunction);
}
/**
 * Ensures that the given T || T[] is in array form, either returning the array or
 * converting single items into an array of length one.
 */
function ensureArray(value) {
    if (Array.isArray(value)) {
        return value;
    }
    return [value];
}
//# sourceMappingURL=arrayExtensions.js.map

/***/ }),

/***/ 2136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBitCount: () => (/* binding */ getBitCount),
/* harmony export */   hasFlag: () => (/* binding */ hasFlag),
/* harmony export */   resetFlag: () => (/* binding */ resetFlag),
/* harmony export */   setFlag: () => (/* binding */ setFlag),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _double__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7802);
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.

/**
 * Extensions for Enumerations.
 */
/**
 * Gets a value indicating whether the value has the bit flags set.
 */
function hasFlag(value, flag) {
    return (value & flag) === flag;
}
/**
 * Sets a value of a flag without modifying any other flags.
 */
function setFlag(value, flag) {
    return value |= flag;
}
/**
 * Resets a value of a flag without modifying any other flags.
 */
function resetFlag(value, flag) {
    return value &= ~flag;
}
/**
 * According to the TypeScript Handbook, this is safe to do.
 */
function toString(enumType, value) {
    return enumType[value];
}
/**
 * Returns the number of 1's in the specified value that is a set of binary bit flags.
 */
function getBitCount(value) {
    if (!(0,_double__WEBPACK_IMPORTED_MODULE_0__.isInteger)(value))
        return 0;
    let bitCount = 0;
    let shiftingValue = value;
    while (shiftingValue !== 0) {
        if ((shiftingValue & 1) === 1) {
            bitCount++;
        }
        shiftingValue = shiftingValue >>> 1;
    }
    return bitCount;
}
//# sourceMappingURL=enumExtensions.js.map

/***/ }),

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XOR: () => (/* binding */ XOR)
/* harmony export */ });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
function XOR(a, b) {
    return (a || b) && !(a && b);
}
//# sourceMappingURL=logicExtensions.js.map

/***/ }),

/***/ 9765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   run: () => (/* binding */ run)
/* harmony export */ });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
/**
 * Runs exec on regex starting from 0 index
 * This is the expected behavior but RegExp actually remember
 * the last index they stopped at (found match at) and will
 * return unexpected results when run in sequence.
 * @param regex - regular expression object
 * @param value - string to search wiht regex
 * @param start - index within value to start regex
 */
function run(regex, value, start) {
    regex.lastIndex = start || 0;
    return regex.exec(value);
}
//# sourceMappingURL=regExpExtensions.js.map

/***/ }),

/***/ 9446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endsWith: () => (/* binding */ endsWith)
/* harmony export */ });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/**
 * Extensions to String class.
 */
/**
 * Checks if a string ends with a sub-string.
 */
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
//# sourceMappingURL=stringExtensions.js.map

/***/ }),

/***/ 2170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayExtensions: () => (/* reexport module object */ _extensions_arrayExtensions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   double: () => (/* reexport module object */ _double__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   enumExtensions: () => (/* reexport module object */ _extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   jsonComparer: () => (/* reexport module object */ _jsonComparer__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   logicExtensions: () => (/* reexport module object */ _extensions_logicExtensions__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   numericSequence: () => (/* reexport module object */ _numericSequence_numericSequence__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   numericSequenceRange: () => (/* reexport module object */ _numericSequence_numericSequenceRange__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   pixelConverter: () => (/* reexport module object */ _pixelConverter__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   prototype: () => (/* reexport module object */ _prototype__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   regExpExtensions: () => (/* reexport module object */ _extensions_regExpExtensions__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   stringExtensions: () => (/* reexport module object */ _extensions_stringExtensions__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   textSizeDefaults: () => (/* reexport module object */ _textSizeDefaults__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   valueType: () => (/* reexport module object */ _valueType__WEBPACK_IMPORTED_MODULE_12__)
/* harmony export */ });
/* harmony import */ var _extensions_arrayExtensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1085);
/* harmony import */ var _extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2136);
/* harmony import */ var _extensions_logicExtensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8981);
/* harmony import */ var _extensions_regExpExtensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9765);
/* harmony import */ var _extensions_stringExtensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9446);
/* harmony import */ var _numericSequence_numericSequence__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99);
/* harmony import */ var _numericSequence_numericSequenceRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8489);
/* harmony import */ var _double__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7802);
/* harmony import */ var _jsonComparer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9289);
/* harmony import */ var _pixelConverter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4732);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2010);
/* harmony import */ var _textSizeDefaults__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1285);
/* harmony import */ var _valueType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3434);














//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   equals: () => (/* binding */ equals)
/* harmony export */ });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
/**
 * Performs JSON-style comparison of two objects.
 */
function equals(x, y) {
    if (x === y)
        return true;
    return JSON.stringify(x) === JSON.stringify(y);
}
//# sourceMappingURL=jsonComparer.js.map

/***/ }),

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumericSequence: () => (/* binding */ NumericSequence)
/* harmony export */ });
/* harmony import */ var _double__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7802);
/* harmony import */ var _numericSequenceRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8489);
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */


class NumericSequence {
    // eslint-disable-next-line max-lines-per-function
    static calculate(range, expectedCount, maxAllowedMargin, minPower, useZeroRefPoint, steps) {
        const result = new NumericSequence();
        if (expectedCount === undefined)
            expectedCount = 10;
        else
            expectedCount = _double__WEBPACK_IMPORTED_MODULE_0__.ensureInRange(expectedCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
        if (minPower === undefined)
            minPower = _double__WEBPACK_IMPORTED_MODULE_0__.MIN_EXP;
        if (useZeroRefPoint === undefined)
            useZeroRefPoint = false;
        if (maxAllowedMargin === undefined)
            maxAllowedMargin = 1;
        if (steps === undefined)
            steps = [1, 2, 5];
        // Handle single stop case
        if (range.forcedSingleStop) {
            result.interval = range.getSize();
            result.intervalOffset = result.interval - (range.forcedSingleStop - range.min);
            result.min = range.min;
            result.max = range.max;
            result.sequence = [range.forcedSingleStop];
            return result;
        }
        let interval = 0;
        let min = 0;
        let max = 9;
        const canExtendMin = maxAllowedMargin > 0 && !range.hasFixedMin;
        const canExtendMax = maxAllowedMargin > 0 && !range.hasFixedMax;
        const size = range.getSize();
        let exp = _double__WEBPACK_IMPORTED_MODULE_0__.log10(size);
        // Account for Exp of steps
        const stepExp = _double__WEBPACK_IMPORTED_MODULE_0__.log10(steps[0]);
        exp = exp - stepExp;
        // Account for MaxCount
        const expectedCountExp = _double__WEBPACK_IMPORTED_MODULE_0__.log10(expectedCount);
        exp = exp - expectedCountExp;
        // Account for MinPower
        exp = Math.max(exp, minPower - stepExp + 1);
        let count = undefined;
        // Create array of "good looking" numbers
        if (interval !== 0) {
            // If explicit interval is defined - use it instead of the steps array.
            const power = _double__WEBPACK_IMPORTED_MODULE_0__.pow10(exp);
            const roundMin = _double__WEBPACK_IMPORTED_MODULE_0__.floorToPrecision(range.min, power);
            const roundMax = _double__WEBPACK_IMPORTED_MODULE_0__.ceilToPrecision(range.max, power);
            const roundRange = _numericSequenceRange__WEBPACK_IMPORTED_MODULE_1__.NumericSequenceRange.calculateFixedRange(roundMin, roundMax);
            roundRange.shrinkByStep(range, interval);
            min = roundRange.min;
            max = roundRange.max;
            count = Math.floor(roundRange.getSize() / interval);
        }
        else {
            // No interval defined -> find optimal interval
            let dexp;
            for (dexp = 0; dexp < 3; dexp++) {
                const e = exp + dexp;
                const power = _double__WEBPACK_IMPORTED_MODULE_0__.pow10(e);
                const roundMin = _double__WEBPACK_IMPORTED_MODULE_0__.floorToPrecision(range.min, power);
                const roundMax = _double__WEBPACK_IMPORTED_MODULE_0__.ceilToPrecision(range.max, power);
                // Go throught the steps array looking for the smallest step that produces the right interval count.
                const stepsCount = steps.length;
                const stepPower = _double__WEBPACK_IMPORTED_MODULE_0__.pow10(e - 1);
                for (let i = 0; i < stepsCount; i++) {
                    const step = steps[i] * stepPower;
                    const roundRange = _numericSequenceRange__WEBPACK_IMPORTED_MODULE_1__.NumericSequenceRange.calculateFixedRange(roundMin, roundMax, useZeroRefPoint);
                    roundRange.shrinkByStep(range, step);
                    // If the range is based on Data we might need to extend it to provide nice data margins.
                    if (canExtendMin && range.min === roundRange.min && maxAllowedMargin >= 1)
                        roundRange.min -= step;
                    if (canExtendMax && range.max === roundRange.max && maxAllowedMargin >= 1)
                        roundRange.max += step;
                    // Count the intervals
                    count = _double__WEBPACK_IMPORTED_MODULE_0__.ceilWithPrecision(roundRange.getSize() / step, _double__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PRECISION);
                    if (count <= expectedCount || (dexp === 2 && i === stepsCount - 1) || (expectedCount === 1 && count === 2 && (step > range.getSize() || (range.min < 0 && range.max > 0 && step * 2 >= range.getSize())))) {
                        interval = step;
                        min = roundRange.min;
                        max = roundRange.max;
                        break;
                    }
                }
                // Increase the scale power until the interval is found
                if (interval !== 0)
                    break;
            }
        }
        // Avoid extreme count cases (>1000 ticks)
        if (count > expectedCount * 32 || count > NumericSequence.MAX_COUNT) {
            count = Math.min(expectedCount * 32, NumericSequence.MAX_COUNT);
            interval = (max - min) / count;
        }
        result.min = min;
        result.max = max;
        result.interval = interval;
        result.intervalOffset = min - range.min;
        result.maxAllowedMargin = maxAllowedMargin;
        result.canExtendMin = canExtendMin;
        result.canExtendMax = canExtendMax;
        // Fill in the Sequence
        const precision = _double__WEBPACK_IMPORTED_MODULE_0__.getPrecision(interval, 0);
        result.precision = precision;
        const sequence = [];
        let x = _double__WEBPACK_IMPORTED_MODULE_0__.roundToPrecision(min, precision);
        sequence.push(x);
        for (let i = 0; i < count; i++) {
            x = _double__WEBPACK_IMPORTED_MODULE_0__.roundToPrecision(x + interval, precision);
            sequence.push(x);
        }
        result.sequence = sequence;
        result.trimMinMax(range.min, range.max);
        return result;
    }
    /**
     * Calculates the sequence of int numbers which are mapped to the multiples of the units grid.
     * @min - The minimum of the range.
     * @max - The maximum of the range.
     * @maxCount - The max count of intervals.
     * @steps - array of intervals.
     */
    static calculateUnits(min, max, maxCount, steps) {
        // Initialization actions
        maxCount = _double__WEBPACK_IMPORTED_MODULE_0__.ensureInRange(maxCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
        if (min === max) {
            max = min + 1;
        }
        let stepCount = 0;
        let step = 0;
        // Calculate step
        for (let i = 0; i < steps.length; i++) {
            step = steps[i];
            const maxStepCount = _double__WEBPACK_IMPORTED_MODULE_0__.ceilWithPrecision(max / step);
            const minStepCount = _double__WEBPACK_IMPORTED_MODULE_0__.floorWithPrecision(min / step);
            stepCount = maxStepCount - minStepCount;
            if (stepCount <= maxCount) {
                break;
            }
        }
        // Calculate the offset
        let offset = -min;
        offset = offset % step;
        // Create sequence
        const result = new NumericSequence();
        result.sequence = [];
        for (let x = min + offset;; x += step) {
            result.sequence.push(x);
            if (x >= max)
                break;
        }
        result.interval = step;
        result.intervalOffset = offset;
        result.min = result.sequence[0];
        result.max = result.sequence[result.sequence.length - 1];
        return result;
    }
    trimMinMax(min, max) {
        const minMargin = (min - this.min) / this.interval;
        const maxMargin = (this.max - max) / this.interval;
        const marginPrecision = 0.001;
        if (!this.canExtendMin || (minMargin > this.maxAllowedMargin && minMargin > marginPrecision)) {
            this.min = min;
        }
        if (!this.canExtendMax || (maxMargin > this.maxAllowedMargin && maxMargin > marginPrecision)) {
            this.max = max;
        }
    }
}
NumericSequence.MIN_COUNT = 1;
NumericSequence.MAX_COUNT = 1000;
//# sourceMappingURL=numericSequence.js.map

/***/ }),

/***/ 8489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumericSequenceRange: () => (/* binding */ NumericSequenceRange),
/* harmony export */   hasValue: () => (/* binding */ hasValue)
/* harmony export */ });
/* harmony import */ var _double__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7802);
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

class NumericSequenceRange {
    _ensureIncludeZero() {
        if (this.includeZero) {
            // fixed min and max has higher priority than includeZero
            if (this.min > 0 && !this.hasFixedMin) {
                this.min = 0;
            }
            if (this.max < 0 && !this.hasFixedMax) {
                this.max = 0;
            }
        }
    }
    _ensureNotEmpty() {
        if (this.min === this.max) {
            if (!this.min) {
                this.min = 0;
                this.max = NumericSequenceRange.DEFAULT_MAX;
                this.hasFixedMin = true;
                this.hasFixedMax = true;
            }
            else {
                // We are dealing with a single data value (includeZero is not set)
                // In order to fix the range we need to extend it in both directions by half of the interval.
                // Interval is calculated based on the number:
                // 1. Integers below 10,000 are extended by 0.5: so the [2006-2006] empty range is extended to [2005.5-2006.5] range and the ForsedSingleStop=2006
                // 2. Other numbers are extended by half of their power: [700,001-700,001] => [650,001-750,001] and the ForsedSingleStop=null as we want the intervals to be calculated to cover the range.
                const value = this.min;
                const exp = _double__WEBPACK_IMPORTED_MODULE_0__.log10(Math.abs(value));
                let step;
                if (exp >= 0 && exp < 4) {
                    step = 0.5;
                    this.forcedSingleStop = value;
                }
                else {
                    step = _double__WEBPACK_IMPORTED_MODULE_0__.pow10(exp) / 2;
                    this.forcedSingleStop = null;
                }
                this.min = value - step;
                this.max = value + step;
            }
        }
    }
    _ensureDirection() {
        if (this.min > this.max) {
            const temp = this.min;
            this.min = this.max;
            this.max = temp;
        }
    }
    getSize() {
        return this.max - this.min;
    }
    shrinkByStep(range, step) {
        let oldCount = this.min / step;
        let newCount = range.min / step;
        let deltaCount = Math.floor(newCount - oldCount);
        this.min += deltaCount * step;
        oldCount = this.max / step;
        newCount = range.max / step;
        deltaCount = Math.ceil(newCount - oldCount);
        this.max += deltaCount * step;
    }
    static calculate(dataMin, dataMax, fixedMin, fixedMax, includeZero) {
        const result = new NumericSequenceRange();
        result.includeZero = includeZero ? true : false;
        result.hasDataRange = hasValue(dataMin) && hasValue(dataMax);
        result.hasFixedMin = hasValue(fixedMin);
        result.hasFixedMax = hasValue(fixedMax);
        dataMin = _double__WEBPACK_IMPORTED_MODULE_0__.ensureInRange(dataMin, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
        dataMax = _double__WEBPACK_IMPORTED_MODULE_0__.ensureInRange(dataMax, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
        // Calculate the range using the min, max, dataRange
        if (result.hasFixedMin && result.hasFixedMax) {
            result.min = fixedMin;
            result.max = fixedMax;
        }
        else if (result.hasFixedMin) {
            result.min = fixedMin;
            result.max = dataMax > fixedMin ? dataMax : fixedMin;
        }
        else if (result.hasFixedMax) {
            result.min = dataMin < fixedMax ? dataMin : fixedMax;
            result.max = fixedMax;
        }
        else if (result.hasDataRange) {
            result.min = dataMin;
            result.max = dataMax;
        }
        else {
            result.min = 0;
            result.max = 0;
        }
        result._ensureIncludeZero();
        result._ensureNotEmpty();
        result._ensureDirection();
        if (result.min === 0) {
            result.hasFixedMin = true; // If the range starts from zero we should prevent extending the intervals into the negative range
        }
        else if (result.max === 0) {
            result.hasFixedMax = true; // If the range ends at zero we should prevent extending the intervals into the positive range
        }
        return result;
    }
    static calculateDataRange(dataMin, dataMax, includeZero) {
        if (!hasValue(dataMin) || !hasValue(dataMax)) {
            return NumericSequenceRange.calculateFixedRange(0, NumericSequenceRange.DEFAULT_MAX);
        }
        else {
            return NumericSequenceRange.calculate(dataMin, dataMax, null, null, includeZero);
        }
    }
    static calculateFixedRange(fixedMin, fixedMax, includeZero) {
        const result = new NumericSequenceRange();
        result.hasDataRange = false;
        result.includeZero = includeZero;
        result.min = fixedMin;
        result.max = fixedMax;
        result._ensureIncludeZero();
        result._ensureNotEmpty();
        result._ensureDirection();
        result.hasFixedMin = true;
        result.hasFixedMax = true;
        return result;
    }
}
NumericSequenceRange.DEFAULT_MAX = 10;
NumericSequenceRange.MIN_SUPPORTED_DOUBLE = -1E307;
NumericSequenceRange.MAX_SUPPORTED_DOUBLE = 1E307;
/** Note: Exported for testability */
function hasValue(value) {
    return value !== undefined && value !== null;
}
//# sourceMappingURL=numericSequenceRange.js.map

/***/ }),

/***/ 4732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromPoint: () => (/* binding */ fromPoint),
/* harmony export */   fromPointToPixel: () => (/* binding */ fromPointToPixel),
/* harmony export */   toPoint: () => (/* binding */ toPoint),
/* harmony export */   toString: () => (/* binding */ toString)
/* harmony export */ });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
const PxPtRatio = 4 / 3;
const PixelString = "px";
/**
 * Appends 'px' to the end of number value for use as pixel string in styles
 */
function toString(px) {
    return px + PixelString;
}
/**
 * Converts point value (pt) to pixels
 * Returns a string for font-size property
 * e.g. fromPoint(8) => '24px'
 */
function fromPoint(pt) {
    return toString(fromPointToPixel(pt));
}
/**
 * Converts point value (pt) to pixels
 * Returns a number for font-size property
 * e.g. fromPoint(8) => 24px
 */
function fromPointToPixel(pt) {
    return (PxPtRatio * pt);
}
/**
 * Converts pixel value (px) to pt
 * e.g. toPoint(24) => 8
 */
function toPoint(px) {
    return px / PxPtRatio;
}
//# sourceMappingURL=pixelConverter.js.map

/***/ }),

/***/ 2010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inherit: () => (/* binding */ inherit),
/* harmony export */   inheritSingle: () => (/* binding */ inheritSingle),
/* harmony export */   overrideArray: () => (/* binding */ overrideArray)
/* harmony export */ });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/**
 * Returns a new object with the provided obj as its prototype.
 */
function inherit(obj, extension) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function wrapCtor() { }
    wrapCtor.prototype = obj;
    const inherited = new wrapCtor();
    if (extension)
        extension(inherited);
    return inherited;
}
/**
 * Returns a new object with the provided obj as its prototype
 * if, and only if, the prototype has not been previously set
 */
function inheritSingle(obj) {
    const proto = Object.getPrototypeOf(obj);
    if (proto === Object.prototype || proto === Array.prototype)
        obj = inherit(obj);
    return obj;
}
/**
 * Uses the provided callback function to selectively replace contents in the provided array.
 * @return A new array with those values overriden
 * or undefined if no overrides are necessary.
 */
function overrideArray(prototype, override) {
    if (!prototype)
        return;
    let overwritten;
    for (let i = 0, len = prototype.length; i < len; i++) {
        const value = override(prototype[i]);
        if (value) {
            if (!overwritten)
                overwritten = inherit(prototype);
            overwritten[i] = value;
        }
    }
    return overwritten;
}
//# sourceMappingURL=prototype.js.map

/***/ }),

/***/ 1285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextSizeMax: () => (/* binding */ TextSizeMax),
/* harmony export */   TextSizeMin: () => (/* binding */ TextSizeMin),
/* harmony export */   getScale: () => (/* binding */ getScale)
/* harmony export */ });
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
/**
 * Values are in terms of 'pt'
 * Convert to pixels using PixelConverter.fromPoint
 */
/**
 * Stored in terms of 'pt'
 * Convert to pixels using PixelConverter.fromPoint
 */
const TextSizeMin = 8;
/**
 * Stored in terms of 'pt'
 * Convert to pixels using PixelConverter.fromPoint
 */
const TextSizeMax = 40;
const TextSizeRange = TextSizeMax - TextSizeMin;
/**
 * Returns the percentage of this value relative to the TextSizeMax
 * @param textSize - should be given in terms of 'pt'
 */
function getScale(textSize) {
    return (textSize - TextSizeMin) / TextSizeRange;
}
//# sourceMappingURL=textSizeDefaults.js.map

/***/ }),

/***/ 3434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtendedType: () => (/* binding */ ExtendedType),
/* harmony export */   FormattingType: () => (/* binding */ FormattingType),
/* harmony export */   GeographyType: () => (/* binding */ GeographyType),
/* harmony export */   MiscellaneousType: () => (/* binding */ MiscellaneousType),
/* harmony export */   PrimitiveType: () => (/* binding */ PrimitiveType),
/* harmony export */   ScriptType: () => (/* binding */ ScriptType),
/* harmony export */   TemporalType: () => (/* binding */ TemporalType),
/* harmony export */   ValueType: () => (/* binding */ ValueType)
/* harmony export */ });
/* harmony import */ var _extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2136);
/* harmony import */ var _jsonComparer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9289);
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// powerbi.extensibility.utils.type


/** Describes a data value type, including a primitive type and extended type if any (derived from data category). */
class ValueType {
    /** Do not call the ValueType constructor directly. Use the ValueType.fromXXX methods. */
    constructor(underlyingType, category, enumType, variantTypes) {
        this.underlyingType = underlyingType;
        this.category = category;
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__.hasFlag(underlyingType, ExtendedType.Temporal)) {
            this.temporalType = new TemporalType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__.hasFlag(underlyingType, ExtendedType.Geography)) {
            this.geographyType = new GeographyType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__.hasFlag(underlyingType, ExtendedType.Miscellaneous)) {
            this.miscType = new MiscellaneousType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__.hasFlag(underlyingType, ExtendedType.Formatting)) {
            this.formattingType = new FormattingType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__.hasFlag(underlyingType, ExtendedType.Enumeration)) {
            this.enumType = enumType;
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__.hasFlag(underlyingType, ExtendedType.Scripting)) {
            this.scriptingType = new ScriptType(underlyingType);
        }
        if (_extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__.hasFlag(underlyingType, ExtendedType.Variant)) {
            this.variationTypes = variantTypes;
        }
    }
    /** Creates or retrieves a ValueType object based on the specified ValueTypeDescriptor. */
    static fromDescriptor(descriptor) {
        descriptor = descriptor || {};
        // Simplified primitive types
        if (descriptor.text)
            return ValueType.fromExtendedType(ExtendedType.Text);
        if (descriptor.integer)
            return ValueType.fromExtendedType(ExtendedType.Integer);
        if (descriptor.numeric)
            return ValueType.fromExtendedType(ExtendedType.Double);
        if (descriptor.bool)
            return ValueType.fromExtendedType(ExtendedType.Boolean);
        if (descriptor.dateTime)
            return ValueType.fromExtendedType(ExtendedType.DateTime);
        if (descriptor.duration)
            return ValueType.fromExtendedType(ExtendedType.Duration);
        if (descriptor.binary)
            return ValueType.fromExtendedType(ExtendedType.Binary);
        if (descriptor.none)
            return ValueType.fromExtendedType(ExtendedType.None);
        // Extended types
        if (descriptor.scripting) {
            if (descriptor.scripting.source)
                return ValueType.fromExtendedType(ExtendedType.ScriptSource);
        }
        if (descriptor.enumeration)
            return ValueType.fromEnum(descriptor.enumeration);
        if (descriptor.temporal) {
            if (descriptor.temporal.year)
                return ValueType.fromExtendedType(ExtendedType.Years_Integer);
            if (descriptor.temporal.quarter)
                return ValueType.fromExtendedType(ExtendedType.Quarters_Integer);
            if (descriptor.temporal.month)
                return ValueType.fromExtendedType(ExtendedType.Months_Integer);
            if (descriptor.temporal.day)
                return ValueType.fromExtendedType(ExtendedType.DayOfMonth_Integer);
            if (descriptor.temporal.paddedDateTableDate)
                return ValueType.fromExtendedType(ExtendedType.PaddedDateTableDates);
        }
        if (descriptor.geography) {
            if (descriptor.geography.address)
                return ValueType.fromExtendedType(ExtendedType.Address);
            if (descriptor.geography.city)
                return ValueType.fromExtendedType(ExtendedType.City);
            if (descriptor.geography.continent)
                return ValueType.fromExtendedType(ExtendedType.Continent);
            if (descriptor.geography.country)
                return ValueType.fromExtendedType(ExtendedType.Country);
            if (descriptor.geography.county)
                return ValueType.fromExtendedType(ExtendedType.County);
            if (descriptor.geography.region)
                return ValueType.fromExtendedType(ExtendedType.Region);
            if (descriptor.geography.postalCode)
                return ValueType.fromExtendedType(ExtendedType.PostalCode_Text);
            if (descriptor.geography.stateOrProvince)
                return ValueType.fromExtendedType(ExtendedType.StateOrProvince);
            if (descriptor.geography.place)
                return ValueType.fromExtendedType(ExtendedType.Place);
            if (descriptor.geography.latitude)
                return ValueType.fromExtendedType(ExtendedType.Latitude_Double);
            if (descriptor.geography.longitude)
                return ValueType.fromExtendedType(ExtendedType.Longitude_Double);
        }
        if (descriptor.misc) {
            if (descriptor.misc.image)
                return ValueType.fromExtendedType(ExtendedType.Image);
            if (descriptor.misc.imageUrl)
                return ValueType.fromExtendedType(ExtendedType.ImageUrl);
            if (descriptor.misc.webUrl)
                return ValueType.fromExtendedType(ExtendedType.WebUrl);
            if (descriptor.misc.barcode)
                return ValueType.fromExtendedType(ExtendedType.Barcode_Text);
        }
        if (descriptor.formatting) {
            if (descriptor.formatting.color)
                return ValueType.fromExtendedType(ExtendedType.Color);
            if (descriptor.formatting.formatString)
                return ValueType.fromExtendedType(ExtendedType.FormatString);
            if (descriptor.formatting.alignment)
                return ValueType.fromExtendedType(ExtendedType.Alignment);
            if (descriptor.formatting.labelDisplayUnits)
                return ValueType.fromExtendedType(ExtendedType.LabelDisplayUnits);
            if (descriptor.formatting.fontSize)
                return ValueType.fromExtendedType(ExtendedType.FontSize);
            if (descriptor.formatting.labelDensity)
                return ValueType.fromExtendedType(ExtendedType.LabelDensity);
        }
        if (descriptor.extendedType) {
            return ValueType.fromExtendedType(descriptor.extendedType);
        }
        if (descriptor.operations) {
            if (descriptor.operations.searchEnabled)
                return ValueType.fromExtendedType(ExtendedType.SearchEnabled);
        }
        if (descriptor.variant) {
            const variantTypes = descriptor.variant.map((variantType) => ValueType.fromDescriptor(variantType));
            return ValueType.fromVariant(variantTypes);
        }
        return ValueType.fromExtendedType(ExtendedType.Null);
    }
    /** Advanced: Generally use fromDescriptor instead. Creates or retrieves a ValueType object for the specified ExtendedType. */
    static fromExtendedType(extendedType) {
        extendedType = extendedType || ExtendedType.Null;
        const primitiveType = getPrimitiveType(extendedType), category = getCategoryFromExtendedType(extendedType);
        return ValueType.fromPrimitiveTypeAndCategory(primitiveType, category);
    }
    /** Creates or retrieves a ValueType object for the specified PrimitiveType and data category. */
    static fromPrimitiveTypeAndCategory(primitiveType, category) {
        primitiveType = primitiveType || PrimitiveType.Null;
        category = category || null;
        let id = primitiveType.toString();
        if (category)
            id += "|" + category;
        return ValueType.typeCache[id] || (ValueType.typeCache[id] = new ValueType(toExtendedType(primitiveType, category), category));
    }
    /** Creates a ValueType to describe the given IEnumType. */
    static fromEnum(enumType) {
        return new ValueType(ExtendedType.Enumeration, null, enumType);
    }
    /** Creates a ValueType to describe the given Variant type. */
    static fromVariant(variantTypes) {
        return new ValueType(ExtendedType.Variant, /* category */ null, /* enumType */ null, variantTypes);
    }
    /** Determines if the specified type is compatible from at least one of the otherTypes. */
    static isCompatibleTo(typeDescriptor, otherTypes) {
        const valueType = ValueType.fromDescriptor(typeDescriptor);
        for (const otherType of otherTypes) {
            const otherValueType = ValueType.fromDescriptor(otherType);
            if (otherValueType.isCompatibleFrom(valueType))
                return true;
        }
        return false;
    }
    /** Determines if the instance ValueType is convertable from the 'other' ValueType. */
    isCompatibleFrom(other) {
        const otherPrimitiveType = other.primitiveType;
        if (this === other ||
            this.primitiveType === otherPrimitiveType ||
            otherPrimitiveType === PrimitiveType.Null ||
            // Return true if both types are numbers
            (this.numeric && other.numeric))
            return true;
        return false;
    }
    /**
     * Determines if the instance ValueType is equal to the 'other' ValueType
     * @param {ValueType} other the other ValueType to check equality against
     * @returns True if the instance ValueType is equal to the 'other' ValueType
     */
    equals(other) {
        return (0,_jsonComparer__WEBPACK_IMPORTED_MODULE_1__.equals)(this, other);
    }
    /** Gets the exact primitive type of this ValueType. */
    get primitiveType() {
        return getPrimitiveType(this.underlyingType);
    }
    /** Gets the exact extended type of this ValueType. */
    get extendedType() {
        return this.underlyingType;
    }
    /** Gets the data category string (if any) for this ValueType. */
    get categoryString() {
        return this.category;
    }
    // Simplified primitive types
    /** Indicates whether the type represents text values. */
    get text() {
        return this.primitiveType === PrimitiveType.Text;
    }
    /** Indicates whether the type represents any numeric value. */
    get numeric() {
        return _extensions_enumExtensions__WEBPACK_IMPORTED_MODULE_0__.hasFlag(this.underlyingType, ExtendedType.Numeric);
    }
    /** Indicates whether the type represents integer numeric values. */
    get integer() {
        return this.primitiveType === PrimitiveType.Integer;
    }
    /** Indicates whether the type represents Boolean values. */
    get bool() {
        return this.primitiveType === PrimitiveType.Boolean;
    }
    /** Indicates whether the type represents any date/time values. */
    get dateTime() {
        return this.primitiveType === PrimitiveType.DateTime ||
            this.primitiveType === PrimitiveType.Date ||
            this.primitiveType === PrimitiveType.Time;
    }
    /** Indicates whether the type represents duration values. */
    get duration() {
        return this.primitiveType === PrimitiveType.Duration;
    }
    /** Indicates whether the type represents binary values. */
    get binary() {
        return this.primitiveType === PrimitiveType.Binary;
    }
    /** Indicates whether the type represents none values. */
    get none() {
        return this.primitiveType === PrimitiveType.None;
    }
    // Extended types
    /** Returns an object describing temporal values represented by the type, if it represents a temporal type. */
    get temporal() {
        return this.temporalType;
    }
    /** Returns an object describing geographic values represented by the type, if it represents a geographic type. */
    get geography() {
        return this.geographyType;
    }
    /** Returns an object describing the specific values represented by the type, if it represents a miscellaneous extended type. */
    get misc() {
        return this.miscType;
    }
    /** Returns an object describing the formatting values represented by the type, if it represents a formatting type. */
    get formatting() {
        return this.formattingType;
    }
    /** Returns an object describing the enum values represented by the type, if it represents an enumeration type. */
    get enumeration() {
        return this.enumType;
    }
    get scripting() {
        return this.scriptingType;
    }
    /** Returns an array describing the variant values represented by the type, if it represents an Variant type. */
    get variant() {
        return this.variationTypes;
    }
}
ValueType.typeCache = {};
class ScriptType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get source() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ScriptSource);
    }
}
class TemporalType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get year() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Years);
    }
    get quarter() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Quarters);
    }
    get month() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Months);
    }
    get day() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.DayOfMonth);
    }
    get paddedDateTableDate() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PaddedDateTableDates);
    }
}
class GeographyType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get address() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Address);
    }
    get city() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.City);
    }
    get continent() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Continent);
    }
    get country() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Country);
    }
    get county() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.County);
    }
    get region() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Region);
    }
    get postalCode() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PostalCode);
    }
    get stateOrProvince() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.StateOrProvince);
    }
    get place() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Place);
    }
    get latitude() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Latitude);
    }
    get longitude() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Longitude);
    }
}
class MiscellaneousType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get image() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Image);
    }
    get imageUrl() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ImageUrl);
    }
    get webUrl() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.WebUrl);
    }
    get barcode() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Barcode);
    }
}
class FormattingType {
    constructor(underlyingType) {
        this.underlyingType = underlyingType;
    }
    get color() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Color);
    }
    get formatString() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FormatString);
    }
    get alignment() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Alignment);
    }
    get labelDisplayUnits() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDisplayUnits);
    }
    get fontSize() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FontSize);
    }
    get labelDensity() {
        return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDensity);
    }
}
/** Defines primitive value types. Must be consistent with types defined by server conceptual schema. */
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType[PrimitiveType["Null"] = 0] = "Null";
    PrimitiveType[PrimitiveType["Text"] = 1] = "Text";
    PrimitiveType[PrimitiveType["Decimal"] = 2] = "Decimal";
    PrimitiveType[PrimitiveType["Double"] = 3] = "Double";
    PrimitiveType[PrimitiveType["Integer"] = 4] = "Integer";
    PrimitiveType[PrimitiveType["Boolean"] = 5] = "Boolean";
    PrimitiveType[PrimitiveType["Date"] = 6] = "Date";
    PrimitiveType[PrimitiveType["DateTime"] = 7] = "DateTime";
    PrimitiveType[PrimitiveType["DateTimeZone"] = 8] = "DateTimeZone";
    PrimitiveType[PrimitiveType["Time"] = 9] = "Time";
    PrimitiveType[PrimitiveType["Duration"] = 10] = "Duration";
    PrimitiveType[PrimitiveType["Binary"] = 11] = "Binary";
    PrimitiveType[PrimitiveType["None"] = 12] = "None";
    PrimitiveType[PrimitiveType["Variant"] = 13] = "Variant";
})(PrimitiveType || (PrimitiveType = {}));
var PrimitiveTypeStrings;
(function (PrimitiveTypeStrings) {
    PrimitiveTypeStrings[PrimitiveTypeStrings["Null"] = 0] = "Null";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Text"] = 1] = "Text";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Decimal"] = 2] = "Decimal";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Double"] = 3] = "Double";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Integer"] = 4] = "Integer";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Boolean"] = 5] = "Boolean";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Date"] = 6] = "Date";
    PrimitiveTypeStrings[PrimitiveTypeStrings["DateTime"] = 7] = "DateTime";
    PrimitiveTypeStrings[PrimitiveTypeStrings["DateTimeZone"] = 8] = "DateTimeZone";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Time"] = 9] = "Time";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Duration"] = 10] = "Duration";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Binary"] = 11] = "Binary";
    PrimitiveTypeStrings[PrimitiveTypeStrings["None"] = 12] = "None";
    PrimitiveTypeStrings[PrimitiveTypeStrings["Variant"] = 13] = "Variant";
})(PrimitiveTypeStrings || (PrimitiveTypeStrings = {}));
/** Defines extended value types, which include primitive types and known data categories constrained to expected primitive types. */
var ExtendedType;
(function (ExtendedType) {
    // Flags (1 << 8-15 range [0xFF00])
    // Important: Enum members must be declared before they are used in TypeScript.
    ExtendedType[ExtendedType["Numeric"] = 256] = "Numeric";
    ExtendedType[ExtendedType["Temporal"] = 512] = "Temporal";
    ExtendedType[ExtendedType["Geography"] = 1024] = "Geography";
    ExtendedType[ExtendedType["Miscellaneous"] = 2048] = "Miscellaneous";
    ExtendedType[ExtendedType["Formatting"] = 4096] = "Formatting";
    ExtendedType[ExtendedType["Scripting"] = 8192] = "Scripting";
    // Primitive types (0-255 range [0xFF] | flags)
    // The member names and base values must match those in PrimitiveType.
    ExtendedType[ExtendedType["Null"] = 0] = "Null";
    ExtendedType[ExtendedType["Text"] = 1] = "Text";
    ExtendedType[ExtendedType["Decimal"] = 258] = "Decimal";
    ExtendedType[ExtendedType["Double"] = 259] = "Double";
    ExtendedType[ExtendedType["Integer"] = 260] = "Integer";
    ExtendedType[ExtendedType["Boolean"] = 5] = "Boolean";
    ExtendedType[ExtendedType["Date"] = 518] = "Date";
    ExtendedType[ExtendedType["DateTime"] = 519] = "DateTime";
    ExtendedType[ExtendedType["DateTimeZone"] = 520] = "DateTimeZone";
    ExtendedType[ExtendedType["Time"] = 521] = "Time";
    ExtendedType[ExtendedType["Duration"] = 10] = "Duration";
    ExtendedType[ExtendedType["Binary"] = 11] = "Binary";
    ExtendedType[ExtendedType["None"] = 12] = "None";
    ExtendedType[ExtendedType["Variant"] = 13] = "Variant";
    // Extended types (0-32767 << 16 range [0xFFFF0000] | corresponding primitive type | flags)
    // Temporal
    ExtendedType[ExtendedType["Years"] = 66048] = "Years";
    ExtendedType[ExtendedType["Years_Text"] = 66049] = "Years_Text";
    ExtendedType[ExtendedType["Years_Integer"] = 66308] = "Years_Integer";
    ExtendedType[ExtendedType["Years_Date"] = 66054] = "Years_Date";
    ExtendedType[ExtendedType["Years_DateTime"] = 66055] = "Years_DateTime";
    ExtendedType[ExtendedType["Months"] = 131584] = "Months";
    ExtendedType[ExtendedType["Months_Text"] = 131585] = "Months_Text";
    ExtendedType[ExtendedType["Months_Integer"] = 131844] = "Months_Integer";
    ExtendedType[ExtendedType["Months_Date"] = 131590] = "Months_Date";
    ExtendedType[ExtendedType["Months_DateTime"] = 131591] = "Months_DateTime";
    ExtendedType[ExtendedType["PaddedDateTableDates"] = 197127] = "PaddedDateTableDates";
    ExtendedType[ExtendedType["Quarters"] = 262656] = "Quarters";
    ExtendedType[ExtendedType["Quarters_Text"] = 262657] = "Quarters_Text";
    ExtendedType[ExtendedType["Quarters_Integer"] = 262916] = "Quarters_Integer";
    ExtendedType[ExtendedType["Quarters_Date"] = 262662] = "Quarters_Date";
    ExtendedType[ExtendedType["Quarters_DateTime"] = 262663] = "Quarters_DateTime";
    ExtendedType[ExtendedType["DayOfMonth"] = 328192] = "DayOfMonth";
    ExtendedType[ExtendedType["DayOfMonth_Text"] = 328193] = "DayOfMonth_Text";
    ExtendedType[ExtendedType["DayOfMonth_Integer"] = 328452] = "DayOfMonth_Integer";
    ExtendedType[ExtendedType["DayOfMonth_Date"] = 328198] = "DayOfMonth_Date";
    ExtendedType[ExtendedType["DayOfMonth_DateTime"] = 328199] = "DayOfMonth_DateTime";
    // Geography
    ExtendedType[ExtendedType["Address"] = 6554625] = "Address";
    ExtendedType[ExtendedType["City"] = 6620161] = "City";
    ExtendedType[ExtendedType["Continent"] = 6685697] = "Continent";
    ExtendedType[ExtendedType["Country"] = 6751233] = "Country";
    ExtendedType[ExtendedType["County"] = 6816769] = "County";
    ExtendedType[ExtendedType["Region"] = 6882305] = "Region";
    ExtendedType[ExtendedType["PostalCode"] = 6947840] = "PostalCode";
    ExtendedType[ExtendedType["PostalCode_Text"] = 6947841] = "PostalCode_Text";
    ExtendedType[ExtendedType["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
    ExtendedType[ExtendedType["StateOrProvince"] = 7013377] = "StateOrProvince";
    ExtendedType[ExtendedType["Place"] = 7078913] = "Place";
    ExtendedType[ExtendedType["Latitude"] = 7144448] = "Latitude";
    ExtendedType[ExtendedType["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
    ExtendedType[ExtendedType["Latitude_Double"] = 7144707] = "Latitude_Double";
    ExtendedType[ExtendedType["Longitude"] = 7209984] = "Longitude";
    ExtendedType[ExtendedType["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
    ExtendedType[ExtendedType["Longitude_Double"] = 7210243] = "Longitude_Double";
    // Miscellaneous
    ExtendedType[ExtendedType["Image"] = 13109259] = "Image";
    ExtendedType[ExtendedType["ImageUrl"] = 13174785] = "ImageUrl";
    ExtendedType[ExtendedType["WebUrl"] = 13240321] = "WebUrl";
    ExtendedType[ExtendedType["Barcode"] = 13305856] = "Barcode";
    ExtendedType[ExtendedType["Barcode_Text"] = 13305857] = "Barcode_Text";
    ExtendedType[ExtendedType["Barcode_Integer"] = 13306116] = "Barcode_Integer";
    // Formatting
    ExtendedType[ExtendedType["Color"] = 19664897] = "Color";
    ExtendedType[ExtendedType["FormatString"] = 19730433] = "FormatString";
    ExtendedType[ExtendedType["Alignment"] = 20058113] = "Alignment";
    ExtendedType[ExtendedType["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
    ExtendedType[ExtendedType["FontSize"] = 20189443] = "FontSize";
    ExtendedType[ExtendedType["LabelDensity"] = 20254979] = "LabelDensity";
    // Enumeration
    ExtendedType[ExtendedType["Enumeration"] = 26214401] = "Enumeration";
    // Scripting
    ExtendedType[ExtendedType["ScriptSource"] = 32776193] = "ScriptSource";
    // NOTE: To avoid confusion, underscores should be used only to delimit primitive type variants of an extended type
    // (e.g. Year_Integer or Latitude_Double above)
    // Operations
    ExtendedType[ExtendedType["SearchEnabled"] = 65541] = "SearchEnabled";
})(ExtendedType || (ExtendedType = {}));
var ExtendedTypeStrings;
(function (ExtendedTypeStrings) {
    ExtendedTypeStrings[ExtendedTypeStrings["Numeric"] = 256] = "Numeric";
    ExtendedTypeStrings[ExtendedTypeStrings["Temporal"] = 512] = "Temporal";
    ExtendedTypeStrings[ExtendedTypeStrings["Geography"] = 1024] = "Geography";
    ExtendedTypeStrings[ExtendedTypeStrings["Miscellaneous"] = 2048] = "Miscellaneous";
    ExtendedTypeStrings[ExtendedTypeStrings["Formatting"] = 4096] = "Formatting";
    ExtendedTypeStrings[ExtendedTypeStrings["Scripting"] = 8192] = "Scripting";
    ExtendedTypeStrings[ExtendedTypeStrings["Null"] = 0] = "Null";
    ExtendedTypeStrings[ExtendedTypeStrings["Text"] = 1] = "Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Decimal"] = 258] = "Decimal";
    ExtendedTypeStrings[ExtendedTypeStrings["Double"] = 259] = "Double";
    ExtendedTypeStrings[ExtendedTypeStrings["Integer"] = 260] = "Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Boolean"] = 5] = "Boolean";
    ExtendedTypeStrings[ExtendedTypeStrings["Date"] = 518] = "Date";
    ExtendedTypeStrings[ExtendedTypeStrings["DateTime"] = 519] = "DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["DateTimeZone"] = 520] = "DateTimeZone";
    ExtendedTypeStrings[ExtendedTypeStrings["Time"] = 521] = "Time";
    ExtendedTypeStrings[ExtendedTypeStrings["Duration"] = 10] = "Duration";
    ExtendedTypeStrings[ExtendedTypeStrings["Binary"] = 11] = "Binary";
    ExtendedTypeStrings[ExtendedTypeStrings["None"] = 12] = "None";
    ExtendedTypeStrings[ExtendedTypeStrings["Variant"] = 13] = "Variant";
    ExtendedTypeStrings[ExtendedTypeStrings["Years"] = 66048] = "Years";
    ExtendedTypeStrings[ExtendedTypeStrings["Years_Text"] = 66049] = "Years_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Years_Integer"] = 66308] = "Years_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Years_Date"] = 66054] = "Years_Date";
    ExtendedTypeStrings[ExtendedTypeStrings["Years_DateTime"] = 66055] = "Years_DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["Months"] = 131584] = "Months";
    ExtendedTypeStrings[ExtendedTypeStrings["Months_Text"] = 131585] = "Months_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Months_Integer"] = 131844] = "Months_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Months_Date"] = 131590] = "Months_Date";
    ExtendedTypeStrings[ExtendedTypeStrings["Months_DateTime"] = 131591] = "Months_DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["PaddedDateTableDates"] = 197127] = "PaddedDateTableDates";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters"] = 262656] = "Quarters";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Text"] = 262657] = "Quarters_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Integer"] = 262916] = "Quarters_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Date"] = 262662] = "Quarters_Date";
    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_DateTime"] = 262663] = "Quarters_DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth"] = 328192] = "DayOfMonth";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Text"] = 328193] = "DayOfMonth_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Integer"] = 328452] = "DayOfMonth_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Date"] = 328198] = "DayOfMonth_Date";
    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_DateTime"] = 328199] = "DayOfMonth_DateTime";
    ExtendedTypeStrings[ExtendedTypeStrings["Address"] = 6554625] = "Address";
    ExtendedTypeStrings[ExtendedTypeStrings["City"] = 6620161] = "City";
    ExtendedTypeStrings[ExtendedTypeStrings["Continent"] = 6685697] = "Continent";
    ExtendedTypeStrings[ExtendedTypeStrings["Country"] = 6751233] = "Country";
    ExtendedTypeStrings[ExtendedTypeStrings["County"] = 6816769] = "County";
    ExtendedTypeStrings[ExtendedTypeStrings["Region"] = 6882305] = "Region";
    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode"] = 6947840] = "PostalCode";
    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode_Text"] = 6947841] = "PostalCode_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["StateOrProvince"] = 7013377] = "StateOrProvince";
    ExtendedTypeStrings[ExtendedTypeStrings["Place"] = 7078913] = "Place";
    ExtendedTypeStrings[ExtendedTypeStrings["Latitude"] = 7144448] = "Latitude";
    ExtendedTypeStrings[ExtendedTypeStrings["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
    ExtendedTypeStrings[ExtendedTypeStrings["Latitude_Double"] = 7144707] = "Latitude_Double";
    ExtendedTypeStrings[ExtendedTypeStrings["Longitude"] = 7209984] = "Longitude";
    ExtendedTypeStrings[ExtendedTypeStrings["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
    ExtendedTypeStrings[ExtendedTypeStrings["Longitude_Double"] = 7210243] = "Longitude_Double";
    ExtendedTypeStrings[ExtendedTypeStrings["Image"] = 13109259] = "Image";
    ExtendedTypeStrings[ExtendedTypeStrings["ImageUrl"] = 13174785] = "ImageUrl";
    ExtendedTypeStrings[ExtendedTypeStrings["WebUrl"] = 13240321] = "WebUrl";
    ExtendedTypeStrings[ExtendedTypeStrings["Barcode"] = 13305856] = "Barcode";
    ExtendedTypeStrings[ExtendedTypeStrings["Barcode_Text"] = 13305857] = "Barcode_Text";
    ExtendedTypeStrings[ExtendedTypeStrings["Barcode_Integer"] = 13306116] = "Barcode_Integer";
    ExtendedTypeStrings[ExtendedTypeStrings["Color"] = 19664897] = "Color";
    ExtendedTypeStrings[ExtendedTypeStrings["FormatString"] = 19730433] = "FormatString";
    ExtendedTypeStrings[ExtendedTypeStrings["Alignment"] = 20058113] = "Alignment";
    ExtendedTypeStrings[ExtendedTypeStrings["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
    ExtendedTypeStrings[ExtendedTypeStrings["FontSize"] = 20189443] = "FontSize";
    ExtendedTypeStrings[ExtendedTypeStrings["LabelDensity"] = 20254979] = "LabelDensity";
    ExtendedTypeStrings[ExtendedTypeStrings["Enumeration"] = 26214401] = "Enumeration";
    ExtendedTypeStrings[ExtendedTypeStrings["ScriptSource"] = 32776193] = "ScriptSource";
    ExtendedTypeStrings[ExtendedTypeStrings["SearchEnabled"] = 65541] = "SearchEnabled";
})(ExtendedTypeStrings || (ExtendedTypeStrings = {}));
const PrimitiveTypeMask = 0xFF;
const PrimitiveTypeWithFlagsMask = 0xFFFF;
const PrimitiveTypeFlagsExcludedMask = 0xFFFF0000;
function getPrimitiveType(extendedType) {
    return extendedType & PrimitiveTypeMask;
}
function isPrimitiveType(extendedType) {
    return (extendedType & PrimitiveTypeWithFlagsMask) === extendedType;
}
function getCategoryFromExtendedType(extendedType) {
    if (isPrimitiveType(extendedType))
        return null;
    let category = ExtendedTypeStrings[extendedType];
    if (category) {
        // Check for ExtendedType declaration without a primitive type.
        // If exists, use it as category (e.g. Longitude rather than Longitude_Double)
        // Otherwise use the ExtendedType declaration with a primitive type (e.g. Address)
        const delimIdx = category.lastIndexOf("_");
        if (delimIdx > 0) {
            const baseCategory = category.slice(0, delimIdx);
            if (ExtendedTypeStrings[baseCategory]) {
                category = baseCategory;
            }
        }
    }
    return category || null;
}
function toExtendedType(primitiveType, category) {
    const primitiveString = PrimitiveTypeStrings[primitiveType];
    let t = ExtendedTypeStrings[primitiveString];
    if (t == null) {
        t = ExtendedType.Null;
    }
    if (primitiveType && category) {
        let categoryType = ExtendedTypeStrings[category];
        if (categoryType) {
            const categoryPrimitiveType = getPrimitiveType(categoryType);
            if (categoryPrimitiveType === PrimitiveType.Null) {
                // Category supports multiple primitive types, check if requested primitive type is supported
                // (note: important to use t here rather than primitiveType as it may include primitive type flags)
                categoryType = t | categoryType;
                if (ExtendedTypeStrings[categoryType]) {
                    t = categoryType;
                }
            }
            else if (categoryPrimitiveType === primitiveType) {
                // Primitive type matches the single supported type for the category
                t = categoryType;
            }
        }
    }
    return t;
}
function matchesExtendedTypeWithAnyPrimitive(a, b) {
    return (a & PrimitiveTypeFlagsExcludedMask) === (b & PrimitiveTypeFlagsExcludedMask);
}
//# sourceMappingURL=valueType.js.map

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
/* harmony export */   u: () => (/* binding */ BarChart)
/* harmony export */ });
/* unused harmony export BarChart */
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5036);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7808);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3838);
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(924);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2138);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8976);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5666);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var powerbi_visuals_utils_formattingutils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4776);
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(446);
/* harmony import */ var _barChartSettingsModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2446);
/* harmony import */ var _objectEnumerationUtility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6363);











function createSelectorDataPoints(options, host) {
    let barChartDataPoints = [];
    let dataViews = options.dataViews;
    if (!dataViews
        || !dataViews[0]
        || !dataViews[0].categorical
        || !dataViews[0].categorical.categories
        || !dataViews[0].categorical.categories[0].source
        || !dataViews[0].categorical.values) {
        return barChartDataPoints;
    }
    let categorical = dataViews[0].categorical;
    let category = categorical.categories[0];
    let dataValue = categorical.values[0];
    let colorPalette = host.colorPalette;
    const strokeColor = getColumnStrokeColor(colorPalette);
    const strokeWidth = getColumnStrokeWidth(colorPalette.isHighContrast);
    for (let i = 0, len = Math.max(category.values.length, dataValue.values.length); i < len; i++) {
        const color = getColumnColorByIndex(category, i, colorPalette);
        const selectionId = host.createSelectionIdBuilder()
            .withCategory(category, i)
            .createSelectionId();
        barChartDataPoints.push({
            color,
            strokeColor,
            strokeWidth,
            selectionId,
            value: dataValue.values[i],
            category: `${category.values[i]}`,
        });
    }
    return barChartDataPoints;
}
function getColumnColorByIndex(category, index, colorPalette) {
    if (colorPalette.isHighContrast) {
        return colorPalette.background.value;
    }
    const defaultColor = {
        solid: {
            color: colorPalette.getColor(`${category.values[index]}`).value,
        }
    };
    return (0,_objectEnumerationUtility__WEBPACK_IMPORTED_MODULE_3__/* .getCategoricalObjectValue */ .b)(category, index, 'colorSelector', 'fill', defaultColor).solid.color;
}
function getColumnStrokeColor(colorPalette) {
    return colorPalette.isHighContrast
        ? colorPalette.foreground.value
        : null;
}
function getColumnStrokeWidth(isHighContrast) {
    return isHighContrast
        ? 2
        : 0;
}
function getAxisTextFillColor(objects, colorPalette, defaultColor) {
    if (colorPalette.isHighContrast) {
        return colorPalette.foreground.value;
    }
    return (0,_objectEnumerationUtility__WEBPACK_IMPORTED_MODULE_3__/* .getValue */ .N)(objects, "enableAxis", "fill", {
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
class BarChart {
    svg;
    host;
    //private barContainer: Selection<SVGElement>;
    xAxis;
    yAxis;
    yGridLines;
    line;
    lineMean;
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
            right: 0,
            bottom: 25,
            left: 30,
        },
        xAxisFontMultiplier: 0.04,
        yAxisFontMultiplier: 0.04,
    };
    /**
     * Creates instance of BarChart. This method is only called once.
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
            .classed('barChart', true);
        this.xAxis = this.svg
            .append('g')
            .classed('xAxis', true);
        this.yAxis = this.svg
            .append('g')
            .classed('yAxis', true);
        this.yGridLines = this.svg
            .selectAll("line.horizontalGrid");
        this.line = this.svg
            .append('path')
            .classed('line', true);
        this.lineMean = this.svg
            .append('path')
            .classed('line', true);
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
        //Set up the charting opbject 
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(_barChartSettingsModel__WEBPACK_IMPORTED_MODULE_2__/* .BarChartSettingsModel */ .f, options.dataViews);
        this.dataPoints = createSelectorDataPoints(options, this.host);
        this.formattingSettings.populateColorSelector(this.dataPoints);
        let width = options.viewport.width;
        let height = options.viewport.height;
        let margins = BarChart.Config.margins;
        let yShift = 0;
        this.svg
            .attr("width", width)
            .attr("height", height);
        if (this.formattingSettings.enableAxis.show.value) {
            height -= margins.bottom;
        }
        const colorObjects = options.dataViews[0] ? options.dataViews[0].metadata.objects : null;
        //Set up the Y Axis
        this.yAxis
            .style("font-size", Math.min(height, width) * BarChart.Config.yAxisFontMultiplier)
            .style("fill", this.formattingSettings.enableYAxis.fill.value.value);
        let yScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)()
            .domain([0, options.dataViews[0].categorical.values[0].maxLocal])
            .range([height, 0]);
        let yTicks = 4;
        let yAxis = (0,d3_axis__WEBPACK_IMPORTED_MODULE_7__/* .axisLeft */ .y4)(yScale)
            .tickSize(1)
            .ticks(yTicks);
        this.yAxis
            .call(yAxis)
            .attr("color", getYAxisTextFillColor(colorObjects, this.host.colorPalette, this.formattingSettings.enableYAxis.fill.value.value));
        let maxW = 0;
        this.yAxis
            .selectAll("text").each(function () {
            if (this.getBBox().width > maxW)
                maxW = this.getBBox().width;
        });
        if (this.formattingSettings.enableYAxis.show.value) {
            yShift = maxW + 10; //longest "word" plus 10 pixels
        }
        this.yAxis
            .attr('transform', 'translate(' + (yShift) + ',0)');
        //Y Grid lines
        this.svg.selectAll('.horizontalGrid').remove(); //removes previously drawn gridlines so they dont duplicate
        this.yGridLines
            .data(yScale.ticks())
            .enter()
            .append('line')
            .attr("class", "horizontalGrid")
            .attr("x1", yShift)
            .attr("x2", width)
            .attr("y1", function (d) { return yScale(d); })
            .attr("y2", function (d) { return yScale(d); })
            .attr("fill", "none")
            .attr("stroke", "#EEEEEE")
            .attr("stroke-width", 1);
        let parseDate = (0,d3_time_format__WEBPACK_IMPORTED_MODULE_8__/* .timeParse */ .Z1)("%Y-%m-%d");
        //Set up the X Axis
        this.xAxis
            .style("font-size", Math.min(height, width) * BarChart.Config.xAxisFontMultiplier)
            .style("fill", this.formattingSettings.enableAxis.fill.value.value);
        let xScale = (0,d3_scale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)()
            .domain(this.dataPoints.map(d => d.category))
            .rangeRound([yShift, width])
            .padding(0.5);
        let xAxis = (0,d3_axis__WEBPACK_IMPORTED_MODULE_7__/* .axisBottom */ .LL)(xScale)
            .tickSize(1);
        this.xAxis
            .attr('transform', 'translate(0, ' + (height + 2) + ')')
            .call(xAxis)
            .attr("color", getAxisTextFillColor(colorObjects, this.host.colorPalette, this.formattingSettings.enableAxis.fill.value.value));
        const textNodes = this.xAxis.selectAll("text");
        BarChart.wordBreak(textNodes, xScale.bandwidth(), height);
        //Create data line
        this.line
            .datum(this.dataPoints)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 3)
            .attr("d", d3__WEBPACK_IMPORTED_MODULE_0__/* .line */ .jvg()
            .x(function (d) { return xScale(d.category); })
            .y(function (d) { return yScale(d.value); }));
        //Create mean line
        let horizontal = this.dataPoints
            .map((d) => d.value)
            .reduce((a, b) => a + b, 0) / this.dataPoints.length;
        this.lineMean
            .datum(this.dataPoints)
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 1.5)
            .attr("d", d3__WEBPACK_IMPORTED_MODULE_0__/* .line */ .jvg()
            .x(function (d) { return xScale(d.category); })
            .y(function (d) { return yScale(horizontal); }));
    }
    static wordBreak(textNodes, allowedWidth, maxHeight) {
        textNodes.each(function () {
            powerbi_visuals_utils_formattingutils__WEBPACK_IMPORTED_MODULE_10__/* .textMeasurementService */ .yF.wordBreak(this, allowedWidth, maxHeight);
        });
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
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2581);
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4969);


var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .Card */ .Zb;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .Model */ .Hn;
/**
 * Enable x-Axis Formatting Card
 */
class EnableAxisCardSettings extends FormattingSettingsCard {
    // Formatting property `show` toggle switch (formatting simple slice)
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "show",
        displayName: undefined,
        value: false,
        topLevelToggle: true
    });
    // Formatting property `fill` color picker (formatting simple slice)
    fill = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "fill",
        displayName: "Color",
        value: { value: "#000000" }
    });
    name = "enableAxis";
    displayName = "Enable x-axis";
    slices = [this.show, this.fill];
}
/**
 * Enable y-Axis Formatting Card
 */
class EnableYAxisCardSettings extends FormattingSettingsCard {
    // Formatting property `show` toggle switch (formatting simple slice)
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "show",
        displayName: undefined,
        value: false,
        topLevelToggle: true
    });
    // Formatting property `fill` color picker (formatting simple slice)
    fill = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "fill",
        displayName: "Color",
        value: { value: "#ff0000" }
    });
    name = "enableYAxis";
    displayName = "Enable y-axis";
    slices = [this.show, this.fill];
}
/**
 * Color Selector Formatting Card
 */
class ColorSelectorCardSettings extends FormattingSettingsCard {
    name = "colorSelector";
    displayName = "Data Colors";
    // slices will be populated in barChart settings model `populateColorSelector` method
    slices = [];
}
/**
* BarChart settings model class
*
*/
class BarChartSettingsModel extends FormattingSettingsModel {
    // Create formatting settings model formatting cards
    enableAxis = new EnableAxisCardSettings();
    enableYAxis = new EnableYAxisCardSettings();
    colorSelector = new ColorSelectorCardSettings();
    cards = [this.enableAxis, this.enableYAxis, this.colorSelector];
    /**
     * populate colorSelector object categories formatting properties
     * @param dataPoints
     */
    populateColorSelector(dataPoints) {
        let slices = this.colorSelector.slices;
        if (dataPoints) {
            dataPoints.forEach(dataPoint => {
                slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
                    name: "fill",
                    displayName: dataPoint.category,
                    value: { value: dataPoint.color },
                    selector: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_1__.createDataViewWildcardSelector(0 /* dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals */),
                    altConstantSelector: dataPoint.selectionId.getSelector(),
                    instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */
                }));
            });
        }
    }
}


/***/ }),

/***/ 6363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ getValue),
/* harmony export */   b: () => (/* binding */ getCategoricalObjectValue)
/* harmony export */ });
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

/***/ 4969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hn: () => (/* binding */ Model),
/* harmony export */   Zb: () => (/* binding */ Card),
/* harmony export */   Zh: () => (/* binding */ ToggleSwitch),
/* harmony export */   zH: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* unused harmony exports SimpleSlice, AlignmentGroup, NumUpDown, Slider, DatePicker, ItemDropdown, AutoDropdown, DurationPicker, ErrorRangeControl, FieldPicker, ItemFlagsSelection, AutoFlagsSelection, TextInput, TextArea, FontPicker, GradientBar, ImageUpload, ListEditor, ReadOnlyText, ShapeMapSelector, CompositeSlice, FontControl, MarginPadding, Container, ContainerItem */
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1884);
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */

class NamedEntity {
}
class Model {
}
class Card extends NamedEntity {
    getFormattingCard(objectName, group, localizationManager) {
        return {
            displayName: (localizationManager && this.displayNameKey)
                ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName,
            description: (localizationManager && this.descriptionKey)
                ? localizationManager.getDisplayName(this.descriptionKey) : this.description,
            groups: [group],
            uid: objectName,
            analyticsPane: this.analyticsPane
        };
    }
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
class ItemDropdown extends (/* unused pure expression or super */ null && (SimpleSlice)) {
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
}
class ContainerItem extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ 446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormattingSettingsService */
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
    populateFormattingSettingsModel(typeClass, dataViews) {
        var _a, _b, _c;
        let defaultSettings = new typeClass();
        let dataViewObjects = (_b = (_a = dataViews === null || dataViews === void 0 ? void 0 : dataViews[0]) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_c = defaultSettings.cards) === null || _c === void 0 ? void 0 : _c.forEach((card) => {
                var _a, _b, _c;
                (_a = card === null || card === void 0 ? void 0 : card.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                    slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                });
                (_c = (_b = card === null || card === void 0 ? void 0 : card.container) === null || _b === void 0 ? void 0 : _b.containerItems) === null || _c === void 0 ? void 0 : _c.forEach((containerItem) => {
                    var _a;
                    (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
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
        var _a;
        let formattingModel = {
            cards: []
        };
        (_a = formattingSettingsModel.cards) === null || _a === void 0 ? void 0 : _a.forEach((card) => {
            if (!card)
                return;
            const objectName = card.name;
            const groupUid = card.name + "-group";
            let formattingGroup = {
                displayName: undefined,
                slices: [],
                uid: groupUid
            };
            let formattingCard = card.getFormattingCard(objectName, formattingGroup, this.localizationManager);
            formattingModel.cards.push(formattingCard);
            // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
            // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
            // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
            const sliceNames = {};
            // Build formatting container slice for each property
            if (card.container) {
                const container = card.container;
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
                    this.buildFormattingSlices(containerItem.slices, objectName, sliceNames, formattingCard, formattingContainerItem.slices);
                    formattingContainer.containerItems.push(formattingContainerItem);
                });
                formattingGroup.container = formattingContainer;
            }
            if (card.slices) {
                // Build formatting slice for each property
                this.buildFormattingSlices(card.slices, objectName, sliceNames, formattingCard, formattingGroup.slices);
            }
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
        });
        return formattingModel;
    }
    buildFormattingSlices(slices, objectName, sliceNames, formattingCard, formattingSlices) {
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
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
                // Set as topLevelToggle if topLevelToggle boolean was set to true
                if (slice.topLevelToggle) {
                    formattingSlice.suppressDisplayName = true;
                    formattingCard.topLevelToggle = formattingSlice;
                }
                else {
                    formattingSlices.push(formattingSlice);
                }
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a, _b;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        let revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, card.slices, sliceNames);
        let cardContainerSlicesDefaultDescriptors = [];
        (_b = (_a = card.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
            cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
        });
        revertToDefaultDescriptors = cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors);
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames) {
        let revertToDefaultDescriptors = [];
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

/***/ 1884:
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

/***/ 5323:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.locales = void 0;
exports.locales = {"en-US":["en-US","default",{"englishName":"English (United States)"}]}

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
/* harmony export */   Z: () => (/* binding */ band)
/* harmony export */ });
/* unused harmony export point */
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
/* harmony export */   jvg: () => (/* reexport safe */ d3_shape__WEBPACK_IMPORTED_MODULE_1__.jv)
/* harmony export */ });
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9961);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8285);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3399);
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5180);
































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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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