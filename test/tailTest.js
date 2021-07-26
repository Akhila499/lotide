// const assertEqual = require('../assertEqual');

  // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);
// assertEqual(res[0], "Lighthouse");
// assertEqual(res[1], "Labs");


const assert = require('chai').assert;
const tail   = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
let res = tail(words);

describe("#tail", () => {
  it("returns 'lighthouse' when res[0]", () => {
    assert.strictEqual(res[0], 'Lighthouse');
  });
  it("return 'Labs' when asked res[1]", () => {
    assert.deepEqual(res,['Lighthouse', 'Labs']);
  });
});