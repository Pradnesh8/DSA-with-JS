// Implement the myAtoi(string s) function, which converts a string to a 32 - bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

//     Whitespace: Ignore any leading whitespace(" ").
//         Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is 
//         neither present.
//             Conversion: Read the integer by skipping leading zeros until a non - digit character is encountered 
//             or the end of the string is reached.If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32 - bit signed integer range[-231, 231 - 1], then round the integer to 
// remain in the range.Specifically, integers less than - 231 should be rounded to - 231, and integers greater 
// than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.


/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    let i = 0;
    let n = s.length;
    let sign = 1;
    let result = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Step 1: Ignore leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for sign
    if (i < n && (s[i] === '-' || s[i] === '+')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }

    // Step 3: Convert digits to integer
    // compare ascii values
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s.charCodeAt(i) - '0'.charCodeAt(0);

        // Step 4: Handle overflow and underflow
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
}

const s = "1337c0d3"

console.log(myAtoi(s))