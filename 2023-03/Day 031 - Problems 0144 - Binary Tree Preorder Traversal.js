/*
    144. Binary Tree Preorder Traversal

    Given the root of a binary tree, return the preorder traversal of its nodes' values.

    Example 1:
    Input: root = [1,null,2,3]
    Output: [1,2,3]

    Example 2:
    Input: root = []
    Output: []

    Example 3:
    Input: root = [1]
    Output: [1]
    

    Constraints:

    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100

    Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    // 方法一
    if (!root) return [];

    const result = [];
    const stack = [root]; // LIFO (Last In First Out)

    while (stack.length) {
        const node = stack.pop();

        result.push(node.val);

        if (node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }
    }

    return result;

    /*
    // 方法二
    var target = [];

    function dfs(node) {
        if (!node) {
            return;
        }

        target.push(node.val);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return target;
    */
};
