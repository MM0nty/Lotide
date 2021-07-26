const assertEqual = require("../Assert-Equal");
const tail = require("../Tail");

const array = [2,1,3,0];
console.log(tail(array));
assertEqual(array.length, 4);

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);

const solo = [0];
console.log(tail(solo));
assertEqual(solo.length, 1);

const empty = [];
console.log(tail(empty));
assertEqual(empty.length, 0);