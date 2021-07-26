const assertEqual = require("./Assert-Equal");

const tail = function(series)
{
  return series.slice(1);
};

module.exports = tail;