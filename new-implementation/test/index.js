'use strict'


const LinkedList = require('../test/linked-list.class');



const data = new LinkedList();

// data.append(1);
// data.append(2);
// data.append(3);
// data.append(4);
data.include(2)
data.insertBefore(2,4)

console.log(data)
console.log(data.insertBefore(2,4))

