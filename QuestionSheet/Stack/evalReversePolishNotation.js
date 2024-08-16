/**
 * @param {string[]} tokens
 * @return {number}
 */
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression.Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32 - bit integer.

var evalRPN = function (tokens) {
    const stack = []
    const operations = ['+', '-', '*', '/']
    let num1 = 0
    let num2 = 0
    let res = 0
    for (c of tokens) {
        if (operations.includes(c)) {
            num2 = stack.pop();
            num1 = stack.pop();
            if (c === '+') {
                res = num1 + num2
            } else if (c === '-') {
                res = num1 - num2
            } else if (c === '*') {
                res = num1 * num2
            } else if (c === '/') {
                res = Math.trunc(num1 / num2)
            }
            stack.push(res)
        } else {
            stack.push(parseInt(c))
        }
    }
    return stack.pop()
};

const tokens = ["2", "1", "+", "3", "*"]
const tokens2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

console.log(evalRPN(tokens)) //9
console.log(evalRPN(tokens2)) //22