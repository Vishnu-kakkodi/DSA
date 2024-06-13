// Queue in Linkedlist

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class QueueLinked{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value){
        const node = new Node(value)
        if(!this.front){
            this.front = node
            this.rear = node
            this.size++
            return
        }
        this.rear.next = node
        this.rear = node
        this.size++
    }

    dequeue(){
        let val = this.front.value
        this.front = this.front.next
        this.size--
        return val 
    }

    display(){
        let elements = ""
        let current = this.front
        while(current){
            elements = elements + current.value + " "
            current = current.next
        }
        console.log(elements);
    }
}

const que = new QueueLinked()
que.enqueue(5)
que.enqueue(4)
que.enqueue(5)
que.enqueue(6)
que.display()
console.log(que.dequeue());
que.display()