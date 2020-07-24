function TreeNode(val, left, right) {
    return {
        val: val,
        left: null,
        right: null
    }
}

let root = TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(5);
root.left.left.left.right = new TreeNode(6);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);
root.right.right.left = new TreeNode(10);

// let queue1 = [root];
// let queue2 = [];
// let currentqueue = queue1;
// let result = []

// while (queue1.length !== 0 || queue2.length !== 0) {
//     let element = null;
//     if (queue1.length === 0 || queue2.length === 0) {
//         if (queue1.length === 0) {
//             let values = [];
//             for (let i = 0; i < queue2.length; i++) {
//                 values.push(queue2[i].val);
//             }
//             result.push(values);
//             element = queue2.shift();
//             currentqueue = queue1;
//         }
//         if (queue2.length === 0) {
//             let values = [];
//             for (let i = 0; i < queue1.length; i++) {
//                 values.push(queue1[i].val);
//             }
//             result.push(values);
//             element = queue1.shift();
//             currentqueue = queue2;
//         }
//     } else {
//         if (currentqueue === queue2) {
//             element = queue1.shift();
//         } else {
//             element = queue2.shift();
//         }
//     }

//     if (element.left !== null) {
//         currentqueue.push(element.left);
//     }
//     if (element.right !== null) {
//         currentqueue.push(element.right);
//     }
// }

let queue = [root];
let temp = [];
let result = [[root.val]];

while (queue.length > 0 || temp.length > 0) {
    if (queue.length === 0) {
        let element_results = [];
        for (let i = 0; i < temp.length; i++) {
            element_results.push(temp[i].val);
        }
        result.push(element_results);
        queue = temp;
        temp = [];
    }
    let element = queue.shift();
    if (element.left !== null) {
        temp.push(element.left);
    }
    if (element.right !== null) {
        temp.push(element.right);
    }
}


var levelOrderBottom = function(root) {
    let recurseResult = [];
    traverseTreeRecursive(root, 0, recurseResult);
    return recurseResult;
};


function traverseTreeRecursive(node, level, result){
    if(node === null){
        return 0;
    }
    let leftNode, rightNode;
    if(node.left){
    leftNode = traverseTreeRecursive(node.left, level+1, result)
    }
    if(node.right){
    rightNode = traverseTreeRecursive(node.right, level+1, result);
    }
    if(!result[level]){
        result[level] = [];
    }
    result[level].push(node.val);
    return;
}

result = levelOrderBottom(root);
console.log(result);