const assert = require("chai").assert;
//const assertArraysEqual = require("../AssertArraysEqual");
const middle = require("../Middle");

describe("#Middle", () =>
{
  it("Returns [] for [1]", () =>
  {
    assert.deepEqual(middle([1]), undefined);
  });
  it("Returns [] for [1, 2]", () =>
  {
  assert.deepEqual(middle([1, 2]), undefined);
  });
  it("Returns [2] for [1, 2, 3]", () =>
  {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("Returns [3] for [1, 2, 3, 4, 5]", () =>
  {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("Returns [2, 3] for [1, 2, 3, 4]", () =>
  {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("Returns [3, 4] for [1, 2, 3, 4, 5, 6]", () =>
  {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

/*
// assertArraysEqual(
middle([1]); // []
middle([1, 2]); // []
middle([1, 2, 3]); // [2]
middle([1, 2, 3, 4, 5]); // [3]
middle([1, 2, 3, 4]); // [2, 3]
middle([1, 2, 3, 4, 5, 6]); // [3, 4]
*/