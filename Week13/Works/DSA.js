//fibonacci sequence

// function fibonacci(n){
//     const fib = [0,1];
//     for(let i=2; i<n; i++){
//         fib[i] = fib[i-1]+fib[i-2];
//     }
//     return fib;
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));
//Big-O = O(n)


//factorial of number

// function factorial(n){
//     let sum = 1;
//     for(let i=2; i<=n; i++){
//         sum = sum * i;
//     }
//     return sum;
// }

// console.log(factorial(5));
//Big-O = O(n)


//Prime number

// function isPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(let i=2; i<n; i++){
//         if(n%i===0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(1));
// console.log(isPrime(3));
// console.log(isPrime(4));
// Big-O = O(sqrt(n))


//Power of two

// function isPowerofTwo(n){
//     for(let i=0; i<n; i++){
//         if(Math.pow(2,i)===n){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(isPowerofTwo(6));


// Bitwise power of two

// function isPowerofTwo(n){
//     if(n<1){
//         return false;
//     }
//     return (n & (n-1))===0;
// }

// console.log(isPowerofTwo(4));



// Search algorithms

// 1)Linear search

// function findIndex(arr,target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findIndex(arr=[-5,2,10,8,6],target=10));
// console.log(findIndex(arr=[-1,2,12,8,6],target=9));
// console.log(findIndex(arr=[-5,3,13,8,6],target=3));

// Big-O = O(n)


// 2)Binary search


// function binarySearch(arr, target) {
//     arr.sort((a, b) => a - b);
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if (target === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else {
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([-5, 2, 10, 8, 6], 2));


// Big-O = O(n);


// 3)Recursive Binary Search

// function recursiveBinarysearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }

//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }
//     if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex)
//     }
// }

// console.log(recursiveBinarysearch(arr=[-5,2,4,6,10],10))

// Big-O = O(logn)


// Sorting algorithms

// 1)Bubble sorting

// function Sorting(arr){
//     let swapped;
//     let temp;
//     do{
//         swapped = false;
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped = true;
//             }
//         }
//     }while(swapped);
// }

// Sorting(arr=[-6,20,8,-2,4])
// console.log(arr);

// Big-O = O(n^2)


// 2)Insertion sorting

// function insertionSort(arr){
//     for(let i=1; i<arr.length; i++){
//         let numberToinsert = arr[i];
//         let j = i - 1;
//         while(j>=0 && arr[j] > numberToinsert){
//             arr[j+1] = arr[j];
//             j = j-1;
//         }
//         arr[j+1] = numberToinsert
//     }
// }

// insertionSort(arr=[8,20,-2,4,-6]);
// console.log(arr);
// Big-O = O(n^2)

// 3)Quick sorting

// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let pivot = arr[arr.length-1];
//     let left = []
//     let right = []
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]<pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left), pivot ,...quickSort(right)]
// }

// const arr=[8,20,-2,4,-6];
// console.log(quickSort(arr));
// worst case = O(n^2)
// avg case = O(nlogn)

// 3)Merge sorting

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     const mid = Math.floor(arr.length/2);
//     const leftArr = arr.slice(0,mid);
//     const rightArr = arr.slice(mid);
//     return merge(mergeSort(leftArr), mergeSort(rightArr));
// }
// function merge(leftArr,rightArr){
//     const sortedArr = [];
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr ,...leftArr ,...rightArr];
// }

// const arr=[8,20,-2,4,-6];
// console.log(mergeSort(arr));
// Big-O = O(nlogn)


// CartesianProduct

// function CartesianProduct(arr1, arr2){
//     const result = [];
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             result.push([arr1[i],arr2[j]]);
//         }
//     }
//     return result;
// }

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// console.log(CartesianProduct(arr1,arr2));
// Big-O = O(mn)


// Linked List

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

isEmpty(){
    return this.size === 0
}

getSize() {
    return this.size
}

prepend(value) {
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
        node.next = this.head
        this.head = node
    }
    this.size++
}

append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
        let prev = this.head
        while(prev.next){
            prev = prev.next
        }
        prev.next = node
    }
    this.size++
}

insert(value,index){
    if(index < 0){
        return
    }
    if(index === 0){
        this.prepend(value)
    }else{
        const node = new Node(value)
        let prev = this.head
        for(let i=0; i<index-1; i++){
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
    }
}

removeFrom(index){
    if(index < 0 || index >= this.size){
        return null
    }
    let removedNode
    if(index === 0){
        removedNode = this.head
        this.head = this.head.next
    }else{
        let prev = this.head                                                                                                          
        for(let i=0; i<index-1; i++){
            prev = prev.next
        }
        removedNode = prev.next
        prev.next =  removedNode.next
    }
    this.size--                                                                                                       
    return removedNode.value
}

removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value === value){
        this.head = this.head.next
        this.size--
        return value
    }else{
        let prev = this.head
        while(prev.next && prev.next.value !== value){
            prev = prev.next
        }
        if(prev.next){
            let removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return value
        }
        return null
    }
}

reverse(){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
}

print(){
    if(this.isEmpty()){
        console.log('List is Empty');
    }else{
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value}`+" "
            curr = curr.next
        }
        console.log(listValues);
    }
}
}


const list = new LinkedList()
console.log('List is empty',list.isEmpty());
console.log('List size is ',list.getSize()); 
list.print()

list.prepend(20)
console.log('List size is ',list.getSize());
list.print()
    
list.prepend(30)
list.prepend(40)
list.prepend(50)
console.log('List size is ',list.getSize());
list.print()

list.append(25)
list.append(35)
list.append(45)
list.print()

list.insert(100,0)
list.print()

list.insert(150,0)
list.print()

list.insert(120,0)
list.print()

list.insert(100,2)
list.print()

list.insert(180,2)
list.print()

// console.log(list.removeFrom(2));
// list.print()

// console.log(list.removeValue(180))
// list.print()

list.reverse()
list.print()

 
