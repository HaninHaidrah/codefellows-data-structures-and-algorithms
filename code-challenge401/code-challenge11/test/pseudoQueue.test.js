'use strict';
const PseudoQueue = require('../lib/PseudoQueue');

describe('Pseudo-Queue', ()=>{
  it('Enqueue', ()=>{
    const pQueue = new PseudoQueue();
    pQueue.enqueue('a');
    pQueue.enqueue('b');
    pQueue.enqueue("c");
    expect(pQueue.stack1.top.value).toEqual("a");
    expect(pQueue.stack1.top.next.value).toEqual("b");
    expect(pQueue.stack1.top.next.next.value).toEqual("c");
  });

  it('Dequeue', ()=>{
    const pQueue = new PseudoQueue();
    pQueue.enqueue("a");
    pQueue.enqueue("b");
    pQueue.enqueue("c");
    expect(pQueue.dequeue()).toEqual("a");
    expect(pQueue.dequeue()).toEqual("b");
    expect(pQueue.dequeue()).toEqual("c");
  });
});