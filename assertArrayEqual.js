const eqArrays = require("./eqArrays");

// A function to compare arrays for an exact match
const assertArrayEquals = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅Assertion Passed ${arrOne} is the same as ${arrTwo}`);
  } else {
    console.log(`❌Assertion Failed: ${arrOne} is not the exactly same as ${arrTwo}`);
  }

};
//Export 
module.exports = assertArrayEquals;

