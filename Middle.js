const assertArraysEqual = require("./AssertArraysEqual");

const middle = function(array) {
  const middleArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleArray.push(array[(array.length / 2) - 1]);
      middleArray.push(array[array.length / 2]);
      return console.log(middleArray);
    }
    middleArray.push(array[Math.floor(array.length / 2)]);
    return console.log(middleArray);
  }
  return console.log(middleArray);
}

module.exports = middle;