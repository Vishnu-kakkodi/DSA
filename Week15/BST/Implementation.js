class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null

    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
        this.large=null
        this.small=null
        this.close=null
    }
insert(node){
        const newNode=new Node(node)
        if(!this.root) this.root=newNode
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if(node.value>newNode.value){
            if(!node.left) node.left=newNode
            else{
                this.insertNode(node.left,newNode)
            }
        }
        else{
            if(!node.right) node.right=newNode
            else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    display(node){
        if(!node) return
        if(node.left) this.display(node.left)
            console.log(node.value)
        if(node.right) this.display(node.right)
    }
    largest(node){
        if(!node) return
        this.large=node.value
        if(node.right) this.largest(node.right)
        return this.large
    }
    smallest(node){
        if(!node) return
        this.small=node.value
        if(node.left) this.smallest(node.left)
        return this.small
    }
    closest(node,target){
        if(!node) return this.close
        if(!this.close) this.close=node.value
        if(Math.abs(node.value-target)<Math.abs(this.close-target)){
            this.close=node.value
        }
        if(node.value>target){
            this.closest(node.left,target)
        }
        else{
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
    balance(node){
        if(!node) return true
        const left=this.depth(node.left)
        const right=this.depth(node.right)
        if(Math.abs(left-right)>1)
            return false
        return this.balance(node.left) && this.balance(node.right)
    }

    search(value) {
      return this.searchNode(this.root, value);
    }
  
    searchNode(node, value) {
      if (node === null) {
        return false;
      }
  
      if (value < node.value) {
        return this.searchNode(node.left, value);
      } else if (value > node.value) {
        return this.searchNode(node.right, value);
      } else {
        return true;
      }
    }

    inorder(node = this.root, result = []) {
      if (node !== null) {
        this.inorder(node.left, result);
        result.push(node.value);
        this.inorder(node.right, result);
      }
      return result;
    }
  
    preorder(node = this.root, result = []) {
      if (node !== null) {
        result.push(node.value);
        this.preorder(node.left, result);
        this.preorder(node.right, result);
      }
      return result;
    }
  
    postorder(node = this.root, result = []) {
      if (node !== null) {
        this.postorder(node.left, result);
        this.postorder(node.right, result);
        result.push(node.value);
      }
      return result;
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
console.log(bst.depth(bst.root))
console.log(bst.balance(bst.root))
console.log("inorder");
bst.inorder(bst.root)
console.log("preorder");
bst.preorder(bst.root)
console.log("postorder");
bst.postorder(bst.root)
console.log(bst.smallest(bst.root)+bst.largest(bst.root))
console.log(bst.closest(bst.root,102));
console.log(bst.largest(bst.root))
console.log (bst.search(bst.root,102))