import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let sum = 0;
  n = `${n}`;
  if (n.length <= 1) {
    return Number(n);
  } else {
    n = n
      .split("")
      .map((el) => Number(el))
      .reduce(function (acc, curr) {
        acc += curr;
        return acc;
      }, 0);
    sum += getSumOfDigits(n);
  }
  return parseInt(sum, 10);
}
