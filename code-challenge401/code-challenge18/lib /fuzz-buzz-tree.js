"use strict";
const BT = require("./binaryTree");

function fuzzBuzz(k) {
  let arr = [];

  if(!k.root){
      return ('the tree is empty')
  }

  if( typeof k.root.value === 'string'){
    return ('the input should be a number')
}
   // pseduo code
  // if node.value/5==0 arr.push(buzz)
  // else if node.value/3==0 arr.push(fuzz)
  // else if node.value/ && node.value arr.push(bzzfuzz)
  // else arr.push('node.value')
  // preorder() traverse

  while (k.root) {
    // recrusion function:
    function _fuxxBuzzHelper(node) {
      if (node.value % 5===0 && node.value % 3===0) {
          console.log(node.value)
        arr.push("FizzBuzz");
      } else if (node.value % 5==0) {
        arr.push("Buzz");
      } else if (node.value % 3===0) {
        arr.push("Fizz");
      } else {
        arr.push(`${node.value}`);
      }

      if (node.left) {
        _fuxxBuzzHelper(node.left);
      }
      if (node.right) {
        _fuxxBuzzHelper(node.right);
      }
    }
    _fuxxBuzzHelper(k.root);
    return arr;
  }
}

module.exports = fuzzBuzz;
