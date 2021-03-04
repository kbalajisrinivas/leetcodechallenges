function TreeNode(val) {
    
    this.left =null;
    this.right = null;
    this.val = val;


}

var serialize = function(root) {
    let treeArray = [];
    let queue = [root];
    console.log("hi");
    
    while(queue.length !== 0){
        let temp = [];
        let isLastRow = true;
        for(let i=0;i<queue.length;i++){
            let currentElement = queue[i];
            
            if(currentElement === null){
                treeArray.push(null);
//                 one for left and another for right
                temp.push(null);
                temp.push(null);
            } else {
                treeArray.push(currentElement.val);
                if(currentElement.left === null){
                    temp.push(null);
                } else {
                    isLastRow = false;
                    temp.push(currentElement.left);
                }
                if(currentElement.right === null){
                    temp.push(null);
                } else {
                    isLastRow = false;
                    temp.push(currentElement.right);
                }
            }
        }
        if(isLastRow){
            //all are null
            return treeArray;
        }
        queue = temp;
    }
    console.log(treeArray);
    return treeArray;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function recurse(data,index){
            if(data[index] === null){
                return null;
            }
            let node = new TreeNode(data[index]);
            let leftNode = null;
            let rightNode = null;
            if(node !== null) {
             let leftNodePosition = (2*index)+1;
             let rightNodePosition = (2*index)+2;
             if(leftNodePosition < data.length){
                  leftNode = recurse(data, leftNodePosition);
             }
            if(rightNodePosition < data.length){
                rightNode = recurse(data, rightNodePosition);
            }
            node.left = leftNode;
            node.right = rightNode;
            return node;
            }
        let tree = recurse(data,0);
    return tree;
    }
    
    return recurse(data, 0);

};


let tree = new TreeNode(5);
// tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
// tree.right.left = new TreeNode(2);
tree.right.right = new TreeNode(4);
// tree.right.left.left = new TreeNode(3);
tree.right.right.right = new TreeNode(1);
let result = serialize(tree);
console.log(result);
let deserializeResult = deserialize(result);
console.log(deserializeResult);