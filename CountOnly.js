const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item]++;
      }
    }
  }
  console.log(results);
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const list = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual(list["Jason"], 1);
assertEqual(list["Karima"], undefined);
assertEqual(list["Fang"], 2);
assertEqual(list["Agouhanna"], undefined);
