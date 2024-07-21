/**
 * @param {string[]} strs
 * @return {string}
 */
function commonPrefix(s1, s2) {
    let i = 0
    let common = ""
    while (i < Math.min(s1.length, s2.length)) {
        if (s1[i] === s2[i]) {
            common = common + String(s1[i])
            i++;
        } else {
            break;
        }
    }
    return common;
}
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]
    // let ans = ""
    let curr = strs[0]
    for (let i = 0; i < strs.length; i++) {
        // console.log("Curr",curr)
        curr = commonPrefix(curr, strs[i])
        if (curr === "") return ""
        // console.log(ans)
    }
    return curr
};
// GPT approach
// function longestCommonPrefix(strs) {
//     if (strs.length === 0) return "";

//     let prefix = strs[0]; // Start with the first string as the prefix
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.substring(0, prefix.length - 1); // Shorten the prefix
//             if (prefix === "") return "";
//         }
//     }
//     return prefix;
// }

const strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))