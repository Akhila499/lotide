
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
  console.log(actual, expected);
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  if (eqArrays(actual, expected)) {
    
    console.log(`${emojiPass} Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }

};


const middle = function(array){
  let len = array.length;
  let res=[];
  if (len === 0 || len === 1 || len === 2) {
    return res;
  }else if (len % 2 === 0) {
    let len1 = len/2;
    res.push(array[len1-1]);
    res.push(array[len1]);
    //console.log(res);
    return res;
  }else if ( len % 2 !== 0) {
    let len1 = (len-1)/2;
    res.push(array[len1]);
    //console.log(res);
    return res;
  }
};

console.log(middle([1,2,3,4]));

assertArraysEqual(middle([1,2,3,4]),[2,3]);
eqArrays(middle([1,2,3]),[2]);





