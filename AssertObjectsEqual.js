const equalObjects = require("./EqualArrays");

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

module.exports = assertObjectsEqual;