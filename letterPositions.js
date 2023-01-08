// A function that returns an object containing the index of each letter in a string. 
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] in results) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

//Exports 
module.exports = letterPositions;

//Testing Code : 

//Function call 
console.log(letterPositions("hello"));

// A manual test for array equality 
const assertArrayEquals = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅Assertion Passed ${arrOne} is the same as ${arrTwo}`);
  } else {
    console.log(`❌Assertion Failed: ${arrOne} is not the exactly same as ${arrTwo}`);
  }
};
// Using the test above on the function 
assertArraysEqual(letterPositions("hello").e, [1]);

