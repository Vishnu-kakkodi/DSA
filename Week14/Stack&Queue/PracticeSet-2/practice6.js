class StackUsingQueue {
    constructor() {
      this.queue = [];
      this.queue2 = [];
    }
    push(value) {
      while (this.queue.length > 0) {
        this.queue2.push(this.queue.shift());
      }
  
      this.queue.push(value);
  
      while (this.queue2.length > 0) {
        this.queue.push(this.queue2.shift());
      }
    }
    pop() {
      this.queue.shift();
    }
    peek() {
      if (this.queue.length == 0) {
        return "no values";
      }
      return this.queue[0];
    }
    display() {
      console.log(this.queue);
    }
  }
  
  const stack = new StackUsingQueue();
  console.log(stack.peek());
  stack.push(10);
  stack.push(20);
  stack.display();
  console.log(stack.peek());