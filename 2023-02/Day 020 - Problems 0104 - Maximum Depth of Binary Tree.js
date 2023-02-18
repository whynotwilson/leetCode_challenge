/*
	104. Maximum Depth of Binary Tree

    Given the root of a binary tree, return its maximum depth.

    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 3

    Example 2:
    Input: root = [1,null,2]
    Output: 2
    

    Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100
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
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;


    /*
    // 方法二: 遞迴
    let depth = 0;

    depthTraverse(root);

    function depthTraverse(node, nodeDepth = 1) {
        if (!node) return;

        if (nodeDepth > depth) {
            depth = nodeDepth;
        }

        depthTraverse(node.left, nodeDepth + 1);
        depthTraverse(node.right, nodeDepth + 1);
    }

    return depth;
    */

    // ------------------------------------------------------------

    /*
    // 方法一: stack
    if (root === null) return 0;
    if (!root.left && !root.right) return 1;

    let stack = [root];
    let depth = 0;

    while (stack.length > 0) {
        let node = stack.pop();
        let nowDepth = node.depth || 0;

        while (node) {
            if (node.right) {
                stack.push({ ...node.right, depth: nowDepth + 1 });
            }

            node = node.left;
            nowDepth++;
        }

        if (nowDepth > depth) {
            depth = nowDepth;
        }
    }

    return depth;
    */
};
