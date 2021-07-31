const assertArraysEqual = require("./AssertArraysEqual");

const middle = function(array)
{
  let middleArray = [];
  if (array.length > 2)
  {
    if (array.length % 2 === 0)
    {
      middleArray.push(array[(array.length / 2) - 1]);
      middleArray.push(array[array.length / 2]);
      console.log(middleArray);
      return middleArray;
    }
    else
    {
      middleArray.push(array[Math.floor(array.length / 2)]);
      console.log(middleArray);
      return middleArray;
    }
  }
  else
  {
    console.log([]);
  }
}

module.exports = middle;