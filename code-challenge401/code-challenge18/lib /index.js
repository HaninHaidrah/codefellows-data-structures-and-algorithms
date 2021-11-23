
const Node = require('./node.class');
const fuzzBuzz=require('./fuzz-buzz-tree');
const KT=require('./k-tree');

const kt=new KT();
kt.root= new Node(1,new Node(15,new Node(7,new Node(9,new Node(50)))))
console.log(fuzzBuzz(kt));







