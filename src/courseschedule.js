

// Input: numCourses = 2, prerequisites = [[1,0]]

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]

/*

First loop over the array and form a dictionary of dependencies
1 -> 2,3
4 -> 5, 6

have 3 sets currentlyvisiting, alreadyvisited, yettovisit
initally yettovisit has n elements (0 to n-1)
dictionary has n elements, 
start from the first element in the dictionary. 
add elements to currentlyvisiting,once you reach a point where there is no dependency
move that element from currentlyvisiting to visited. 
if you find an element that is already in currentlyvisiting, you detected a cycle.

*/

let input_array = [[0, 1], [1,0]];
let n = 5;
let neighbours = {};
let alreadyVisited = new Set();
let yetToVisit = new Set();
let currentlyVisiting = new Set();

for (let i = 0; i < n; i++) {
    yetToVisit.add(i.toString());
}

for (let i = 0; i < input_array.length; i++) {
    let currentEdge = input_array[i];
    let source = currentEdge[0].toString();
    let destination = currentEdge[1].toString();
    if (!neighbours[source]) {
        neighbours[source] = [];
    }
    neighbours[source].push(destination);
}

let all_nodes = Object.keys(neighbours);
for (let i = 0; i < all_nodes.length; i++) {
    let currentNode = all_nodes[i];
    // currentNode is just a number
    if (yetToVisit.has(currentNode)) {
        // you are passing a list and the node number
        let result = dfs(neighbours[currentNode], currentNode, new Set());
        if (!result) {
            return false;
        }
    }
}

function moveNodes(node, source, destination) {
    source.delete(node);
    destination.add(node);
}


function dfs(currentNodeNeighbours, currentNode) {
    moveNodes(currentNode, yetToVisit, currentlyVisiting);
    if (currentNodeNeighbours) {
        for (let i = 0; i < currentNodeNeighbours.length; i++) {
            let visitingNode = currentNodeNeighbours[i];
            console.log(`${currentNode}, ${visitingNode}`)
            if (alreadyVisited.has(visitingNode)) {
                continue;
            }
            if (currentlyVisiting.has(visitingNode)) {
                return false;
            }
            let result = dfs(neighbours[visitingNode], visitingNode);
            if (!result) {
                return false;
            }
        }
    }
    moveNodes(currentNode, currentlyVisiting, alreadyVisited);
    return true;
}