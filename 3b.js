function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  
  var reversedStr = str.split('').reverse().join('');
  
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("kajak")); 
console.log(isPalindrome("krzeslo"));