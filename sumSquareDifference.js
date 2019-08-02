"use strict";
class SumOfASquare {
  constructor(n) {
    this.n = n;
  }
  sumOfSquares() {
    let results = 0;
    for (let i = 0; i <= this.n; i++) {
      let square = Math.pow(i, 2);
      results += square;
    }
    return results;
  }
  squareOfTheSums() {
    let sum = 0;
    for (let i = 0; i <= this.n; i++) {
      sum += i;
    }
    return Math.pow(sum, 2);
  }
}
module.exports = { SumOfASquare };
