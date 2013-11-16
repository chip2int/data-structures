describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("when the tree is empty, contains returns false", function() {
    expect(tree.contains(5)).toBe(false);
  });

 it("Setting value to the first node", function() {
    treeB = makeTree(1);
    expect(treeB.contains(1)).toBe(true);
  });

  it("Adding add child with a value and then checking contains for that value returns true", function() {
    tree.addChild(5);
    expect(tree.contains(5)).toBe(true);
  });


  it("Adding children and grand children", function() {
    tree.addChild(0);
    tree.addChild("Hello");
    tree.addChild(false);
    tree.children[1].addChild(5);
    expect(tree.contains(5)).toBe(true);
  });

  it("remove parent", function() {
    tree.addChild(0);
    tree.addChild("Hello");
    tree.addChild(false);
    tree.children[1].addChild(5);
    tree.children[1].children[0].removeFromParent();
    expect(tree.contains(5)).toBe(false);
  });

   it("depthFirstLog", function() {
    tree.addChild(0);
    tree.addChild("Hello");
    tree.addChild(false);
    tree.children[1].addChild(5);
    // Creating an array and logging the values of
    // of the tree in a DFS and checking the order
    // using the location inside the array.
    
    var temp =[];
    var fn = function() {temp.push(this.value)};
    tree.depthFirstLog(fn);
    expect(temp[0]).toBe(undefined);
    expect(temp[3]).toEqual(5);
  });



  // Add more tests here to test the functionality of tree.
});