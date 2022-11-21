const findKeyByValue = function (obj, value){
  for(genre in obj){
    if(obj[genre] === value){
      return genre;
    }
  
  }
}; 
let bestTVShowsByGenre={
sci_fi:"The Expanse",
comedy:"Brooklyn Nine-Nine",
drama:"The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `)
};

// TEST CODE
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);