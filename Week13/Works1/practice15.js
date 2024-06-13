class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    addFirst(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.size++
            return
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.size++
    }
    addLast(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.size++
            return
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }

    deleteMiddle(){
        let slow = this.head, fast = this.head
        while(fast!==null&&fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        slow.prev.next = slow.next
        slow.next.prev = slow.prev
        this.size--
    }

    reverse(){
        let current = this.head
        let prev = null
        let next = null
        while(current){
            next = current.next
            current.next = prev
            current.prev = next
            prev = current
            current = next
        }
        const temp = this.head
        this.head = this.tail
        this.tail = temp
    }

    insert(index,value){
        if(index<0||index>this.size){
            console.log("Invalid index");
            return
        }
        const newNode = new Node(value)
        if(index===0){
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            this.size++
        }else if(index===this.size){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
            this.size++
        }else{
            let current = this.head
            for(let i=0; i<index; i++){
                current = current.next
            }
            current.prev.next = newNode
            newNode.prev = current.prev
            newNode.next = current
            current.prev = newNode
            this.size++
        }
    }

    deleteIndex(index){
        if(index<0||index>=this.size){
            console.log("Invalid index");
            return
        }
        if(index===0){
            this.head = this.head.next
            this.head.prev = null
            this.size--
        }else if(index===this.size-1){
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
        }else{
            let current = this.head
            for(let i=0; i<index; i++){
                current = current.next
            }
            current.prev.next = current.next
            current.next.prev = current.prev
            this.size--
        }
    }

    deleteValue(value){
        let current = this.head
        while(current){
            if(current.value===value){
                if(current===this.head){
                    this.head = this.head.next
                    this.head.prev = null
                    this.size--
                    return
                }else if(current===this.tail){
                    this.tail = this.tail.prev
                    this.tail.next = null
                    this.size--
                    return
                }else{
                    current.prev.next = current.next
                    current.next.prev = current.prev
                    this.size--
                    return
                }
            }
            current = current.next
        }
        return "Value not found"
    }

    print(){
        let current = this.head
        let elements = ""
        while(current){
            elements += current.value + " "
            current = current.next
        }
        console.log(elements);
    }
}

const list = new LinkedList()
list.addFirst(5)
list.addFirst(4)
list.addFirst(3)
list.addFirst(2)
list.addFirst(1)
list.print()
list.addLast(6)
list.addLast(7)
list.addLast(8)
list.addLast(9)
list.addLast(10)
list.print()
list.deleteMiddle()
list.print()
list.reverse()
list.print()
list.insert(5,5)
list.print()
list.deleteIndex(9)
list.print()
list.deleteValue(10)
list.print()