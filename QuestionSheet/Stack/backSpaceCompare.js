// Given two strings s and t, return true if they are equal when both are typed into empty text editors.
//  '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    if (s === t) return true
    const s1 = []
    const t1 = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            s1.pop()
        } else {
            s1.push(s[i])
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            t1.pop()
        } else {
            t1.push(t[i])
        }
    }
    return s1.join("") === t1.join("")
};
let s = "ab#c"
let t = "ad#c"

console.log(backspaceCompare(s, t))