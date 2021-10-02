'use strict';

/**
 *   Time flies, standards change. Let's get rid of the routine of changing the
 * date format. Create a `formatDate` function that accepts the `date` string,
 * the old `fromFormat` array and the new `toFormat` array. Function returns
 * given date in new format.
 *   The function can change a separator, reorder the date parts of convert a
 * year from 4 digits to 2 digits and back.
 *   When converting from YYYY to YY just use 2 last digit (1997 -> 97).
 *   When converting from YY to YYYY use 20YY if YY < 30 and 19YY otherwise.
 *
 * Examples:
 *
 * formatDate(
 *   '2020-02-18',
 *   ['YYYY', 'MM', 'DD', '-'],
 *   ['YYYY', 'MM', 'DD', '.'],
 * ) // '2020.02.18'
 *
 * formatDate(
 *   '2020-02-18',
 *   ['YYYY', 'MM', 'DD', '-'],
 *   ['DD', 'MM', 'YYYY', '.'],
 * ) // '18.02.2020'
 *
 * formatDate(
 *   '18-02-2020',
 *   ['DD', 'MM', 'YYYY', '-'],
 *   ['DD', 'MM', 'YY', '/'],
 * ) // '18/02/20'
 *
 * formatDate(
 *   '20/02/18',
 *   ['YY', 'MM', 'DD', '/'],
 *   ['YYYY', 'MM', 'DD', '.'],
 * ) // '2020.02.18'
 *
 * formatDate(
 *   '97/02/18',
 *   ['YY', 'MM', 'DD', '/'],
 *   ['DD', 'MM', 'YYYY', '.'],
 * ) // '18.02.1997'
 *
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */

function formatDate(date, fromFormat, toFormat) {
  const splittedDate = date.split(`${fromFormat[3]}`);
  const day = '';
  const month = '';
  const year = '';
  let converted = [];

  for (let i = 0; i < fromFormat.length; i++) {
    switch (splittedDate[i]) {
      case 'DD':
        day = splittedDate[i];
        break;

      case 'MM':
        month = splittedDate[i];
        break;

      default:
        if (toFormat.includes(YY)) {
          if (splittedDate[i].length === 2) {
            year = splittedDate[i];
          } else {
            year = splittedDate[i].slice(2, 4);
          }
        }
        if (splittedDate[i].length === 4) {
          year = splittedDate[i];
        }
        if (year < 30) {
          year = `20${splittedDate[i]}`;
        } else {
          year = `19${splittedDate[i]}`;
        }
    }
  }

  //   if (splittedDate[i] === 'DD') {
  //     day = splittedDate[i];
  //   }
  //   if (splittedDate[i] === 'MM') {
  //     month = splittedDate[i];
  //   } else {
  //     if (toFormat.includes(YY)) {
  //       if (splittedDate[i].length === 2) {
  //         year = splittedDate[i];
  //       } else {
  //         year = splittedDate[i].slice(2, 4);
  //       }
  //     }
  //     if (splittedDate[i].length === 4) {
  //       year = splittedDate[i];
  //     }
  //     if (year < 30) {
  //       year = `20${splittedDate[i]}`;
  //     } else {
  //       year = `19${splittedDate[i]}`;
  //     }
  //   }
  // }

  for (let format of toFormat) {
    switch (format) {
      case DD:
        converted.push(day);
        break;

      case MM:
        converted.push(month);
        break;

      default:
        converted.push(year);
    }
  }

  //   if (format === DD) {
  //     converted.push(day);
  //   }
  //   if (format === MM) {
  //     converted.push(month);
  //   } else {
  //     converted.push(year);

  //   }
  // }

  return converted.join(toFormat[3]);
}

module.exports = formatDate;
