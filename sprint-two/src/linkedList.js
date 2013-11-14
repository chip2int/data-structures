// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(){
    var temp = makeNode(arguments);
    if (list.head === null) {
      list.head = temp;
    }
    if (list.tail === null) {
      list.tail =  temp;
    }
    else {
      list.tail.next = temp;
      list.tail = temp;
    }
  };

  list.removeHead = function(){
    var next = list.head.next;
    var retValue = list.head.value;
    delete list.head;
    list.head = next;
    return retValue;
  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};


