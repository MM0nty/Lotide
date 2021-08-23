const equalObjects = require("./EqualObjects");

/*
const assertObjectsEqual = function(actual, expected)
{
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (actual !== expected)
  {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
    return false;
  }
  else
  {
    console.log(`✅ Assertion true: ${actual} === ${expected}`);
    return true;
  }
}
*/
const assertObjectsEqual = function (object1, object2) {
  const util = require("util");
  if (util.inspect(actual) !== util.inspect(expected)) {
    console.log(`❌ Inspect Assertion failed: ${util.inspect(actual)} !== ${util.inspect(expected)}`);
    return false;
  }
  // for (key of object) {
  else {
    console.log(`✅ Inspect Assertion true: ${util.inspect(actual)} === ${util.inspect(expected)}`);
    return true;
  }
};

/*
const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log("❌ Assertion false");
      return false;
    }
  }
  console.log("✅ Assertion true");
  return true;
};
*/


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(equalObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(equalObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(equalObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(equalObjects(cd, cd2)); // => false

module.exports = assertObjectsEqual;