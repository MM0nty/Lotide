const equalArrays = function(array1, array2)
{
  if (array1.length !== array2.length)
  {
    return false;
  }
  for (i = 0; i < array1.length; i++)
  {
    if (array1[i] !== array2[i])
    {
      return false;
    }
  }
  return true;
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

assertEqual(equalArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(equalArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(equalArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
assertEqual(equalArrays(["1", "2", "3"], ["1", "2", 3]), false);