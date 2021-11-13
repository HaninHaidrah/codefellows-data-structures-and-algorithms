'use strict'


const LinkedList = require('./linked-list.class');



const data = new LinkedList();

console.log(data.insert(1),"insert");
console.log(data.insert(2));
console.log(data.includes(1),"include");
console.log(data.toString(),"toString")


// data.append(3);
// data.append(4);
// data.include(2)


