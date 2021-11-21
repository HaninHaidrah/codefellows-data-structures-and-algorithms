
const Node = require('./node.class');
const BinaryTree =require('./binaryTree');
// const BinarySearchTree=require('./binarySearchKey');


const bt=new BinaryTree();
// const btSearch=new BinarySearchTree();
bt.root= new Node(1,new Node(2,new Node(4),new Node(12)),new Node(3,new Node(8),new Node(7)))
console.log(bt.max());

// console.log(bt.postOrder());
// console.log(btSearch.add(4))
// console.log(btSearch.add(5))
// console.log(btSearch.add(6))
// console.log(btSearch.add(7))
// console.log(btSearch.add(2))
// console.log(btSearch.add(3))
// console.log(btSearch.add(1))
// console.log(btSearch.contains(3))




// console.log(btSearch);