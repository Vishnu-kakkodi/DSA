function linearSearch(array,target,index=0){
    if(index===array.length){
        return -1
    }
    if(target===array[index]){
        return index
    }
    return linearSearch(array,target,index+1)
}



const array = [1,2,3,4,5,6,7]
const target = 1
console.log(linearSearch(array,target));