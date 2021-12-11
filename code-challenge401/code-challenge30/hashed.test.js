'use strict';
'use strict';

const Hashmap = require('./hashed');

describe('hash table', () => {
  it('Add a key/value ', () => {
    let hash = new Hashmap(10);
    let expected = 'hanin';
    hash.add('person', 'hanin');

    expect(hash.contain('person')).toBe(true);
    expect(hash.get('person')).toEqual('hanin');
  });

  it('Retrieving based on a key returns the value stored', () => {
    let hashtable = new Hashmap(10);
    let expected = 'hanin';
    hashtable.add('person', 'hanin');

    expect(hashtable.contain('person')).toBe(true);
    expect(hashtable.get('person')).toEqual(expected);
    expect(hashtable.get('age')).toEqual(null);
  });

  it('Successfully handle a collision within the hashtable', () => {
    let hashtable = new Hashmap(5);
    hashtable.add('name', 'hanin');
    hashtable.add('eman', 'mus');

    let operation = hashtable.map[hashtable.hash('name')].head.next.value['eman'];
    expect(hashtable.contain('eman')).toBe(true);
    expect(operation).toEqual('mus');
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashtable = new Hashmap(10);
    hashtable.add('name', 'hanin');
    hashtable.add('eman', 'mus');

    let result = hashtable.map[hashtable.hash('name')].head.next.value['eman'];
    expect(hashtable.get('eman')).toBe('mus');
    expect(result).toEqual('mus');
  });

  it('Successfully hash a key to an in-range value',()=>{
    let hashtable = new Hashmap(10);
    let min=0;
    let max=9;
    let key='hanin';
    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(min);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(max);
  });
});