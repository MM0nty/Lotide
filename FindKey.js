const assertEqual = require("./AssertEqual");

const findKey = function(object, callback)
{
  for (key of Object.keys(object))
  {
    if (object[key] === callback)
    {
      console.log(`${object[key]} = ${callback}`);
      return key;
    }
  }
}

assertEqual(findKey)

findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 2);