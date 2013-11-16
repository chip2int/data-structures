describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    //expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  //insert works
  it("creating a tree and inserting a value should add a node to the tree", function() {
    binarySearchTree.insert("5");
    expect(binarySearchTree.contains("5")).toEqual(true);
    expect(binarySearchTree.contains("3")).toEqual(false);
  });


  //left works
  it("If we create a tree add a value and then add a smaller second value, that value should be assigned to left", function() {
    binarySearchTree.value="5";
    binarySearchTree.insert("3");
    expect(binarySearchTree.contains("5")).toEqual(true);
    expect(binarySearchTree.contains("3")).toEqual(true);
    expect(binarySearchTree.left.value).toEqual("3");
    expect(binarySearchTree.right).toEqual(undefined);
  });

  //right works

    it("If we create a tree add a value and then add a larger second value, that value should be assigned to right", function() {
    binarySearchTree.value = "5";
    binarySearchTree.insert("7");
    expect(binarySearchTree.contains("5")).toEqual(true);
    expect(binarySearchTree.contains("7")).toEqual(true);
    expect(binarySearchTree.left).toEqual(undefined);
    expect(binarySearchTree.right.value).toEqual("7");
  });

it("If we create a tree add a value and then add a smaller and a largert valuelarger second value", function() {
    binarySearchTree.value = "5";
    binarySearchTree.insert("7");
    binarySearchTree.insert("3")
    expect(binarySearchTree.contains("5")).toEqual(true);
    expect(binarySearchTree.contains("7")).toEqual(true);
    expect(binarySearchTree.left.value).toEqual("3");
    expect(binarySearchTree.right.value).toEqual("7");
  });

});
