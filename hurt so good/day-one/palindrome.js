function isPalindrome(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  if (reverse === str) {
    return true;
  } else {
    return false;
  }

}
console.log((isPalindrome('katak')))

function isPalindrome(str) {
  rev = str.split("").reverse().join("");
  if (rev === str) {
    return true;
  } else {
    return false;
  }
}
console.log((isPalindrome('katak')))

function isPalindrome(str) {
  rev = str.split("").reverse().join("").toLowerCase();
  return rev === str.toLowerCase() ? "Palindrome" : "Bukan Palindrome";
}
console.log(isPalindrome("Kasur Ini Rusak"));
