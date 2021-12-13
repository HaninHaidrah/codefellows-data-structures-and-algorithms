"use strict";

const Node = require("./node.class");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  //Adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value) {
    let newNode = new Node(value);
    this.size = this.size + 1;
    this.head = newNode;
    newNode.next = this.head;
    return this;
  }
  // Indicates whether that value exists as a Node’s value somewhere within the list.
  includes(given) {
    let pointer = this.head;
    while (pointer.value !== given) {
      pointer = pointer.next;
      if (pointer === null) {
        return false;
      }
    }

    return true;
  }
  
  // append to the end:
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
  }

  // Returns: a string representing all the values in the Linked List, formatted as:
  //"{ a } -> { b } -> { c } -> NULL"
  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
      if (!currentNode) {
        string += "X";
      }
    }
    return string;
  }
}

module.exports = LinkedList;
