"use strict";
const Node = require("./node.class");

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(animal) {
    // edge casescheck the type of animal is either dog or cat
    if (animal.type !== "dog" && animal.type !== "cat") {
      return "you should inter dog or cat";
    }
    let newNode = new Node(animal);

    //edgecases check if the queu is empty
    if (!this.front) {
      this.front = newNode;
      newNode.next = this.front;
      this.length++;
      return this;
    }
    this.rear = newNode;
    newNode.next = this.rear;
    this.length++;

    return this;
  }

  dequeue(pref) {
    if (pref !== "cat" && pref !== "dog") {
      return " null";
    }

    for (let i = 0; i > this.length; i++) {
      while (this.front.value.type !== pref) {
      return  this.front = this.front.next;
      } 
        let temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        return temp.value;
      
    }
  }
}
module.exports = AnimalShelter;
