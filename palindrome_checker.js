// # Part of freeCodeCamp - JavaScript Algorithms and Data Structures Projects
// Return true if the given string is a palindrome. Else will return false.
// Palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing

function palindrome(str) {
    const tempStr = str.replace(/[\W_]+/g, '').toLowerCase();
    const reversedStr = [...tempStr].reverse().join('')
    return tempStr === reversedStr;
  }
  
// palindrome('eye') is true
// palindrome('atmosphere') is false