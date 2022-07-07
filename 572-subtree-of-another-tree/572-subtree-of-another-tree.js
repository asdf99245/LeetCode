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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isEqual = (root, subRoot) => {
    if(!subRoot && !root) return true;
    else if((!subRoot && root) || (subRoot && !root)) return false;
    
    if(root.val !== subRoot.val) return false;
    
    return isEqual(root.left, subRoot.left) && isEqual(root.right, subRoot.right);
}

const isSubtree = function(root, subRoot) {
    if(!root) return false;
    
    let ret;
    
    if(root.val === subRoot.val){
        ret = isEqual(root, subRoot);
    }
    
    ret |= isSubtree(root.left, subRoot);
    ret |= isSubtree(root.right, subRoot);
    
    return ret;
};