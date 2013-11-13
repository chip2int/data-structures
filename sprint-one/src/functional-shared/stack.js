  var makeStack = function() {
    // Hey! Copy your code from src/functional/stack.js and paste it here
    var instance = {};

    // Use an object with numeric keys to store values
    instance.storage = {};
    instance.counter = 0; // Hint: set an initial value here

    // Implement the methods below

    instance.pop = stackMethods.pop;
    instance.push = stackMethods.push;
    instance.size = stackMethods.size;

    return instance;
  };


  var stackMethods = {
    push:function(value){
      this.storage[size()] = value;
      this.counter++;
    },

    pop:function(){
      if(this.counter > 0){
        this.counter--;
        var holder = this.storage[size()];
        delete this.storage[size()];
        return holder;
      }
    },

    size:function(){
      return this.counter;
    }

  };


