const assertEqual = require("./assertEqual");
// This function returns all but the first element in an array. 
const tail = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(tail(["Hello", "Lighthouse", "Labs"]));

module.exports = tail; 