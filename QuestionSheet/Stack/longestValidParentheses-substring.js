

function longestValidParentheses(s) {
    const stack = [-1]
    let maxValLen = 0;
    for (let i in s) {
        i = parseInt(i)
        if (s[i] === "(") {
            stack.push(i);
        }
        else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxValLen = Math.max(maxValLen, i - stack[stack.length - 1])
            }
        }
    }
    return maxValLen
}

const input = ")()()()"
const input2 = "())()())"
console.log(longestValidParentheses(input))
console.log(longestValidParentheses(input2))