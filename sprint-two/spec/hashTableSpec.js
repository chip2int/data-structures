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
    expect(hashTable.retrieve("hello")).toEqual(null)
    expect(hashTable.retrieve("hola")).toEqual("mundo");
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


  // add more tests!
});
