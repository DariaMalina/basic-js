/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members
    .filter((el) => typeof el === "string" && el.length > 1)
    .map((el) => el.replace(/\s+/g, ""))
    .map((el) => el[0].toUpperCase())
    .sort()
    .join("");
}
