"use strict";

const k_tree=require('../lib /k-tree')
const Node = require("../lib /node.class");
// const Queue=require('../lib /queue');
const fuzzBuzz = require("../lib /fuzz-buzz-tree");

let tree = new k_tree();
tree.root= new Node(1,new Node(15,new Node(7,new Node(9,new Node(50)))))


describe("fuzz buzz function  ", () => {
  it("Can successfully return fuzz or buzz or 'value' ", () => {
    expect(fuzzBuzz(tree)).toEqual([ '1', 'FizzBuzz', '7', 'Fizz', 'Buzz' ]);
  });
 
  it("Can return its 'the tree is empty' if if the tree is empty", () => {
    let emptyTree = new k_tree();
    expect(fuzzBuzz(emptyTree)).toEqual('the tree is empty');
  });
  it("Can return the input should be a number if the typeof tree.root==string ", () => {
    let stringTree = new k_tree();
    stringTree.root=new Node('hi')
    expect(fuzzBuzz(stringTree)).toEqual('the input should be a number');
  });
});
