// Given an array arr and a chunk size size, return a chunked array.A chunked array contains the original elements in arr, 
// but consists of subarrays each of length size.The length of the last subarray may be less than size 
// if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse.In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    const resArr = []
    let tempArr = []
    arr.forEach((elem) => {
        tempArr.push(elem)
        if (tempArr.length === size) {
            resArr.push(tempArr)
            tempArr = []
        }
    })
    if (tempArr.length > 0) {
        resArr.push(tempArr)
    }
    return resArr
};

const arr = [1, 9, 6, 3, 2], size = 3
const res = chunk(arr, size)
console.log("result", res);