class QueueUsingStack{
    constructor(){
        this.stack = []
        this.temp = []
    }

    enque(value){
        this.stack.push(value)
    }

    dequeue(){
        while(this.stack.length>1){
            this.temp.unshift(this.stack.pop())
        }
        let dequeueValue = this.stack[0]
        this.stack = this.temp
        return dequeueValue
    }

    pop(){
        this.stack.pop()
    }

    peek(){
        if(this.length===0){
            console.log("Stack is empty");
            return
        }
        return this.stack[this.stack.length-1]
    }

    display(){
        console.log(this.stack);
    }

}

const stk = new QueueUsingStack()
stk.enque(1)
stk.enque(2)
stk.enque(3)
stk.enque(4)
stk.enque(5)
stk.display()
stk.dequeue()
stk.display()
stk.pop()
stk.display()
console.log(stk.peek());