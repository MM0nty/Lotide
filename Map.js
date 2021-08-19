const assertEqual = require("./AssertEqual");
const assertArraysEqual = require("./AssertArraysEqual");

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major"];

const result = map(words, word => word[0]);
console.log(result);