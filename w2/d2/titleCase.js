const titleCase = function(sentence) {
  let word  = sentence.toLowerCase().split(" ");
  
  console.log(word);
  for (let  i = 0; i < word.length; i++) {
    if( word[i] === " ") {
      

     return word[i+1].toUpperCase();
    }
    //word[i] = word[i].charAt(0).toUpperCase();


console.log(word)
      console.log(sentence)
  }  
  
    //sentence =word1.join(" ")
   
return sentence;
}  
console.log(titleCase("this is an example"));
console.log(titleCase("test"));
console.log(titleCase("i r cool"));
console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase(""));
console.log(titleCase("A"));