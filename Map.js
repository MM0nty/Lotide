const map = function(array, callback)
{
  const result = [];
  for (let item of array)
  {
    result.push(callback(item));
  }
  return result;
}

const words = ["ground", "control", "to", "major"];

const result = map(words, word => word[0]);
console.log(result);