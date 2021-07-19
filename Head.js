const head = function(array)
{
  return array[0];
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

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([0]), 0);
assertEqual(head([]));
assertEqual(head([]), undefined);
assertEqual(head([0, 3, 5]), 10);