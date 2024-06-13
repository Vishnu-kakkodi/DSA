class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class QueueLinkedList{
    constructor(){
        this.front = null
        this.rear = null
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.rear === null){
            this.front = this.rear = newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode
        }
    }

    dequeue(){
        if(this.front===null){
            console.log("Queue is empty");
            return
        }
        const value = this.front.value
        this.front = this.front.next
        if(this.front===null){
            this.rear = null
        }
        return value
    }

    isEmpty(){
        return this.front === null
    }

    peek(){
        if(this.front===null){
            console.log("Queue is empty");
            return
        }
        return this.front.value
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

const list = new QueueLinkedList()
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.enqueue(5)
list.display()
list.dequeue()
list.display()