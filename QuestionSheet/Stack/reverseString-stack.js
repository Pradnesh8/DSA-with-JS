/**
 * @param {string} s
 * @return {string}
 */
class Stack {
    constructor() {
        this.stack = []
    }

    push(element) {
        this.stack.push(element)
    }
    pop() {
        if (this.isEmpty())
            return "Stack is empty"
        return this.stack.pop()
    }
    peek() {
        if (this.isEmpty())
            return "Stack is empty"
        return this.stack[this.size() - 1];
    }
    size() {
        return this.stack.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
}
var reverseWords = function (s) {
    const newStack = new Stack()
    s = s.trim().split(" ");
    // console.log(s)
    for (let i = 0; i < s.length; i++) {
        newStack.push(s[i])
    }
    // console.log(newStack.size())
    const res = []
    while (!newStack.isEmpty()) {
        const elem = newStack.pop()
        if (elem !== '')
            res.push(elem)
    }
    return res.join(" ")
};