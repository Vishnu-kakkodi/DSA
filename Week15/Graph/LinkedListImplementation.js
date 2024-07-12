class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

class GraphList {
    constructor(size) {
        this.size = size;
        this.list = Array.from({ length: size }, () => new LinkedList());
    }

    addEdge(u, v) {
        this.list[u].add(v);
        this.list[v].add(u);
    }

    printGraph() {
        for (let i = 0; i < this.size; i++) {
            process.stdout.write(i + " -> ");
            this.list[i].printList();
        }
    }
}

const graphList = new GraphList(5);
graphList.addEdge(0, 1);
graphList.addEdge(0, 4);
graphList.addEdge(1, 2);
graphList.addEdge(1, 3);
graphList.addEdge(1, 4);
graphList.addEdge(2, 3);
graphList.addEdge(3, 4);

console.log("Adjacency List:");
graphList.printGraph();
