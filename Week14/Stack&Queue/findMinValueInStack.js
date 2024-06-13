class Stack{
    constructor(){
        this.stack = []
        this.temp = []
    }

    push(value){
        this.stack.push(value)
        if(this.temp.length===0||value<=this.temp[this.temp.length-1]){
            this.temp.push(value)
        }
    }

    display(){
        console.log(this.stack);
    }

    getMin(){
        return this.temp[this.temp.length-1]
    }
}

const stk = new Stack()
stk.push(9)
stk.push(2)
stk.push(3)
stk.push(4)
stk.push(2)
stk.push(1)
stk.push(5)
stk.push(3)
stk.push(8)
stk.push(2)
stk.display()
console.log(stk.getMin());