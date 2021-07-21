const without = function(source, toRemove)
{
  let filtered = [];
  for (i = 0; i < source.length; i++)
  {
    if (!toRemove.includes(source[i]))
    {
      filtered.push(source[i]);
    }
  }
  console.log(`Original: ${source}`);
  console.log(`Filtered: ${filtered}`);
};

without([1, 2, 3], [1]); // [2, 3]
without([1, 2, 3], [1, 2]); // [3]
without([3, 4, 5], [4, 5]); // [3]
without(["1", "2", "3"], [1, 2, "3"]); // ["1", "2"]
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));