describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("We should be able to retrieve a string after we insert it", function() {
    hashTable.insert("hello","world");
    expect(hashTable.retrieve("hello")).toEqual("world");
  });

  it("Retrieving a value we haven't stored should return undefined.", function() {
    hashTable.insert("hello","world");
    expect(hashTable.retrieve("hola")).toEqual(undefined);
  });

  it("We should be able to retrieve an object after we insert it", function() {
    hashTable.insert("hello",{myObject: "totally awesome"});
    expect(hashTable.retrieve("hello")).toEqual({myObject: "totally awesome"});
  });

  it("If we insert a string and then remove the string, retrieve should return null.", function() {
    hashTable.insert("hello","world");
    hashTable.remove("hello");
    expect(hashTable.retrieve("hello")).toEqual(null);
  });

  it("If we insert 2 strings, and then remove the first string, the second string should still be present.", function() {
    hashTable.insert("hello","world");
    hashTable.insert("hola","mundo");
    hashTable.remove("hello");
    expect(hashTable.retrieve("hello")).toEqual(null);
    expect(hashTable.retrieve("hola")).toEqual("mundo");
  });

    it("If we insert 3 key value pairs at the same index and remove the middle one, we should be able to retrieve 2 of them, but not the third.", function() {
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(4);
    hashTable.insert("hello","world");
    hashTable.insert("hola","mundo");
    hashTable.insert("bonjour","monde");
    hashTable.remove("hola");
    expect(hashTable.retrieve("hello")).toEqual("world");
    expect(hashTable.retrieve("hola")).toEqual(null);
    expect(hashTable.retrieve("bonjour")).toEqual("monde");
  });


  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it("After resize, hash table should have 2x as many slots", function(){
    expect(hashTable.size()).toEqual(8);
    hashTable.resize(16);
    expect(hashTable.size()).toEqual(16);
  });

  it("After resize, all values should still be present", function(){
    hashTable.insert("a", 1);
    hashTable.insert("b", 2);
    hashTable.insert("c", 3);
    hashTable.insert("d", 4);
    expect(hashTable.retrieve("c")).toEqual(3);
    hashTable.insert("e", 5);
    hashTable.insert("f", 6);
    hashTable.insert("g", 7);
    expect(hashTable.retrieve("a")).toEqual(1);
    expect(hashTable.size()).toEqual(16);

    // force the hash function to return 0
  });



  // add more tests!
});
