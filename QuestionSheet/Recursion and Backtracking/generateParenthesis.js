/**
 * @param {number} n
 * @return {string[]}
 */
// Approach: backtracking
/**
 * create stack = [] to keep paranthesis & res = [] to store results
 * Conditions while generating:
 * 1. open < n
 * 2. close < open
 * 3. open == close == N // base case
 * 
 * implementation
 * check base case
 *      if open == close &&  open == n
 *          res.push(stack.join(""))// join stack to create string 
 * check if open < n
 *      add ( in stack
 *      backtrack (open+1,close) // as open parenthesis is added
 *      remove ( from stack
 * check if close < open
 *      add ) in stack
 *      backtrack (open,close+1) // as close parenthesis is added
 *      remove ) from stack
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