// Given array and object
// Will return object containing counts of everything listed
// Only "truthy" values should be listed
const countOnly = function(allItems, itemsToCount) // itemsToCount = result1
{
  const results = {};
  for (const item of allItems) // allItems = firstNames
  {
    if (itemsToCount[item])
    {
      if (!results[item])
      {
        results[item] = 1;
      }
      else if (results[item])
      {
        results[item]++;
      }
/*
    if (itemsToCount[item])
      { 
        if (results[item])
        {
          results[item] += 1;
        }
        else
        {
          results[item] = 1;
        }
      }
*/
    }
  }
  console.log(results);
  return results;
};

const firstNames =
[
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

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

const assertEqual = function(actual, expected)
{
  if (actual === expected)
  {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  }
  else
  {
    console.log(`❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
