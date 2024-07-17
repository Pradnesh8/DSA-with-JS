/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // console.log(s.length)
    const n = s.length
    for (let i = 0; i < Math.round(n / 2); i++) {
        // if(i === n-1-i) break;
        swap(i, n - 1 - i, s)
        // console.log(s)
    }
};
function swap(a, b, arr) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

const input = ["h", "e", "l", "l", "o"]
reverseString(input);
console.log(input);