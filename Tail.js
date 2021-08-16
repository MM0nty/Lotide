const assertEqual = require("./AssertEqual");

const tail = function(series) {
  if (!tail) {
    return undefined;
  }
  return series.slice(1);
};

module.exports = tail;