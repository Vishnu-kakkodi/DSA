// function pascalTOsnake(word){
//     console.log(word)
// let first = (word.substring(0,5)).toLowerCase();
// let second = (word.substring(5)).toLowerCase();
// console.log(first)
// console.log(second)
// return first+"_"+second
// }

// let Word = pascalTOsnake("FirstName")
// console.log(Word)



// function PascalCase(word){
//     let newWord = ""
//     for(let i=0; i<str.length; i++){
//     if(str[0] !== str[0].toUpperCase()){
//         return "The string is not pascal"
//     }
//     if(i > 0 && str[i] === str[i].toUpperCase()) {
//          newWord += "_";
//     }
//     newWord += str[i].toLowerCase();
// }
// return newWord
// }

// let str = "PascalCaseStringNumber"


// console.log(PascalCase(str))


// Using recursion

function PascalCase(word, index = 0, newWord = "") {
    if (index >= word.length) {
        return newWord;
    }
    
    if (index === 0 && word[index] !== word[index].toUpperCase()) {
        return "The string is not PascalCase";
    }
    
    if (index > 0 && word[index] === word[index].toUpperCase()) {
        newWord += "_";
    }
    
    newWord += word[index].toLowerCase();
    
    return PascalCase(word, index + 1, newWord);
}

let str = "PascalCaseStringNumber";
console.log(PascalCase(str));
