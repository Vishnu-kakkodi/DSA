// stack using Queue

class Stack{
    constructor(){
        this.stack = []
        this.temp = []
    }

    enqueue(value){
        this.stack.push(value)
    }

    dequeue(){
        while(this.stack.length>0){
            this.temp.unshift(this.stack.pop())
        }
        let poppedValue = this.temp.pop()
        this.stack = this.temp
        return poppedValue
    }

    pop(){
        if(this.stack.length<1){
            return "Stack is empty"
        }
        this.stack.pop();
    }

    display(){
        console.log(this.stack)
    }

    isEmpty(){
        return this.stack.length===0
    }


}

const stk = new Stack()
stk.enqueue(1)
stk.enqueue(2)
stk.enqueue(3)
stk.enqueue(4)
stk.enqueue(5)
stk.dequeue()
stk.display()