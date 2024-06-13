let str = "Subscribe the channel and share it and the video split then channel controlled";
let words = str.toLowerCase().split(' ')
const uniqueWords =[]
const duplicateWords =[]
let count = 0

words.forEach(word=>{
    if(uniqueWords.includes(word)){
        if(!duplicateWords.includes(word)){
            count++
        }
        count++
        duplicateWords.push(word)
        return true
    }else{
        uniqueWords.push(word)
        return false
    }
})
console.log(count)
console.log(duplicateWords);