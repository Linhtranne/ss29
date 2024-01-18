function findStringsInArray(array, searchString) {
    return array.filter(function (element) {
        return element.indexOf(searchString) !== -1;
    });
}

let stringArray = ["Hello World", "JavaScript is fun", "Web development", "Coding is awesome"];
let inputString = prompt("Nhập vào chuỗi: ");
console.log("Mảng đã khai báo: ", stringArray);
console.log("Chuỗi đã nhập: ", inputString);
console.log("Các phần tử trong mảng có chứa chuỗi: ", findStringsInArray(stringArray, inputString));
