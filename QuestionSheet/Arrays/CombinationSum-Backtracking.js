/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of 
 * candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is 
less than 150 combinations for the given input.
 * 
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Backtracking is a problem - solving algorithmic technique that involves finding a solution incrementally by 
// trying different options and undoing them if they lead to a dead end.It is commonly used in situations 
// where you need to explore multiple possibilities to solve a problem, like searching for a path in a 
// maze or solving puzzles like Sudoku. 

// Explanation of the Algorithm
// Initialization: Create an empty array res to store the results.
// Define DFS:
// Explore each candidate starting from the current index i.
// If the current combination sums to the target, add it to the results.
// If the sum exceeds the target or if we've considered all candidates, stop exploring this path.
// Include the current candidate and explore further.
// Exclude the current candidate and move to the next one.
// Start DFS: Begin the DFS with an empty combination, sum of 0, and starting index 0.
// Return Results: Return the res array containing all valid combinations.
// This approach ensures all combinations are explored using DFS, and 
// backtracking helps in efficiently finding all possible solutions without duplicates.
var combinationSum = function (candidates, target) {
    const res = []
    const dfs = (i, curr, total) => {
        if (total === target) {
            res.push([...curr])
            return
        }
        if (target < total || i >= candidates.length) {
            return
        }
        curr.push(candidates[i])
        dfs(i, curr, total + candidates[i])
        curr.pop()
        dfs(i + 1, curr, total)
    }
    dfs(0, [], 0)
    return res
};

const res = combinationSum([2, 3, 5, 7], 7)
console.log(res)