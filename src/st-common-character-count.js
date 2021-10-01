/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let obj1 = transformationAnObject(s1);
  let obj2 = transformationAnObject(s2);

  for (let obj2Key in obj2) {
    if (obj1.hasOwnProperty(obj2Key)) {
      if (obj1[obj2Key] >= 1 && obj2[obj2Key] >= 1) {
        if (obj1[obj2Key] >= obj2[obj2Key]) {
          counter += obj2[obj2Key];
        } else if (obj1[obj2Key] <= obj2[obj2Key]) {
          counter += obj1[obj2Key];
        }
      }
    }
  }
  return counter;
}

function transformationAnObject(str) {
  let obj = {};
  str.split("").forEach(function (p) {
    if (obj.hasOwnProperty(p[0])) {
      obj[p[0]] += 1;
    } else {
      obj[p[0]] = 1;
    }
  });
  return obj;
}
