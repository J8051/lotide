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
    //eqArrays([1, 2, 3], [3, 2, 1]); 
    //eqArrays([1, 2, 3], [1, 2, 3]); 
    //eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    //eqArrays(["1", "2", "3"], ["1", "2", 3]); 

const assertArrayEquals = function(arrOne,arrTwo){
if(eqArrays(arrOne,arrTwo)){
  console.log(`✅Assertion Passed ${arrOne} is the same as ${arrTwo}`)
}else{
  console.log(`❌Assertion Failed: ${arrOne} is not the exactly same as ${arrTwo}`)
}

 };
 
console.log(assertArrayEquals([1, 2, 3], [3, 2, 1])); 
