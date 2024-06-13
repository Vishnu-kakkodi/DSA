function binarySearch(array,target){
    return search(array,target,0,array.length-1)
}
function search(array,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    console.log(middleIndex);
    if(target===array[middleIndex]){
        return middleIndex
    }
    if(target<array[middleIndex]){
        return search(array,target,leftIndex,middleIndex-1)
    }else{
        return search(array,target,middleIndex+1,rightIndex)
    }
}



const array = [1,3,5,7,9,11,13]
let target = 13;
console.log(binarySearch(array,target))