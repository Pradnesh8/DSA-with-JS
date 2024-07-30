// Problem - find Power set of input array
// Given an integer array nums of unique elements, return all possible
// subsets (the power set).
// The solution set must not contain duplicate subsets.Return the solution in any order.

// approach - backtracking approach
// initiate the backtracking with index 0 and subset []
// The function backtrack will take two parameters: the current index and the current subset.
// At each step, add the current subset to the result array.
// Iterate through the numbers starting from the current index.
// For each number, add it to the current subset and recursively call backtrack with the next index.
// After the recursive call, remove the last number added to backtrack to the previous state.

// Edge Cases:
// If nums is empty, the only subset is the empty set.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
    let temp = []
    let result = []
    function backtrack(ns, i) {
        if (i === nums.length) {
            return result.push([...temp])
        }
        temp.push(ns[i]); // push 1,2, ...
        backtrack(ns, i + 1); // include 1,2, ...
        temp.pop();
        backtrack(ns, i + 1); // dont include 1,2, ...
    }
    backtrack(nums, 0)
    return result
}
console.log(subsets([1, 2, 3]))