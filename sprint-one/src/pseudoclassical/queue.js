var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.storage= {};
  this.counter  = 0;

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

Queue.prototype.enqueue = queueMethods.enqueue;
Queue.prototype.dequeue = queueMethods.dequeue;
Queue.prototype.size = queueMethods.size;


