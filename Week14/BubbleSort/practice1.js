// let fruits = ["banana", "apple", "orange", "grape", "pineapple"]
// console.log(sortedForm(fruits));


// function sortedForm(fruits){
//     let swapped
//     do{
//         swapped = false
//         for(let i=0; i<fruits.length-1; i++){
//             if(fruits[i]>fruits[i+1]){
//                 let temp = fruits[i]
//                 fruits[i] = fruits[i+1]
//                 fruits[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)

//         return fruits
// }

function sortedForm(arr,n){
    if(n===1){
        return arr
    }

        let swapped = false
        for(let i=0; i<fruits.length-1; i++){
            if(fruits[i]>fruits[i+1]){
                let temp = fruits[i]
                fruits[i] = fruits[i+1]
                fruits[i+1] = temp
                swapped = true
            }
        }

        if(!swapped){
            return arr
        }

        return sortedForm(arr,n-1)

}

let fruits = ["banana", "apple", "orange", "grape", "pineapple"]
console.log(sortedForm(fruits,fruits.length));

