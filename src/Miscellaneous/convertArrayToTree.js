/*

[3,2,1,6,0,5]

*/

class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
let input_array = [3, 2, 1, 6, 0, 5];


let node = buildTree(input_array, 0, input_array.length - 1);


function getMaxIndex(element_array, min, max) {
    let maxIndex = min;
    for (let i = min + 1; i <= max; i++) {
        let elementAtIndex = element_array[maxIndex];
        if (elementAtIndex < element_array[i]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function buildTree(input_array, min, max) {
    if (min === max) {
        return new TreeNode(input_array[min]);
    }
    if (min < 0 || max < 0 || max >= input_array.length || min >= input_array.length) {
        return null;
    }
    if (min > max) {
        return null;
    }

    let index = getMaxIndex(input_array, min, max);
    let node = new TreeNode(input_array[index]);

    let leftNode = buildTree(input_array, min, index - 1);
    let rightNode = buildTree(input_array, index + 1, max);
    node.left = leftNode;
    node.right = rightNode;
    return node;

}