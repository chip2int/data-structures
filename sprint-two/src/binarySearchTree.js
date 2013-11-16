var makeBinarySearchTree = function(value){

  var binaryTree = Object.create(makeTree(value));

  binaryTree.left = binaryTree.children[0];
  binaryTree.right = binaryTree.children[1];


  binaryTree.isValLess = function(value) {
    return (value <= this.value);
  };

  binaryTree.insert = function (value) {
    if (this.isValLess(value)) {
      if (!this.left) {
        this.left = makeBinarySearchTree(value);
        this.children[0] = this.left;
      }
      else {
        this.left = this.children[0];
        this.left.insert(value);
      }
    } else {
      if(!this.right){
        this.right =makeBinarySearchTree(value);
        this.children[1] = this.right;
      } else {
        this.right = this.children[1];
        this.right.insert(value);
      }
    }
  };

  binaryTree.depthFirstLog = function(){};

  return binaryTree;
};



// function addToNode(node, value) {

//   if (!node) {
//     node.
//   }
//   if (isValLess(node, value)) {
//     addToNode(node.left, value);
//   }
//   else {
//     addToNode(node.right, value);
//   }

// }


// var makeTree = function(value){
//   var newTree = Object.create(treeMethods);
//   newTree.value = value;
//   newTree.children = [];
//   newTree.parent= null;
//   return newTree;
// };
