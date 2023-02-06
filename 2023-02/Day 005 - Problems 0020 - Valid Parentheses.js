/**
  20. Valid Parentheses
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.


  Example 1:

  Input: s = "()"
  Output: true
  Example 2:

  Input: s = "()[]{}"
  Output: true
  Example 3:

  Input: s = "(]"
  Output: false
  

  Constraints:

  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const parentheses = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (parentheses[s[i]]) {
      stack.push(s[i]);
    } else {
      if (s[i] === parentheses[stack[stack.length - 1]] ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// let s = "()";
// let s = "()[]{}";
let s = "()[{}]{()}";
console.log(isValid(s));