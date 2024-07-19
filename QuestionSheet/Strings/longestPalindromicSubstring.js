/**
 * @param {string} s
 * @return {string}
 */

/**
 * approach:
 * if we extract all sub string and check palindrom it will take O(n^3)
 * So, to overcome this, we will expand string from center and check if its palindrome
 * 1. Iterate over all index of string
 * 2. declare the left and right position as current index
 * 3. expand to left and right check if its same,
 * 4. if yes store it as res and check if previous resLength is smaller, if yes replace res, keep expanding
 * till we find non palindromic string
 * also FOR ODD case above steps will work fine
 * but for EVEN case just one small change is required
 * initiate l = i,r = i+1
 * 5. in end return final res
 * 
 *  
 */
var longestPalindrome = function (s) {
    let res = "";
    let resLength = 0;
    // for Odd length
    for (let i = 0; i < s.length; i++) {
        let l = i, r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (resLength < r - l + 1) {
                res = s.slice(l, r + 1)
                resLength = r - l + 1
            }
            l = l - 1
            r = r + 1
        }
        // for even number
        l = i, r = i + 1;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (resLength < r - l + 1) {
                res = s.slice(l, r + 1)
                resLength = r - l + 1
            }
            l = l - 1
            r = r + 1
        }
    }

    return res
};