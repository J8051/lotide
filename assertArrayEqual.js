const eqArrays = require("./eqArrays"); 

const assertArrayEquals = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅Assertion Passed ${arrOne} is the same as ${arrTwo}`)
  } else {
    console.log(`❌Assertion Failed: ${arrOne} is not the exactly same as ${arrTwo}`)
  }

};
module.exports = assertArrayEquals; 

