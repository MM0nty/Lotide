const tail = function(series)
{
  return series.slice(1);
};

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

const array = [2,1,3,0];
console.log(tail(array));
assertEqual(array.length, 4);

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);

const solo = [0];
console.log(tail(solo));
assertEqual(solo.length, 1);

const empty = [];
console.log(tail(empty));
assertEqual(empty.length, 0);