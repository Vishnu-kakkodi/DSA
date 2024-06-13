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

    getSize(){
        return this.size
    }

    addFirst(value){
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
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
        if(index < 0 || index > this.size){
            console.log("Invalid index");
            return
        }
        const newNode = new Node(value)
        if(index === 0){
            this.addFirst(value);
        }else if(index===this.size){
            this.addLast(value)
            }else{
                let current = this.head;
                for (let i = 0; i < index; i++) {
                    current = current.next;
                }
                newNode.next = current;
                newNode.prev = current.prev;
                current.prev.next = newNode;
                current.prev = newNode;
                this.size++;
        }
    }

    deleteMiddle(){
        if (this.size === 0) return;
        let slow = this.head, fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        slow.prev.next = slow.next
        slow.next.prev = slow.prev
        this.size--;
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
        let temp = this.head
        this.head = this.tail
        this.tail = temp
    }

    deleteIndex(index){
        if(index<0||index>=this.size){
            console.log("Invalid index");
            return
        }
        let current = this.head
        if(index===0){
            this.head = this.head.next
            if(this.head){
                this.head.prev = null
            }else{
                this.tail = null
            }
        }else if(index===this.size-1){
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        }else{
            let count = 0
            while(count<index){
                current = current.next
                count++
            }
            current.prev.next = current.next
            current.next.prev = current.prev
        }
        this.size--
    }


    print() {
        let current = this.head;
        let elements = "";
        while (current) {
            elements += current.value + " ";
            current = current.next;
        }
        console.log(elements.trim());
    }
}

const list = new LinkedList()
list.addFirst(5)
list.addFirst(4)
list.addFirst(3)
list.addFirst(2)
list.addFirst(1)
list.addLast(6)
list.addLast(7)
list.addLast(8)
list.addLast(9)
list.addLast(10)
list.print()
list.deleteMiddle()
list.print()
console.log("SIze:"+list.getSize());
list.insert(9,6)
list.print()
list.reverse()
list.print()
console.log("SIze:"+list.getSize());
list.deleteIndex(9)
list.print()
console.log("SIze:"+list.getSize());