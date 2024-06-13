// Stack using Queue

class Stack{
    constructor(){
        this.stack = []
        this.temp = []
    }

    enqueue(value){
        this.stack.push(value)
    }

    dequeue(){
        if(this.isEmpty){
            console.log("Stack is empty");
            return 
        }
        while(this.stack.length>0){
            this.temp.unshift(this.stack.pop())
        }
        let value = this.temp.pop()
        this.stack = this.temp
        return value
    }

    front(){
        if(!this.isEmpty){
            console.log("Stack is empty");
            return 
        }
        while(this.stack.length>0){
            this.temp.unshift(this.stack.pop())
        }
        let front = this.temp[this.temp.length-1]
        this.stack = this.temp
        return front
    }

    isEmpty(){
        return this.stack.length === 0
    }

    size(){
        return this.stack.length
    }

    display(){
        console.log(this.stack);
    }
}

const stk = new Stack()
stk.enqueue(1)
stk.enqueue(2)
stk.enqueue(3)
stk.enqueue(4)
stk.enqueue(5)
stk.display()
console.log(stk.isEmpty());
console.log(stk.front());
console.log(stk.size());
