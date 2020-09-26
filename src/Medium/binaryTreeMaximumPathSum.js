 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

var maxPathSum = function(root) {
    
    let result = {maxNode: Number.MIN_SAFE_INTEGER};
    let x = dfs(root, result);
    if(result.maxNode < x){
        result.maxNode = x;
    }
    return result.maxNode;
    
    
};

function dfs(node, result){
    if(node === null){
        return 0;
    }
    
    
    let left = dfs(node.left, result);
    let right = dfs(node.right, result);
    
    let currentPath = node.val + left + right;
    if(currentPath > result.maxNode){
        result.maxNode = currentPath;
    }
    
    return Math.max(left+node.val, right+node.val);
    
}

let root = new TreeNode(2);
root.left = new TreeNode(-1);
root.right = new TreeNode(-2);
// // root.left.left = new TreeNode(3);
// // root.left.right = new TreeNode(4);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(-7);
// root.right.right = new TreeNode(6);

let result = maxPathSum(root);
console.log(result);