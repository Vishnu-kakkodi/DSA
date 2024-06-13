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

    unique(){
        let current = this.head

        while(current!==null){
            let next = current.next
            while(next!==null&&next.value==current.value){
                next=next.next
            }
            current.next = next
            if(next==this.tail){
                this.tail = current
            }
            current = next
        }
    }

    print(){
        let current = this.head
        let elemens = ""
        while(current){
            elemens += current.value + " "
            current = current.next
        }
        console.log(elemens);
    }

}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(5)
list.append(5)
list.append(5)
list.append(3)
list.append(4)
list.append(6)
list.append(6)
list.append(8)
list.print()
list.unique()
list.print()