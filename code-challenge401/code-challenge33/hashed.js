"use strict";
const LinkedList = require("./linked-list.class");

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  //hash the key, and add the key and value pair to the table, handling collisions as needed :
  add(key, value) {
    const hash = this.hash(key);
    const entry = { [key]: value };
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    this.map[hash].append(entry);
  }
  // Returns: Value associated with that key(hashed) in the table.
  get(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return null;
    let i = this.map[hash];
    let temp = i.head;
    if (!temp) return "does not exiset";
    if (temp.value[key]) return temp.value[key];
    while (temp.next) {
      temp = temp.next;
      if (temp.value[key]) return temp.value[key];
    }
  }
  //Returns: true or false, indicating if the key exists in the table already.
  contain(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return false;
    let i = this.map[hash];
    let temp = i.head;
    if (!temp) return false;
    if (temp.value[key]) return true;

    while (temp.next) {
      temp = temp.next;
      if (temp.value[key]) return true;
    }
  }
  //Returns: Index in the collection for that key
  hash(key) {
    const assciSum = key.split("").reduce((p, n) => p + n.charCodeAt(0), 0);
    const withPrime = assciSum * 599;
    return withPrime % this.size; // 0-10, 0-1024
  }
}

module.exports = HashMap;
