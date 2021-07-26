const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
let res = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(res[0], "Lighthouse");
assertEqual(res[1], "Labs");
