const findKeyByValue = function(object, value)
{
  for (key of Object.keys(object))
  {
    if (key === value)
    {
      console.log(object, " ", object.value);
      return value;
    }
    else
    {
      console.log("undefined");
    }
  }
  console.log(object);
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

const bestTVShowsByGenre =
{ 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);