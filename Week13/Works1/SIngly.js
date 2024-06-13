class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head  = null
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
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    insert(index,value){
        if(index<0||index>this.size){
            console.log("Index is invalid")
            return
        }
        const newNode = new Node(value)
        if(index===0){
            newNode.next = this.head
            this.head = newNode
        }else if(index===this.size){
            this.tail.next = newNode
            this.tail = newNode
        }else{
            let current = this.head
            let prev = null
            for(let i=0; i<index; i++){
                prev = current
                current = current.next
            }
            prev.next = newNode
            newNode.next = current
        }
        this.size++
    }

    reverse(){
        let prev = null
        let next = null
        let current = this.head
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

    middleElement(){
        if(!this.head){
            return -1
        }
        let slow = this.head, fast = this.head
        while(fast!==null&&fast.next!==null){
            fast = fast.next.next
            slow = slow.next
        }
        console.log(slow.value)
    }

    remove(index){
        if(index<0||index>this.size){
            return "Index is invalid"
        }
        if(index===0){
            this.head = this.head.next
        }else{
            let current = this.head
            let prev = null
            for(let i=0; i<index; i++){
                prev = current
                current = current.next
            }
            prev.next = current.next
        }    
        this.size--
    }

    removeValue(value){
        if(this.head.value===value){
            this.head = this.head.next
        }else{
            let prev = this.head
            let current = this.head.next
            while(current){
                if(current.value===value){
                    prev.next = current.next
                }
                prev = current
                current = current.next
            }
        }    
        this.size--
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
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.print()
list.prepend(0)
list.print()
list.insert(8,8)
list.print()
list.reverse()
list.print()
list.middleElement()
list.remove(6)
list.print()
list.removeValue(6)
list.print()