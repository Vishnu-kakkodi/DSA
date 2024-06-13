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

    addFirst(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            this.size++
            return
        }
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
        this.tail = newNode
        this.size++
    }

    deleteMiddle(){
        let slow = this.head, fast = this.head
        let prev = null
        while(fast!==null&&fast.next!==null){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
        this.size--
    }

    insert(index,value){
        if(index<0||index>this.size){
            console.log("Invalid index");
            return
        }
        const newNode = new Node(value)
        if(index===0){
            newNode.next = this.head
            this.head = newNode
            this.size++
        }else if(index===this.size){
            this.tail.next = newNode
            this.tail = newNode
            this.size++
        }else{
            let current = this.head
            let prev = null
            for(let i=0; i<index; i++){
                prev = current
                current = current.next
            }
            prev.next = newNode
            newNode.next = current
            this.size++
        }
    }

    reverse(){
        let current  =this.head
        let prev = null
        let next = null
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        const temp = this.head
        this.head = this.tail
        this.tail = temp
    }

    deleteIndex(index){
        if(index<0||index>=this.size){
            console.log("Invalid index");
            return
        }
        if(index===0){
            this.head = this.head.next
            if(!this.head){
                this.tail = null
            }
            this.size--
        }else{
            let prev= null
            let current = this.head
            for(let i=0; i<index; i++){
                prev = current
                current = current.next
            }
            if(current===this.tail){
                prev.next = null
                this.tail = prev
                this.size--
            }else{
                prev.next = current.next
                this.size--
            }
        }
    }

    deleteValue(value){
        let prev = null
        let current = this.head
        while(current){
            if(current.value===value){
                if(current===this.head){
                    this.head = this.head.next
                    if(!this.head){
                        this.tail = null
                    }
                    this.size--
                    return
                }else if(current===this.tail){
                    prev.next = null
                    this.tail = prev
                    this.size--
                    return
                }else{
                    prev.next = current.next
                    this.size--
                    return
                }
            }
            prev = current
            current = current.next
        }
        return "Value not found"
    }

    print(){
        let elements = ""
        let current = this.head
        while(current){
            elements += current.value+" "
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
list.insert(4,11)
list.print()
list.reverse()
list.print()
list.deleteIndex(5)
list.print()
list.deleteValue(1)
list.print()