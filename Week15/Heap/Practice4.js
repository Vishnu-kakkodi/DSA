class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }

    bubbleUp(index){
        let parentIndex = Math.floor((index-1)/2);
        while(index>0&&this.heap[parentIndex]>this.heap[index]){
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
        index = parentIndex
        parentIndex = Math.floor((index-1)/2)
        }
    }

    extractMin(){
        if(this.heap.length===0)return
        if(this.heap.length===1)return this.heap.pop()
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(this.heap.length)
        return min
    }

    bubbleDown(n,i=0){
        let smallest = i
        let left = 2*i+1
        let right = 2*i+2
        if(left>0&&this.heap[left]<this.heap[i])smallest = left
        if(right>0&&this.heap[right]<this.heap[i])smallest = right
        if(smallest!==i){
            [this.heap[i],this.heap[smallest]] = [this.heap[smallest],this.heap[i]]
            this.bubbleDown(n,smallest)
        }
    }
}


const heap = new MinHeap()
heap.insert(12)
heap.insert(36)
heap.insert(4)
heap.insert(19)
heap.insert(52)
heap.insert(23)
heap.insert(14)
console.log(heap.heap)
console.log(heap.extractMin())
console.log(heap.heap)


// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }

//     insert(value){
//         this.heap.push(value)
//         this.bubbleUp(this.heap.length-1)
//     }

//     bubbleUp(index){
//         let parentIndex = Math.floor((index-1)/2);
//         while(index>0&&this.heap[parentIndex]<this.heap[index]){
//             [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
//         index = parentIndex
//         parentIndex = Math.floor((index-1)/2)
//         }
//     }

//     extractMax(){
//         if(this.heap.length===0)return
//         if(this.heap.length===1)return this.heap.pop()
//         let min = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.bubbleDown(this.heap.length)
//         return min
//     }

//     bubbleDown(n,i=0){
//         let largest = i
//         let left = 2*i+1
//         let right = 2*i+2
//         if(left>0&&this.heap[left]>this.heap[largest])largest = left
//         if(right>0&&this.heap[right]>this.heap[largest])largest = right
//         if(largest!==i){
//             [this.heap[i],this.heap[largest]] = [this.heap[largest],this.heap[i]]
//             this.bubbleDown(n,largest)
//         }
//     }
// }


// const heap = new MaxHeap()
// heap.insert(12)
// heap.insert(36)
// heap.insert(4)
// heap.insert(19)
// heap.insert(52)
// heap.insert(23)
// heap.insert(14)
// console.log(heap.heap)
// console.log(heap.extractMax())
// console.log(heap.heap)