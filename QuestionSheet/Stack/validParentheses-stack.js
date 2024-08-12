
var isValid = function (s) {
    const stack = []
    const mapping = { ')': '(', '}': '{', ']': '[' }
    for (let char of s) {
        if (char in mapping) {
            let topmost = stack.length > 0 ? stack.pop() : '#'
            if (mapping[char] !== topmost) {
                return false
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0
};

console.log(isValid('[](){}'))
console.log(isValid('[]()}'))
console.log(isValid('[]{()}'))