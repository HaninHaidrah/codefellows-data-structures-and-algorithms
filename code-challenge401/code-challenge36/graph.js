"use strict";
let Edge = require("./edge");

class Graph {
  constructor() {
    this.list = new Map();
  }
  addVertexNode(vertex) {
    this.list.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      console.log("Invaild nodes");
    }
    const edge = new Edge(endVertex, weight);
    const start = this.list.get(startVertex);
    start.push(edge);
  }

  getNeighbours(vertex) {
    if (!this.list.has(vertex)) {
      console.log("Neighbers NOT FOUND!");
      return;
    }
    return this.list.get(vertex);
  }

  printAll() {
    for (const [vertex, edge] of this.list.entries()) {
      console.log(" vertex : ", vertex, " Edge : ", edge);
    }
  }
  getNodes() {
    return this.list.entries();
  }

  getSize() {
    return this.list.size;
  }

  // for testing :
  included(vertex) {
    return this.list.get(vertex) ? true : false;
  }
  isEmpty() {
    return this.list.size > 0 ? false : null;
  }



  // a method to trverse ::


  breadthFirst(node){
    const queue = [node];
    const output = [];
    const visited = {};
    let temp;
    visited[node] = true;

    while(queue.length){
      temp = queue.shift();
        output.push(temp);
       

        this.list[temp].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return output;
}


}

module.exports = Graph;
