let assertEqual = require("./assertEqual");

//A manual test to comapre arrays for an exact match.
const eqArrays = function(arrOne, arrTwo) {
  let lengthArrOne = arrOne.length;
  let lengthArrTwo = arrTwo.length;
  if (lengthArrOne !== lengthArrTwo) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
  }
  return true;
};

// Exports 
module.exports = eqArrays;

