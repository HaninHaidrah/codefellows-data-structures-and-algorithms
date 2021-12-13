const Hahtable = require('./hashed');

function repeated(string) {
  let words = string.toLowerCase().split(' ');
  let hashtable = new Hahtable(words.length);
  for (let i = 0; i < words.length; i++) {
    if (!hashtable.contain(words[i])) {
        hashtable.add(words[i], words[i]);
    } else {
      return words[i];
    }
  }
  return "found no repeated word";
}
module.exports=repeated;