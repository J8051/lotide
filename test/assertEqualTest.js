const assertEqual = require("../assertEqual"); 
const head = require("../head"); 
// TEST CODE AssertEqual 
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(9, 9);

// TEST CODE Head 
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");