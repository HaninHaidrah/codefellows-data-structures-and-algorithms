'use strict'
const AnimalShelter=require('./ animalShelter')


const animals= new AnimalShelter()
// console.log(animals.enqueue('hggf'))

console.log(animals.enqueue({name:'jackey',type:'dog'}))
console.log(animals.enqueue({name:'msh',type:'cow'}))
console.log(animals.enqueue({name:'nm',type:'cat'}))
console.log(animals.enqueue({name:'hesky',type:'dog'}))
console.log(animals.dequeue('cat'),'=====================')
// console.log(animals)







