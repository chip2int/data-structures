var HashTable = function(){
  this._limit = 8;
  this._availableSlots = this._limit;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //debugger;
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this.retrieve(k) === undefined){
    this._storage.set(i, makeLinkedList());
    this._availableSlots--;
  }
  (this._storage.get(i)).addToTail(k,v);
    //check the percentage of slots used and if needed resizes
  if ((this._availableSlots / this._limit) < 0.25){
    this.resize(this.size()*2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp =this._storage.get(i);
  return ((temp !== undefined) ? temp.getNodeTarget(k) : undefined);
};

HashTable.prototype.remove = function(k){
  debugger;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  if (temp !== undefined) {
    temp.removeNode(k);
  }

  if(this._storage.get(i).getSize() < 1){
    this._storage.set(i, undefined);
    this._availableSlots++; // Keep track of the empty slots in storage
  }

  // if more than 75% of the array is empty, make the array smaller.
  // Note: this check only happens on node removal which means that Nodes will start at 8 and only shrink after the first time an array is removed.
  if ((this._availableSlots / this._limit) > 0.75){
    this.resize(this.size()/2);
  }
};

HashTable.prototype.resize = function(newSize){
  //create a new hastable with maxsize of 2 x last hashtable size
  debugger;
  console.log("Resize" + newSize)
  var oldStorage= this._storage;
  this._storage =  makeLimitedArray(newSize);
  this._limit = newSize;
  this._availableSlots = newSize;

  var hTable = this;

  // traverse original hash table and add values to new hashtable
  oldStorage.each(function(item) {

    item.traverse(function(k,v){
    // Traverse the linked list;
      hTable._storage.insert(k,v);
    });
  });

  // replace old hashtable with temp
  delete oldStorage;
  // this._storage = newStorage;
};

HashTable.prototype.size = function(k){
  return (this._limit);
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
