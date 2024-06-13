function camelToSnake(word){
let first = (word.substring(0,5))
let second = (word.substring(5)).toLowerCase()
return first+"_"+second
}

console.log(camelToSnake("firstName"))