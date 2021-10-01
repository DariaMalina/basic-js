/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {*[]} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (arr instanceof Array) {
    let copyArray = arr.slice();
    let finalArray = [];
    const COMMAND = {
      discardNext: "--discard-next",
      discardPrev: "--discard-prev",
      doubleNext: "--double-next",
      doublePrev: "--double-prev",
    };
    for (let i = 0; i < copyArray.length; i++) {
      if (copyArray[i] === COMMAND.discardNext) {
        if (copyArray[i + 2]) {
          copyArray.splice(i + 1, i - 1);
        }
      } else if (copyArray[i] === COMMAND.discardPrev) {
        if (copyArray[i - 1]) {
          finalArray.pop();
        }
      } else if (copyArray[i] === COMMAND.doubleNext) {
        if (copyArray[i + 1]) {
          finalArray.push(copyArray[i + 1]);
        }
      } else if (copyArray[i] === COMMAND.doublePrev) {
        if (copyArray[i - 1]) {
          finalArray.push(copyArray[i - 1]);
        }
      } else {
        finalArray.push(copyArray[i]);
      }
    }
    return finalArray;
  }
  throw new Error(`'arr' parameter must be an instance of the Array!`);
}
