function checkEvenOddNumber(number) {
    if (number % 2 === 0) {
        return "Số " + number + " là số chẵn";
    } else {
        return "Số " + number + " là số lẻ";
    }
}

let randomNumber1 = Math.floor(Math.random() * 100) + 1;
let randomNumber2 = Math.floor(Math.random() * 100) + 1;
let randomNumber3 = Math.floor(Math.random() * 100) + 1;

console.log(checkEvenOddNumber(randomNumber1));
console.log(checkEvenOddNumber(randomNumber2));
console.log(checkEvenOddNumber(randomNumber3));
