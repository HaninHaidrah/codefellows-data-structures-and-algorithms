'use strict'


const LinkedList = require('../lib/linked-list.class');



const data = new LinkedList();

data.append(1);
// data.append(2);
console.log(data.insert(2))
// console.log(data.insert(7))
// console.log(data)
// data.append(3);
// data.append(4);
// console.log("  before adding :",data)

// data.insertAfter(2,9)
// console.log(" insert before:",data)
console.log(data.insertBefore(2,7))
// console.log(" insert after:",data)





