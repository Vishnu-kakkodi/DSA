function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let current = arr[i]
        let j = i-1
        while(j>=0&&arr[j]>current){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = current
    }
    return arr
}

let array = [4,6,0,1,7,3,4,9,2]
console.log(insertionSort(array));