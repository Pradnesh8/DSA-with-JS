/**
 * @param {string} s
 * @return {number}
 */
// Given a string s representing a valid expression, implement a basic calculator to evaluate it,
// and return the result of the evaluation.
var calculate = function (s) {
    // declare stack
    const stack = new Array();
    // to keep track of sign
    let sign = 1
    // to keep track of each num character
    let num = 0;
    // to keep track of overall result
    let result = 0;
    // iterate over given expression 
    for (c of s) {
        // if its digit, keep it in num 
        if (c.match(/[0-9]/)) {
            num = num * 10 + parseInt(c);
        }
        // if its +/- expression, calculate result based on num * sign(based on last expression captured)
        else if (c == '+' || c == '-') {
            result += num * sign;
            // if expression is -, keep sign as -1
            if (c == '-') sign = -1;
            else sign = 1;
            num = 0;
        }
        // if '(' found, must solve first,
        // push current result and current sign into stack 
        // reassign  result=0, sign=1, num=0
        else if (c == '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
            num = 0;
        }
        // if ')' found, means all expression under '(' are done,
        // calculate result for last number
        // multiply with last sign (before coming inside '(')
        // add result of past expression (result of exp before coming inside '(')
        // reconfigure num = 0
        else if (c === ')') {
            result += num * sign;
            result *= stack.pop();
            result += stack.pop();
            num = 0;
        }
    }
    // for last num if not ')', calculate result
    result += num * sign
    return result
};

const s1 = "(1+(4+5+2)-3)+(6+8)"
const s2 = "1-4+ 2"

console.log(calculate(s1))
console.log(calculate(s2))