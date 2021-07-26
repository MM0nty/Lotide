const letterPositions = function(sentence)
{
  sentence.trim(" ");
  const results = {};
  for (i = 0; i < sentence.length; i++)
  {
    if (sentence[i] === " ")
    {}
    else if (!results[sentence[i]])
     {
      results[sentence[i]] = i; 
    }
    else
    {
      results[sentence[i]] += ", " + i;
    }
  }
  console.log(results);
  return results;
};

letterPositions("lighthouse in the house");