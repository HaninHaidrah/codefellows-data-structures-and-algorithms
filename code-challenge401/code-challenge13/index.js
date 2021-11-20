"use strict";

function validateBrackets(string) {
  // roundBrackets = "()"
  //squareBrackets = []
  //Curly Brackets : {}
  let array = [];

    let openBrackets = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closedBrackets = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < string.length; i++) {


        if (openBrackets[string[i]]) {
            array.push(string[i]);
        } else if (closedBrackets[string[i]]) {
            if (openBrackets[array.pop()] !== string[i]) return false;
        }
    }
    return array.length === 0;
}

module.exports=validateBrackets
console.log(validateBrackets("(){}("));
console.log(validateBrackets("(){}()"));

