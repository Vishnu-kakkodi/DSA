function quickSort(array){
    if(array.length<2){
        return array
    }
    let n = array.length
    let pivot = array[n-1]
    let left = [], right = []
    for(let i=0; i<n-1; i++){
        if(array[i]<pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}


const array = [4,2,8,1,9,7,3]
console.log(quickSort(array));