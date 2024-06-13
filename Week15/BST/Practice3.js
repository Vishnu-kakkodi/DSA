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
    }

    insert(node){
        const newNode = new Node(node)
        if(!this.root){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node,newNode){
        if(node.value>newNode.value){
            if(!node.left){
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(!node.right){
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    largest(node){
        if(!node){
            return
        }
        this.large = node.value
        if(node.right){
            this.largest(node.right)
        }
        return this.large
    }

    smallest(node){
        if(!node){
            return
        }
        this.small = node.value
        if(node.left){
            this.smallest(node.left)
        }
        return this.small
    }

    closest(node,target){
        if(!node){
            return
        }
        if(!this.close){
            this.close = node.value
        }
        if(Math.abs(node.value-target)<Math.abs(this.close-target)){
            this.close = node.value
        }
        if(target<node.value){
            this.closest(node.left,target)
        }else{
            this.closest(node.right,target)
        }
        return this.close
    }

    depth(node){
        if(!node) return 0
        const left=this.depth(node.left)
        const right=this.depth(node.right)
        return Math.max(left,right)+1
    }
}

const bst=new BinarySearchTree()
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
bst.insert(150);
bst.insert(160);
console.log(bst.depth(bst.root))
console.log(bst.closest(bst.root,138));