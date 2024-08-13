
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }
    push(val) {
        this.stack.push(val)
        if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val)
        }
    };
    pop() {
        const poppedVal = this.stack.pop()
        if (poppedVal === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
    };
    top() {
        return this.stack[this.stack.length - 1]
    };
    getMin() {
        return this.minStack[this.minStack.length - 1] || 0
    };
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
let val = 3
obj.push(val)
obj.pop()
obj.push(2)
obj.push(-1)
obj.push(4)
var param_3 = obj.top()
var param_4 = obj.getMin()
console.log(param_4)