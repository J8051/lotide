
const countLetters = function(stringPhrase){
  result={};
    for(const letters of stringPhrase){
      if(result[letters]){
        result[letters]+=1;
      }else{ 
        result[letters]=1;
      } 
    }
      
 return result; 
};

console.log(countLetters("LHL")); 
console.log(countLetters("LighthouseLabs"));

