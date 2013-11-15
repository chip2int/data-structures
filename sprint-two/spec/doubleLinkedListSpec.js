describe("doubleLinkedList", function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = new DoubleLinkedList ();
  });

  it("Should have an addToTail method",function(){
    expect(doubleLinkedList.addToTail). toEqual(jasmine.any(Function));
  });

  // add more tests!
});
