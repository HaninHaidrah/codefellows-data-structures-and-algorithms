"use strict";

const binaryTree = require("../lib /binaryTree");
const Node = require("../lib /node.class");
const Queue = require("../lib /queue");

let tree = new binaryTree();
tree.root = new Node(
  1,
  new Node(2, new Node(4), new Node(12)),
  new Node(3, new Node(8), new Node(7))
);

describe("breadth traverse  ", () => {
  it("Can successfully read values by using breadth traverse", () => {
    expect(tree.breadth()).toEqual([1, 2, 3, 4, 12, 8, 7]);
  });
  it("Can successfully read values if its not empty", () => {
    expect(tree.root.value).toEqual(1);
  });
  it("Can return its null if if the tree is empty", () => {
    let emptyTree = new binaryTree();
    expect(emptyTree.breadth()).toEqual("its empty tree");
  });
});
