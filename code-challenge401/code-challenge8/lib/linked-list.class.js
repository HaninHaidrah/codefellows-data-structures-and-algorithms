
'use strict';
const Node = require('./node.class');
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

// use them for testing only:
  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `{ ${currentNode.value} }->`;
      currentNode = currentNode.next;
      if (!currentNode) {
        string += "X";
      }
    }
    return string;
  }
// use it to append nodes:
  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  zipLists(linked1, linked2) {

    let newList = new LinkedList();

      // check if the heads for them empty:
    if (!linked1.head) {
      return linked2;
    }

    if (!linked2.head) {
      return linked1;
    }

    if (!linked1.head && !linked2.head) {
      return console.log('cant find inputs');
    }
  // declare the variables-pointers:

    newList.append(linked1.head.value);
    newList.append(linked2.head.value);
    let currentL1 = linked1.head;
    let currentL2 = linked2.head;
    let x;

      // identify which one is longer;


    if (linked1.length >= linked2.length) {
      x = linked1.length;
    } else {
      x = linked2.length;
    }

      // loop through them and append the nodes.

    for (let i = 0; i < x; i++) {

      if (currentL1.next) {
        newList.append(currentL1.next.value);
        currentL1 = currentL1.next;
      }

      if (currentL2.next) {
        newList.append(currentL2.next.value);
        currentL2 = currentL2.next;
      }
    }

    return newList;

  }
  

}

module.exports=LinkedList;

