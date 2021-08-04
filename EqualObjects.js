const assertEqual = require("./AssertEqual");
const equalArrays = require("./EqualArrays");

const equalObjects = function(object1, object2)
{
  if (Object.keys(object1).length !== Object.keys(object2).length)
  {
    console.log("False, not same lengths");
    return false;
  }
  else
  {
    for (key of Object.keys(object1))
    {
      if (Array.isArray(Object.keys(object1)) === true && Array.isArray(Object.keys(object2)) === true)
      {
        equalArrays(object1, object2);
      }
      else if (object2[key])
      {
        if (object1[key] === object2[key])
        {
          console.log("True");
        }
      }
      else
      {
        console.log("Found unmatched value");
        return false;
      }
      return true;
    }
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
equalObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
equalObjects(ab, abc); // => false

module.exports = equalObjects;