function TreeNode(value) {
    return {
        val: value,
        left: null,
        right: null
    }
}

let root = new TreeNode(1);
// root.left = new TreeNode(3);
root.right = new TreeNode(3);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(5);
let result = [];
let longestConsecutiveSequence = longestSequence(root, []);
console.log(result);


function longestSequence(node, sequence) {
    if(node === null){
        return;
    }
    sequence.push(node.val);
    if(sequence.length > result.length){
        result = sequence;
    }
    if(node.left){
        if(node.left.val === node.val+1){
            longestSequence(node.left, [...sequence]);
        } else {
            longestSequence(node.left, []);
        }
    }
    if(node.right){
        if(node.right.val === node.val+1){
            longestSequence(node.right, [...sequence]);
        } else {
            longestSequence(node.right, []);
        }
    }

}