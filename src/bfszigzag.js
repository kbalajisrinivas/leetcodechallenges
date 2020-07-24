var zigzagLevelOrder = function(root) {
    
    let temp = [];
    let queue1 = [root];
    let result = [];
    let queue2 = [];
    let currentQueue = [];
    
    while(queue1.length!==0 || queue2.length !== 0){
        
//         you set currentQueue only when one of the queue's length is 0
        if(currentQueue.length === 0){
        if(queue1.length === 0){
            let x = [];
            for(let i=queue2.length-1;i>=0;i--){
                x.push(queue2[i].val);
            }
            result.push(x);
            currentQueue = queue2;
            temp = queue1;
        }
        if(queue2.length === 0){
            let x = [];
            for(let i=0;i<queue1.length;i++){
                x.push(queue1[i].val);
            }
            result.push(x);
            currentQueue = queue1;
            temp = queue2;
        }
        }
        let currentElement = currentQueue.shift();
        if(currentElement.left !== null){
            temp.push(currentElement.left);
        }
        if(currentElement.right!== null){
            temp.push(currentElement.right);
        }
        
    }
    return result;
};
function TreeNode(val, left, right) {
    return {
        val: val,
        left: null,
        right: null
    }
}

let root = TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(24);
// root.left.left = new TreeNode(48);
// root.right.left = new TreeNode(3);
// root.right.right = new TreeNode(5);
let result = zigzagLevelOrder(root);
console.log(result);
