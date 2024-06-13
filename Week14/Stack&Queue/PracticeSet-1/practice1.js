// Stack using Queue

class StackUsingQueue{
    constructor(){
        this.queue = []
        this.temp = []
    }
    
    push(value){
        this.queue.push(value)
    }

    pop(){
        if(this.queue.length === 0){
            console.log("Stack is empty");
            return
        }
        while(this.queue.length>1){
            this.temp.push(this.queue.shift())
        }
        let poppedValue = this.queue[0]
        this.queue = this.temp
        return poppedValue
    }

    peek(){
        if(this.queue.length===0){
            console.log("Queue is empty");
            return
        }
        return this.queue[this.queue.length-1]
    }

    dequeue(){
        if(this.queue.length===0){
            console.log("Queue is empty");
            return
        }
        return this.queue.shift()
    }

    display(){
        if(this.queue.length===0){
            console.log("Queue is empty");
            return
        }
        console.log(this.queue);
    }
}

const que = new StackUsingQueue()
que.push(1)
que.push(2)
que.push(3)
que.push(4)
que.push(5)
que.display()
que.pop()
que.display()
console.log(que.peek());
que.display()
que.dequeue()
que.display()
