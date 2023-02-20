/*
	110. Balanced Binary Tree

    Given a binary tree, determine if it is 
    height-balanced.

    

    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: true

    Example 2:
    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false

    Example 3:
    Input: root = []
    Output: true


    Constraints:

    The number of nodes in the tree is in the range [0, 5000].
    -104 <= Node.val <= 104
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
var isBalanced = function (root) {
    if (root == null || (root.right == null && root.left == null)) return true;

    // 找出左樹，右樹的深度
    var dL = findDeep(root.left);
    var dR = findDeep(root.right);

    // 深度是否差1內
    var diff = Math.abs(dL - dR) <= 1;

    //如果深度差超過1, return false
    //深度沒差超過1，傳入左右節點繼續判斷
    return diff && isBalanced(root.left) && isBalanced(root.right);
};

// 找出節點深度
function findDeep(root) {
    if (root == null) {
        return 0;
    }
    var deepL = 1 + findDeep(root.left);
    var deepR = 1 + findDeep(root.right);

    return deepL > deepR ? deepL : deepR;
}
