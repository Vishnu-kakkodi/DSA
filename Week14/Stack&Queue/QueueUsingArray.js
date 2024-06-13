class QueueArray{
    constructor(){
        this.queue = []
    }

    enqueue(value){
        this.queue.push(value);
    }

    dequeue(){
        if(this.queue.length===0){
            console.log("Queue is empty");
            return
        }
        return this.queue.shift()
    }

    isEmpty(){
        return this.queue.length === 0
    }

    peek(){
        if(this.queue.length===0){
            console.log("Queue is empty");
            return
        }
        return this.queue[0]
    }
}

const queue = new QueueArray()
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
console.log(queue.peek());