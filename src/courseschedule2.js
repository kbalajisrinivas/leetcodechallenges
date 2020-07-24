var findOrder = function (numCourses, prerequisites) {

    //     find the courses that doesn't have dependency. we will then do a BFS on those courses.
    let dependencyArray = new Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        let currentCourse = prerequisites[i];
        dependencyArray[currentCourse[1]] = 1;
    }
    let dependentCourses = [];
    for (let j = 0; j < dependencyArray.length; j++) {
        if (dependencyArray[j] === 1) {
            dependentCourses.push(j);
        }
    }
    //     form the adjacencylist so that we can move between nodes faster
    let neighbours = {}
    for (let i = 0; i < prerequisites.length; i++) {
        let currentNode = prerequisites[i];
        if (!neighbours[currentNode[1]]) {
            neighbours[currentNode[1]] = [];
        }
        neighbours[currentNode[1]].push(currentNode[0]);
    }

    //     if all the courses are dependent on some other course
    if (dependentCourses.length === 0) {
        return [];
    }
    let visitedArray = new Array(numCourses).fill(0);
    let result = [];

    for (let i = 0; i < dependentCourses.length; i++) {
        //         only if they are not visited, we need to visit.
        if (visitedArray[dependentCourses[i]] === 0) {
            let order = bfs(neighbours, dependentCourses[i], visitedArray);
            result.push(...order);
        }
    }
    return result;
};

// important point store all the courses that doesn't have prerequisites first 
// and then start processing other courses


function bfs(neighbours, currentNode, visitedArray) {
    let queue = [];
  
    queue.push(currentNode);
    let nodeOrder = [];
    nodeOrder.push(currentNode);
    while (queue.length > 0) {
        let course = queue.shift();
        
        if (neighbours[course]) {
            for (let i = 0; i < neighbours[course].length; i++) {
                let neighbour = neighbours[course][i];
                if (visitedArray[neighbour] === 0) {
                    nodeOrder.push(neighbour);
                    visitedArray[neighbour] = 1;
                    queue.push(neighbour);
                }
            }
        }
    }
    return nodeOrder;
}

// let input_array = [[1, 2], [2, 3], [4, 1], [4, 5], [0, 5], [2, 5], [0, 3]];
let result = findOrder(3,[[2,0],[2,1]]);
console.log(result);