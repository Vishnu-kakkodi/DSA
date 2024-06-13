// stack in array

class Stack{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        this.stack.pop()
    }

    peek(){
        if(this.stack.length===0){
            console.log("Stack is empty");
            return
        }
        console.log(this.stack[this.stack.length-1])
    }

    isEmpty(){
        return this.stack.length===0
    }

    display(){
        console.log(this.stack);
    }
}

const stk = new Stack()
stk.push(6)
stk.push(4)
stk.push(8)
stk.push(2)
stk.push(9)
stk.display()
stk.peek()
stk.pop()
stk.display()
