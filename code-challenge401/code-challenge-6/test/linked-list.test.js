'use strict';

const LinkedList=require('../lib/linked-list.class');

describe('linked-list test',()=>{
    
  it("Can successfully insert a node before a node located in the middle of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertBefore("b", "z");
    expect(ll.head.value).toEqual("a");
    expect(ll.head.next.value).toEqual("z");
    expect(ll.head.next.next.value).toEqual("b");
  });

  // it("Can successfully insert a node before the first node of a linked list", () => {
  //   const ll = new LinkedList();
  //   ll.append("a");
  //   ll.append("b");
  //   ll.insertBefore("a", "z");
  //   expect(ll.head.value).toEqual("z");
  //   expect(ll.head.next.value).toEqual("a");
  //   expect(ll.head.next.next.next).toEqual(null);
  // });

  it("Can successfully insert after a node in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertAfter("b", "z");
    expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next.next.value).toEqual("z");
    expect(ll.head.next.next.next.value).toEqual("c");
  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.insertAfter("b", "z");
    expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next.next.value).toEqual("z");
    expect(ll.head.next.next.next).toEqual(null);
  });
    })

