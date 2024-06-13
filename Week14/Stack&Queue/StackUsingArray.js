class StackArray{
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        if(this.stack.length===0){
            console.log("Stack is empty")
            return
        }
        return this.stack.pop()
    }

    peek(){
        if(this.stack.length===0){
            console.log("Stack is empty");
        }
        return this.stack[this.stack.length-1]
    }

    isEmpty(){
        return this.stack.length === 0
    }
}

const stack = new StackArray()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(8)
try{
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    stack.pop();
}catch(error){
    console.error(error.message);
}
