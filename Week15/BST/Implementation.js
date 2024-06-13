class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }


  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
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


  const bst = new BinarySearchTree();

bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(6);
bst.insert(7);
bst.insert(8);
bst.insert(9);
bst.insert(10);


// console.log(bst.search(10)); 
// console.log(bst.search(4)); 
console.log('Inorder: ', bst.inorder());   
console.log('Preorder: ', bst.preorder()); 
console.log('Postorder: ', bst.postorder());

  