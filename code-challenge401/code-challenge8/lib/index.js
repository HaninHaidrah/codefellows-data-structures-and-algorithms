'use strict'


const LinkedList = require('../lib/linked-list.class');



const data = new LinkedList();

data.append(1);
data.append(2);
data.append(3);
data.append(4);
console.log(data)


const data1= new LinkedList();
data1.append(7)
data1.append(10)
console.log(data1)

const lists=new LinkedList();
console.log(lists.zipLists(data,data1))
// console.log(lists)

