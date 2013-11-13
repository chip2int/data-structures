var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    //push
    storage[counter]= value;
    counter++;

  };

  instance.dequeue = function(){
    //shift
    if (counter >0){
      counter--;
      var holder = storage[0];
      delete storage[0];
      //move everything else up
      for ( i = 0; i < counter; i++){
        storage[i] = storage[i+1];
      }
      return holder;
    }
  };

  instance.size = function(){
    //length
    return counter;
  };

  return instance;
};

var queueMethods = {};
