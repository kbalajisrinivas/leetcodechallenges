function TreeNode(val) {
    
        this.left =null;
        this.right = null;
        this.val = val;
    

}

var serialize = function (root) {
    let result = [];
    let queue = [root];
    if (root === null) {
        return null;
    }
    while (queue.length > 0) {
        let temp = [];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i]) {
                result.push(queue[i].val);
                temp.push(queue[i].left);
                temp.push(queue[i].right);
            } else {
                result.push(null);
            }
        }
        queue = temp;
    }
    return result;

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
//deserialize function is complicated and it should not used. 
var deserialize1 = function (data) {
    let root = data[0];
    let result = [new TreeNode(data[0])];

    for (let i = 0; i < result.length; i++) {
        if (!result[i]) {
            // result.push(null);
            continue;
        }
        let leftElement = 2 * i + 1;
        let rightElement = 2 * i + 2;
        if (leftElement < data.length) {
            if (data[leftElement]) {
                result[i].left = new TreeNode(data[leftElement]);
                result.push(result[i].left);
            } else {
                result.push(null);
            }
        }
        if (rightElement < data.length) {
            if (data[rightElement]) {
                result[i].right = new TreeNode(data[rightElement]);
                result.push(result[i].right);
            } else {
                result.push(null);
            }
        }
    }
    return result[0];

};

var deserialize = function (data){
 
    let root = new TreeNode(data[0]);
    let i = 1;
    queue = [root];
    while(queue.length > 0){
        let node = queue.shift();
        if(node !== null){
            let leftElement = data[i];
            if(leftElement){
                node.left = new TreeNode(leftElement);
            }
            i++;
            queue.push(node.left);
            let rightElement = data[i];
            if(rightElement){
                node.right = new TreeNode(rightElement);
            }
            i++;
            queue.push(node.right);
        }
    }
    return root;
}

let tree = new TreeNode(5);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(2);
tree.right.right = new TreeNode(4);
tree.right.left.left = new TreeNode(3);
tree.right.left.right = new TreeNode(1);
// tree.left.left = new TreeNode(5);
// tree.left.right = new TreeNode(3);
// tree.right.right = new TreeNode(9);
// tree.left.left.left = new TreeNode(6);
// tree.right.right.right = new TreeNode(15);

let x = serialize(tree);
console.log(x);
let y = deserialize(x);
console.log(y);