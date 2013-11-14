describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
it("If nothing has been added contains is always false", function() {
    expect(linkedList.contains("5")).toEqual(false);
    expect(linkedList.contains("no")).toEqual(false);

  });

  it("Check addToTail and contains", function() {
    linkedList.addToTail("5");
    expect(linkedList.contains("5")).toEqual(true);
    expect(linkedList.contains("no")).toEqual(false);
  });

  it("Check removeTail and contains", function() {
    linkedList.addToTail("5");
    linkedList.addToTail("100");
    expect(linkedList.removeHead()).toEqual("5");
    expect(linkedList.contains("5")).toEqual(false);
  });

});