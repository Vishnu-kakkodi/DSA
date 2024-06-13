class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node or update the value if the key exists
    add(key, value) {
        if (this.head === null) {
            this.head = new Node(key, value);
            return;
        }

        let current = this.head;
        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            if (current.next === null) break;
            current = current.next;
        }
        current.next = new Node(key, value);
    }

    // Find the value associated with the key
    find(key) {
        let current = this.head;
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }

    // Remove a node by key
    remove(key) {
        if (this.head === null) return;

        if (this.head.key === key) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.key === key) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Display the linked list nodes
    display() {
        let current = this.head;
        while (current) {
            console.log(`${current.key}: ${current.value}`);
            current = current.next;
        }
    }
}


class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    // Simple hash function to calculate the index
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    // Set a key-value pair
    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = new LinkedList();
        }
        this.table[index].add(key, value);
    }

    // Get the value by key
    get(key) {
        const index = this.hash(key);
        return this.table[index] ? this.table[index].find(key) : undefined;
    }

    // Remove a key-value pair
    remove(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index].remove(key);
        }
    }

    // Display the hash table
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Index ${i}:`);
                this.table[i].display();
            }
        }
    }
}

// Example usage
const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);
table.display();

console.log(table.get('name')); // Output: Bruce
table.remove('name');
table.display();
