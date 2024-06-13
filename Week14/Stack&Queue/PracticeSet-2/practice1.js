// Stack Implementation

class Stack{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        if(this.stack.length<1){
            console.log("Stack is empty");
            return
        }
        return this.stack.pop()
    }

    peek(){
        if(this.stack.length<1){
            console.log("Stack is empty");
            return
        }
        return this.stack[this.stack.length-1]
    }

    size(){
        return this.stack.length
    }

    isEmpty(){
        return this.stack.length===0
    }

    display(){
        console.log(this.stack);
    }
}

const stk = new Stack()
console.log(stk.isEmpty());
stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)
stk.display()
console.log(stk.peek());
stk.pop()
stk.display()
console.log(stk.size());
console.log(stk.isEmpty());