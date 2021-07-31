const assertEqual = require("./AssertEqual");

const tail = function(series)
{
  return series.slice(1);
};

module.exports = tail;