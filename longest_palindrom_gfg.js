//Longest Palindrome in a String
// Input:
// S = "aaaabbaa"
// Output: aabbaa
// Explanation: The longest Palindromic
// substring is "aabbaa".
// Example 2:

// Input: 
// S = "abc"
// Output: a
// Explanation: "a", "b" and "c" are the 
// longest palindromes with same length.
// The result is the one with the least
// starting index.

function longestPalin(S) {
    //code here
    const checkPalin = (str) => {
        const revStr = str.split("").reverse().join("")
        if (str === revStr) {
            return true
        }
        return false
    }
    let strCheck = "";
    let final = S[0];
    for (let i = 0; i < S.length - 1; i++) {
        strCheck = "";
        strCheck += S[i];
        for (let j = i + 1; j < S.length; j++) {
            strCheck += S[j];
            if (checkPalin(strCheck) && strCheck.length > final.length) {
                final = strCheck;
                if (final.length === S.length) {
                    return final
                }
            }
        }
    }
    return final
}

console.log(longestPalin("abacaffa"))