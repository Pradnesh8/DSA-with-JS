/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 * 
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// The reverse function now directly modifies the nums array.
// We reverse the entire array first.
// Then reverse the first k elements.
//     Finally, reverse the rest of the elements.
// eg.
// [-1,-100,3,99]
// step1 reverse whole array [99,3,-100,-1]
// step2 reverse k elements k=2 [3,99,-100,-1]
// step3 reverse rest elemets [3,99,-1,-100]
var rotate = function (nums, k) {
    n = nums.length
    k = k % n
    // reverse entire array 
    reverse(nums, 0, n - 1)
    // reverse first k elements
    reverse(nums, 0, k - 1)
    // reverse rest of elements
    reverse(nums, k, n - 1)
    function reverse(nums, start, end) {
        while (start < end) {
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp;
            start++;
            end--;
        }
    }
};

console.log("INPUT")
input = [99, 3, -100, -1]
console.log(input)
reversefirst = 3
console.log("ROTATE BY : " + reversefirst + " elements")

rotate(input, reversefirst)
console.log("OUTPUT")
console.log(input)