function findLargestSumSubarray(arr) {
    if (arr.length === 0) {
        return "Empty array.";
    }
    let maxSum = arr[0];
    let currentSum = arr[0];
    let startIndex = 0;
    let currentStartIndex = 0;
    let endIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            currentStartIndex = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            startIndex = currentStartIndex;
            endIndex = i;
        }
    }

    return arr.slice(startIndex, endIndex + 1);
}

let array = [1, -2, 3, 4, -1, 2, 1, -5, 4];
console.log("Array declared: ", array);
console.log("Subarray with the largest sum: ", findLargestSumSubarray(array));
