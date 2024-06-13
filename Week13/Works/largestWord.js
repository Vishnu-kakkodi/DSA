let str="I will be learn leetcode problems"
const array = str.split(" ")
function largestWord(array){
    let length = [];
for(let word of array){
    length.push(word.length)
}
console.log(length)
length.sort((a, b) => b - a);
console.log(length)
let largest = length[0]
return largest
}
console.log(largestWord(array))