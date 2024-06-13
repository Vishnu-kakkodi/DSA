class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class Doubly{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    append(value){
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

    prepend(value){
        const newNode =  new Node(value)
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

    insert(index,value){
        if(index<0||index>this.size){
            console.log("Invalid Index");
            return
        }
        const newNode = new Node(value)
        if(index===0){
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            this.size++
        }else if(index===this.size-1){
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

    middle(){
        let slow = this.head,fast = this.head
        while(fast!==null&&fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.value)
    }

    deleteMiddle(){
        let slow = this.head,fast = this.head
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
        let next = null
        let prev = null
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

    removeByIndex(index){
        if(index<0||index>=this.size){
            console.log("Invalid Index");
            return
        }
        let current = this.head
        if(index===0){
            this.head = this.head.next
            this.head.prev = null
            this.size--
        }else if(index===this.tail){
            current = this.tail
            this.tail = current.prev
            this.tail.next = null
            this.size--
        }else{
            for(let i=0; i<=index; i++){
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
            elements += current.value + " "
            current = current.next
        }
        console.log(elements);
    }
}



const list = new Doubly()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()
list.prepend(6)
list.print()
list.insert(0,7)
list.insert(3,8)
list.insert(7,9)
list.print()
list.middle()
list.deleteMiddle()
list.print()
list.reverse()
list.print()
console.log(list.getSize());
list.removeByIndex(7)
list.print()