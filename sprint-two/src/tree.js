
var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var temp = makeTree(); // generate a new tree
  temp.value = value;
  this.children.push(temp) ;
  //this lets you specify target only by referencing arrays e.g. this.children[1].children[0].addChild(). Do we want to target in some other way- value perhas?
};

treeMethods.contains = function(target){
  var result = false;
  if(this.value === target){
    return true;
  } else {
    for( var i = 0; i < this.children.length ; i++){
      result = result || this.children[i].contains(target);
    }
  }
  return result;
};
