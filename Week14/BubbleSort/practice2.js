let array = [5, 8, 2, 10, 3, 6], k = 5
console.log(largest(array,k));

function largest(array,k){
    let swapped
    do{
        swapped = false
        for(let i=0; i<array.length-1; i++){
            if(array[i]<array[i+1]){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
        return array[k-1]
}