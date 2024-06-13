const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "A journey of a thousand miles begins with a single step",
    "To be or not to be that is the question",
    "All's well that ends well",
    "Actions speak louder than words",
    "Beauty is in the eye of the beholder",
    "The early bird catches the worm"
];

const count = []

for(let sentence of sentences){
    const words = sentence.split(" ");
    const totalWords = words.length
    count.push(totalWords)
}

let largetsCount = count[0]
let largestIdex = 0

for(let i=0; i<count.length; i++){
    if(count[i]>largetsCount){
        largetsCount=count[i]
        largestIdex=i
    }
}

console.log("Largest sentence is ",sentences[largestIdex])
