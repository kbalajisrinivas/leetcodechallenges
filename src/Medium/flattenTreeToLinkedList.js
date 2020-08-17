// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
var flatten = function (root) {
    traverseTree(root);
    return root;
};


function traverseTree(node) {
    if (node === null) {
        return null;
    }
    if (node.left === null && node.right === null) {
        return node;
    }

    let leftNode = traverseTree(node.left);
    let rightNode = traverseTree(node.right);
    let temp = rightNode === null ? leftNode : rightNode;

    if (leftNode !== null) {
        leftNode.right = node.right;
    }
    if (node.left !== null) {
        node.right = node.left;
    }
    node.left = null;

    return temp;
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
// root.left.left = new Node(3);
// root.left.right = new Node(4);
// root.left.right.left = new Node(6);
// root.left.right.right = new Node(3);
// root.right.right = new Node(6);

flatten(root);
console.log(root);