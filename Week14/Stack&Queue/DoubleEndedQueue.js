class Deque{
    constructor(){
        this.queue = []
    }

    // Add an element to the front of the queue
    addFront(element){
        this.queue.unshift(element)
    }

    // Add an element to the back of the queue
    addBack(element){
        this.queue.push(element)
    }

    // Remove an element from the front of the queue
    removeFront(){
        if(this.queue.length===0){
            console.log("Deque is empty");
        }
        return this.queue.shift();
    }

    // Remove an element from the back of the queue
    removeBack(){
        if(this.queue.length===0){
            console.log("Deque is empty");
        }
        return this.queue.pop()
    }
}