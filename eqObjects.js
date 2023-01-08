//A function that comapres arrays used as a reference to create the function below 
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

//A function that comapres objects and returns true or false based on an exact match.
const eqObjects = function(object1, object2) {
  let object1Length = Object.keys(object1).length;
  let object2Length = Object.keys(object2).length;
  if (object1Length !== object2Length) {
    return false;
  } else {
    let objOneKeyArray = Object.keys(object1);
    for (let key of objOneKeyArray) {
      console.log(object1[key]);
      console.log(object2[key]);
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }

    }

  };
  return true;
};

//Manual test used for arrays
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `);
};
// function data 
const cd = { a: "hi", c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1", z: "ih" };
//function call 
eqObjects(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
//assertEqual(eqObjects(cd, dc),true);
//assertEqual(eqObjects(cd, cd2),false);

// Exports
module.exports = eqObjects;


