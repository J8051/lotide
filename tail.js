
const tail = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (i !== 0) {
          newArr.push(arr[i]);
      }
  }
  return newArr;
};
const result = tail(["Hello","Lighthouse", "Labs"]);

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `)
};

// TEST CODE
assertEqual(result.length,2);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");

//Test Case: check the original array
const words = ["YoYo","Lighthouse","Labs"];
tail(words);
assertEqual(words.length,3);