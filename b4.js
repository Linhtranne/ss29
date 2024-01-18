function countOccurrences(inputString, character) {
    let result = inputString.match(new RegExp(character, 'g'));
    return result ? result.length : 0;
}

let userInput = prompt("Nhập vào chuỗi: ");
let charToCount = prompt("Nhập vào ký tự cần đếm: ");
console.log("Chuỗi đã nhập: ", userInput);
console.log("Ký tự cần đếm: ", charToCount);
console.log("Số lần xuất hiện của ký tự trong chuỗi: ", countOccurrences(userInput, charToCount));
