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

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

console.log("stack", stack);
console.log("stack peek", stack.peek());
console.log("stack pop element", stack.pop());
console.log("stack", stack);
console.log("stack size", stack.size());
console.log("stack isEmpty", stack.isEmpty());
