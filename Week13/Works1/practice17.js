class Node{
    constructor(value){
        this.value = value
        this.head = null
    }
}

function mergeList(list1,list2){  
    const dummyNode = new Node(0)
    let current = dummyNode
    while(list1&&list2){
        if(list1.value<=list2.value){
            current.next = list1
            list1 = list1.next
        }else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    return dummyNode.next
}



const list1 = new Node(1)
list1.next = new Node(3)
list1.next.next = new Node(5)

const list2 = new Node(1)
list2.next = new Node(2)
list2.next.next = new Node(4)
list2.next.next.next = new Node(6)
list2.next.next.next.next = new Node(8)

let mergeList = mergeLinkedList(list1,list2)
let elements = ""
while(mergeList){
    elements += `${mergeList.value} `+ " "
    mergeList = mergeList.next
}
console.log(elements)