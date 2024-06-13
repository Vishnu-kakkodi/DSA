class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    addFirst(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.size++
            return
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }

    add(index,left,right){
        if(index<0||index>=this.size){
            console.log("Index is invalid");
            return
        }
        let leftNode = new Node(left)
        let rightNode = new Node(right)
        let next = null
        let prev = null
        let current = this.head
        let count = 0
        if(index===0){
            next = this.head.next
            this.head.next = rightNode
            rightNode.next = next
            leftNode.next = this.head
            this.head = leftNode
            this.size = this.size+2
            return
        }
        while(count<index){
            prev = current
            current = current.next
            count++
        }
        if(count===this.size-1){
            current.next = rightNode
            this.tail = rightNode
            leftNode.next = current
            prev.next = leftNode
            this.size += 2
            return
        }
        next = current.next
        current.next = rightNode
        rightNode.next = next
        leftNode.next = current
        prev.next = leftNode
        this.size += 2
    }

    print(){
        let current = this.head
        let elements = ""
        while(current){
            elements += current.value + ' '
            current = current.next
        }
        console.log(elements)
    }
}

const list = new LinkedList()
list.addFirst(1)
list.addFirst(2)
list.addFirst(3)
list.addFirst(4)
list.addFirst(5)
list.print()
console.log("Size is: "+ list.getSize());
list.add(4,6,7)
list.print()