// Queue using stack

class QueueUsingStacks{
    constructor(value){
        this.queue = []
        this.temp = []
    }

    push(value){
        this.queue.push(value)
    }

    pop(){
        while(this.queue.length>1){
            this.temp.push(this.queue.shift())   
        }
        let poppedValue = this.queue.value
        this.queue = this.temp
        return poppedValue
    }

    peek(){
        return this.queue[this.queue.length-1]
    }

    display(){
        console.log(this.queue);
    }
}

const que = new QueueUsingStacks()
que.push(1)
que.push(2)
que.push(3)
que.push(4)
que.display()
que.pop()
que.display()
console.log(que.peek());