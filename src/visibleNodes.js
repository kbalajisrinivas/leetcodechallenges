class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root_1 = new TreeNode(8); 
root_1.left = new TreeNode(3); 
root_1.right = new TreeNode(10); 
root_1.left.left = new TreeNode(1); 
root_1.left.right = new TreeNode(6); 
root_1.right.right = new TreeNode(14); 
root_1.left.right.left = new TreeNode(4); 
root_1.left.right.right = new TreeNode(7); 
root_1.right.right.left = new TreeNode(13); 

let height = findHeight(root_1);
console.log(height);

function findHeight(node) {
    if (node.left === null && node.right === null) {
        return 1;
    }
    let leftHeight = 0, rightHeight = 0;
    if (node.left !== null) {
        leftHeight = findHeight(node.left);
    }
    if (node.right !== null) {
        rightHeight = findHeight(node.right);
    }
    return 1 + Math.max(leftHeight, rightHeight);
}