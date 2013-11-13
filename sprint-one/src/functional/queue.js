var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  instance.enqueue = function(value){
    //push

    instance.howMany++;

  };

  instance.dequeue = function(){
    //shift

  };

  instance.size = function(){
    //length
    return instance.howMany;
  };

  instance.howMany = 0;


  return instance;
};
