var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.counter = 0;

  return instance;

};


var queueMethods = {

  enqueue:function(value){
    //push
    this.storage[this.size()]= value;
    this.counter++;

  },

  dequeue:function(){
    //shift
    if (this.counter >0){
      this.counter--;
      var holder = this.storage[0];
      delete this.storage[0];
      //move everything else up
      for ( var i = 0; i < this.counter; i++){
        this.storage[i] = this.storage[i+1];
      }
      return holder;
    }
  },

  size:function(){
    //length
    return this.counter;
  }

};



