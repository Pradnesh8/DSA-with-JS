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
function subsets(nums) {
    const res = [];
    // Backtracking:
    // backtrack is initially called with start set to 0 and currentSubset as an empty array.
    // For each index from start to the end of the nums array, the current number is added to currentSubset, 
    // and backtrack is called recursively with the next index.
    // After exploring all subsets that include the current number, it is removed from currentSubset to explore 
    // subsets that do not include it.
    function backtrack(start, currentSubset) {
        res.push([...currentSubset])
        for (let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }
    backtrack(0, []);
    return res
}

console.log(subsets([1, 2, 3]))