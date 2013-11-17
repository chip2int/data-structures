var makeBinarySearchTree = function(value){

  var binaryTree = Object.create(makeTree(value));

  binaryTree.left = binaryTree.children[0];
  binaryTree.right = binaryTree.children[1];

  binaryTree.setLeft = function(tree){
    this.left = tree;
    this.children[0] = tree;
  };

  binaryTree.setRight = function(tree){
    this.right = tree;
    this.children[0] = tree;
  };


  binaryTree.isValLess = function(value) {
    return (value <= this.value);
  };

  binaryTree.insert = function (value) {
    if (this.isValLess(value)) {
      if (!this.left) {
        this.setLeft(makeBinarySearchTree(value));
      }
      else {
        this.left = this.children[0];
        this.left.insert(value);
      }
    } else {
      if(!this.right){
        this.right = makeBinarySearchTree(value);
        this.children[1] = this.right;
      } else {
        this.right = this.children[1];
        this.right.insert(value);
      }
    }
  };

  return binaryTree;
};