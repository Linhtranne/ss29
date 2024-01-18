function countNonSpaceCharacters(str) {
    return str.replace(/\s/g, "").length;
}

let inputString = "Chương trình JavaScript đơn giản";
console.log("Chuỗi đã khai báo: ", inputString);
console.log("Số ký tự trong chuỗi (không tính ký tự trống): ", countNonSpaceCharacters(inputString));
