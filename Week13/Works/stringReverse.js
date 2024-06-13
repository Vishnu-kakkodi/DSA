// let str = "Hello"
// let reverseStr = ""

// for(let i=str.length-1; i>=0; i--){
//     reverseStr += str[i]
// }

// console.log(reverseStr);

function srtingReverse(str,index=str.length-1,newStr=""){
    if(index<0){
        return newStr
    }
    newStr += str[index]
    return srtingReverse(str,index-1,newStr)
}

let str = "Hello"
console.log(srtingReverse(str));