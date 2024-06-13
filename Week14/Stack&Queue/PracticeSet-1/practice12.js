// Stack using Queue

class StackUsingQueues{
    constructor(){
        this.stack = []
        this.temp = []
    }
    enqueue(value){
        this.stack.push(value)
    }
    dequeue(){
        while(this.stack.length>1){
            this.temp.unshift(this.stack.pop())
        }
        let val = this.stack[0]
        this.stack = this.temp
        return val
    }
    peek(){
        return this.stack[this.stack.length-1]
    }

    display(){
        console.log(this.stack)
    }
}

const stk = new StackUsingQueues()
stk.enqueue(8)
stk.enqueue(7)
stk.enqueue(6)
stk.display()
stk.dequeue()
stk.display()
console.log(stk.peek());