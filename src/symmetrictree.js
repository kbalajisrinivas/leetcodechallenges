function TreeNode(val, left, right) {
    return {
        val: val,
        left: null,
        right: null
    }
}

let root = TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(2);
// root.left.left = new TreeNode(3);
// root.left.right = new TreeNode(4);
// root.right.left = new TreeNode(4);
// root.right.right = new TreeNode(3);


let elements = [];
function inOrderTraversal(root) {
    if (root === null) {
        return;
    }
    if (root.left === null && root.right === null) {
        elements.push(root.val);
        return;
    }
    inOrderTraversal(root.left);
    elements.push(root.val);
    inOrderTraversal(root.right);
}

inOrderTraversal(root);

if (elements.length % 2 === 0) {
    return false;
}
if (elements.length === 0 || elements.length === 1){
    return true;
}
let midPoint = Math.ceil(elements.length / 2);

// 7 elements, midpoint is 4 which is elements[3]
let start = midPoint - 2;
let end = midPoint;
while (start >= 0 && end < elements.length) {
    if (elements[start] !== elements[end]) {
        return false;
    }
    start--;
    end++;
}