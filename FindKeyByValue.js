const assertEqual = require("./AssertEqual");

const findKeyByValue = function(object, value)
{
  for (key of Object.keys(object))
  {
    if (object[key] === value)
    {
      console.log(`${object[key]} = ${value}`);
      return key;
    }
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