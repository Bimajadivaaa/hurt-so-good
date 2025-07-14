function reverseManual(str) {
  let value = "";
  for (let i = str.length - 1; i >= 0; i--) {
    value += str[i];
  }
  return value;
}
console.log(reverseManual("halo"));
