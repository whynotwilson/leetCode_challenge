/*
    168. Excel Sheet Column Title

    Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

    For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
    

    Example 1:
    Input: columnNumber = 1
    Output: "A"

    Example 2:
    Input: columnNumber = 28
    Output: "AB"

    Example 3:
    Input: columnNumber = 701
    Output: "ZY"
    
    Constraints:

    1 <= columnNumber <= 231 - 1
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

    let ans = "";

    while (columnNumber > 0) {
        let code = --columnNumber % 26;
        ans = String.fromCharCode(code + 65) + ans;
        columnNumber = (columnNumber - code) / 26;
    }

    return ans;
};

// const columnNumber = 701; // expect: 'ZY'
// const columnNumber = 888; // expect: 'AHD'
const columnNumber = 52; // expect: 'AZ'
// convertToTitle(columnNumber);
console.log(convertToTitle(columnNumber));