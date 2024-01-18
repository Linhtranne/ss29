function findLongestElement(arr) {
    if (arr.length === 0) {
        return "Mảng trống.";
    }
    let longestElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestElement.length) {
            longestElement = arr[i];
        }
    }
    return longestElement;
}

let stringArray = ["abc", "abcdef", "a", "abcd", "abcdefgh"];
console.log("Mảng đã khai báo: ", stringArray);
console.log("Phần tử có độ dài lớn nhất trong mảng: ", findLongestElement(stringArray));
