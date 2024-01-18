function canCreateString(declaredString, inputString) {
    let declaredArray = declaredString.split('');
    let inputArray = inputString.split('');
    for (let i = 0; i < inputArray.length; i++) {
        let index = declaredArray.indexOf(inputArray[i]);
        if (index === -1) {
            return false;
        }
        declaredArray.splice(index, 1);
    }
    return true;
}

let declaredString = "abcdef";
let inputString = prompt("Nhập vào chuỗi: ");
console.log("Chuỗi đã khai báo: ", declaredString);
console.log("Chuỗi đã nhập: ", inputString);
console.log("Có thể tạo chuỗi đã nhập từ chuỗi đã khai báo: ", canCreateString(declaredString, inputString));
