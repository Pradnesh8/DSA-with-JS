/**
 * @param {string} s
 * @return {string[]}
 */

/**
 * A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" 
are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. 
You are not allowed to reorder or 
remove any digits in s. You may return the valid IP addresses in any order.
 */
var restoreIpAddresses = function (s) {
    const res = [];
    // ip cant be more than 12 char
    if (s.length > 12) return []
    // backtrack function to retrieve the IP combinations
    function backtrack(i, dots, currIp) {
        if (dots === 4 && i === s.length) {
            currIp = currIp.slice(0, currIp.length - 1) // to remove last dot
            res.push(currIp)
            return
        }
        // if more than 4 dots are present obviously its not valid
        if (dots > 4) {
            return
        }
        for (let j = i; j < Math.min(i + 3, s.length); j++) {
            // to get character from string
            const val = s.slice(i, j + 1)
            // console.log("val",val)
            // condition to check if value is less than 256 as valid number can be 0-255
            // condition to check if there are no leading zeroes
            if (Number(val) < 256 && (i === j || s[i] !== "0")) {
                // for each valid value, call backtrack to find if rest values are also valid
                backtrack(j + 1, dots + 1, currIp + val.toString() + ".")
            }
        }
    }
    backtrack(0, 0, "")
    // console.log(res)
    return res
};

const input = "25525511135"
console.log(restoreIpAddresses(input))

const input2 = "0000"
console.log(restoreIpAddresses(input2))