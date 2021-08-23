const assertEqual = require("./AssertEqual");

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    const value = object[key];
    if (callback(value)) {
      console.log(key);
      return key;
    }
  }
  return (console.log(undefined));
}

assertEqual(
findKey({
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 2},
  "Akelarre": {stars: 3}
}, x => x.stars === 2)
, "noma");

module.exports = findKey;