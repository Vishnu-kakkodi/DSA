class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(n){
        let parent = Math.floor((n-1)/2)
        while(n>0&&this.heap[parent]>this.heap[n]){
            [this.heap[parent],this.heap[n]] = [this.heap[n],this.heap[parent]]
            n = parent
            parent = Math.floor((n-1)/2)
        }
    }

    extractMin(){
        if(this.heap.length===0)return null
        if(this.heap.length===1)return this.heap.pop()
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return min
    }

    bubbleDown(i=0){
        let smallest = i
        let left = 2*i+1
        let right = 2*i+2
        if(left>0&&this.heap[left]<this.heap[smallest])smallest=left
        if(right>0&&this.heap[right]<this.heap[smallest])smallest=right
        if(smallest!==i){
            [this.heap[i],this.heap[smallest]] = [this.heap[smallest],this.heap[i]]
            this.bubbleDown(smallest)
        }
    }
}

const minHeap = new MinHeap();
minHeap.insert(20);
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(30);
minHeap.insert(40);
minHeap.insert(50);
minHeap.insert(5);
minHeap.insert(60);
minHeap.insert(25);
minHeap.insert(35);

console.log(minHeap.heap);
console.log(minHeap.extractMin());
console.log(minHeap.heap);
