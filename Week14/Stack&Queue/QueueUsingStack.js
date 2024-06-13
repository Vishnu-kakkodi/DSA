// class QueueUsingStacks{
//     constructor(){
//         this.stack1 = []
//         this.stack2 = []
//     }

//     enqueue(value){
//         this.stack1.push(value)
//     }

//     dequeue(){
//         if(this.stack2.length === 0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         if(this.stack2.length===0){
//             console.log("Queue is empty");
//             return
//         }
//         return this.stack2.pop()
//     }

//     isEmpty(){
//         return this.stack1.length === 0 && this.stack2.length === 0
//     }

//     peek(){
//         if(this.stack2.length === 0){
//             while(this.stack1.length > 0){
//                 this.stack1.stack2.push(this.stack1.pop())
//             }
//         }
//         if(this.stack1.length===0){
//             console.log("Queue is empty");
//         }
//         return this.stack2[this.stack2.length - 1]
//     }
// }



class QueueUsingStacks{                                                                                                                                                      
    constructor(){
        this.stack=[]
        this.temp=[]
    }

    enque(value){
        this.stack.push(value)
    }

    pop(){
       return this.stack.pop()
    }

    deque(){
        while(this.stack.length>1){
            this.temp.push(this.pop())
        }

        let value=this.pop()
        this.stack=this.temp
        return value
    }
    display(){
        console.log(this.stack)
        console.log(this.temp)
    }
    
}

const stk=new StackUsingQueues()
stk.enque(1)
stk.enque(2)
stk.enque(3)
stk.enque(4)
stk.enque(5)
console.log(stk.deque());

stk.display()