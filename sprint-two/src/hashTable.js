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
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this.retrieve(k) === undefined){
    this._storage.set(i, makeLinkedList());
    this._availableSlots--;
  }
  (this._storage.get(i)).addToTail(k,v);
    //check the percentage of slots used and if needed resizes
    if ((this._availableSlots / this._limit) < 0.25){
      this.resize(this._limit*2);
    }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp =this._storage.get(i);
  return ((temp !== undefined) ? temp.getNodeTarget(k) : undefined);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  if (temp !== undefined) {
    temp.removeNode(k);
  }
};

HashTable.prototype.resize = function(newSize){
    //create a new hastable with maxsize of 2 x last hashtable size
  var oldStorage= this._storage;
  var newStorage = makeLimitedArray(newSize);
    // traverse original hash table and add values to new hashtable
  for (var i = 0; i < oldStorage.length ; i++){
    while(oldStorage[i] !== undefined && oldStorage[i].head !== undefined){
      newStorage.insert(oldStorage[i].removeHead());
    }
  }
  // replace old hashtable with temp
  delete oldStorage;
  this._storage = newStorage;
};


// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
