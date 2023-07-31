// Divide and Conquer Technique
// Find index of given number in sorted array
// [1,2,4,5,6,8,10]
// n = 6
// OP : 4 (index of 6)

const arr = [1, 2, 4, 5, 6, 8, 10];

function findIndex(arr, n) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let minIndex = Math.floor((max + min) / 2);
        // console.log(min, max, minIndex);
        if (n < arr[minIndex]) {
            max = minIndex - 1;
        } else if (n > arr[minIndex]) {
            min = minIndex + 1;
        } else {
            return minIndex;
        }
    }
    return "Number does not exist";
}

console.log(findIndex(arr, 7));