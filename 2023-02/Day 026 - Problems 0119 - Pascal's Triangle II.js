/*
    119. Pascal's Triangle II

    Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


    Example 1:
    Input: rowIndex = 3
    Output: [1,3,3,1]

    Example 2:
    Input: rowIndex = 0
    Output: [1]

    Example 3:
    Input: rowIndex = 1
    Output: [1,1]
    
    Constraints:
    0 <= rowIndex <= 33
    
    Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex == 0) return [1];
    if (rowIndex == 1) return [1, 1];

    let result = [1, 1];

    for (let i = 1; i < rowIndex; i++) {
        let pre = result[i];

        for (let j = 1; j <= i; j++) {
            let tem = result[j];
            result[j] = result[j] + pre;
            pre = tem;
        }

        result.push(1);
    }

    return result;
};

const rowIndex = 3;
console.log(getRow(rowIndex));
