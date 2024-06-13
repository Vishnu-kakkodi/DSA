function SelectionSort(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        let minIndex = i
        for(let j = i+1; j<n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex!==i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}

const array = [1,2,6,8,3,4,5]
console.log(SelectionSort(array));