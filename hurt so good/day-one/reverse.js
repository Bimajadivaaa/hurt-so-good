// // Cara pertama
function reverseString(str){
    var splitString = str.split("");

    var reverse = splitString.reverse();

    var join = reverse.join('')

    return join.toLowerCase();
}
console.log(reverseString('Bima'))

// Cara kedua
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString('bima'))

// Cara ketiga
function reverseString(str) {
    let result = "";

    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
console.log(reverseString('bima'))

// for (let index = 1; index < 6; index++){
//     console.log("Index", index);
// }