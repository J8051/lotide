const eqArrays = function(arrOne,arrTwo){
  JSON.stringify(arrOne) === JSON.stringify(arrTwo) ? console.log(`✅Assertion Passed ${arrOne} is the same as ${arrTwo}`): console.log(`❌Assertion Failed: ${arrOne} is not the exactly same as ${arrTwo}`)
 };
 
 eqArrays([1, 2, 3], [3, 2, 1]); 
 eqArrays([1, 2, 3], [1, 2, 3]); 
 eqArrays(["1", "2", "3"], ["1", "2", "3"])
 eqArrays(["1", "2", "3"], ["1", "2", 3]) 