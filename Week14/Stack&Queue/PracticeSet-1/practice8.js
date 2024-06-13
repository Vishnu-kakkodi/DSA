// stack using array

class Stack{
    constructor(value){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length-1]
    }

    display(){
        console.log(this.stack);
    }
}

const stk = new Stack()
stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)
stk.display()
stk.pop()
stk.display()
console.log(stk.peek());
