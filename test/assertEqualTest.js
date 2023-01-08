const assertEqual = require("../assertEqual"); 
const eqArrays = require("../eqArrays"); 
const assertArrayEquals = require("../assertArrayEqual"); 


// TEST CODE AssertEqual 
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(9, 9);

 //Test Code  EqArrays
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

//Test Code assertArrayEquals
console.log(assertArrayEquals([1, 2, 3], [3, 2, 1])); 
console.log(assertArrayEquals(["1", "2", "3"], ["1", "2", "3"])); 
console.log(assertArrayEquals(["1", "2", "3"], ["1", "2", 3])); 
console.log(assertArrayEquals([1, 2, 3], [1, 2, 3]));
