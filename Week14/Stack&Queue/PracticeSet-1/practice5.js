class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackInLinkedList{
    constructor(){
        this.top = null
    }

    push(value){
        const node = new Node(value)
        if(!this.top){
            this.top = node
            return
        }
        this.top.next = node
        this.top = node
    }

    pop(){
        t
    }
}