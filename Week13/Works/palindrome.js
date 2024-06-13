// Palindrome String //

// function isPalindrome(word){
//     let leftIndex = 0;
//     let rightIndex = word.length-1;
//     console.log(rightIndex);

//     while(leftIndex<rightIndex){
//         if(word[leftIndex] !== word[rightIndex]){
//             return false;
//         }
//         leftIndex++
//         rightIndex--
//     }
//     return true;
// }

// console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"));


// Palindrome Number //

// function isPalindrome(num){
//     let word = num.toString();
//     let leftIndex = 0;
//     let rightIndex = word.length-1;
//     console.log(rightIndex);

//     while(leftIndex<rightIndex){
//         if(word[leftIndex] !== word[rightIndex]){
//             return false;
//         }
//         leftIndex++
//         rightIndex--
//     }
//     return true;
// }

// console.log(isPalindrome("12321"));
// console.log(isPalindrome("123"));
// console.log(isPalindrome("-1"));


// Palindrome using recursion //

function isPalindrome(word){

    function checkPalindrome(leftIndex,rightIndex){
        if(leftIndex>=rightIndex){
            return true
        }

        if(word[leftIndex] !== word[rightIndex]){
            return false
        }

        return checkPalindrome(leftIndex+1,rightIndex-1)
    }

    return checkPalindrome(0,word.length-1)
}

console.log(isPalindrome("hello"))
console.log(isPalindrome("racecar"))