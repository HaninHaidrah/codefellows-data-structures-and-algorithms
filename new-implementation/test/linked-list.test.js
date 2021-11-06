'use strict';

const { expect } = require('@jest/globals');
const linked_list=require('./linked-list.class');

describe('linked-list test',()=>{
    test('Can successfully instantiate an empty linked list',()=>{
        const newList = new linked_list();
        expect(newList.head).toBeNull();
        
    })
    test('Can properly insert into the linked list',()=>{
        const newlist = new linked_list();

        newlist.append(1);
    
        expect(newlist.head.value).toEqual(1);

         //Can properly insert multiple nodes into the linked list
        newlist.append(2);
    
         //The head property will properly point to the first node in the linked list

        expect(newlist.head.value).toEqual(1);

    })

    test('Will return true when finding a value within the linked list that exists',()=>{
        const newlist = new linked_list();

        newlist.append(1);
     expect(newlist.head).toBeDefined;

    })
    test('Can properly return a collection of all the values that exist in the linked list',()=>{
        const newlist = new linked_list();
        newlist.append(1);
        newlist.append(2);



        expect(newlist).toEqual({"head": {"next": {"next": null, "value": 2}, "value": 1}});

    })

})