function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle), right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sortedArr = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}

const array = [1,3,9,4,2,7,5,6,8]
console.log(mergeSort(array));