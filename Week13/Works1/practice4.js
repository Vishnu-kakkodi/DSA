class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    getSize() {
        return this.size
    }

    addFirst(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.size++
            return
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }

    delete(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return
        }
        if (index === 0) {
            this.head = this.head.next
            this.size--
            return
        }
        let current = this.head
        let prev = null
        let count = 0
        while (count < index) {
            prev = current
            current = current.next
            count++
        }
        if (count === this.size - 1) {
            prev.next = null
            this.tail = prev
            this.size--
            return
        }
        prev.next = current.next
        this.size--
    }

    insert(index, value) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return
        }
        const newNode = new Node(value)
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
            this.size++
        } else if (index === this.size - 1) {
            this.tail.next = newNode
            this.tail = newNode
            this.size++
        } else {
            let current = this.head
            let prev = null
            let count = 0
            while (count < index) {
                prev = current
                current = current.next
                count++
            }
            prev.next = newNode
            newNode.next = current
            this.size++
        }
    }

    deleteValue(value) {
        let current = this.head
        let prev = null
        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = this.head.next
                } else if (current === this.tail) {
                    prev.next = null
                    this.tail = prev
                } else {
                    prev.next = current.next
                }
                this.size--
                return list.print()
            }
            prev = current
            current = current.next
        }
        console.log("Value not found");
    }

    deleteMiddle() {
        let slow = this.head, fast = this.head
        let prev
        while (fast !== null && fast.next !== null) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
    }

    unique() {
        if (!this.head) {
            return
        }
        let current = this.head
        let prev = null
        let set = new Set()
        while (current) {
            if (set.has(current.value)) {
                prev.next = current.next
                this.size--
            } else {
                set.add(current.value)
                prev = current
            }
            current = current.next
        }
    }

    isPalindrome() {
        if (!this.head) {
            return
        }
        let slow = this.head, fast = this.head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let secondHalf = reverse(slow)

        let firstHalf = this.head;
        while (secondHalf) {
            if (firstHalf.value !== secondHalf.value) {
                return false; 
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }

        return true; 

        function reverse(head) {
            let prev = null;
            let current = head;
            while (current) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            return prev;
        }
    }

print() {
    let current = this.head
    let elements = ""
    while (current) {
        elements += current.value + ' '
        current = current.next
    }
    console.log(elements)
}
}

const list = new LinkedList()

list.addFirst(1)
list.addFirst(2)
list.addFirst(3)
list.addFirst(4)
list.addFirst(5)
list.print()
// console.log("Size is: " + list.getSize());
// list.delete(4)
// list.print()
// list.deleteValue(2)
// list.deleteMiddle()
// list.print()
list.insert(1, 3)
list.print()
// list.addFirst(1)
// list.addFirst(2)
// list.addFirst(3)
// list.addFirst(4)
// list.addFirst(5)
// list.print()
// list.unique()
// list.print()
// list.addFirst(2)
// list.addFirst(4)
// list.addFirst(3)
// list.addFirst(1)
// list.print()
// console.log(list.isPalindrome());
