"use strict";
const Node = require("./node.class");
class binaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // symantic errors
  IsEmpty() {
    if (this.root === null) {
      return "its empty class";
    }
  }

  // pre order method:
  preOrder() {
    // recrusion Function:

    let array = [];
    function _recrusion(node) {
      array.push(node.value);
      console.log(array);
      if (node.left !== null) {
        _recrusion(node.left);
      }
      if (node.right !== null) {
        _recrusion(node.right);
      }
    }

    _recrusion(this.root);
    return array;
  }

  inOrder() {
    // recrusion Function:
    let array = [];
    function _recrusion(node) {
      console.log(array);
      if (node.left !== null) {
        _recrusion(node.left);
      }
      array.push(node.value);

      if (node.right !== null) {
        _recrusion(node.right);
      }
    }
    _recrusion(this.root);
    return array;
  }

  postOrder() {
    // recrusion Function:
    let array = [];
    function _recrusion(node) {
      console.log(array);
      if (node.left !== null) {
        _recrusion(node.left);
      }

      if (node.right !== null) {
        _recrusion(node.right);
      }
      array.push(node.value);
    }
    _recrusion(this.root);
    return array;
  }

  max() {
    // recrusion Function:

    let max = this.root.value;
    function _recrusion(node) {
      if (node.left !== null) {
        _recrusion(node.left);
      }

      if (node.right !== null) {
        _recrusion(node.right);
      }

      if(max<node.value){max=node.value}

    }

    _recrusion(this.root);
    return max;
  }
}

module.exports = binaryTree;
