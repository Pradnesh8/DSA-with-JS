/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverse(str, start, end) {
    while (start < end) {
        let temp = str[start];
        str[start] = str[end];
        str[end] = temp
        start++;
        end--;
    }
}
// APPROACH
/**
 * 
1. Convert the string to an array to allow in-place modifications.
2. Iterate through the array in steps of 2k characters.
3. Reverse the first k characters within each 2k block:
        - Calculate the end index of the segment to reverse.
        - Swap the elements from start to end indices.
4. Convert the array back to a string and return it.
 */
var reverseStr = function (s, k) {
    // strings are immutable,converting it to array
    arr = s.split("")
    // for 2k character 2*k
    for (let start = 0; start < arr.length; start += 2 * k) {
        // If there are fewer than k characters left, reverse all of them. 
        //  If there are less than 2k but greater than or equal to k characters, 
        // then reverse the first k
        let end = Math.min(start + k - 1, arr.length - 1); // end = 1
        reverse(arr, start, end); // reverse(arr, 0, 1)
    }
    return arr.join("")
};

const s = "abcdefg"
const k = 2
console.log(reverseStr(s, k))