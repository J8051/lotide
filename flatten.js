// A function to will "flatten" a nested array into a single array.
const flatten = function(nestedArray) {
  let flatArr = [];
  for (let row = 0; row < nestedArray.length; row++) {
    if (Array.isArray(nestedArray[row]) === false) {
      flatArr.push(nestedArray[row]);
    }
    for (let col = 0; col < nestedArray[row].length; col++) {
      flatArr.push(nestedArray[row][col]);
    }
  }
  return flatArr;
};
// Function calls 
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, [2, 3], 4, [5, 6]]));
//Exports 
module.exports = flatten; 