// Find the largest sum of consecutive digits
// eg. [1,2,3,4,3,5,4,6,7,8] - length 10
// consecutive num n=4
// OUTPUT: 25

const arr = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8]
function getLargestSum(arr, n) {
    if (n > arr.length) {
        throw new Error("Array is smaller than expected");
    }
    let max = 0;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let sum = 0;
        for (j = i; j < n + i; j++) {
            sum = sum + arr[j];
        }
        if (max < sum) {
            max = sum;
        }
    }
    return max;
}
console.log(getLargestSum(arr, 3));