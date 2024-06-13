// Queue in array

class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(value){
        this.queue.push(value)
    }

    dequeue(){
        this.queue.shift()
    }

    isEmpty(){
        return this.queue.length===0
    }

    display(){
        console.log(this.queue);
    }

    peek(){
        return this.queue[this.queue.length-1]
    }
}

const que = new Queue()
que.enqueue(3)
que.enqueue(4)
que.enqueue(5)
que.enqueue(6)
que.enqueue(7)
que.display()
console.log(que.isEmpty());
que.dequeue()
que.display()
console.log(que.peek());