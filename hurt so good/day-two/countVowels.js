function countVowels(str) {
  let vow = 0;
  str = str.toLowerCase();

  for (let i = 0; i <= str.length - 1; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "u" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "o"
    ) {
      vow += 1;
    }
  }
  return vow;
}
console.log(countVowels("Halo Dunia"));
console.log(countVowels("JAVASCRIPT"));
console.log(countVowels("Brrr..."));
