function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, function(firstLetter) {
        return firstLetter.toUpperCase();
    });
}

let inputString = "chương trình javascript đơn giản";
console.log("Chuỗi đã khai báo: ", inputString);
console.log("Chuỗi viết hoa chữ cái đầu: ", capitalizeFirstLetter(inputString));
