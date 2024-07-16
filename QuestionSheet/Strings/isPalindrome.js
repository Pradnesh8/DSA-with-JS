/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const regex = /^[a-zA-Z0-9]*$/
    const final = []
    for (let s1 of s.split("")) {
        regex.test(s1) && final.push(s1.toLowerCase())
    }
    // approach2
    for (let i = 0; i < Math.round(final.length / 2); i++) {
        if (final[i] !== final[final.length - 1 - i]) return false
    }
    return true
    // approach1
    // using inbuilt functions
    // console.log(final.join(""))
    // const revFinal = [...final].reverse()
    // if (final.join("") == revFinal.join("")){
    //     return true
    // }
    // return false
};

const input = "A man, a plan, a canal: Panama"
console.log(isPalindrome(input))