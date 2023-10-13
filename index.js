// Write your algorithm here
  function isPalindrome(word) {
    
    const originalWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
   
    const reversedWord = originalWord.split('').reverse().join('');
  
    if(originalWord === reversedWord){
      return true
    }
    else{
      return false
    }
  }
  
  // Example usage:
  const word = "racecar";
  if (isPalindrome(word)) {
    console.log(`${word} is a palindrome.`);
  } else {
    console.log(`${word} is not a palindrome.`);
  }
  



/* 
  Add your pseudocode here
  1.create an iteration that goes thru the orinal word beginning to end 
  2.reverse the word and iterate thru it
  3.Compare the two
*/
  
/*
  Add written explanation of your solution here
  1.We declare a variable that has a function that removes all characters in the string that are not numbers or alphabets
  2.We then declare another variable that holds the reversed string
  3.We compare if this two variables are the same
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

console.log(isPalindrome('racecar'))
