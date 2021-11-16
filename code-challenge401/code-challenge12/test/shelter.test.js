'use strict';
const AnimalShelter = require('../lib/ animalShelter');

describe('Queue', ()=>{
  it('can add a new object Enqueue', ()=>{
    const animal = new AnimalShelter();
    animal.enqueue({
      name:'donk',
      type:"cat"
    });
    animal.enqueue({
      name:'msh',
      type:"dog"
    });
    expect(animal.front.value).toEqual({
      name:'donk',
      type:"cat"
    });
    expect(animal.rear.value).toEqual({
      name:'msh',
      type:"dog"
    });
  });

  it('delete the First In first out', ()=>{
    const animal = new AnimalShelter();
    animal.enqueue({
      name:'donk',
      type:"dog"
    });
    animal.enqueue({
      name:'msh',
      type:"cat"
    });
    animal.enqueue({
      name:'msh',
      type:"dog"
    });
    expect(animal.dequeue('dog')).toEqual({
      name:'donk',
      type:"dog"
    });
  });

  it('return a warn msg if the input isnt not dog or cat', ()=>{
    const animal = new AnimalShelter();
    animal.enqueue({
      name:'donk',
      type:"dog"
    });
    animal.enqueue({
      name:'msh',
      type:"cat"
    });
    animal.enqueue({
      name:'msh',
      type:"dog"
    });
    expect(animal.enqueue('cow')).toEqual('you should inter dog or cat');
  });


  it('return a null msg if the input(pref) isnt not dog or cat ', ()=>{
    const animal = new AnimalShelter();
    animal.enqueue({
      name:'donk',
      type:"dog"
    });
    animal.enqueue({
      name:'msh',
      type:"cat"
    });
    animal.enqueue({
      name:'msh',
      type:"dog"
    });
    expect(animal.dequeue('cow')).toEqual(' null');
  });
});