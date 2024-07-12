class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root
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

    findMin(node){
        while(node.left!==null){
            node = node.left
        }
        return node.value
    }

    findMax(node){
        while(node.right!==null){
            node = node.right
        }
        return node.value
    }

    findSum(){
        if (this.root === null) {
            return null;
        }
        let min = this.findMin(this.root)
        let max = this.findMax(this.root)
        return min+max
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
console.log(bst.findSum());