// Given an object, return a valid JSON string of that object.You may assume the object only inludes strings, 
// integers, arrays, objects, booleans, and null.The returned string should not include extra spaces.
// The order of keys should be the same as the order returned by Object.keys().
// Please solve it without using the built -in JSON.stringify method.

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
    if (typeof object === 'number') {
        return String(object)
    }
    if (typeof object === 'string') {
        return '"' + String(object) + '"'
    }
    if (typeof object === 'boolean') {
        return String(object)
    }
    if (object === null) {
        return "null"
    }
    if (Array.isArray(object)) {
        const val = object.map((obj) => {
            return jsonStringify(obj)
        })
        return "[" + val.join(",") + "]"
    }
    let res = ""
    res += "{"
    Object.keys(object).forEach((key, i) => {
        res += '"' + key.toString() + '"' + ":"
        res += jsonStringify(object[key])
        if (i !== Object.keys(object).length - 1)
            res += ","
    })
    res += "}"
    return res
};