// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true 
function CodelandUsernameValidation(str) { 

  // code goes here 
 
  let stringLength = str.length
   
  function checkUsernameLength(str){
    return stringLength >=4 && stringLength <=25
  }
  function checkCharacters(str){
     let underscoreCheck = /^[A-Za-z0-9_]*$/.test(str)
    return underscoreCheck
  }
  function startWithLetter(str){
     let firstLetter = str.charAt(0)
    let firstLetterTrue = /^[A-Za-z]*$/.test(firstLetter)
    return firstLetterTrue
  }

  function checkLastLetter(str) {
  let lastLetter = str.charAt(str.length - 1);
  return /^[A-Za-z0-9]$/.test(lastLetter); // Only letters and digits are allowed at the end
}
  // console.log("underscoreCheck",underscoreCheck)
 if(checkUsernameLength(str) && checkCharacters(str) && startWithLetter(str) && checkLastLetter(str) ){

   return true 
 }
 else{
   return false
 }
  

  return str; 

}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));
