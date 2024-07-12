// Stack Implementation

// class Stack{
//     constructor(){
//         this.stack = []
//         this.middleStack = []
//     }

//     push(value){
//         this.stack.push(value)
//         if (this.stack.length === 1) {
//             this.middleStack.push(value);
//         } else if (this.stack.length % 2 !== 0) {
//             this.middleStack.push(value);
//         }
//     }

//     findMiddle() {
//         if (this.stack.length < 1) {
//             console.log("Stack is empty");
//             return;
//         }
//         return this.middleStack[this.middleStack.length - 1];
//     }

//     pop(){
//         if(this.stack.length<1){
//             console.log("Stack is empty");
//             return
//         }
//         return this.stack.pop()
//     }

//     peek(){
//         if(this.stack.length<1){
//             console.log("Stack is empty");
//             return
//         }
//         return this.stack[this.stack.length-1]
//     }

//     size(){
//         return this.stack.length
//     }

//     isEmpty(){
//         return this.stack.length===0
//     }

//     display(){
//         console.log(this.stack);
//     }
// }

// const stk = new Stack()
// console.log(stk.isEmpty());
// stk.push(1)
// stk.push(2)
// stk.push(3)
// stk.push(4)
// stk.push(5)
// stk.display()
// console.log(stk.findMiddle())


class Stack {
    constructor() {
        this.stack = [];
        this.middleIndex = null; 
    }

    push(value) {
        this.stack.push(value);
        const size = this.stack.length;

        if (size === 1) {
            this.middleIndex = 0;
        } else if (size % 2 === 0) {
            this.middleIndex = Math.floor(size / 2) - 1;
        } else {
            this.middleIndex = Math.floor(size / 2);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            console.log("Stack is empty");
            return;
        }

        const poppedValue = this.stack.pop();
        const size = this.stack.length;

        if (size === 0) {
            this.middleIndex = null;
        } else if (size % 2 === 0) {
            this.middleIndex = Math.floor(size / 2) - 1;
        } else {
            this.middleIndex = Math.floor(size / 2);
        }

        return poppedValue;
    }

    peek() {
        if (this.stack.length === 0) {
            console.log("Stack is empty");
            return;
        }
        return this.stack[this.stack.length - 1];
    }

    findMiddle() {
        if (this.stack.length === 0) {
            console.log("Stack is empty");
            return;
        }
        return this.stack[this.middleIndex];
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

const stk = new Stack();
console.log(stk.isEmpty());
stk.push(1);
stk.push(2);
stk.push(3);
stk.push(4);
stk.push(5);
stk.display(); 
console.log(stk.findMiddle()); 
stk.pop();
stk.display(); 
console.log(stk.findMiddle()); 
stk.pop();
stk.display(); 
console.log(stk.findMiddle()); 

