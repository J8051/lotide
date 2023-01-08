//A function to compare expected vs actual results
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `);
};
//Exports 
module.exports = assertEqual; 