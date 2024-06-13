function mergeSort(array){
    if(array.length<2){
        return array
    }
    let middleIndex = Math.floor(array.length/2)
    let left = array.slice(0,middleIndex),right = array.slice(middleIndex)
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