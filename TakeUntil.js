const assertEqual = require("./AssertEqual");
const assertArraysEqual = require("./AssertArraysEqual");

const takeUntil = function(array,callback) {
  const taken = [];
  for (let x = 0; x < array.length; x++) {
    if (!callback(array[x])) {
    taken.push(array[x]);
    } else {
      return taken;
    }
  }
  console.log(taken);
}

const data1 = [1, 2, 5, 7, 2, -1, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
// [1, 2, 5, 7, 2]

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// ["I've", "been", "to", "Hollywood"]