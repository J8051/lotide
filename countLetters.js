// A function that counts the number of times each letter appears in a string.
const countLetters = function(stringPhrase) {
  result = {};
  for (const letters of stringPhrase) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }

  return result;
};

//Exports 
module.exports = countLetters;

//Function Calls  
console.log(countLetters("LHL"));
console.log(countLetters("LighthouseLabs"));