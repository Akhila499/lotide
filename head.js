const assertEqual = function(actual, expected) {
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  if (actual === expected) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }
};



const head = function (array){
  return array[0];
}

assertEqual(head([1,2,3]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]),1);
assertEqual(head([]), undefined);