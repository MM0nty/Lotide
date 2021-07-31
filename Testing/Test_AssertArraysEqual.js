const assertEqual = require("../AssertEqual");
const assertArraysEqual = require("../AssertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);