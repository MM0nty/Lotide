const flatten = function(array) {
  const flattened = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flattened.push(item[i]);
      }
    } else {
      flattened.push(item);
    }
  });
  return flattened;
};

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;