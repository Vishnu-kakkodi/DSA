// stack using Linkedlist

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackLinked{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        const node = new Node(value)
        if(!this.top){
            this.top = node
            this.size++
            return
        }
        node.next = this.top
        this.top = node
        this.size++
    }

    pop(){
        let poppedValue = this.top.value
        this.top = this.top.next
        this.size--
        return poppedValue
    }

    peek(){
        console.log(this.top.value);
    }

    display(){
        let elements = ""
        let current = this.top
        while(current){
            elements = elements + current.value + " "
            current = current.next
        }
        console.log(elements);
    }
}

const stk = new StackLinked()
stk.push(2)
stk.push(4)
stk.push(6)
stk.push(8)
stk.push(10)
stk.display()
stk.pop()
stk.display()
stk.peek()