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
      let objOneKeyArray= Object.keys(object1);   //[c,d] 
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

  const cd = {c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1"};
  const cd2 = { c: "1", d: ["2", 3, 4] };
 
  const assertObjectEquals = function(object1,object2){
    const inspect = require('util').inspect;
      if(eqObjects(object1,object2)){
        console.log(`✅Assertion Passed ${inspect(object1)}is the same as  ${inspect(object2)}`)
      }else{
        console.log(`❌Assertion Failed: ${inspect(object1)} is not the exactly same as ${inspect(object2)}`)
      }
  }; 
  assertObjectEquals(cd,dc);
assertObjectEquals(cd2, dc);
  
module.exports = assertObjectEquals;
  
