class MaxStack {
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(value) {
        this.stack.push(value);
        if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(value);
        } else {
            this.maxStack.push(this.maxStack[this.maxStack.length - 1]);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            console.log("Stack is empty");
            return;
        }
        this.maxStack.pop();
        return this.stack.pop();
    }

    peek() {
        if (this.stack.length === 0) {
            console.log("Stack is empty");
            return;
        }
        return this.stack[this.stack.length - 1];
    }

    findMax() {
        if (this.maxStack.length === 0) {
            console.log("Stack is empty");
            return;
        }
        return this.maxStack[this.maxStack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    display() {
        console.log(this.stack);
    }
}

// Example usage
const stk = new MaxStack();
console.log(stk.isEmpty()); // true
stk.push(1);
stk.push(2);
stk.push(8);
stk.push(4);
stk.push(5);
stk.display(); // [1, 2, 8, 4, 5]
console.log(stk.findMax()); // 8
stk.pop();
stk.display(); // [1, 2, 8, 4]
console.log(stk.findMax()); // 8
stk.pop();
stk.display(); // [1, 2, 8]
console.log(stk.findMax()); // 8
