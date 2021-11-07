"use strict";

const Node = require("./node.class");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this;
  }

  include(value){
    
    if (!this.head) {
      return "not found";
    }

    let temp = this.head;
    console.log(`temp : ${this.head}`)
    while (temp.value !== value) {
      // temp = temp.next;
      // index++;
      // console.log(this.head.value)
    }

    if ((temp = null)) {
      return "value not found";
    }

    return 'true';
  }

  insertBefore(value, newValue) {
    // const index = 0;
    // if (!this.head) {
    //   return "not found";
    // }
    // const temp = this.head;
    // while (this.head.value !== value) {
    //   temp = temp.next;
    //   index++;
    // }
    // if ((temp = null)) {
    //   return "value not found";
    // }
    // // return index;
    //  this.head= new Node(newValue);
    //  this.tail=this.head;
    //  temp=this.tail;

     console.log(`hello================================`)

  
  }

}

module.exports = LinkedList;
