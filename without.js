const without = function(source, itemsToRemove){
  let newArr =[];
  for (let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])){
      newArr.push(source[i]); 
    } 
  }
  return newArr; 
}
console.log(without([1, 2, 3], [1])); 
console.log(without(["1", "2", "3"], [1, 2, "3"]))
console.log(without(["1", "2", "3", 0], ["1", 2, "3", 1])); 
module.exports = without;
