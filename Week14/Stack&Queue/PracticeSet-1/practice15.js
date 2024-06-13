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

    isEmpty(){
        return this.queue.length===0
    }

    display(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.queue.join(" ")
    }

}

const que = new Queue()
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.enqueue(5)
console.log(que.display());
que.dequeue()
console.log(que.display());