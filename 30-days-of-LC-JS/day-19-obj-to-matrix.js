// Write a function that converts an array of objects arr into a matrix m.

// arr is an array of objects or arrays.Each item in the array can be deeply nested with child arrays and child objects.
// It can also contain numbers, strings, booleans, and null values.

// The first row m should be the column names.If there is no nesting, the column names are the unique keys within the objects.
// If there is nesting, the column names are the respective paths in the object separated by ".".

// Each of the remaining rows corresponds to an object in arr.Each value in the matrix corresponds to a value in an object.
// If a given object doesn't contain a value for a given column, the cell should contain an empty string "".

// The colums in the matrix should be in lexographically ascending order.


/**
 * @param {Array} arr
 * @return {Matrix}
 */
// TRIED SOLUTION
// var jsonToMatrix = function (arr) {
//     // FInd all keys
//     // add . if keys are nested
//     // using keys [k1][k2] find value
//     // put keys in ascending order
//     const getKeys = (elem) => {
//         const keyArr = []
//         let keys = Object.keys(elem);
//         keys.forEach((k) => {
//             let key = `${k}`;
//             let flag = false
//             if (!(elem[k] === null || typeof elem[k] === "string" || typeof elem[k] === "number" || typeof elem[k] === "boolean" || Array.isArray(elem[k]))) {
//                 let keysFound = Object.keys(elem[k])
//                 if (keysFound) {
//                     keysFound.forEach((_key) => {
//                         key += "." + _key
//                         keyArr.push(key)
//                         key = `${k}`
//                         flag = true
//                     })
//                 }
//             }
//             if (!flag)
//                 keyArr.push(key)
//         })
//         console.log("GET KEYS", keyArr)
//         return keyArr
//     }
//     const keys = {}
//     arr.forEach((elem) => {
//         const allKeys = getKeys(elem)
//         allKeys.forEach((_k) => {
//             keys[_k] = ""
//         })
//     })
//     console.log("KEYS", keys)
//     const uniqueKeys = Object.keys(keys);
//     const sortedKeys = uniqueKeys.sort();//default ascending
//     console.log("sorted KEYS", sortedKeys);
//     const matrix = []
//     matrix.push(sortedKeys);
//     arr.forEach((key, index) => {
//         const matrixVal = []
//         sortedKeys.forEach((k) => {
//             if (arr[index]) {
//                 // matrixVal.push(arr[index][k] || "")
//                 if (k.split(".").length > 0) {
//                     let x = arr[index]
//                     k.split(".").forEach((splittedKey) => {
//                         if (x[splittedKey] === null) {
//                             x = null
//                         } else if (x[splittedKey]) {
//                             x = x[splittedKey]
//                         } else {
//                             x = ""
//                         }
//                     })
//                     if (x === null) {
//                         matrixVal.push(null)
//                     } else {
//                         matrixVal.push(x || "")
//                     }
//                 } else {
//                     if (arr[index][k] === null) {
//                         matrixVal.push(null)
//                     } else {
//                         matrixVal.push(arr[index][k] || "")
//                     }
//                 }

//             } else {
//                 matrixVal.push("")
//             }
//         })
//         matrix.push(matrixVal);
//     });
//     console.log("MATRIX", matrix);
// };

// OPTIMAL
/**
 * @param {Array} arr
 * @return {Matrix}
 */
function flatten(object) {
    const result = []
    for (const key of Object.keys(object)) {
        if (typeof object[key] === 'object' && object[key] !== null) {
            const flatChild = flatten(object[key]);
            for (const childKey of Object.keys(flatChild)) {
                result[`${key}.${childKey}`] = flatChild[childKey];
            }
        } else {
            result[key] = object[key];
        }
    }

    return result;
}




var jsonToMatrix = function (arr) {
    arr = arr.map(flatten)
    const keys = new Set(arr.map(Object.keys).flat())
    const col = [...keys].sort();
    const result = new Array(arr.length + 1).fill().map(_ => new Array(col.length));
    result[0] = col;
    for (var i = 0; i in arr; i++) {
        for (var j = 0; j in col; j++) {
            const key = col[j];
            const value = arr[i][key];
            if (value === undefined)
                result[i + 1][j] = '';
            else
                result[i + 1][j] = value;
        }
    }
    return result;
};


const arr2 = [
    { "a": 1, "b": 2 },
    { "c": 3, "d": 4 },
    {}
]

const arr1 = [
    { "b": 1, "a": 2 },
    { "b": 3, "a": 4 }
]

const arr3 = [
    { "a": { "b": 1, "c": 2 } },
    { "a": { "b": 3, "d": 4 } }
]

const arr4 = [
    [{ "a": null }],
    [{ "b": true }],
    [{ "c": "x" }]
]

const arr5 = [[{ "a": null }], [{ "b": true }], [{ "c": "x" }]]
const arr6 = [{ "dgdfgdfg": "gdjhgfg" }, { "dgffgfg": "rthrthrth" }]
const arr7 = [[[[1]]], [[[2]]], [[[3]]]]
const res = jsonToMatrix(arr7)
console.log("RESULT", res);