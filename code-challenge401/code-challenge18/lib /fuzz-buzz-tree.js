"use strict";
const Queue = require("./queue");
const KTQueue = new Queue();

function fuzzBuzz(k) {
  let arr = [];

  if (!k.root) {
    return "the tree is empty";
  }

  if (typeof k.root.value === "string") {
    return "the input should be a number";
  }

  KTQueue.enqueue(k.root);

  while (KTQueue.peek()) {
    // dequeue the front and then do the functionlaty:
    KTQueue.front = KTQueue.dequeue();

    if (KTQueue.front.value % 5 === 0 && KTQueue.front.value % 3 === 0) {
      arr.push("FizzBuzz");
    } else if (KTQueue.front.value % 5 == 0) {
      arr.push("Buzz");
    } else if (KTQueue.front.value % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(`${KTQueue.front.value}`);
    }

    if (KTQueue.front.children) {
      KTQueue.enqueue(KTQueue.front.children);
    }
  }
  return arr;
}

module.exports = fuzzBuzz;
