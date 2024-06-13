// class StackUsingQueues{
//     constructor(){
//         this.queue1 = []
//         this.queue2 = []
//     }

//     push(value){
//         this.queue1.push(value)
//     }

//     pop(){
//         if(this.queue1.length===0){
//             console.log("Stack is empty");
//             return
//         }

//         while(this.queue1.length>1){
//             this.queue2.push(this.queue1.shift())
//         }

//         const poppedValue = this.queue1.shift()
//         const temp = this.queue1
//         this.queue1 = this.queue2
//         this.queue2 = temp

//         return poppedValue
//     }

//     peek(){
//         if(this.queue1.length===0){
//             console.log("Stack is empty");
//         }

//         return this.queue1[this.queue1.length - 1]
//     }

//     isEmpty(){
//         return this.queue1.length === 0
//     }

//     display(){
//         console.log(this.queue1)
//         console.log(this.queue2);
//     }
// }

// const stk=new StackUsingQueues()

// stk.push(1)
// stk.push(2)
// stk.push(3)
// stk.push(4)
// stk.push(5)

// stk.pop()
// stk.display()



class StackUsingQueues{
    constructor(){
        this.queue = []
        this.temp = []
    }

    push(value){
        this.queue.push(value)
    }

    pop(){
        if(this.queue.length<1){
            console.log("Queue is empty");
        }
        while(this.queue.length>1){
            this.temp.push(this.queue.shift())
        }
        const poppedValue = this.queue.shift()
        this.queue = this.temp
        return poppedValue
    }

    denque(){
        if(this.queue.length===0){
            console.log("Queue is empty");
            return
        }
        return this.queue.shift()
    }

    peek(){
        if(this.queue.length===0){
            console.log("Queue is empty")
        }
        return this.queue[this.queue.length-1]
    }

    display(){
        console.log(this.queue)
    }

}

const que = new StackUsingQueues()
que.push(1)
que.push(2)
que.push(3)
que.push(4)
que.push(5)
que.display()
console.log(que.peek());
que.denque()
que.display()

