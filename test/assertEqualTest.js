const assertEqual = require("../assertEqual"); 
const head = require("../head"); 
const tail = require("../tail"); 
const eqArrays = require("../eqArrays"); 
const assertArrayEquals = require("../assertArrayEqual"); 

// TEST CODE AssertEqual 
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(9, 9);

// TEST CODE Head 
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// TEST CODE Tail 
assertEqual(tail(["Hello","Lighthouse", "Labs"]).length,2);
assertEqual(tail(["Hello","Lighthouse", "Labs"])[0],"Lighthouse");
assertEqual(tail(["Hello","Lighthouse", "Labs"])[1],"Labs");
//Test Case: check the original array (Tail)
tail(["YoYo","Lighthouse","Labs"]);
assertEqual(["YoYo","Lighthouse","Labs"].length, 3);

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