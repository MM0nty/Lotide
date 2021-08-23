const assert = require("chai").assert;
const assertEqual = require("../AssertEqual");
const tail = require("../Tail");

describe("#Tail", () => {
  it("Returns [1, 3, 0] for [2, 1, 3, 0]", () => {
    assert.deepEqual(tail([2, 1, 3, 0]), [1, 3, 0]);
  });
  it("Returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("Returns [] for [0]", () => {
    assert.deepEqual(tail([0]), []);
  });
  it("Returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});