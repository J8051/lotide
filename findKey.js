//Scans an object and returns the first key for which the callback returns a truthy value.
const findKey = function(obj, callback) {
  for (const key in obj) {
    let valueObj = obj[key];
    if (callback(valueObj)) {
      return key;
    }
  }
};

//Exports 
module.exports = findKey; 

//Testing code: 

// Storing function call in a variable  
let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);
console.log(result);

// A manual test to comparing if expected results match actual results 
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `);
};

// // TEST CODE
assertEqual(result, "noma");

