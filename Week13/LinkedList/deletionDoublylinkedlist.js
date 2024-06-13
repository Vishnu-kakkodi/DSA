class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    getSize(){
        return this.size
    }

    deleteNode(node) {
        if (!node) return; 

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        node = null;
    }

    append(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    prepend(data){
        let newNode = new Node(data)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insert(data, position) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }

        let newNode = new Node(data);
        let current = this.head;
        let index = 0;

        if (position === 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
            } else {
                this.tail = newNode; 
            }
            this.head = newNode;
        } else if (position === this.size) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            while (index < position) {
                current = current.next;
                index++;
            }
            newNode.next = current;
            newNode.prev = current.prev;
            current.prev.next = newNode;
            current.prev = newNode;
        }

        this.size++;
    }
}

let list = new DoublyLinkedList();

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

list.head = node1;
list.tail = node3;

// list.deleteNode(node2);

// console.log(list.head.data); 
// console.log(list.head.next.data); 
// console.log(list.tail.data,list.getSize()); 

// list.append(1);
// list.append(2);
// list.append(3);

// let currentNode = list.head;
// while (currentNode) {
//     console.log(currentNode.data);
//     currentNode = currentNode.next;
// }

// list.prepend(4);
// list.prepend(5);
// list.prepend(6);

// let currentNode1 = list.head;
// while (currentNode1) {
//     console.log(currentNode1.data);
//     currentNode1 = currentNode1.next;
// }

list.insert(1, 0); // Insert at the beginning
list.insert(3, 1); // Insert at the end
list.insert(2, 1); // Insert in the middle

// Print the list
let currentNode = list.head;
while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
}
