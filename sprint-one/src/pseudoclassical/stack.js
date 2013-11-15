var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.counter = 0;
};

Stack.prototype = {
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
