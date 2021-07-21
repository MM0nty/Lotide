const assertEqual = function(actual, expected)
{
  if (actual === expected)
  {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  }
  else
  {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("String", "string");
assertEqual(0, 3);

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("String", "string");
assertEqual(0, 3);
*/