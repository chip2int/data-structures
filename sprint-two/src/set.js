var makeSet = function(){
  this._storage = {};
};


makeSet.prototype.add = function(value){
  this._storage[value] = true;
};

makeSet.prototype.contains = function(target){
  return (this._storage[target] === undefined)?false:true;
};

makeSet.prototype.remove = function(target){
  delete this._storage[target];
};
