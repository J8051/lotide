// A function that collects items from an array until the provided callback returns a truthy value. 
const takeUntil = function (array, callback) {
  let slicedArray = [];
  for (let item of array) {
    if (callback(item)) {
      return slicedArray;
    } else {
      slicedArray.push(item);
    }
  
  }
  return slicedArray;
};

// Function Data 
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// test code 
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//Exports 
module.exports = takeUntil; 