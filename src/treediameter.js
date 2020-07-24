class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
// THIS IS NOT A SOLUTION
// THIS IS NOT STRAIGHTFORWARD. IT IS CONVOLUTED
let tree = new TreeNode(1);
tree.left = new TreeNode(3);
tree.right = new TreeNode(2);
tree.left.left = new TreeNode(5);
tree.left.right = new TreeNode(3);
tree.right.right = new TreeNode(9);
tree.left.left.left = new TreeNode(6);
tree.right.right.right = new TreeNode(15);
// tree.right = new TreeNode(3);
// tree.right.right = new TreeNode(4);
// answer is 4

let temp = [];
let queue = [];
let allResults = [];
let currentLevel = 0;

queue.push(tree);
allResults.push([])

while (queue.length > 0) {
    let element = queue.shift();
    if (element) {
        allResults[currentLevel].push(element.value);
    } else {
        allResults[currentLevel].push(null);
    }
    if (element) {
        temp.push(element.left);
        temp.push(element.right);
    } else {
        temp.push(null);
        temp.push(null);
    }
    // we are done with popping all the elements
    if (queue.length === 0) {
        currentLevel = currentLevel + 1;
        queue = JSON.parse(JSON.stringify(temp));
        let isAtleastOneElementFound = false;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] !== null) {
                isAtleastOneElementFound = true;
            }
        }
        if (!isAtleastOneElementFound) {
            break;
        }
        temp = [];
        allResults.push([]);
    }
}

let maxDiameter = 0;
for (let i = 0; i < allResults.length; i++) {
    // loop over each of the result
    let startPosition = null;
    let valueCounter = 0;
    for (let j = 0; j < allResults[i].length; j++) {
        if (startPosition === null) {
            if (allResults[i][j] !== null) {
                startPosition = j;
            }
        }
        if (allResults[i][j] !== null) {
            valueCounter = j;
        }
    }
    let diameter = valueCounter - startPosition;
    if (maxDiameter < diameter) {
        maxDiameter = diameter;
    }
}

return maxDiameter + 1;