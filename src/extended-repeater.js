import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let string = "";
  let sep = "";

  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.addition instanceof Object) {
    sep = options.addition + "";
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 0;
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (i === options.additionRepeatTimes - 1) {
      sep += `${options.addition}`;
    } else {
      sep += `${options.addition}${options.additionSeparator}`;
    }
  }
  if (!options.repeatTimes) {
    string += `${str}${options.addition}`;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    if (i >= options.repeatTimes - 1) {
      string += `${str}${sep}`;
    } else {
      string += `${str}${sep}${options.separator}`;
    }
  }
  return string;
}
