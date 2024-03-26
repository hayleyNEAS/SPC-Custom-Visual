import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import * as d3 from "d3";

export function parseDates(label: string) {
  let formatter = d3.timeParse('%Y');
  let parsed = formatter(label);
  if (parsed && parsed.getFullYear() > 1900) {
    return parsed.toDateString()
  }

  /*     formatter = d3.timeParse('CY%Y');
      parsed = formatter(label);
      if (parsed && parsed.getFullYear() > 1900) {
          return parsed.toDateString()
      } */

  formatter = d3.timeParse('%Y Qtr %q');
  parsed = formatter(label);
  if (parsed) {
    return parsed.toDateString()
  }

  formatter = d3.timeParse('%Y Qtr %q %B');
  parsed = formatter(label);
  if (parsed) {
    return parsed.toDateString()
  }

  formatter = d3.timeParse('%Y Qtr %q %d/%m/%Y');
  parsed = formatter(label);
  if (parsed) {
    return parsed.toDateString()
  }

  formatter = d3.timeParse('%Y Qtr %q %B %-d');
  parsed = formatter(label);
  if (parsed) {
    return parsed.toDateString()
  }

  formatter = d3.timeParse('%Y Qtr %q %d/%m/%Y');
  parsed = formatter(label);
  if (parsed) {
    return parsed.toDateString()
  }

  formatter = d3.timeParse('%Y Qtr %q %d/%m/%Y %d/%m/%Y');
  parsed = formatter(label);
  if (parsed) {
    return parsed.toDateString()
  }

  formatter = d3.timeParse('%Y Qtr %q %d/%m/%Y %d/%m/%Y %d/%m/%Y');
  parsed = formatter(label);
  if (parsed) {
    return parsed.toDateString()
  }

  formatter = d3.timeParse('%B');
  parsed = formatter(label);
  if (parsed) {
    return label
  }

  formatter = d3.timeParse('Qtr %q');
  parsed = formatter(label);
  if (parsed) {
    return label
  }

  formatter = d3.timeParse('%-d');
  parsed = formatter(label);
  if (parsed) {
    return label
  }

  try {
    parsed = new Date(Date.parse(label))
    return parsed.toDateString()
  } catch (e) {
    console.error(e)
    return label
  }

}
export function getDayDiff(startDate: Date, endDate: Date): number {
  const msInDay = 24 * 60 * 60 * 1000;

  return Math.round(
    Math.abs(Number(endDate) - Number(startDate)) / msInDay
  );
}

export function parseDateLabel(label: string, levelOfDateHeirarchy: string, datelimits: Date[]) { //TODO if data is sparce and no infered as 0 then diff need to be data.length
  const diff = getDayDiff(datelimits[0], datelimits[1])

  const formatter = d3.timeParse('%a %b %d %Y');
  const parsed = formatter(label);
  if (parsed) {
    if (diff >= 365 * 3) {
      //if you have more than 3 years worth of data then just show the 1st jan
      if ((parsed.getMonth() == 0 && parsed.getDate() == 1) || levelOfDateHeirarchy == "Year") {
        return parsed.getFullYear().toString()
      } else { return '' }

    } else if (diff > 365) {
      //else if you have less than that but more than 1 year then just so the first of the quarters
      if ((parsed.getDate() == 1 && (parsed.getMonth() == 0 || parsed.getMonth() == 3 || parsed.getMonth() == 6 || parsed.getMonth() == 9)) || (levelOfDateHeirarchy == "Quarter")) {
        return parsed.toLocaleDateString('default', { month: "short", year: "numeric" })
      } else { return '' }

    } else if (diff > 2 * 30) {
      //else if you have less than that but more than 4 months then just so the first of the months
      if (parsed.getDate() == 1 || (levelOfDateHeirarchy == "Month" || levelOfDateHeirarchy == "Quarter" || levelOfDateHeirarchy == "Year")) {
        return parsed.toLocaleDateString('default', { month: "short", year: "numeric" })
      } else { return '' }

    } else if (diff > 30) {
      //else if you have less than that but more than 1 month //DEFAULT has every other week start  changes to this at 7 weeks 
      if ((parsed.getDay() == 0) || (levelOfDateHeirarchy == "Month" || levelOfDateHeirarchy == "Quarter" || levelOfDateHeirarchy == "Year")) {
        return parsed.toLocaleDateString('default', { day: "2-digit", month: "short" })
      } else { return '' }

    } else {
      //if only a short time period 
      if (levelOfDateHeirarchy == "Year") {
        return parsed.getFullYear().toString()
      } else if (levelOfDateHeirarchy == "Quarter") {
        return parsed.toLocaleDateString('default', { month: "short", year: "numeric" })
      } else if (levelOfDateHeirarchy == "Month") {
        return parsed.toLocaleDateString('default', { month: "short", year: "numeric" })
      } else if (levelOfDateHeirarchy == "Day") {
        if (parsed.getDate() % 2 == 1) {
          return parsed.toLocaleDateString('default', { day: "2-digit", month: "short" })
        } else { return '' }
      } else {
        return parsed.toLocaleDateString('default', { day: "2-digit", month: "short" })
      }
    }
  }

  return label

}

/* export function parseXLabels(d: string, index: number, n: number) {
    n = Math.ceil(n)
    return d
} */

export function parseinHMS(d: d3.NumberValue) {
  let sign = ''
  if (<number>d < 0) {
    sign = '-'
  }

  d = Math.round(Math.abs(<number>d))
  let minutes = Math.floor(<number>d / 60);
  const hours = Math.floor(minutes / 60);
  if (hours > 0) {
    minutes = minutes % 60
  }
  const seconds = <number>d % 60;
  return sign + String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
}

export function parseYLabels(d: d3.NumberValue, hms: boolean, digits: number, format: string) {
  if (d !== null) {
    if (hms) {
      return parseinHMS(d)
    } else if (format == '%') {
      const perc = <number>d * 100
      return perc.toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits }) + '%'
    } else {
      return d.toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits })
    }

  } return "Undefined"
}

export function PBIformatingKeeper(options: VisualUpdateOptions): [string, string, number, string] {
  //let [dates_input, value_input, target_input, breakPoint_input, tooltip_input] = dataLoad(options)
  const metadata = options.dataViews[0].metadata.columns

  let measureFormat = ''
  let decimalPlaces = 0
  let measureName = ''
  let levelOfDateHeirarchy = ''
  for (let i = 0, len = metadata.length; i < len; i++) {
    const meta = metadata[i]
    const role = meta.roles
    if (meta.isMeasure && Object.keys(role)[0] == 'measure') {
      measureName = measureName == '' ? meta.displayName : measureName
      if (measureName == meta.displayName) {
        if (!meta.format) {
          measureFormat = 's';
        } else if (meta.format.includes('%')) {
          measureFormat = '%'
          decimalPlaces = meta.format.substring(meta.format.indexOf('.') + 1, meta.format.indexOf(';') - 1).length;
        } else if (meta.format.includes('.')) {
          decimalPlaces = meta.format.substring(meta.format.indexOf('.') + 1, meta.format.indexOf(';') - 1).length;
          measureFormat = 's';
        } else {
          measureFormat = 's';
        }
      }

    } else {
      levelOfDateHeirarchy = meta.displayName.split(' ').at(1);
      if (!levelOfDateHeirarchy && "expr" in meta && "arg" in meta.expr) {
        const { hierarchy } = (meta.expr as any).arg
        const level = (meta.expr as any).level
        if (hierarchy) {
          levelOfDateHeirarchy = "infered:" + level
        }
      }
    }
  }
  return [measureName, measureFormat, decimalPlaces, levelOfDateHeirarchy]
}

//Issues caused by using own heirarchy rather than PBI defined ones 