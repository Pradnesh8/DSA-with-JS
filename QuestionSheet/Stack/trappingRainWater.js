/**
 * @param {number[]} height
 * @return {number}
 */
// Given n non - negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.
var trap = function (height) {
    const stack = []
    const maxLeft = {}
    const maxRight = {}
    let min = 0
    let maxL = 0
    let maxR = 0
    if (height.length === 0) return 0
    for (let i = 0; i < height.length; i++) {
        // i = parseInt(i)
        maxL = Math.max(maxL, height[i])
        maxLeft[i] = maxL
        maxR = Math.max(maxR, height[height.length - i - 1])
        maxRight[height.length - i - 1] = maxR
    }
    ans = 0
    // console.log(maxLeft)
    // console.log(maxRight)
    for (let i = 0; i < height.length; i++) {
        // i = parseInt(i)
        min = Math.min(maxLeft[i], maxRight[i])
        // console.log(min)
        if (min > 0) {
            ans += min - height[i]
        }
    }
    return ans
};
let input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
let input2 = [4, 2, 0, 3, 2, 5]
console.log(trap(input1))
console.log(trap(input2))
// APPROACH 2 - Using two pointers
/**
 * @param {number[]} height
 * @return {number}
 */
var trapUsingPointers = function (height) {
    let l = 0
    let r = height.length - 1;
    let maxL = height[l]
    let maxR = height[r]
    let res = 0
    if (height.length === 0) return 0
    while (l < r) {
        if (maxL < maxR) {
            l = l + 1
            maxL = Math.max(maxL, height[l])
            res += maxL - height[l]
        } else {
            r = r - 1
            maxR = Math.max(maxR, height[r])
            res += maxR - height[r]
        }
    }
    return res
};


console.log(trapUsingPointers(input1))
console.log(trapUsingPointers(input2))