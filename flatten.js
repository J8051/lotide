const flatten = function(nestedArray){
  if(Array.isArray(nestedArray)){
    return nestedArray.flat(2);
  }
   
};
console.log(flatten([1, 2, [3, 4], 5, [6]])); 
console.log(flatten([1, 2, [3, 4, [5, 6]]]));