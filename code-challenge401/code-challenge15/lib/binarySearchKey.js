"use strict";
const BinaryTree = require("./binaryTree");
const Node = require("./node.class");

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }
  //   add(value) {
  //     let node = new Node(value);
  //     let addValue = (current, node) => {
  //       if (node.value < current.value) {
  //         if (!current.left) {
  //           current.left = node;
  //         } else {
  //           addValue(current.left, node);
  //         }
  //       } else {
  //         if (!current.right) {
  //           current.right = node;
  //         } else {
  //           addValue(current.right, node);
  //         }
  //       }
  //     };

  //     if (!this.root) {
  //       this.root = node;
  //     } else {
  //       addValue(this.root, node);
  //     }
  //

  add(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      _addHelper(node, this.root);
    }

    function _addHelper(value, node) {
      if (value.value > node.value) {
        if (node.right !== null) {
          _addHelper(value, node.right);
        } else {
          node.right = value;
        }
      } else {
        if (node.left !== null) {
          _addHelper(value, node.left);
        } else {
          node.left = value;
        }
      }
    }
  }
  contains(value) {
    if (!this.root.value) {
      return false;
    }
    // create recrucion function:
    function _containHelper(node, value) {
      if (node.value === value) {
        return true;
      } else if (value > node.value) {
        if (node.right !== null) {
         return _containHelper(node.right, value);
        } else {
          return false;
        }
      } else {
        if (node.left !== null) {
          return _containHelper(node.left, value);
        } else {
          return false;
        }
      }
    }
    return _containHelper(this.root, value);

    // let searchValue = (current, value) => {
    //   if (current.value === value) {
    //     return true;
    //   } else if (current.value > value) {
    //     if (!current.left) {
    //       return false;
    //     }
    //     return searchValue(current.left, value);
    //   } else {
    //     if (!current.right) {
    //       return false;
    //     }
    //     return searchValue(current.right, value);
    //   }
    // };

    // return searchValue(this.root, value);
  }
}

// console.log(expextedValue);

module.exports = BinarySearchTree;
