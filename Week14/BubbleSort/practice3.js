let objArray = [{ name: "John", age: 25 }, { name: "Alice", age: 30 }, { name: "Bob", age: 20 }]
console.log(ageSort(objArray));

function ageSort(objArray){
    let swapped
    do{
        swapped = false
        for(let i=0; i<objArray.length-1; i++){
            if(objArray[i].age > objArray[i+1].age){
                let temp = objArray[i]
                objArray[i] = objArray[i+1]
                objArray[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
        return objArray
}