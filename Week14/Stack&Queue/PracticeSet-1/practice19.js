class Stack{
    constructor(){
        this.stack = []
        this.temp = []
    }

    push(value){
        this.stack.push(value)
    }

    reverse(){
        while(this.stack.length>0){
            this.temp.push(this.stack.pop())
        }
        this.stack = this.temp
        return this.stack
    }

    display(){
        console.log(this.stack)
    }

}

const stk = new Stack()
stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4)
stk.display()
console.log(stk.reverse());
