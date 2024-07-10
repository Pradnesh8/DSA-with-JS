// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will 
// return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items 
// in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array.Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.


/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    const resObj = {}
    for (let i = 0; i < this.length; i++) {
        const res = fn(this[i])
        resObj[res] ? resObj[res].push(this[i]) : resObj[res] = [this[i]]
    }
    return resObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fn = function (n) {
    return String(n > 5);
}

const result = array.groupBy(fn);
console.log("Result", result)