/**
 * @param {number[]} heights
 * @return {number}
 */

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, 
// return the area of the largest rectangle in the histogram.
var largestRectangleArea = function (heights) {
    const stack = [];
    let maxArea = 0;
    for (let i in heights) {
        let start = i
        // console.log(stack)
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            let [indx, heightVal] = stack.pop();
            maxArea = Math.max(maxArea, heightVal * (i - indx))
            start = indx
        }
        stack.push([parseInt(start), heights[i]])
        // console.log(maxArea)
    }
    for (let i in stack) {
        let [indx, heightVal] = stack[i];
        maxArea = Math.max(maxArea, (heights.length - indx) * heightVal)
        // console.log(maxArea)
    }
    return maxArea
};

const input = [2, 1, 5, 6, 2, 3]
console.log(largestRectangleArea(input))