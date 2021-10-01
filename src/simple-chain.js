/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (position > this.array.length || position <= 0 || !Number(position)) {
      this.array = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.array.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let finaString = "";
    for (let i = 0; i < this.array.length; i++) {
      if (i === this.array.length - 1) {
        finaString += `( ${this.array[i]} )`;
      } else {
        finaString += `( ${this.array[i]} )`;
        finaString += `~~`;
      }
    }
    this.array = [];
    return finaString;
  },
};
