function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

var deleteNode = function(root, key) {
    let node = findNode(root, key);
    let remainingNode = deleteTargetNode(node.node);
    if(!node.parent){
        root = remainingNode;
        return root;
    }
    if(node.isLeftChild){
        node.parent.left = remainingNode;
    } else {
        node.parent.right = remainingNode;
    }
    console.log(root);
    return root;
};


function findNode(root, key){
    let node = root;
    let parent = null;
    let isLeftChild = true;
    while(node !== null && node.val !== key){
        if(key < node.val){
            parent = node;
            isLeftChild = true;
            node = node.left;
          
        } else {
            parent = node;
            isLeftChild = false;
            node = node.right;
        }
    }
    return {node, parent, isLeftChild};
}

function deleteTargetNode(node){
    //there are 2 possibilities
    //if no left node, just assign right to node
    if(node.left === null){
        node = node.right;
    } else if(node.right === null){
        node = node.left;
    } else {
        let temp = node.left;
        console.log(temp.val);
        node = node.right;
        console.log(node.val);
        let temp1 = node;
        while(temp1.left !== null){
            temp1 = temp1.left;
        }
        temp1.left = temp;
    }
    return node;
}

let root = new TreeNode(50);
root.left = new TreeNode(30);
// root.left.left = new TreeNode(2);
root.left.right = new TreeNode(40);

root.right = new TreeNode(70);
root.right.left = new TreeNode(60);
root.right.right = new TreeNode(80);
let result = deleteNode(root, 50);

console.log(result);