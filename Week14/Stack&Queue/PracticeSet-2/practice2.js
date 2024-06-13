// Queue implementation

class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(value){
        this.queue.push(value)
    }

    dequeue(){
        if(this.queue.length<1){
            console.log("Queue is empty");
            return
        }
        this.queue.shift()
    }

    front(){
        if(this.queue.length<1){
            console.log("Queue is empty");
            return
        }
        return this.queue[0]
    }

    isEmpty(){
        return this.queue.length===0
    }

    size(){
        return this.queue.length
    }

    display(){
        console.log(this.queue);
    }
}

const que = new Queue()
console.log(que.isEmpty());
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.enqueue(5)
que.display()
console.log(que.front());
que.dequeue()
que.display()
console.log(que.isEmpty());
console.log(que.size());