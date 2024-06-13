class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node; 
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("The list is empty");
        }else{
            let curr = this.head
            let listValues = " "
            while(curr){
                listValues += `${curr.value}`+" "
                curr = curr.next
            }
            console.log(listValues);
        }
    }

}

const list = new LinkedList()
// console.log('List is empty',list.isEmpty());
// console.log('Size of list',list.getSize());
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
console.log('List size is ',list.getSize());
list.print()
