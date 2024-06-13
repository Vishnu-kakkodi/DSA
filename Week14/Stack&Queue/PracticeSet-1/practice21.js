// Queue using stack

class Queue{
    constructor(){
        this.queue = []
        this.temp = []
    }

    push(value){
        this.queue.push(value)
    }

    pop(){
        while(this.queue.length>0){
            this.temp.push(this.queue.shift())
        }
        this.temp.pop()
        this.queue = this.temp
    }

    peek() {
        if (this.queue.length > 0) {
            return this.queue[0];
        }
        return this.temp[this.temp.length - 1];
    }
    

    isEmpty(){
        return this.queue.length===0;
    }

    size(){
        return this.queue.length;
    }

    display(){
        console.log(this.queue);
    }
}

const que = new Queue()
que.push(1)
que.push(2)
que.push(3)
que.push(4)
que.push(5)
que.display()
que.pop()
que.display()
console.log(que.isEmpty());
console.log(que.peek());