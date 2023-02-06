/**
  14. Longest Common Prefix
  Write a function to find the longest common prefix string amongst an array of strings.

  If there is no common prefix, return an empty string "".


  Example 1:

  Input: strs = ["flower","flow","flight"]
  Output: "fl"


  Example 2:

  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
  
  Constraints:

  1 <= strs.length <= 200
  0 <= strs[i].length <= 200
  strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

// 方法二，使用 array.every
// Array.every: 陣列中每個元素執行 function 都回傳 true 結果才是 true
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) {
    return "";
  }

  let shortest = strs.sort((a, b) => a.length - b.length)[0];
  let i = 0;

  for (; i < shortest.length; i++) {
    if (!strs.every((currentValue) => {
      shortest[i] === currentValue[i]
    })) {
      break;
    }
  }

  return shortest.slice(0, i);
};

/*
// 方法一
var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) {
    return "";
  }

  // prefix 表示相同的字串，預設為第一個字串
  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== strs[i][j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
  }

  return prefix;
};
*/

let strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));