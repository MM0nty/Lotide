const assertEqual = require("../Assert-Equal");
const assertArraysEqual = require("../Assert-Arrays-Equal");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);