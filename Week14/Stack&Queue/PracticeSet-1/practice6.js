class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (this.top === null) {
            throw new Error("Stack underflow");
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        return poppedNode.value;
    }

    peek() {
        if (this.top === null) {
            throw new Error("Stack is empty");
        }
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    display() {
        let current = this.top;
        const items = [];
        while (current !== null) {
            items.push(current.value);
            current = current.next;
        }
        console.log(items.join(" "));
    }
}

// Function to delete a specific node from the linked list-based stack
function deleteNodeFromLinkedListStack(stack, target) {
    if (stack.isEmpty()) return;

    // Special case: the target is at the top of the stack
    if (stack.peek() === target) {
        stack.pop();
        return;
    }

    let current = stack.top;
    while (current.next !== null && current.next.value !== target) {
        current = current.next;
    }

    // If the target node is found, remove it by adjusting pointers
    if (current.next !== null && current.next.value === target) {
        current.next = current.next.next;
    }
}

// Example usage
const linkedListStack = new LinkedListStack();
linkedListStack.push(10);
linkedListStack.push(20);
linkedListStack.push(30);
linkedListStack.push(40);
linkedListStack.push(50);

console.log("Linked list stack before deletion:");
linkedListStack.display();

deleteNodeFromLinkedListStack(linkedListStack, 30);

console.log("Linked list stack after deleting 30:");
linkedListStack.display();
