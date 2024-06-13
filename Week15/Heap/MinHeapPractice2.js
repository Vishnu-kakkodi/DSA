class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(index){
        let parentIndex = Math.floor((index-1)/2)
        while(index>0&&this.heap[parentIndex]>this.heap[index]){
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }

    extractMin(){
        if(this.heap.length ===0)return null
        if(this.heap.length===1)return this.heap.pop();
        const min = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
}

const minHeap = new MinHeap();
minHeap.insert(20);
minHeap.insert(10);
minHeap.insert(50);
minHeap.insert(80);
minHeap.insert(8);
minHeap.insert(12);
minHeap.insert(120);
minHeap.insert(1);
console.log(minHeap.heap);