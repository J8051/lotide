//A function that takes in an object and a value and returns the first key containing that value.
const findKeyByValue = function(obj, value) {
  for (genre in obj) {
    if (obj[genre] === value) {
      return genre;
    }
  }
};
// Function data 
let bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

//Function call 
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// A manual test to see if the results are what are expected 
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `);
};

// TEST CODE
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//Exports 
module.exports = findKeyByValue; 