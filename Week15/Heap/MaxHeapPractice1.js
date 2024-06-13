  class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    buildHeap(arr) {
      this.heap = arr;
      for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    remove() {
      if (this.isEmpty()) {
        return null;
      }
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return root;
    }
  
    heapifyUp(index) {
      let parent = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[index] > this.heap[parent]) {
        [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    }
  
    heapifyDown(index) {
      let largest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest !== index) {
        [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
        this.heapifyDown(largest);
      }
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }

  
  const maxHeap = new MaxHeap();
  maxHeap.buildHeap([4, 7, 2, 9, 1, 5]);
  console.log("MaxHeap:", maxHeap.heap); 
  maxHeap.insert(11);
  console.log("MaxHeap after inserting 11:", maxHeap.heap); 
  maxHeap.remove();
  console.log("MaxHeap after removing max element:", maxHeap.heap);