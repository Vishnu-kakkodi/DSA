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
        const node = new Node(value)
        node.next = this.top
        this.top = node
    }

    pop(){
        if(!this.top){
            console.log("Stack is empty");
            return
        }
        let poppedNode = this.top
        this.top = this.top.next
        console.log(poppedNode.value);
    }

    isEmpty(){
        return this.top === null
    }

    peek(){
        if(!this.top){
            console.log("Stack is empty");
            return
        }
        return this.top.value
    }

    delete(value){
        if(this.isEmpty())return
        if(this.peek()===value){
            this.pop
            return
        }
        let current = this.top
        let prev = null
        while(current){
            if(current.value===value){
                if(current.next===null){
                    prev.next = null
                }else{
                    prev.next = current.next
                }
            }
            prev = current
            current = current.next
        }
    }

    display(){
        let current = this.top
        let elements = ""
        while(current){
            elements = elements + current.value + " "
            current = current.next
        }
        console.log(elements);
    }
}

const stk = new StackLinkedList()
stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(5)
stk.display()
stk.pop()
stk.display()
stk.delete(2)
stk.display()