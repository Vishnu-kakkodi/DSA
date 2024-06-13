// function Cap(array,index=0){
//     if(index===array.length){
//         return array
//     }
//     array[index] = array[index][0].toUpperCase() + array[index].slice(1);
//     return Cap(array,index+1)
// }

// let array = ["red", "blue", "green"]
// console.log(Cap(array))



function Cap(array,index=0){
    if(index===array.length){
        return array
    }
    array[index] = array[index].toUpperCase()
    return Cap(array,index+1)
}

let array = ["red", "blue", "green"]
console.log(Cap(array))