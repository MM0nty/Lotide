const assertEqual = require("../Assert-Equal");
const equalArrays = require("../Equal-Arrays");

assertEqual(equalArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(equalArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(equalArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
assertEqual(equalArrays(["1", "2", "3"], ["1", "2", 3]), false);