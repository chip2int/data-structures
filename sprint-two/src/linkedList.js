// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(){
    debugger;
    var temp = makeNode(arguments[0]);
    if (this.head === null) {
      this.head = temp;
    }
    if (this.tail === null) {
      this.tail =  temp;
    }
    else {
      this.tail.next = temp;
      this.tail = temp;
    }
  };

  list.removeHead = function(){
    var next = this.head.next;
    var retValue = this.head.value;
    delete this.head;
    this.head = next;
    return retValue;
  };

  list.contains = function(target , node){
  //recursive solution
  // if(node === undefined){ node = list.head;}
  // if (node.value === target){return true;}
  // else if (node.next === null){return false;}
  // else {return this.contains(target,node.next);}

  // while solution
  debugger;
    if(node === undefined){ node = this.head;}
    while(node !== null){
      if(node.value=== target){
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};


