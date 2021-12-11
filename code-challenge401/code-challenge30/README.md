# Hashtables
*a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.*

## Challenge
*Implement a Hashtable Class with  following methods in API*

## Approach & Efficiency
 - Hash tables guarantee O(1) expected worst case time if you pick your hash function uniformly at random from a universal family of hash functions. Expected worst case is not the same as average case.
 - For hashmap, with the increase of the number of entries, the hashmap's space will increase linearly. So space complexity is O(n)
## API
1. add() : This method  hash the key, and add the key and value pair to the table, handling collisions as needed.
2. get() : Returns: Value associated with that key(hashed) in the table.
3. contains() : Returns: true or false, indicating if the key exists in the table already.
4. hash (); Returns: Index in the collection for that key

