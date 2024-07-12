
// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//         this.small = null
//         this.large = null
//         this.close = null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.root===null)this.root = newNode
//         else this.insertNode(this.root,newNode)
//     }

//     insertNode(node,newNode){
//         if(!node)return
//         if(node.value>newNode.value){
//             if(!node.left)node.left=newNode
//             else this.insertNode(node.left,newNode)
//         }else{
//             if(!node.right)node.right=newNode
//             else this.insertNode(node.right,newNode)
//         }
//     }

//     inorder(node=this.root,result=[]){
//         if(node!==null){
//             if(node.left)this.inorder(node.left,result)
//                 result.push(node.value)
//             if(node.right)this.inorder(node.right,result)
//         }
//     return result
//     }

//     preorder(node=this.root,result=[]){
//         if(node!==null){
//             result.push(node.value)
//             if(node.left)this.preorder(node.left,result)
//             if(node.right)this.preorder(node.right,result)
//         }
//     return result
//     }

//     postorder(node=this.root,result=[]){
//         if(node!==null){
//             if(node.left)this.postorder(node.left,result)
//             if(node.right)this.postorder(node.right,result)
//             result.push(node.value)
//         }
//         return result
//     }

//     depth(node=this.root){
//         if(!node)return 0
//         const left = this.depth(node.left)
//         const right = this.depth(node.right)
//         return Math.max(left,right)+1
//     }

//     smallest(node=this.root){
//         if(!node)return
//         this.small = node.value
//         if(node.left)this.smallest(node.left)
//             return this.small
//     }

//     largest(node=this.root){
//         if(!node)return
//         this.large = node.value
//         if(node.right)this.largest(node.right)
//             return this.large
//     }

//     findSum(){
//         let max = this.largest()
//         let min = this.smallest()
//         return min + max
//     }

//     balance(node=this.root){
//         if(!node)return true
//         const left = this.depth(node.left)
//         const right = this.depth(node.right)
//         if(Math.abs(left-right)>1)return false
//         return this.balance(node.left)&&this.balance(node.right)
//     }

//     closest(node=this.root,target){
//         if(!node)return this.close
//         if(!this.close)this.close=node.value
//         if(Math.abs(node.value-target)<Math.abs(this.close-target))this.close = node.value
//         if(node.value>target)this.closest(node.left,target)
//         else this.closest(node.right,target)
//     return this.close
//     }

//     search(target){
//         return this.searchNode(this.root,target)
//     }

//     searchNode(node,target){
//         if(!node)return false
//         if(node.value>target)this.searchNode(node.left,target)
//         else this.searchNode(node.right,target)
//         return true
//     }
// }

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//         this.close = null
//         this.large = null
//         this.small = null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(!this.root)this.root = newNode
//         else this.insertNode(this.root,newNode)
//     }

//     insertNode(node,newNode){
//         if(node.value>newNode.value){
//             if(!node.left)node.left = newNode
//             else this.insertNode(node.left,newNode)
//         }else{
//             if(!node.right)node.right = newNode
//             else this.insertNode(node.right,newNode)
//         }
//     }

//     inorder(node=this.root,result=[]){
//         if(node!==null){
//             if(node.left)this.inorder(node.left,result)
//                 result.push(node.value)
//             if(node.right)this.inorder(node.right,result)
//         }
//     return result
//     }

//     preorder(node=this.root,result=[]){
//         if(node!==null){
//             result.push(node.value)
//             if(node.left)this.preorder(node.left,result)
//             if(node.right)this.preorder(node.right,result)
//         }
//     return result
//     }

//     postorder(node=this.root,result=[]){
//         if(node!==null){
//             if(node.left)this.postorder(node.left,result)
//             if(node.right)this.postorder(node.right,result)
//             result.push(node.value)
//         }
//         return result
//     }

//     depth(node=this.root){
//         if(!node)return 0
//         const left = this.depth(node.left)
//         const right = this.depth(node.right)
//         return Math.max(left,right)+1
//     }

//     smallest(node=this.root){
//         if(!node)return
//         this.small = node.value
//         if(node.left)this.smallest(node.left)
//             return this.small
//     }

//     largest(node=this.root){
//         if(!node)return
//         this.large = node.value
//         if(node.right)this.largest(node.right)
//             return this.large
//     }

//     findSum(){
//         let min = this.smallest()
//         let max = this.largest()
//         return min + max
//     }

//     balance(node=this.root){
//         if(!node)return true
//         const left = this.depth(node.left)
//         const right = this.depth(node.right)
//         if(Math.abs(left-right)>1)return false
//         return this.balance(node.left)&&this.balance(node.right)
//     }

//     closest(node,target){
//         if(!node)return this.close
//         if(!this.close)this.close = node.value
//         if(Math.abs(node.value-target)<Math.abs(this.close-target))this.close = node.value
//         if(node.value>target)this.closest(node.left,target)
//         if(node.value<target)this.closest(node.right,target)
//             return this.close
//     }

//     search(target){
//         return this.searchNode(this.root,target)
//     }

//     searchNode(node, target) {
//         if (node === null) {
//             return false;
//         }
//         if (node.value === target) {
//             return true;
//         }
//         if (node.value > target) {
//             return this.searchNode(node.left, target);
//         } else {
//             return this.searchNode(node.right, target);
//         }
//     }
// }


class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
        this.large = null
        this.small = null
        this.close = null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root===null)this.root=newNode
        else this.insertNode(this.root,newNode)
    }

    insertNode(node,newNode){
        if(node.value>newNode.value){
            if(!node.left)node.left=newNode
            else this.insertNode(node.left,newNode)
        }else{
            if(!node.right)node.right = newNode
            else this.insertNode(node.right,newNode)
        }
    }

    inorder(node=this.root,result=[]){
        if(node!==null){
            if(node.left)this.inorder(node.left,result)
                result.push(node.value)
            if(node.right)this.inorder(node.right,result)
        }
    return result
    }

    depth(node=this.root){
        if(!node)return 0
        const left = this.depth(node.left)
        const right = this.depth(node.right)
        return Math.max(left,right)+1
    }

    smallest(node=this.root){
        if(!node)return null
        this.small = node.value
        if(node.left)this.smallest(node.left)
            return this.small
    }

    largest(node=this.root){
        if(!node)return null
        this.large = node.value
        if(node.right)this.largest(node.right)
            return this.large
    }

    findSum(){
        let min = this.smallest()
        let max = this.largest()
        return min+max
    }

    balance(node=this.root){
        if(!node)return false
        const left = this.depth(node.left)
        const right = this.depth(node.right)
        if(Math.abs(left-right)>1)return false
        return true
    }

    closest(node = this.root, target){
        if(!node)return this.close
        if(!this.close)this.close = node.value
        if(Math.abs(node.value-target)<Math.abs(this.close-target))this.close = node.value
        if(node.value>target)this.closest(node.left,target)
        else this.closest(node.right,target)
    return this.close
    }

    search(target){
        return this.searchNode(this.root,target)
    }

    searchNode(node,target){
        if(node===null)return false
        if(node.value===target)return true
        if(node.value>target)return this.searchNode(node.left,target)
            else return this.searchNode(node.right,target)
    }
}

const bst = new BinarySearchTree();
bst.insert(80);
bst.insert(30);
bst.insert(100);
bst.insert(10);
bst.insert(60);
bst.insert(140);
bst.insert(40);
bst.insert(70);
bst.insert(130);
bst.insert(8);
bst.insert(90);
console.log("inorder");
console.log(bst.inorder());
// console.log("preorder");
// console.log(bst.preorder());
// console.log("postorder");
// console.log(bst.postorder());
console.log(bst.depth());
console.log("Smallest is"+ " " +bst.smallest());
console.log("Largest is"+ " " +bst.largest());
console.log("Sum is"+ " " +bst.findSum());
console.log(bst.balance());
console.log("Closest value is "+bst.closest(bst.root,102));
console.log (bst.search(100));