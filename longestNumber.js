// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love
// Tags


// string manipulationsearchingfree

function LongestWord(sen) { 

  // code goes here  
  const cleanedWords = sen.replace(/[^\w\s]|_/g, '')
  // console.log(cleanedWords)
  const individualWords = cleanedWords.split(" ")
  // console.log(individualWords)
function getWord(individualWords){
    let longestWord = '';
    let maxLength = 0;
    let firstLongest = ''
  for (let word of individualWords){
    if(word.length > maxLength){
      longestWord = word;
      maxLength = word.length;
      firstLongest = word;
    }
    else if(word.length === maxLength && firstLongest === "" ){
      firstLongest = word;
    }
  
  }
    return firstLongest
}
  // console.log(getWord(individualWords))
return  getWord(individualWords); 
}
   
// keep this function call here 
console.log(LongestWord(readline()));
