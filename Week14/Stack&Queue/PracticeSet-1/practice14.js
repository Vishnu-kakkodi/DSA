class Stack{
    constructor(){
        this.stack = []
        this.top = null
    }

    push(value){
        this.stack.push(value)
        this.top = value
    }

    pop(){
        if(this.stack.length<1){
            return "Stack is empty"
        }
        this.stack.pop()
        this.top = this.stack[this.stack.length-1]
    }

    peek(){
        if(this.stack.length<1){
            return "Stack is empty"
        }
        return this.stack[this.stack.length-1]
    }

    size(){
        return this.stack.length
    }

    isEmpty(){
        return this.stack.length===0
    }

    display() {
        if (this.stack.length < 1) {
            return "Stack is empty";
        }
        return this.stack.join(' ');
    }
}

const stk = new Stack()
stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)
console.log(stk.display());
console.log(stk.peek());
stk.pop()
console.log(stk.display());