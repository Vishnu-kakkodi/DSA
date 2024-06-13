class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(element) {
        if ((this.rear + 1) % this.size === this.front) {
            return "Queue is Full";
        } else if (this.front === -1) {
            this.front = 0;
            this.rear = 0;
            this.queue[this.rear] = element;
        } else {
            this.rear = (this.rear + 1) % this.size;
            this.queue[this.rear] = element;
        }
    }

    dequeue() {
        if (this.front === -1) {
            return "Queue is empty";
        }
        let temp = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return temp;
    }

    printQueue() {
        if (this.front === -1) {
            return "Queue is empty";
        }
        let str = "";
        let i = this.front;
        while (i !== this.rear) {
            str += this.queue[i] + " ";
            i = (i + 1) % this.size;
        }
        str += this.queue[i]; // include the rear element
        return str;
    }
}

// Example usage:
let cQueue = new CircularQueue(5);
cQueue.enqueue(10);
cQueue.enqueue(20);
cQueue.enqueue(30);
cQueue.enqueue(40);
cQueue.enqueue(50);
console.log(cQueue.printQueue()); // 10 20 30 40 50
console.log(cQueue.dequeue()); // 10
cQueue.enqueue(60);
console.log(cQueue.printQueue()); // 20 30 40 50 60
