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

    insert(index,value){
        if(index<0||index>this.size){
            console.log("Invalid index");
            return
        }else if(index===0){
            this.prepend(value)
            return
        }else if(index===this.size){
            this.append(value)
            return
        }
        const newNode = new Node(value)
        let current = this.head
        let count = 0;
        while(count<index){
            current = current.next
            count++
        }
        current.prev.next = newNode
        newNode.prev = current.prev
        current.prev = newNode
        newNode.next = current
        this.size++
    }

    remove(value){
        let current = this.head
        while(current){
            if(current.value === value){
                if(current===this.head){
                    this.head = current.next
                    if(this.head){
                        this.head.prev =  null
                    }else{
                        this.tail === null
                    }
                }else if(current === this.tail){
                    this.tail = current.prev
                    this.tail.next = null
                }else{
                    current.prev.next = current.next
                    current.next.prev = current.prev
                }
                this.size--
            }
            current = current.next
        }
        return 
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
        }else if(index===this.size-1){
            current = this.tail
            this.tail = current.prev
            this.tail.next = null
            this.size--
        }else{
            for(let i=0; i<index; i++){
                current = current.next
            }
            current.prev.next = current.next
            current.next.prev = current.prev
            this.size--
        }
    }

    reverse(){
        let current = this.head
        let prev = null
        while(current){
            const next = current.next
            current.next = prev
            prev = current
            current = next
        }
        const temp = this.head
        this.head = this.tail
        this.tail = temp
    }

    print(){
        let current = this.head
        let val = ""
        while(current){
            val = val + current.value + " "
            current = current.next
        }
        console.log(val);
    }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()
list.insert(2,5)
list.print()
list.removeByIndex(4)
list.print()
list.remove(5)
list.print()
list.reverse()
list.print()
