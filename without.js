
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  if (eqArrays(actual, expected)) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const without = function (array, removearray){
  let temp=[];
  for (let i=0; i<array.length; i++){
    for(let j=0; j<removearray.length; j++) {
      
      if (array[i] !== removearray[j]){
        if(typeof array[i] === typeof removearray[j]) {

          if(temp.includes(array[i]) ) {
            //console.log(array.includes(array[i]));
            console.log('good');
          } else {
            temp.push(array[i]);
            //console.log('nooo');
            
          }
        }
      }
    }
    
  }
  console.log(temp);
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);