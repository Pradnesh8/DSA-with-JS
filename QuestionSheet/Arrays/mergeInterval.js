// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non - overlapping intervals that cover all the intervals in the input.

/**
 * Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 */


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// approach
// to find overlapping intevals:
// first as the intervals should be in order 
// we sort the intervals using start interval present in each Interval element
// create two pointers to iterate through intervals
// iterate till second pointer reaches end of array
// as we have already sorted with Start interval,
// To find overlap:
// check if End interval of First pointer interval >= Start interval of Second pointer interval
// yes, then check if End interval of Second pointer is >= if yes then keep it as End interval
// also, as now intervals are merged remove the Second pointer interval from array 
// if not,
// increment the pointers

var merge = function (intervals) {
    let start = 0;
    let second = 1;
    intervals.sort((a, b) => a[0] - b[0])
    while (second < intervals.length) {
        if (intervals[start][1] >= intervals[second][0]) {
            if (intervals[start][1] <= intervals[second][1]) {
                intervals[start][1] = intervals[second][1]
            }
            intervals.splice(second, 1)
        }
        else {
            start = start + 1
            second = second + 1
        }
    }
    return intervals
};

// APPROACH 2
// function merge(intervals) {
//     if (!intervals.length) return intervals;

//     // Step 1: Sort intervals by their start values
//     intervals.sort((a, b) => a[0] - b[0]);

//     // Step 2: Initialize the result array with the first interval
//     const merged = [intervals[0]];

//     // Step 3: Iterate through the intervals starting from the second interval
//     for (let i = 1; i < intervals.length; i++) {
//         const current = intervals[i];
//         const lastMerged = merged[merged.length - 1];

//         // Step 4: Check if there is an overlap
//         if (current[0] <= lastMerged[1]) {
//             // Merge the current interval with the last interval in merged
//             lastMerged[1] = Math.max(lastMerged[1], current[1]);
//         } else {
//             // No overlap, so add the current interval to merged
//             merged.push(current);
//         }
//     }

//     return merged;
// }