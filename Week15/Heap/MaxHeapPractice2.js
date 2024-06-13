class Heap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        
        this.bubble()
    }
    bubble(){
        let index=this.heap.length-1
        while(index>0){
            let parent=Math.floor((index-1)/2)
        if(this.heap[index]>this.heap[parent]){
            [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]]
            index=parent
        }
        else{
            break
        }
    }
    }
    extract(){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap.pop()
        let max = this.heap.shift()
        this.sink(0)
        return max
    }
    sink(index){
        let largest=index, left=index*2+1, right=index*2+2
        if(left>this.heap.length && this.heap[left]>this.heap[largest])
            largest=left
        if(right>this.heap.length && this.heap[right]>this.heap[largest])
            largest=right
        if(largest!==index){
            [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]]
            this.sink(largest)
        }
    }
}

const heap=new Heap
heap.insert(9)
heap.insert(94)
heap.insert(49)
heap.insert(59)
heap.insert(89)
heap.insert(29)
heap.insert(19)
heap.insert(69)
heap.insert(18)
// console.log(heap.extract())
// console.log(heap.extract())
// console.log(heap.extract())
// console.log(heap.extract())
console.log(heap)
heap.insert(112)
console.log(heap)