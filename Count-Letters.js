const countLetters = function(string)
{
  const letters = {};
  for (const letter of string)
  {
    if (letters[letter])
    {
      letters[letter]++;
    }
    else
    {
      letters[letter] = 1;
    }
  }
  console.log(letters);
};

countLetters("lighthouse in the house");

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