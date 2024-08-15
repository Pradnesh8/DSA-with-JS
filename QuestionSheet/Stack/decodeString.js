// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
// Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well - formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those 
// repeat numbers, k.For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = []; // initiate stack
    let num = 0; // to track digit
    let str = ''; // to keep result string

    for (let c of s) {// iterate over string s
        if (c >= '0' && c <= '9') { // get the digits to repeat string 
            num = num * 10 + parseInt(c); // to handle multiple digits
        } else if (c === '[') {
            // push digit formed 
            stack.push(num);
            // push current str formed till now
            stack.push(str);
            // reinitiate
            num = 0;
            str = '';
        } else if (c === ']') {
            // get previous string 
            let prevStr = stack.pop();
            // get the digit by which times we need to repeat
            let repeatTimes = stack.pop();
            // concatenate previous string with new inside [] by repeatTimes
            str = prevStr + str.repeat(repeatTimes);
            // reset num
            num = 0;
        } else {
            // concat string for string between '[]'
            str += c;
        }
    }
    // return final string formed
    return str
};