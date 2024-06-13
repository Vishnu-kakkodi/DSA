function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = [], right = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [ ...quickSort(left),pivot,...quickSort(right)]
}

const array = [1,3,9,4,2,7,5,6,8]
console.log(quickSort(array));