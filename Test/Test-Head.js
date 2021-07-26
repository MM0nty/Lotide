const assert = require("chai").assert;
const assertEqual = require("../Assert-Equal");
const head = require("../Head");

describe("#Head", () =>
{
  it("Returns 1 for [1, 2, 3]", () =>
  {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("Returns '5' for ['5']", () =>
  {
    assert.strictEqual(head(['5']), '5');
  });
  it("Returns 5 for [5, 6, 7]", () =>
  {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("Returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () =>
  {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it("Returns 0 for [0]", () =>
  {
    assert.strictEqual(head([0]), 0);
  });
  it("Returns '' for []", () =>
  {
    assert.strictEqual(head([]), );
  });
  it("Returns undefined for []", () =>
  {
    assert.strictEqual(head([]), undefined);
  });
});

/*
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([0]), 0);
assertEqual(head([]));
assertEqual(head([]), undefined);
*/