"use strict";

const binaryTree = require("../lib /binaryTree");
const Node = require("../lib /node.class");
const fuzzBuzz = require("../lib /fuzz-buzz-tree");

let tree = new binaryTree();
tree.root = new Node(
  1,
  new Node(2, new Node(4), new Node(12)),
  new Node(3, new Node(8), new Node(7))
);

describe("fuzz buzz function  ", () => {
  it("Can successfully return fuzz or buzz or 'value' ", () => {
    expect(fuzzBuzz(tree)).toEqual([ '1', '2', '4', 'Fizz', 'Fizz', '8', '7' ]);
  });
 
  it("Can return its 'the tree is empty' if if the tree is empty", () => {
    let emptyTree = new binaryTree();
    expect(fuzzBuzz(emptyTree)).toEqual('the tree is empty');
  });
  it("Can return the input should be a number if the typeof tree.root==string ", () => {
    let stringTree = new binaryTree();
    stringTree.root=new Node('hi')
    expect(fuzzBuzz(stringTree)).toEqual('the input should be a number');
  });
});
