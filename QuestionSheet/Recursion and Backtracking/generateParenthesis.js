/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const stack = []
    const res = []
    function backtrack(openN, closeN) {
        console.log("openN", openN)
        console.log("closeN", closeN)
        console.log("stack", stack)
        console.log("cond ", openN == closeN == n)
        if ((openN == closeN) && (openN == n)) {
            console.log("stack", stack)
            console.log("res", res)
            res.push(stack.join(""))
        }
        if (openN < n) {
            stack.push("(");
            backtrack(openN + 1, closeN)
            stack.pop()
        }
        if (closeN < openN) {
            stack.push(")");
            backtrack(openN, closeN + 1)
            stack.pop()
        }
    }
    backtrack(0, 0)
    return res
};
const n = 3
console.log(generateParenthesis(n))