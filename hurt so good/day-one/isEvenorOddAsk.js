// Cara 1
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Genap";
    }
    else {
      return "Ganjil";
    }
  }
console.log(isEvenOrOdd(13));

// Cara 2 lebih simpel
function isEvenOrOdd(number) {
  return number % 2 === 1 ? "Ganjil" : "Genap";
}

console.log(isEvenOrOdd(13));
