'use strict';
const LinkedList=require('../lib/linked-list.class');
describe('LinkedList', () => {});

it('can gather two listed one by one',()=>{
  let newList = new LinkedList();
  let l1=new LinkedList();
  l1.append("a");
  l1.append("b");
  l1.append("c");

  let l2=new LinkedList();
  l2.append(1);
  l2.append(2);
  l2.append(3);
  expect(newList.zipLists(l1,l2).toString()).toEqual('{ a }->{ 1 }->{ b }->{ 2 }->{ c }->{ 3 }->X');
});

// edge cases:
it('can return the unempty linkedlist if the other is empty',()=>{
  let newList = new LinkedList();
  let l1=new LinkedList();
  let l2=new LinkedList();
  l1.append("a");
  l1.append("b");
  l1.append("c");
  l1.append("d");
  l1.append("e");
  expect(newList.zipLists(l1,l2).toString()).toEqual('{ a }->{ b }->{ c }->{ d }->{ e }->X');
});

//// edge cases:
it('can return no input if the two linked lists are empty',()=>{
  let newList = new LinkedList();
  let l1=new LinkedList();
  let l2=new LinkedList();

  expect(newList.zipLists(l1,l2).toString()).toEqual("");
});
