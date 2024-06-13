function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    console.log(left);
    console.log(right);
    let sortedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}



const array = [1,4,8,2,5,7,3,9]
console.log(mergeSort(array));