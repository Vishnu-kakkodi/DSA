function bubbleSort(array){
    let swapped
    let n = array.length
    do{
        swapped = false
        for(let i=0; i<n-1; i++){
            if(array[i]>array[i+1]){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
        return array
}


const array = [4,2,8,1,9,7,3]
console.log(bubbleSort(array));