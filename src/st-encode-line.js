import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let string = "";
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (counter === 1) {
        string += str[i];
      } else {
        string += counter + str[i];
        counter = 1;
      }
    } else {
      counter++;
    }
  }
  return string;
}
