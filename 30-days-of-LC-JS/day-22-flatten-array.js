// Given a multi - dimensional array arr and a depth n, return a flattened version of that array.

// A multi - dimensional array is a recursive data structure that contains integers or other multi - dimensional arrays.

// A flattened array is a version of that array with some or all of the sub - arrays removed and replaced with the actual
// elements in that sub - array.This flattening operation should only be done if the current depth of nesting is less than n.
// The depth of the elements in the first array are considered to be 0.

// Please solve it without the built -in Array.flat method.

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }
    let resArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const nested = flat(arr[i], n - 1);
            resArr.push(...nested)
        } else {
            resArr.push(arr[i])
        }
    }
    return resArr;
};
// var flat = function (arr, n) {
//     if (n === 0) {
//         return arr;
//     } else {
//         let resArr = []
//         while (n > 0) {
//             resArr = []
//             arr.forEach((elem) => {
//                 if (Array.isArray(elem)) {
//                     const flatten = flat(elem, 0);
//                     resArr.push(...flatten)
//                 } else {
//                     resArr.push(elem)
//                 }
//             })
//             n = n - 1;
//             arr = resArr
//         }
//         return resArr;
//     }
// };

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const n = 2

const result = flat(arr, n)
console.log("Result", result)