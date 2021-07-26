const assertEqual = require("../Assert-Equal");
const head = require("../Head");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([0]), 0);
assertEqual(head([]));
assertEqual(head([]), undefined);