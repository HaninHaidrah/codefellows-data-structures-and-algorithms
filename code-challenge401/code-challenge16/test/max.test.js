"use strict";

const binaryTree = require("../lib/binaryTree");
const Node = require("../lib/node.class");

let tree = new binaryTree();
tree.root = new Node(
  1,
  new Node(2, new Node(4), new Node(12)),
  new Node(3, new Node(8), new Node(7))
);

describe("Binary Search Max ", () => {
  it("Can successfully find the max", () => {
    expect(tree.max()).toEqual(12);
  });

 
});
