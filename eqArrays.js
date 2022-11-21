
const eqArrays = function(arrOne,arrTwo){
let lengthArrOne = arrOne.length; 
let lengthArrTwo = arrTwo.length;
  if(lengthArrOne !== lengthArrTwo){
    return false; 
  }else{
    for(let i=0; i<arrOne.length; i++){
      if(arrOne[i] !== arrTwo[i]){
        return false; 
      }
    }
      }
return true; 
  };


console.log(eqArrays([1, 2, 3], [3, 2, 1])); 
console.log(eqArrays([1, 2, 3], [1, 2, 3])); 
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); 
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));  