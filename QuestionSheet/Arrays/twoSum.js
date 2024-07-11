// Problem : Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// approach:
// get i, j  iterate from 0 to nums.length
// check if i && j are not equal
// get sum and check if matches target
// if found, return index [i,j]
function twoSum(nums, target) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                sum = nums[i] + nums[j]
                if (sum === target) return [i, j]
            }
        }
    }
}
nums = [3, 2, -4]
target = -1
console.log("Input :", nums)
console.log("Two sum should be :", target)
console.log("Answer :", twoSum(nums, target))