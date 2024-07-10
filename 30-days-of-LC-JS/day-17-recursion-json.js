// Given two objects o1 and o2, check if they are deeply equal.
// For two objects to be deeply equal, they must contain the same keys, and the associated values
// must also be deeply equal.Two objects are also considered deeply equal if they pass the === equality check.
// You may assume both objects are the output of JSON.parse.In other words, they are valid JSON.
// Please solve it without using lodash's _.isEqual() function.


/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (typeof o1 !== typeof o2) {
        return false;
    }

    if (typeof o1 !== 'object' || o1 === null || o2 === null) {
        return o1 === o2;
    }

    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return false;
    }

    if (Array.isArray(o1)) {
        if (o1.length !== o2.length) {
            return false;
        }

        for (var i = 0; i < o1.length; i++) {
            if (!areDeeplyEqual(o1[i], o2[i])) {
                return false;
            }
        }

        return true;
    }

    var keys1 = Object.keys(o1);
    var keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (var key of keys1) {
        if (!keys2.includes(key) || !areDeeplyEqual(o1[key], o2[key])) {
            return false;
        }
    }

    return true;
};


/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */

// var areDeeplyEqual = function (o1, o2) {
//     let isEqual = true
//     if (typeof o1 === typeof o2 && typeof o1 === 'object') {
//         if (o1 === null && o2 === null) {
//             return true
//         }
//         if (Array.isArray(o1) || Array.isArray(o2)) {
//             if (!Array.isArray(o1)) {
//                 return false
//             } else if (!Array.isArray(o2)) {
//                 return false
//             } else {
//                 return JSON.stringify(o1) === JSON.stringify(o2);
//             }
//             // return false;
//         }
//         Object.keys(o1).forEach((key) => {
//             if (key in o2) {
//                 console.log(key)
//                 const o1val = o1[key]
//                 const o2val = o2[key]
//                 if (typeof o1val === typeof o2val) {
//                     if (Array.isArray(o1val)) {
//                         if (JSON.stringify(o1val) !== JSON.stringify(o2val)) {
//                             isEqual = false
//                             return
//                         }
//                     }
//                     else if (typeof o1val === 'object') {
//                         if (JSON.stringify(o1val) !== JSON.stringify(o2val)) {
//                             isEqual = false
//                             return
//                         }
//                     }
//                     else {
//                         // for checking value
//                         if (o1val !== o2val) {
//                             isEqual = false
//                             return
//                         }
//                     }
//                 } else {
//                     isEqual = false
//                     return
//                 }
//             } else {
//                 isEqual = false
//                 return
//             }
//         })
//     } else {
//         return o1 === o2
//     }

//     return isEqual
// };

const res = areDeeplyEqual({ "y": 2, "x": 1 }, { "x": 1, "y": 2 })
console.log(res)