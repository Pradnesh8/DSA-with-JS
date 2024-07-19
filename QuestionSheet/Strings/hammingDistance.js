// The Hamming distance between two integers is the number of positions at which the corresponding bits are
// different.

// Given two integers x and y, return the Hamming distance between them.

/***
 * Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// approach:
// 1. To find BINARY code use method : str.toString(2)
// 2. add 0 infront if the arrays doesnt match in length
// 3. check while iterating that for each position if value is same, not then increment the answer
var hammingDistance = function (x, y) {
    // console.log(x.toString(2))
    // console.log(y.toString(2))
    const xl = x.toString(2).split("")
    const yl = y.toString(2).split("")
    let ans = 0
    if (xl.length > yl.length) {
        let toBefill = xl.length - yl.length
        while (toBefill !== 0) {
            yl.unshift(0)
            toBefill = toBefill - 1
        }
    }
    else {
        let toBefill = yl.length - xl.length
        while (toBefill !== 0) {
            xl.unshift(0)
            toBefill = toBefill - 1
        }
    }
    for (key in yl) {
        if (yl[key] != xl[key]) {
            ans++;
        }
    }
    return ans
};
// Approach2 : Using XOR
// var hammingDistance = function (x, y) {
//     // XOR the two numbers to get a number that represents differing bits
//     let xor = x ^ y;

//     // Count the number of 1s in the binary representation of the XOR result
//     let distance = 0;
//     while (xor > 0) {
//         // Increment distance if the last bit is 1
//         distance += xor & 1;

//         // Right shift the bits of xor to check the next bit
//         xor >>= 1;
//     }

//     return distance;
// };

console.log(hammingDistance(1, 4))