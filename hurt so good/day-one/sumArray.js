function sumArray(arr) {
  var total = 0;

  for (let i in arr) {
    total += arr[i];
  }

  return total;
}
console.log(sumArray([5, 10, -3]));
