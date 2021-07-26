const head = require("./Head");
const tail = require("./Tail");
const middle = require("./Middle");
const assertEqual = require("./Assert-Equal");
const equalArrays = require("./Equal-Arrays");
const assertArraysEqual = require("./Assert-Arrays-Equal");

module.exports =
{
  head: head,
  tail: tail,
  middle: middle,
  assertEqual: assertEqual,
  equalArrays: equalArrays,
  assertArraysEqual: assertArraysEqual
};