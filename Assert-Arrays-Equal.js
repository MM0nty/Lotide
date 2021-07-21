const equalArrays = function(array1, array2)
{
  for (i = 0; i < array1.length; i++)
  {
    for (j = 0; j < array2[i].length; j++)
    {
      if (array1[i] === array2[j])
      {
        true;
      }
      else
      {
        false;
      }
    }
  }
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
