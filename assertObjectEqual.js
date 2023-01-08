const eqObjects = require("./eqObjects");

// A function that prints if two objects are equal
const assertObjectEquals = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅Assertion Passed ${inspect(object1)}is the same as  ${inspect(object2)}`);
  } else {
    console.log(`❌Assertion Failed: ${inspect(object1)} is not the exactly same as ${inspect(object2)}`);
  }
};

//Exports 
module.exports = assertObjectEquals;

//Testing 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

//function calls 
assertObjectEquals(cd, dc);
assertObjectEquals(cd2, dc);