const without = function(source, toRemove) {
  const filtered = [];
  for (let i = 0; i < source.length -1; i++) {
    if (!toRemove.includes(source[i])) {
      filtered.push(source[i]);
    }
  }
  console.log(`Original: ${source}`);
  return console.log(filtered);
};

without([1, 2, 3], [1]); // [2, 3]
without([1, 2, 3], [1, 2]); // [3]
without([3, 4, 5], [4, 5]); // [3]
without(["1", "2", "3"], [1, 2, "3"]); // ["1", "2"]
without(["hello", "world", "lighthouse"], ["lighthouse"]);