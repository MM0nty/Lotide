const assertEqual = require("./Assert-Equal");

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

module.exports = countLetters;