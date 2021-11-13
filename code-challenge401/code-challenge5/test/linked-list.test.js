'use strict';

const LinkedList=require('../lib/linked-list.class');

describe('linked-list test',()=>{
    it("Can successfully instantiate an empty linked list", () => {
        const linkList = new LinkedList();
        expect(linkList).toBeDefined();
        expect(linkList.head).toBeNull();
      });
    
      it("Can properly insert into the linked list", () => {
        const ll = new LinkedList();
        ll.insert("1");
        expect(ll.head.value).toEqual("1");
        expect(ll.head.next).toBeNull();
      });
    
      it("The head property will properly point to the first node in the linked list", () => {
        const ll = new LinkedList();
        ll.insert("1");
        ll.insert("2");
        expect(ll.head.value).toEqual("1");
        expect(ll.head.next.value).toEqual("2");
      });
    
      it("Can properly insert multiple nodes into the linked list", () => {
        const ll = new LinkedList();
        ll.insert("1");
        ll.insert("2");
        ll.insert("3");
        expect(ll.head.value).toBeDefined();
        expect(ll.head.next.value).toBeDefined();
        expect(ll.head.next.next.value).toBeDefined();
      });
    
      it("Will return true when finding a value within the linked list that exists", () => {
        const ll = new LinkedList();
        ll.insert("1");
        ll.insert("2");
        ll.insert("3");
        expect(ll.includes("2")).toBeTruthy();
        expect(ll.includes("1")).toBeTruthy();
        expect(ll.includes("3")).toBeTruthy();
      });
    
      it("Will return false when searching for a value in the linked list that does not exist", () => {
        const ll = new LinkedList();
        ll.insert("1");
        expect(ll.includes("2")).toBeFalsy();
      });
    
      it("Can properly return a collection of all the values that exist in the linked list", () => {
        const ll = new LinkedList();
        ll.insert("a");
        ll.insert("b");
        ll.insert("c");
        expect(ll.toString()).toBeDefined();
        expect(ll.toString().length).toBeGreaterThan(0);
        expect(ll.toString()).toEqual("{ a } -> { b } -> { c } -> X");
      });
    })

