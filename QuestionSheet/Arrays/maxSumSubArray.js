// Problem : Find max sum of sub array
// Soln : Kadane's algo
// initiate max as first elem
// initiate sum as 0
// iterate through array
// add elem value to sum 
// if sum > max change max to sum value
// if sum < 0 reinitiate sum to 0
// after iteration return max

function findMaxSumSubArray(arr) {
    let max = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max
}

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const ans = findMaxSumSubArray(input)
console.log(input)
console.log("Max Sum of subarray:")
console.log(ans)