function maxInArray(arr) {
  let max = arr[0];
  // let max = -Infinity

  for (i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}
console.log(maxInArray([5, 9, 2, 11, 3]));
console.log(maxInArray([-1, -7, -3]));
console.log(maxInArray([100]));
