describe("doubleLinkedList", function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = new DoubleLinkedList ();
  });

  it("Should have an addToTail method",function(){
    expect(doubleLinkedList.addToTail). toEqual(jasmine.any(Function));
  });

  it("After adding a node using addToTail, contains should return true for that node's value",function(){
    doubleLinkedList.addToTail("1");
    expect(doubleLinkedList.contains("1")).toEqual(true);
    expect(doubleLinkedList.contains("4")).toEqual(false);
  });

  it("Get the previous node",function(){
    doubleLinkedList.addToTail("1");
    doubleLinkedList.addToTail("2");
    doubleLinkedList.addToTail("3");
    var temp = doubleLinkedList.getPrevious(doubleLinkedList.getNodeWithTarget("3"));
    expect(doubleLinkedList.getValue(temp)).toEqual("2");
    expect(doubleLinkedList.getValue(temp)).toNotEqual("1");
  });



});
