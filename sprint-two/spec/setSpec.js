describe("set", function() {
  var set;

  beforeEach(function() {
    set = new makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("After creating an new set, contains should be false because the set has no values'", function() {
    expect(set.contains(5)).toEqual(false);
  });

  it("After adding a value to the set, contains is able to find the value", function() {
    set.add(5);
    expect(set.contains(5)).toEqual(true);
  });


  it("After adding a value to the set and then removing it, contains is not able to find that value", function() {
    set.add(5);
    set.remove(5);
    expect(set.contains(5)).toEqual(false);
  });

  it("After adding a value to the set and then removing it, contains is not able to find that value", function() {
    set.add("Hello");
    set.remove(5);
    expect(set.contains(5)).toEqual(false);
    expect(set.contains("Hello")).toEqual(true);

  });
});