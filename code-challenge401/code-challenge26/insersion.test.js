"use strict";

const sort = require("./insersion-sort");

describe("the sort", () => {
  test("can sort array from min to max", () => {
    expect(sort([8, 4, 42, 24, 16, 15])).toEqual([4, 8, 15, 16, 24, 42]);

  });
  test("can sort array from min to max", () => {
      const arr=[8, 4, 42, 24, 16, 15]
    expect(sort(arr)).toEqual([4, 8, 15, 16, 24, 42]);
    expect(arr.length).toEqual(6)
    
  });

  test("can sort array from min to max", () => {
    const arr=[8, 4, 42, 24, 16, 15]
  expect(sort(arr)).toEqual([4, 8, 15, 16, 24, 42]);
  expect(arr[5]).toEqual(42)
  
});

});
