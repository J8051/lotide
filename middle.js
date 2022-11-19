// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arrOne,arrTwo){
  return arrOne.toString() === arrTwo.toString(); 
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `)
};
// ACTUAL FUNCTION
const middle = function(arr){
  let lastIndex = arr.length-1; 
  let median;
  let result =[];   
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

};
console.log(middle([1, 2, 3, 4, 5, 6, 7,8])); 
