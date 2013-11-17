
var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  newTree.parent= null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var temp = makeTree(); // generate a new tree
  temp.value = value;
  this.children.push(temp);
  temp.parent= this;
};

treeMethods.depthFirstLog  = function(fn) {
  fn.call(this, arguments);
  if (this.children.length > 0) {
    for (var i = 0; i< this.children.length; i++) {
      this.children[i].depthFirstLog(fn);
    }
  }
};

treeMethods.removeFromParent = function(){
  //find the index of the current node in the previous array of children
  var childIndex = -1;
  for (var i = 0; i < this.parent.children.length ; i++){
    if (this.parent.children[i] === this){
      childIndex = i;
      break;
    }
  }

  //remove the node from the parents list of children
  this.parent.children.splice(childIndex,1);

  // remove the parent from the node
  this.parent = null;
};

treeMethods.contains = function(target){
  var result = false;
  if(this.value === target){
    return true;
  } else {
    for( var i = 0; i < this.children.length ; i++){
      if (this.children[i]){
        result = result || this.children[i].contains(target);
      }
    }
  }
  return result;
};