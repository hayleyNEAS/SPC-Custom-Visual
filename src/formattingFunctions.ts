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
export function fact(x: number) {
  if (x == 0) {
    return 1;
  }
  if (x < 0) {
    return undefined;
  }
  for (let i = x; --i;) {
    x *= i;
  }
  return x;
}

export function dayOfYear(date: Date) {
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

export function weekOfYear(date: Date) {
  return dayOfYear(date) / 7;
}

export function getQuarter(date: Date) {
  return Math.ceil((date.getMonth() + 1) / 3);
}

export function parseDateLabel(label: string, levelOfDateHeirarchy: string, datelimits: Date[], n_xTicks) { //TODO if data is sparce and no infered as 0 then diff need to be data.length
  const diff = getDayDiff(datelimits[0], datelimits[1])

  const formatter = d3.timeParse('%a %b %d %Y');
  const parsed = formatter(label);


  if (parsed) {
    if (diff >= 365 * 3) {
      //if you have more than 3 years worth of data then just show the 1st jan
      if ((parsed.getMonth() == 0 && parsed.getDate() == 1) || levelOfDateHeirarchy == "Year") {
        if (parsed.getFullYear() % n_xTicks == 0) {
          return parsed.getFullYear().toString()
        } else { return '' }
      } else { return '' }

    } else if (diff > 365) {
      //else if you have less than that but more than 1 year then just so the first of the quarters (if quarter overlap take jan/jul or just jan)
      if (levelOfDateHeirarchy == "Year") {
        if (parsed.getFullYear() % n_xTicks == 0) { return parsed.toLocaleDateString('default', { month: "short", year: "numeric" }) }
        else { return '' }
      } else if (levelOfDateHeirarchy == "Quarter") {
        if (getQuarter(parsed) % n_xTicks == 0) { return parsed.toLocaleDateString('default', { month: "short", year: "numeric" }) }
        else { return '' }
      } else if ((parsed.getDate() == 1 && (parsed.getMonth() % (3 * fact(n_xTicks)) == 0))) {
        if ((n_xTicks > 3)) {
          if (parsed.getDate() == 1 && (parsed.getFullYear() % (n_xTicks - 2)) == 0) {
            return parsed.toLocaleDateString('default', { month: "short", year: "numeric" })
          } else { return '' }
        } else {
          return parsed.toLocaleDateString('default', { month: "short", year: "numeric" })
        }
      } else { return '' }

    } else if (diff > 2 * 30) {
      //else if you have less than that but more than 12 months then just so the first of the months
      if (levelOfDateHeirarchy == "Month") {
        if (n_xTicks > 6) {
          if (parsed.getMonth() % n_xTicks == 0 && parsed.getFullYear() % (n_xTicks - 5)) { return parsed.toLocaleDateString('default', { month: "short", year: "numeric" }) }
          else { return '' }
        } else {
          if (parsed.getMonth() % n_xTicks == 0) { return parsed.toLocaleDateString('default', { month: "short", year: "numeric" }) }
          else { return '' }
        }

      } else if (levelOfDateHeirarchy == "Quarter") {
        if (getQuarter(parsed) % n_xTicks == 0) { return parsed.toLocaleDateString('default', { month: "short", year: "numeric" }) }
        else { return '' }
      } else if ((parsed.getDate() == 1 && parsed.getMonth() % n_xTicks == 0) || levelOfDateHeirarchy == "Year") {
        return parsed.toLocaleDateString('default', { month: "short", year: "numeric" })
      } else { return '' }

    } else if (diff > 30) {
      //else if you have less than that but more than 1 month //DEFAULT has every other week start  changes to this at 7 weeks 
      if ((parsed.getDay() == 0 && weekOfYear(parsed) % n_xTicks == 0) ||
        (
          (levelOfDateHeirarchy == "Month" && parsed.getMonth() % n_xTicks == 0) ||
          levelOfDateHeirarchy == "Quarter" ||
          levelOfDateHeirarchy == "Year"
        )) {
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
        if (parsed.getDate() % n_xTicks == 0) {
          return parsed.toLocaleDateString('default', { day: "2-digit", month: "short" })
        } else { return '' }
      } else {
        if (parsed.getDate() % n_xTicks == 0) {
          return parsed.toLocaleDateString('default', { day: "2-digit", month: "short" })
        } else { return '' }
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
    } else if (format == '£') {
      const curr = <number>d
      return '£' + curr.toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits }) 
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