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
        this.head.prev = newNode
        newNode.next = this.head
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
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.size++
    }

    insert(index,value){
        if(index<0||index>=this.size){
            console.log("Invalid Index");
            return
        }
        const newNode = new Node(value)
        if(index===0){
            newNode.next = this.head
            newNode = this.head.prev
            this.head = newNode
            this.size++
        }else if(index===this.size-1){
            this.tail.next = newNode
            newNode.next = this.tail
            this.tail = newNode
            this.size++
        }
        let current = this.head
        let count = 0
        while(count<index){
            current = current.next
            count++
        }
        current.prev.next = newNode
        newNode.next = current
        current.next.prev = newNode
        newNode.prev = current.prev
        this.size++
    }

    findMiddle(){
        let slow = this.head, fast = this.head
        while(fast!==null&&fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.value);
    }

    deleteValue(value){
        let current = this.head
        while(current){
            if(current.value === value){
                if(current===this.head){
                    this.head = this.head.next
                    this.size--
                }else if(current===this.tail){
                    this.tail = current.prev
                    this.tail.next = null
                }else{
                    current.prev.next = current.next
                    current.next.prev = current.prev
                }
                this.size--
                return list.print()
            }
            current = current.next
        }

        console.log("Value not found");
    }

    deleteIndex(index){
        if(index<0||index>=this.size){
            console.log("Index is invalid");
            return
        }
        if(index===0){
            this.head = this.head.next
            this.size--
        }else if(index===this.size-1){
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
        }else{
            let current = this.head
            let count = 0
            while(count<index){
                current = current.next
                count++
            }
            current.prev.next = current.next
            current.next.prev = current.prev
            this.size--
        }
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
list.insert(5,0)
list.print()
list.findMiddle()
list.deleteValue(4)
list.deleteIndex(9)
list.print()

