/**
    67. Add Binary

    Given two binary strings a and b, return their sum as a binary string.


    Example 1:

    Input: a = "11", b = "1"
    Output: "100"
    Example 2:

    Input: a = "1010", b = "1011"
    Output: "10101"
    

    Constraints:

    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;
    let result = "";

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        const sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    }

    if (carry) {
        result = "1" + result;
    }

    return result;
};

// const a = "11", b = "1"; // expect: "100"
const a = "1010", b = "1011"; // expect: "10101"
console.log(addBinary(a, b));
