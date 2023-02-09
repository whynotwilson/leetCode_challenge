/**
  66. Plus One

  You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

  Increment the large integer by one and return the resulting array of digits.

  

  Example 1:

  Input: digits = [1,2,3]
  Output: [1,2,4]
  Explanation: The array represents the integer 123.
  Incrementing by one gives 123 + 1 = 124.
  Thus, the result should be [1,2,4].
  
  
  Example 2:

  Input: digits = [4,3,2,1]
  Output: [4,3,2,2]
  Explanation: The array represents the integer 4321.
  Incrementing by one gives 4321 + 1 = 4322.
  Thus, the result should be [4,3,2,2].
  
  
  Example 3:

  Input: digits = [9]
  Output: [1,0]
  Explanation: The array represents the integer 9.
  Incrementing by one gives 9 + 1 = 10.
  Thus, the result should be [1,0].
  

  Constraints:

  1 <= digits.length <= 100
  0 <= digits[i] <= 9
  digits does not contain any leading 0's.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let lastNumber = digits[digits.length - 1];
    let isCarry = false;

    if (lastNumber + 1 > 9) {
        isCarry = true;
        digits[digits.length - 1] = 0;
    } else {
        digits.pop();
        return [...digits, ...[lastNumber + 1]];
    }

    for (let i = digits.length - 2; i >= 0; i--) {
        if (isCarry) {
            if (digits[i] + 1 > 9) {
                digits[i] = 0;
            } else {
                digits[i] = digits[i] + 1;
                return digits;
            }
        } else {
            digits[i] = digits[i] + 1;
            return digits;
        }
    }

    if (isCarry) {
        return [...[1], ...digits];
    }

    /*
    let len = digits.length;
    let pow = len - 1;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += digits[i] * Math.pow(10, pow);
        pow--;
    }

    sum++;

    let sumTostring = String(sum);
    let array = [];

    for (let i = 0; i < sumTostring.length; i++) {
        array.push(Number(sumTostring[i]));
    }

    return array;
    */
};

// const digits = [1, 2, 3]; // expect: [1,2,4]
// const digits = [4, 3, 2, 1]; // expect: [4,3,2,2]
// const digits = [9]; // expect: [1, 0]
// const digits = [9, 9, 9]; // expect: [1, 0, 0, 0]
const digits = [8, 9, 9, 9]; // [9, 0, 0, 0]
// const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// expect: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(plusOne(digits));
