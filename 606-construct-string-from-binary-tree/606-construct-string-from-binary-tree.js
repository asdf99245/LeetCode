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
 * @return {string}
 */
const tree2str = function(root) {
    if(!root) {
        return "";
    }
    // console.log(root, root.left, root.right);
    let str = `${root.val}`
    
    if(root.right) {
        str += `(${tree2str(root.left)})(${tree2str(root.right)})`;
    }
    else if(root.left) str += `(${tree2str(root.left)})`;
    
    return str;
};