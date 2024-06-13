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
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.size++
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
            let count = 0
            while(count<index){
                current = current.next
                count++
            }
            current.prev.next = newNode
            newNode.prev = current.prev
            newNode.next = current
            current.prev = newNode
            this.size++
        }
    }

    deleteMiddle(){
        let slow = this.head, fast = this.head
        while(fast!==null&&fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        slow.prev.next = slow.next
        slow.next.prev = slow.prev
    }

    reverse(){
        let current = this.head
        let next = null
        let prev = null
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

    deleteIndex(index){
        if(index<0||index>=this.size){
            console.log("Invalid Index");
            return
        }
        let current = this.head
        if(index===0){
            if(this.head===this.tail){
                this.head = null
                this.tail = null
                this.size--
            }else{
                this.head = this.head.next
                this.head.prev = null
                this.size--
            }
        }else if(index===this.size-1){
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--
        }else{
            for(let i=0; i<this.size; i++){
                current = current.next
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
            elements += current.value+" "
            current = current.next
        }
        console.log(elements);
    }
}

const list = new LinkedList()

list.addFirst(3)
list.addFirst(2)
list.addFirst(1)
list.addLast(4)
list.addLast(5)
list.print()
list.insert(6,0)
list.print()
list.deleteMiddle()
list.print()
list.reverse()
list.print()
list.deleteIndex(3)
list.print()

