//A function that can count selected string items from a list.
const countOnly = function(allItems, itemsToCount) {
 const results ={};
  for(const item of allItems){
    if(itemsToCount[item]){
      if(results[item]){
        results[item]+=1
      }else {
        results[item]=1;
      } 
    }  
  }
return results;
};

// Exports 
module.exports = countOnly; 

//Testing data : 

// Function data (The list)
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// Storing the function call as a variable 
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//Manual Test for function 
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `)
};

// TEST CODE
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

