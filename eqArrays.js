
const eqArrays = function(arrOne,arrTwo){
 return arrOne.toString() === arrTwo.toString(); 
};

eqArrays([1, 2, 3], [3, 2, 1]); 
eqArrays([1, 2, 3], [1, 2, 3]); 
eqArrays(["1", "2", "3"], ["1", "2", "3"])
eqArrays(["1", "2", "3"], ["1", "2", 3]) 