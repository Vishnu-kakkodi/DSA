class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackLinkedList{
    constructor(){
        this.top = null
    }

    push(value){
        const newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
    }

    pop(){
        if(this.top===null){
            console.log("Stack is empty");
            return
        }
        const value = this.top.value
        this.top = this.top.next
        return value;
    }

    peek(){
        if(this.top===null){
            console.log("Stack is empty");
            return
        }

        return this.top.value
    }

    isEmpty(){
        return this.top === null
    }
}

const list = new StackLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list.peek());
