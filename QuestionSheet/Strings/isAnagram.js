/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// approach
// store all char as key and val as no of occurences
// for second string decrement the occurences if present
// if no of occurences doesnt match it will return false
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    const store = {}
    for (s1 of s) {
        store[s1] = (store[s1] || 0) + 1;
    }
    for (s2 of t) {
        if (!store[s2]) return false
        store[s2] -= 1
    }
    return true
};

const i1 = "anagram"
const i2 = "nagaram"

console.log(isAnagram(i1, i2))