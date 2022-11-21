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

const eqObjects = function(object1, object2) {
  let object1Length = Object.keys(object1).length; 
  let object2Length = Object.keys(object2).length; 
    if(object1Length !== object2Length){
      return false; 
    }else{
      let objOneKeyArray= Object.keys(object1);    
      for(let key of objOneKeyArray){
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
          if(!eqArrays(object1[key],object2[key])){
            return false
          }
        }else{
          if(object1[key]!==object2[key]){
            return false;
          }
        }
      
      }

  };
  return true;
  }; 

  const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌Assertion Failed: ${actual} !== ${expected} `)
  };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  //eqObjects(cd, dc); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual(eqObjects(cd, dc),true);
  assertEqual(eqObjects(cd, cd2),false);
 
  
