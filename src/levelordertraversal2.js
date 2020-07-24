var levelOrderBottom = function(root) {
    
    let temp = [];
    if(root === null){
        return [];
    }
    let result = [[root.val]];
    let current_array = [root];
    
    while(temp.length > 0 || current_array.length > 0){
        //i have popped all the elements
        if(current_array.length === 0){
            current_array = temp;
            let local_result = current_array.map(x=>x.val);
            result.push(local_result);
            temp = [];
        }
        let element = current_array.shift();
        if(element.left !== null){
            temp.push(element.left);
        }
        if(element.right !== null){
            temp.push(element.right);
        }
    }
    return result.reverse();
};


function TreeNode(val, left, right) {
    return {
        val: val,
        left: null,
        right: null
    }
}


let root = TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = null;

root.right.left = null;
root.right.right = new TreeNode(5);

let result = levelOrderBottom(root);
console.log(result);