const head = function(arr) {
  let firstElement;
  if (arr.length < 1) {
      firstElement = undefined;
  }
  for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
          firstElement = arr[i];
      }
  }
  return firstElement;
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `)
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");