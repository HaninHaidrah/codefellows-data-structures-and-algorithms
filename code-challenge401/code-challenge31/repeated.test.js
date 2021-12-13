const repeatedWord=require('./repeatedWord');

describe('Repeted or not ',()=>{
  it('should return the firs word that has been repeted',()=>{
    let string=' hello from my world from the magic';
    expect(repeatedWord(string)).toEqual("from");
  });
  it('should return the repeated world even it starts with capital letter',()=>{
    let string=' hello from my world From the magic';
    expect(repeatedWord(string)).toEqual("from");
  });
  it('return null if there not repeated word ',()=>{
    let string=' hello from my world where is the magic';
    expect(repeatedWord(string)).toEqual("found no repeated word");
  });
});