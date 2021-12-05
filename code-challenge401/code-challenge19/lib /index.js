
const Node = require('./node.class');
const BinaryTree =require('./binaryTree');
const compareFiles=require('./compareFiles')


const bt=new BinaryTree();
const bt2=new BinaryTree();

bt.root= new Node('folder',new Node('folder',new Node('.js'),new Node('.css')),new Node('folder',new Node('folder'),new Node('.html')))
bt2.root= new Node('folder',new Node('folder',new Node('.html'),new Node('.css')),new Node('folder',new Node('folder'),new Node('.html')))
console.log(compareFiles(bt,bt2));






// console.log(btSearch);