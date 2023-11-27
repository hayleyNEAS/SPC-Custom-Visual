
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import * as d3 from "d3";
    
    
export function parseDateLabel(label: string, index: number) {
    let formatter = d3.timeParse('%Y');
    let parsed = formatter(label);
    if (parsed) {
        return parsed.getFullYear().toString()
    }

    formatter = d3.timeParse('%Y Qtr %q');
    parsed = formatter(label);
    if (parsed) {
        if (parsed.getMonth() == 0) {
            return parsed.getFullYear().toString()
        } else { return '' }
    }

    formatter = d3.timeParse('%Y Qtr %q %B');
    parsed = formatter(label);
    if (parsed) {
        if (parsed.getMonth() == 0) {
            return parsed.getFullYear().toString()
        } else { return '' }
    }


    formatter = d3.timeParse('%Y Qtr %q %B %-d');
    parsed = formatter(label);
    if (parsed) {
        if (parsed.getMonth() == 0 && parsed.getDate() == 1) {
            return parsed.getFullYear().toString()
        } else { return '' }
    }

    formatter = d3.timeParse('%B');
    parsed = formatter(label);
    if (parsed) {
        return label.slice(0, 3)
    }

    return label
}

export function parseinHMS(d: d3.NumberValue) {
    let sign = ''
    if (<number>d < 0) { 
        sign = '-'
    }
    
    d = Math.round(Math.abs(<number>d) )
    let minutes = Math.floor(<number>d / 60);
    let hours = Math.floor(minutes / 60);
    if (hours > 0) {
        minutes = minutes % 60
    }
    let seconds = <number>d % 60;
    return sign + String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
}

export function parseYLabels(d: d3.NumberValue, hms:boolean){
    if(hms){
        return parseinHMS(d)
    } else {
        return d.toLocaleString(undefined, {minimumFractionDigits : 2, maximumFractionDigits : 2})
    }
}

export function PBIformatingKeeper(options: VisualUpdateOptions){
    let metadata = options.dataViews[0].metadata.columns
    let measureFormat = ''
    let decimalPlaces = 0
    let measureName = ''

    for (let i = 0, len = metadata.length; i < len; i++) {
        let meta = metadata[i]
        if (meta.isMeasure) {
            measureName = meta.displayName
            if (!meta.format) {
                measureFormat = 's'
            } else if (meta.format.includes('%')) {
                measureFormat = '%'
            } else if (meta.format.includes('.')) {
                decimalPlaces = meta.format.substring(meta.format.indexOf('.') + 1).length
                measureFormat = 's'
            } else {
                measureFormat = 's'
            }
        }
    }
    let r:[string, string, number] = [measureName, measureFormat, decimalPlaces]
    return r
}