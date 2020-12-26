

/*
      1 ---> 2   From 1 to 2 OR (1 comes before 2) OR (2 is dependent on 1)

      course A is dependent on B
       B is dependent on C
       C is Dependent on D

       B -> A  (B comes before A)
       C -> B  (C comes before B)
       D -> C  (D comes before C)


*/

let vertex = [['2', '5'], ['0', '5'], ['0', '4'], ['3', '2'], ['1', '3']];

// build graph. graph is a dictionary with source node as key and Adjacency list as value
let graph = {};
let inDegreeDictionary = {};
let edgeQueues = [];
let result = [];

for (let i = 0; i < vertex.length; i++) {
    const currentVertex = vertex[i];
    const source = currentVertex[0];
    const destination = currentVertex[1];
    if (graph[source] === undefined) {
        graph[source] = [];
    }
    graph[source].push(destination);
    if (inDegreeDictionary[destination] === undefined) {
        inDegreeDictionary[destination] = 0;
    }
    if (inDegreeDictionary[source] === undefined) {
        inDegreeDictionary[source] = 0;
    }
    inDegreeDictionary[destination] = inDegreeDictionary[destination] + 1;
}

// at this point we have the Adjacency list built
// find the node with indegree 0 (it does not have any dependencies)
const allEdges = Object.keys(inDegreeDictionary);
for (let i = 0; i < allEdges.length; i++) {
    const currentEdge = allEdges[i];
    if (inDegreeDictionary[currentEdge] === 0) {
        edgeQueues.push(currentEdge);
    }
}
//we have the queue current
// each time we pop element from the queue, we need to decrement the indegree by 1 for all the neighbours

while (edgeQueues.length > 0) {
    const currentEdge = edgeQueues.shift();
    //get neighbours for currentEdge
    const neighbours = graph[currentEdge];
    if (neighbours) {
        for (let i = 0; i < neighbours.length; i++) {
            const currentNeighbour = neighbours[i];
            inDegreeDictionary[currentNeighbour] = inDegreeDictionary[currentNeighbour] - 1;
            if (inDegreeDictionary[currentNeighbour] === 0) {
                edgeQueues.push(currentNeighbour);
            }
        }
    }
    result.push(currentEdge);
}

console.log(result);


