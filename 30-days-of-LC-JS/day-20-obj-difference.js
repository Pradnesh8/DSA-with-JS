// Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object
// representing their differences.
// The function should compare the properties of the two objects and identify any changes.
// The returned object should only contains keys where the value is different from obj1 to obj2.For each changed key,
// the value should be represented as an array[obj1 value, obj2 value]. Keys that exist in one object but not in
// the other should not be included in the returned object.When comparing two arrays, the indices of the arrays are
// considered to be their keys.The end result should be a deeply nested object where each leaf value is a difference array.
// You may assume that both objects are the output of JSON.parse.

/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
// function objDiff(obj1, obj2) {

// };

// function flatten(object) {
//     const result = []
//     for (const key of Object.keys(object)) {
//         if (typeof object[key] === 'object' && object[key] !== null) {
//             const flatChild = flatten(object[key]);
//             for (const childKey of Object.keys(flatChild)) {
//                 result[`${key}.${childKey}`] = flatChild[childKey];
//             }
//         } else {
//             result[key] = object[key];
//         }
//     }

//     return result;
// }

// const obj1 = {
//     "a": 5,
//     "v": 6,
//     "z": [1, 2, 4, [2, 5, 7]]
// }
// const obj2 = {
//     "a": 5,
//     "v": 7,
//     "z": [1, 2, 3, [1]]
// }
// const res = flatten(obj1)
// const res2 = flatten(obj2)
// console.log(Object.keys(res))
// console.log(Object.keys(res2))
// const result = {}
// for (x in res) {
//     if (x in res2) {
//         if (res[x] !== res2[x]) {
//             // result[x] = [res[x], res2[x]]
//             // console.log(x);
//             // console.log(res2[x])
//             if (x.split(".").length > 1) {
//                 let y = {}
//                 x.split(".").forEach((splittedKey, index) => {
//                     if (index === x.split(".").length - 1) {
//                         y[splittedKey] = [res[x], res2[x]]
//                         result[x.split(".")[0]] = y
//                     } else {
//                         y[splittedKey] = y
//                     }
//                 })
//             } else {
//                 result[x] = [res[x], res2[x]]
//             }
//         }
//     }
// }
// console.log(result)

/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
const objDiff = (sourceObj, targetObj) => {
    // Special case: Objects are the same
    if (sourceObj === targetObj) return {};

    // Special cases: Null values or different types
    if (sourceObj === null || targetObj === null) return [sourceObj, targetObj];
    if (typeof sourceObj !== 'object' || typeof targetObj !== 'object') return [sourceObj, targetObj];
    if (Array.isArray(sourceObj) !== Array.isArray(targetObj)) return [sourceObj, targetObj];

    const diffObj = {}; // Object to store the differences

    // Iterate over the keys in sourceObj
    Object.keys(sourceObj).forEach(key => {
        if (key in targetObj) {
            const subDiff = objDiff(sourceObj[key], targetObj[key]); // Recursive call for nested objects

            // If there are differences, add them to the diffObj
            if (Object.keys(subDiff).length > 0) {
                diffObj[key] = subDiff;
            }
        }
    });

    return diffObj; // Return the object containing the differences
};

const obj1 = {
    "a": 5,
    "v": 6,
    "z": [1, 2, 4, [2, 5, 7]]
}
const obj2 = {
    "a": 5,
    "v": 7,
    "z": [1, 2, 3, [1]]
}

const result = objDiff(obj1, obj2)
console.log("result", JSON.stringify(result))