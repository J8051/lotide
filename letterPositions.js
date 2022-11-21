const letterPositions = function(sentence) {
  const results = {};
    for(let i=0; i<sentence.length; i++){   
      if(sentence[i] in results){
        results[sentence[i]].push(i); 
      }else{
        results[sentence[i]] =[i];
      }
    }
  return results;
};

console.log(letterPositions("hello")); 

const assertArraysEqual = function(arrOne,arrTwo){
  JSON.stringify(arrOne) === JSON.stringify(arrTwo) ? console.log(`✅Assertion Passed ${arrOne} is the same as ${arrTwo}`): console.log(`❌Assertion Failed: ${arrOne} is not the exactly same as ${arrTwo}`)
 };
 assertArraysEqual(letterPositions("hello").e, [1]);  