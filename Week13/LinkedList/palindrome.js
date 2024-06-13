class Node{
    constructor(value){
        this.value = 0
        this.next = null
    }
}

function isPalindrome(head){
    let values = []

    while(head!==null){
        values.push(head.value)
        head = head.next
    }
    for(let i=0,j=values.length-1; i<j; i++,j-- ){
        if(values[i]!==values[j]){
            return false
        }
    }
    return true
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

console.log(isPalindrome(head))