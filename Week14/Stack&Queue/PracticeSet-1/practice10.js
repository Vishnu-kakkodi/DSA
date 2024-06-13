// Queue in array

class Queue{
    constructor(value){
        this.queue = []
    }

    enqueue(value){
        this.queue.push(value)
    }

    dequeue(){
        return this.queue.shift()
    }

    display(){
        console.log(this.queue);
    }
}

const que = new Queue()
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.enqueue(5)
que.display()
que.dequeue()
que.display()