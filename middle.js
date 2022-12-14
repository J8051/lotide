const assertArrayEquals = require("./assertArrayEqual"); 
const eqArrays = require("./eqArrays"); 

// ACTUAL FUNCTION
const middle = function(arr){
  let lastIndex = arr.length-1; 
  let median;
  let result = [];  
  if (arr.length <= 2) {
    return [];
  } else { 
    for(let i =0;i<arr.length;i++){
      if(arr.length%2===0){
        median = Math.floor((arr[0] + arr[lastIndex])/2); 
        result.push(arr[median-1],arr[median]);  
        return result;
      } else{
          median = Math.floor(((arr[0] + arr[lastIndex])-.5)/2);
          result.push(arr[median]);  
          return result;
        }
    }
  }
};
module.exports = middle; 
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); 







