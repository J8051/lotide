const assertEqual = require("../assertEqual"); 
const head = require("../head"); 
const tail = require("../tail"); 

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

//Test Case: check the original array

tail(["YoYo","Lighthouse","Labs"]);
assertEqual(["YoYo","Lighthouse","Labs"].length, 3);

module.exports = tail; 