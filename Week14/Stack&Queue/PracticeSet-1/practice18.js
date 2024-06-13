class Stack{
    constructor(){
        this.stack = []
        this.temp = []
    }

    push(value){
        this.stack.push(value)
        if(this.temp.length===0||this.temp[this.temp.length-1]>value){
            this.temp.push(value)
        }
    }

    getMin(){
        console.log(this.temp[this.temp.length-1])
    }
}

const stk = new Stack()
stk.push(7)
stk.push(9)
stk.push(1)
stk.push(3)
stk.push(8)
stk.getMin()