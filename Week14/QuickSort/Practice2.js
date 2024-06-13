function quickSort(array){
    if(array.length<2){
        return array
    }
    let pivot = array[array.length-1]
    let left = [], right = []
    let n = array.length;
    for(let i=0; i<n-1; i++){
        if(array[i]<pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}


const array = [1,3,9,4,2,7,5,6,8]
console.log(quickSort(array));