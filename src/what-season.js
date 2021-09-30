import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date === undefined) {
    return `Unable to determine the time of year!`;
  }

  if (date instanceof Date) {
    try {
      date.getDate();
    } catch {
      throw new Error("Invalid date!");
    }
    const NAMESEASON = {
      winter: "winter",
      spring: "spring",
      summer: "summer",
      autumn: "autumn",
    };
    const season = date.getMonth() + 1;
    switch (season) {
      case 12:
      case 1:
      case 2:
        return NAMESEASON.winter;
      case 3:
      case 4:
      case 5:
        return NAMESEASON.spring;
      case 6:
      case 7:
      case 8:
        return NAMESEASON.summer;
      case 9:
      case 10:
      case 11:
        return NAMESEASON.autumn;
    }
  }

  throw new Error("Invalid date!");
}
