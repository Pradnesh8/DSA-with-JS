// Problem statement
// You have been given an array / list 'ARR' of integers.Your task is to find the second largest element present in the 'ARR'.

//     Note:
// a) Duplicate elements may be present.

//     b) If no such element is present return -1.
// Example:
// Input: Given a sequence of five numbers 2, 4, 5, 6, 8.

// Output: 6

// approach
// declare both largest and secondlargest as -infinity
// iterate over array
// check if element is greated than largest
// if yes, make secondlargest=largest and largest = element
// if not, but if element is greater than secondlargest and not equal to largest
// then secondlargest = element

// edge case if array length is less than 2, no second element return -1
// edge case if secondlargest is -infinity, all elements are same
function getSecondLargest(arr, n) {
    console.log(n, arr)
    let largest = -Infinity
    let second = -Infinity
    if (n < 2) {
        console.log("NOT enough elements in array")
        return -1
    }
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            second = largest
            largest = arr[i]
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i]
        }
    }
    if (second === -Infinity) {
        console.log("All elements are same")
        return -1
    }
    return second
}
const inputGiven = [2, 4, 5, 6, 8]
const input2 = [-10, -40, -25, -12, -25, -10]
const input3 = [-12, -10, -10, -6, -5]
const res = getSecondLargest(input3, input3.length)
console.log("INPUT", input3)
console.log("Second largest : ", res)
