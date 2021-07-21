const assertEqual = function(actual, expected) {
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  if (actual === expected) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {

  let charCount = {};
  for(let char of str){
    //console.log(char);
    if(charCount[char]){
      charCount[char] += 1;
    }else{
      charCount[char] = 1;
    }
  }
  delete charCount[' '];
  console.log(charCount);
  return charCount;
};        

countLetters('lighthouse in the house');