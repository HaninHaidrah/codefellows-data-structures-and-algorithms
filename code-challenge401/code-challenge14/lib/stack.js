
const Node = require('./node.class');


class Stack {

  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    if (this.isEmpty()) { 
      const newNode = new Node(value);
      this.top = newNode;

    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  }
  pop() {
    if (this.isEmpty()) {
      console.log('No Nodes are left in your stack');
      return false;
    }
    const temp = this.top; 
    this.top = this.top.next;
    temp.next = null; 
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      return ' no Nodes in the stack'
    }
    return this.top.value;
  }
  isEmpty() {
    return this.top === null;
  }

  getMax(){
    // check if empty return null
    // create max variable;
    // traverse into the stack (while this.top)
    // function to find the max number and return it 
    if (this.isEmpty()) {
      return ' null'
    }
    const temp=this.top
    const max=0
    while(temp){
      max=Math.max(max,temp.value)
      temp=temp.next
    }
    return max
  }
}


module.exports = Stack;