var makeStack = function() {
// Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.counter = 0; // Hint: set an initial value here

  return instance;
};


var stackMethods = {
  push:function(value){
    this.storage[this.size()] = value;
    this.counter++;
  },

  pop:function(){
    if(this.counter > 0){
      this.counter--;
      var holder = this.storage[this.size()];
      delete this.storage[this.size()];
      return holder;
    }
  },

  size:function(){
    return this.counter;
  }

};


