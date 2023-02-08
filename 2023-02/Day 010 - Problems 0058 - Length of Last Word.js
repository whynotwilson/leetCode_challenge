/**
  58. Length of Last Word

  Given a string s consisting of words and spaces, return the length of the last word in the string.

  A word is a maximal 
  substring
  consisting of non-space characters only.


  Example 1:

  Input: s = "Hello World"
  Output: 5
  Explanation: The last word is "World" with length 5.
  


  Example 2:

  Input: s = "   fly me   to   the moon  "
  Output: 4
  Explanation: The last word is "moon" with length 4.
  
  

  Example 3:

  Input: s = "luffy is still joyboy"
  Output: 6
  Explanation: The last word is "joyboy" with length 6.
  

  Constraints:

  1 <= s.length <= 104
  s consists of only English letters and spaces ' '.
  There will be at least one word in s.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (s.length === 0) return 0;

	let lengthOfLastWord = 0;
	let isAnyWord = false;

    for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === " ") {
			if (isAnyWord) {
				return lengthOfLastWord;
			}
		} else {
			lengthOfLastWord++;
			isAnyWord = true;
			if (i === 0) {
				return lengthOfLastWord;
			}
		}
	}
    
};

const s = 'a'; // expect: 1
// const s = "   fly me   to   the moon  "; // expect: 4
// const s = "aa joyboy"; // e。xpect: 6
console.log(lengthOfLastWord(s));
