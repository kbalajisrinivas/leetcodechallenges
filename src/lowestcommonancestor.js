class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.val = value;
    }
}

let tree = new TreeNode(3);
tree.left = new TreeNode(5);
tree.right = new TreeNode(1);

tree.left.left = new TreeNode(6);
tree.left.right = new TreeNode(2);

tree.right.left = new TreeNode(0);
tree.right.right = new TreeNode(8);

tree.left.right.left = new TreeNode(7);
tree.left.right.right = new TreeNode(4);

let p = 5, q = 4;
let lowestCommonAncestorValue = null;


// let lowestCommonAncestorValue = null;
var lowestCommonAncestor = function(tree, p, q) {
     if (tree === null) {
        return null;
    }
    let xValue = null, leftSubTree = null, rightSubTree = null;
    if (tree.val === p || tree.val === q) {
        xValue = tree.val;
    }
    if (lowestCommonAncestorValue === null) {
        leftSubTree = lowestCommonAncestor(tree.left, p, q);
    } else {
        return lowestCommonAncestorValue;
    }
    if (xValue !== null && leftSubTree !== null) {
        // we found a match already
        lowestCommonAncestorValue = xValue;
    }
    if (lowestCommonAncestorValue === null) {
        rightSubTree = lowestCommonAncestor(tree.right, p, q);
    } else {
        return lowestCommonAncestorValue;
    }
    if(xValue !== null && rightSubTree !== null){
        lowestCommonAncestorValue = xValue;
    }
    if(leftSubTree !== null && rightSubTree !== null){
        lowestCommonAncestorValue = tree.val;
    }
    if(lowestCommonAncestorValue!==null){
        return lowestCommonAncestorValue;
    }
    if(xValue !== null){
        return xValue;
    }
    if(leftSubTree!==null){
        return leftSubTree;
    }
    if(rightSubTree!==null){
        return rightSubTree;
    }
    return null;
};
let result = lowestCommonAncestor(tree, p, q);
console.log(result);

// function findLowestCommonAncestor(tree, p, q) {
//     if (tree === null) {
//         return null;
//     }
//     let xValue = null, leftSubTree = null, rightSubTree = null;
//     if (tree.value === p || tree.value === q) {
//         xValue = tree.value;
//     }
//     if (lowestCommonAncestor === null) {
//         leftSubTree = findLowestCommonAncestor(tree.left, p, q);
//     } else {
//         return lowestCommonAncestor;
//     }
//     if (xValue !== null && leftSubTree !== null) {
//         // we found a match already
//         lowestCommonAncestor = xValue;
//     }
//     if (lowestCommonAncestor === null) {
//         rightSubTree = findLowestCommonAncestor(tree.right, p, q);
//     } else {
//         return lowestCommonAncestor;
//     }
//     if(xValue !== null && rightSubTree !== null){
//         lowestCommonAncestor = xValue;
//     }
//     if(leftSubTree !== null && rightSubTree !== null){
//         lowestCommonAncestor = tree.value;
//     }
//     if(lowestCommonAncestor!==null){
//         return lowestCommonAncestor;
//     }
//     if(xValue !== null){
//         return xValue;
//     }
//     if(leftSubTree!==null){
//         return leftSubTree;
//     }
//     if(rightSubTree!==null){
//         return rightSubTree;
//     }
//     return null;
// }