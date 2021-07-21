const assertArraysEqual = function(array1, array2)
{
  if (array1.length !== array2.length)
  {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
    return false;
  }
  for (i = 0; i < array1.length; i++)
  {
    if (array1[i] !== array2[i])
    {
      console.log("❌ Assertion false");
      return false;
    }
  }
  console.log("✅ Assertion true");
  return true;
};

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

middle([1]); // []
middle([1, 2]); // []
middle([1, 2, 3]); // [2]
middle([1, 2, 3, 4, 5]); // [3]
middle([1, 2, 3, 4]); // [2, 3]
middle([1,2 ,3, 4, 5, 6]); // [3, 4]