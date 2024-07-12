class MinHeap{
    constructor(){
        this.heap = [];
    }

    getParentIndex(index){
        return Math.floor((index-1)/2);
    }

    getLeftChildIndex(index){
        return index*2 + 1;
    }

    getRightChildIndex(index){
        return index*2+2;
    }

    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    heapifyUp(){
        let currentIndex = this.heap.length-1;
        while(currentIndex>0){
            const parentIndex = this.getParentIndex(currentIndex);
            if(this.heap[currentIndex] <  this.heap[parentIndex]){
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            }else{
                break;
            }
        }
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyDown(index){
        let smallest = index;
        let leftChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
            smallest = leftChildIndex;
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
            smallest = rightChildIndex;
        }
        if(smallest!==index){
            this.swap(smallest, index);
            this.heapifyDown(smallest);
        }
    }

    buildHeap(arr){
        this.heap = arr;
        for(let i=Math.floor(arr.length/2);i>=0;i--){
            this.heapifyDown(i);
        }
    }

    removeMin(){
        if(this.heap.length === 0) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapSort(){
        const sortedArray = [];
        let count = this.heap.length;
        while(count>0){
            sortedArray.push(this.removeMin());
            count--;
        }
        return sortedArray;
    }

    print(){
        console.log(this.heap)
    }

    getHeight(){
        return Math.ceil(Math.log2(this.heap.length+1))-1;
    }

    getDepth(nodeIndex){
        return Math.floor(Math.log2(nodeIndex+1));
    }

    getMaxHeight(){
        return this.getHeight();
    }

    getMaxDepth(){
        return Math.floor(Math.log2(this.heap.length));
    }

    getNodeHeight(nodeIndex){
        return this.getHeight() - this.getDepth(nodeIndex);
    }

    getNodeDepth(nodeIndex){
        return this.getDepth(nodeIndex);
    }
}

const minHeap = new MinHeap();
const arr = [5, 2, 7, 1, 9, 3, 8, 11];
minHeap.buildHeap(arr);
// minHeap.insert(5);
// minHeap.insert(2);
// minHeap.insert(7);
// minHeap.insert(1);
// minHeap.insert(9);
// minHeap.insert(3);
// minHeap.insert(8);
// minHeap.insert(11);

// minHeap.print();
console.log(minHeap.heapSort());
// console.log("Max Depth", minHeap.getMaxDepth());
// console.log("Max Height", minHeap.getMaxHeight());
// console.log("Node Depth",minHeap.getNodeDepth(2));
// console.log("Node Height", minHeap.getNodeHeight(2));