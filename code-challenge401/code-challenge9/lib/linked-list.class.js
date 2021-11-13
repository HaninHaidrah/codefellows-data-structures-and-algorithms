"use strict";

const Node = require("./node.class");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length=0;
  }
  
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentValue = this.head;
      while (currentValue.next) {
        currentValue = currentValue.next;

      }
      currentValue.next = node;
    }
    this.length++;

  }
zipLists(linked1,linked2){
  let zipList=new LinkedList();
  // check if the heads for them empty:
  if(!linked1.head){
    return linked2
  }
  if(!linked2.head){
    return linked1
  }

  // declare the variables-pointers:
  let temp1=linked1.head;
  let temp2=linked2.head;
  let longLength;

  // identify which one is longer;
  if(linked1.length>=linked2.length){
    longLength=linked1.length;
  }else{
    longLength=linked2.length
  }

  // loop through them and append the nodes.

  for(let i=0;i>longLength;i++){
    //go through the first one:
    while(temp1.next){
      zipList.append(temp1.next.value)
      temp1=temp1.next
    }
    while(temp2.next){
      zipList.append(temp2.next.value);
      temp2=temp2.next
    }
  }

return zipList;
}
}


module.exports=LinkedList;