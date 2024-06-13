// Stack using two queues

class Stack{
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    enqueue(value){
        this.queue1.push(value)
    }

    dequeue(){
        while(this.queue1.length>0){
            this.queue2.push(this.queue2.pop())
        }
    }
}