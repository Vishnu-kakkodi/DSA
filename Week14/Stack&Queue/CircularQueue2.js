class CircularQueue{
    constructor(size){
        this.size = size
        this.queue = new Array(size)
        this.front = -1
        this.rear = -1
    }

    enqueue(element){
        if((this.rear+1)%this.size===this.front){
            return "Queue is full"
        }else if(this.front = -1){
            this.front = 0
            this.rear = 0
            this.queue[this.rear] = element
        }else{
            this.rear = (this.rear + 1) % this.size
            this.queue[this.rear] = element
        }
    }
}