const assertEqual = require("./AssertEqual");
const equalArrays = require("./EqualArrays");

const equalObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return console.log("False, not same lengths", false);
  } else {
    for (key of keys1) {
      if (!object2[key]) { //if object2 has same key
        return console.log("Found unmatched value", false);
      }
      if (Array.isArray(keys1) === true && Array.isArray(keys2) === true) {
        equalArrays(object1[key], object2[key]);
        if (equalArrays(object1[key], object2[key]) === false) {
          return console.log("Found unmatched array", false);
        }
      } else if (object1[key] !== object2[key]) {
        return console.log("Found unmatched value", false);
      }
    }
  }
  return console.log("End", true);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
equalObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
equalObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
equalObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
equalObjects(cd, cd2); // => false

module.exports = equalObjects;