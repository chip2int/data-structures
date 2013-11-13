var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  storage = {};
  counter = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = function(value){
    storage[instance.size()] = value;
    counter++;
  };

  instance.pop = function(){
    counter--;
    var holder = storage[instance.size()];
    delete storage[instance.size()];
    return holder;
  };

  instance.size = function(){
    return counter;
  };

  return instance;
};
