'use strict';
const node=require('./node.class')
class MaxStack{
constructor(){
this.top=null;
this.max=null;
}
// push modifying:
// 1. check if the stack is empty empty return null;
// 2 . create push method has a value 
// 3. write a compare function to check if the value is >= max 
//
// 4. create new node with the value
// 5 . pointer(top)= newnode.next
// 6 if not create newnode with the max value 
// 7 pointer(top)= newnode.next
push(value) {
    if (this.isEmpty()) { 
      const newNode = new Node(value);
      this.max=newNode
      this.top = newNode;
    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      
    }

  }

}