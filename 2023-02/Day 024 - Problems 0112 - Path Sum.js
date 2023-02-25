/*
    112. Path Sum

    Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

    A leaf is a node with no children.

    
    Example 1:
    Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
    Output: true
    Explanation: The root-to-leaf path with the target sum is shown.

    Example 2:
    Input: root = [1,2,3], targetSum = 5
    Output: false
    Explanation: There two root-to-leaf paths in the tree:
    (1 --> 2): The sum is 3.
    (1 --> 3): The sum is 4.
    There is no root-to-leaf path with sum = 5.

    Example 3:
    Input: root = [], targetSum = 0
    Output: false
    Explanation: Since the tree is empty, there are no root-to-leaf paths.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    if (!root) return false;

    targetSum -= root.val;

    if (!root.left && !root.right) return !targetSum;

    return (
        hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
    );

    /*
    if (root === null) return false;
    else if (root.left === null && root.right !== null)
        return calculate(root.right, root.val);
    else if (root.left !== null && root.right === null)
        return calculate(root.left, root.val);
    else if (root.left === null && root.right === null)
        return root.val === targetSum;
    else
        return (
            calculate(root.left, root.val) || calculate(root.right, root.val)
        );

    function calculate(root, preSum) {
        if (root.left === null && root.right === null) {
            if (root.val + preSum === targetSum) return true;
            else return false;
        } else if (root.left !== null && root.right !== null) {
            return (
                calculate(root.left, preSum + root.val) ||
                calculate(root.right, preSum + root.val)
            );
        } else if (root.left === null && root.right) {
            return calculate(root.right, preSum + root.val);
        } else if (root.left && root.right === null) {
            return calculate(root.left, preSum + root.val);
        }
    }
    */
};
