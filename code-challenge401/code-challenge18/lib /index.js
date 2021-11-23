
const Node = require('./node.class');
const BinaryTree =require('./binaryTree');
const fuzzBuzz=require('./fuzz-buzz-tree');

const bt=new BinaryTree();
const bts= new BinaryTree()
bts.root= new Node('I')
bt.root= new Node(1,new Node(2,new Node(4),new Node(12)),new Node(3,new Node(8),new Node(7)))
// console.log(bt.breadth());
console.log(fuzzBuzz(bt));
console.log(typeof (bts.root.value));







// console.log(btSearch);