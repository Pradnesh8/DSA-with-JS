/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    // create map
    const digitMap = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    // if digits "", return []
    if (digits.length === 0) return []
    // if digits single digit, return from map
    if (digitMap[digits]) return digitMap[digits]
    digits = digits.split("")
    // recursive function to create all combination
    function mergeAns(ans, index) {

        if (ans.length === 0) {
            ans.push(...digitMap[digits[index]])
        }
        else {
            const temp = []
            // brute force all combinations
            for (let i = 0; i < ans.length; i++) {
                for (let j = 0; j < digitMap[digits[index]].length; j++) {
                    temp.push(`${ans[i]}${digitMap[digits[index]][j]}`)
                }
            }
            ans = [...temp]
        }
        if (index === digits.length - 1) return ans
        return mergeAns(ans, index + 1);
    }
    // start from [] and index 0
    const res = mergeAns([], 0);
    // return the all combinations
    return res
};