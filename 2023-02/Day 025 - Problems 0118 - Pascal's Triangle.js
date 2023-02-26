/*
    118. Pascal's Triangle

    Given an integer numRows, return the first numRows of Pascal's triangle.

    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

    Example 1:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

    Example 2:
    Input: numRows = 1
    Output: [[1]]

    1 <= numRows <= 30
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        let elementArray = [];

        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                elementArray.push(1);
            } else {
                elementArray.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }

        result.push(elementArray);
    }

    console.log(result);
    return result;
};


const numRows = 10;
generate(numRows);
// console.log(generate(numRows));