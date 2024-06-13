// class Node{
//     constructor(data){
//         this.data = data
//         this.prev = null
//         this.next = null
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }
    
//     getSize() {
//         return this.size
//     }

//     prepend(data){
//         const  newNode = new Node(data)

//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             this.head.prev = newNode
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.size++
//     }
//     append(data){
//         const newNode = new Node(data)

//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             this.tail.next = newNode
//             newNode.prev = this.tail
//             this.tail = newNode
//         }
//     }

//     deleteNode(node){
//         if(!node){
//             return
//         }
//         if(node === this.head){
//             this.head = node.next
//         }
//         if(node===this.tail){
//             this.tail = node.prev
//         }
//         if(node.prev){
//             node.prev.next = node.prev
//         }
//         if(node.next){
//             node.next.prev = node.next
//         }

//         node = null;
//     }

//     print(){
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.data}`+" "
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }

// const list = new DoublyLinkedList()

// // let node1 = new Node(15)
// // let node2 = new Node(256)
// // let node3 = new Node(358)

// // node1.next = node2
// // node2.prev = node1
// // node2.next = node3
// // node3.prev = node2
// // list.head = node1
// // list.tail = node3

// list.prepend(7)
// list.prepend(8)
// list.prepend(9)

// console.log('List is empty',list.isEmpty());
// console.log('List size is ',list.getSize());
// list.print()

// list.append(10)
// list.append(11)
// list.append(12)
// console.log('List is empty',list.isEmpty());
// console.log('List size is ',list.getSize());
// list.print()


const array = [5,4,6,1,5,7,3,2];
let sum = 10;
const hashMap = {};
const result = [];

for(let i=0; i<array.length; i++){
    const complement = sum-array[i];
    if(hashMap.hasOwnProperty(complement)){
        result.push([complement,array[i]])
    }
    hashMap[array[i]]=true
}

console.log(hashMap)
console.log(result)