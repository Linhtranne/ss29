function findPairWithSum(array, targetSum) {
    let seenNumbers = {};
    for (let i = 0; i < array.length; i++) {
        let neededNumber = targetSum - array[i];
        if (seenNumbers[neededNumber] !== undefined) {
            return [neededNumber, array[i]];
        }
        seenNumbers[array[i]] = i;
    }
    return null;
}

let integerArray = prompt("Nhập vào mảng số nguyên, cách nhau bằng dấu phẩy: ");
integerArray = integerArray.split(',').map(Number);
let targetSum = parseInt(prompt("Nhập vào số nguyên: "));
console.log("Mảng đã nhập: ", integerArray);
console.log("Số đã nhập: ", targetSum);
console.log("Cặp số có tổng bằng số đã nhập: ", findPairWithSum(integerArray, targetSum));
