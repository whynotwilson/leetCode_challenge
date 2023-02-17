/*
	101. Symmetric Tree

    Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

    Example 1:
    Input: root = [1,2,2,3,4,4,3]
    Output: true

    Example 2:
    Input: root = [1,2,2,null,3,null,3]
    Output: false
    
    Constraints:
    The number of nodes in the tree is in the range [1, 1000].
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let stack = [root.left, root.right];

    while(stack.length > 0) {
        let n1 = stack.pop();
        let n2 = stack.pop();

        if (n1 === null && n2 === null) continue;
        if ((!n1 && n2) || (n1 && !n2) || (n1.val !== n2.val)) return false;

        stack.push(n1.left);
        stack.push(n2.right);

        stack.push(n1.right);
        stack.push(n2.left);
    }
    
    return true;
};