// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list._size=0;

  list.addToTail = function(){
    var temp = makeNode(arguments[0], arguments[1]);
    (this.head === null) && (this.head = temp);

    if (this.tail === null) {
      this.tail =  temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }
    this._size++;
  };

  list.removeHead = function(){
    var next = this.head.next;
    var retValue = this.head.value;
    this.head = next;
    this._size--;
    return retValue;
  };

  list.getSize = function() {
    return this._size;
  };

  list.removeNode = function(key) {
    if (this.head.value == key) {
      this.removeHead();
    } else {
      var parent = this.head;
      var node = parent.next;

      while (node) {
        if (node.value == key) {
          break;
        }
        else {
          parent = node;
          node = node.next;
        }
      }

      parent.next = node.next;
      this._size--;
      delete node;
    }
  };

  list.traverse = function(func){
    var current = this.head;
    while(current){
      func.call(this, current.value , current.target);
      current= current.next;
    }
  };

  list.getNodeWithTarget = function(target , node){
    (node === undefined) && (node = this.head);
    while(node !== null){
      if(node.value === target){
        return node;
      } else {
        node = node.next;
      }
    }
    return null;
  };

  list.getNodeTarget = function(key) {
    var temp = this.getNodeWithTarget(key);
    if (temp) return temp.target;
    else return null;
  };

  list.contains = function (target, node) {
    return ((this.getNodeWithTarget(target, node) === null) ? false:true);
  };

  return list;
};

var makeNode = function(value, target){
  var node = {};
  node.value = value; // Hash  --> {key, target}
  node.next = null;
  node.target = target; // Used for hash table
  return node;
};