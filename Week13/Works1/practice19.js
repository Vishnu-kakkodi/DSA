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
    deleteMiddle(){
        let slow = this.head, fast=this.head
        while(fast!==null&&fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        slow.prev.next = slow.next
        slow.next.prev = slow.prev
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
    deleteIndex(index){
        if(index<0||index>=this.size){
            console.log("Invalid index");
            return
        }
        if(index===0){
            this.head = this.head.next
            this.head.prev = null
            if(!this.head){
                this.tail = null
            }
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
        let elements = ""
        let current = this.head
        while(current){
            elements+=current.value+" "
            current=current.next
        }
        console.log(elements)
    }

    unique(){
        let current = this.head
        let set = new Set()
        while(current){
            if(set.has(current.value)){
                if(current===this.tail){
                    this.tail = current.prev
                    this.tail.next = null
                    this.size--
                }else{
                current.prev.next = current.next
                current.next.prev = current.prev
                this.size--
                }
            }else{
                set.add(current.value)
            }
            current = current.next
        }
    }

    isPalindrome(){
        if(!this.head){
            return
        }
        let slow = this.head, fast = this.head
        while(fast!==null&&fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        let secondHalf = reverse(slow)
        let firstHalf = this.head

        while(secondHalf){
            if(firstHalf.value!==secondHalf.value){
                return false
            }
            firstHalf = firstHalf.next
            secondHalf = secondHalf.next
        }

        return true

        function reverse(slow){
            let current = slow
            let prev = null
            let next = null
            while(current){
                next = current.next
                current.next = prev
                current.prev = next
                prev = current
                current = next
            }
            return current
        }
    }
}

const list = new LinkedList()
// list.addFirst(3)
// list.addFirst(2)
// list.addFirst(1)
// list.addFirst(2)
// list.addFirst(1)
// list.print()
list.addLast(1)
list.addLast(2)
list.addLast(3)
list.addLast(2)
list.addLast(1)
list.print()
// list.unique()
list.print()
console.log(list.isPalindrome());
// list.deleteMiddle()
// list.print()
// list.reverse()
// list.print()
// list.insert(5,8)
// list.print()
// list.deleteIndex(0)
// list.print()
// list.deleteValue(1)
// list.print()