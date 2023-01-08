// This function will return an array based on the results of the callback
const map = function(array, callback) {
  const results = [];
  for (let elem of array) {
    results.push(callback(elem));
  }
  return results;
};

//Exports 
module.exports = map; 

// Testing Code 

// data given 
// const words = ["ground", "control", "to", "major", "tom"];
// const earningsInDollars =[5,10,15,20,25,30];
//const singularAnimal = ["dog","cat","bird","snake","rabbit","cow"];
const letters = ["c", "h", "r", "b", "m", "s"];

//map changed full word to first letter
//const results1 = map(words, word => word[0]);
//map doubled our earnings  
//const results2 = map(earningsInDollars, elem => elem*2);
//map made our animals plural 
//const results3 = map(singularAnimal, elem => elem+="s");
//map turns our letters to words
const results4 = map(letters, elem => elem += "at");
console.log(results4);



const eqArrays = function(arrOne, arrTwo) {
  let lengthArrOne = arrOne.length;
  let lengthArrTwo = arrTwo.length;
  if (lengthArrOne !== lengthArrTwo) {
    return false;
  } else {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
  }
  return true;
};


const assertArrayEquals = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅Assertion Passed ${arrOne} is the same as ${arrTwo}`);
  } else {
    console.log(`❌Assertion Failed: ${arrOne} is not the exactly same as ${arrTwo}`);
  }

};

//console.log(assertArrayEquals(results1,[ 'g', 'c', 't', 'm', 't' ]));
//console.log(assertArrayEquals(results2,[ 10, 20, 30, 40, 50, 60 ])); 
//console.log(assertArrayEquals(results3,[ 'dogs', 'cats', 'birds', 'snakes', 'rabbits', 'cows' ]));
console.log(assertArrayEquals(results4, ['cat', 'hat', 'rat', 'bat', 'mat', 'sat']));

