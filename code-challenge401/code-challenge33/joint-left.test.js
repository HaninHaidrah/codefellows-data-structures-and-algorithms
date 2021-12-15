const leftJoin = require("./hashmap-left-join");
const Hash = require("./hashed");

describe("HASH LEFT JOIN TESTS", () => {
  let hashTable1;
  let hashTable2;

  beforeAll(() => {
    hashTable1 = new Hash(50);
    hashTable1.add("name", "hanin");
    hashTable1.add("age", "twentyfive");
    hashTable1.add("nationality", "yemeni");
    hashTable1.add("fav-colour", "purble");
    hashTable1.add("hobby", "cooking");

    console.log(hashTable1);


    hashTable2 = new Hash(50);
    hashTable2.add("name", "ali");
    hashTable2.add("age", "ninteen");
    hashTable2.add("nationality", "jordanian");
    hashTable2.add("hobby", "driving");
    hashTable2.add("food", "rice");
    console.log(hashTable2);

   
  });

  it("Return the left join between two hashmaps", () => {

    expect(leftJoin(hashTable1, hashTable2)).toEqual([["nationality", "yemeni", "jordanian"], ["hobby", "cooking", "driving"], ["fav-colour", "purble", "empty"], ["name", "hanin", "ali"], ["age", "twentyfive", "ninteen"]]);
  });
});
