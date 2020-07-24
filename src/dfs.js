/*

dictionary of node and their neighbours

visit each node, pop that node and add the neighbours that are not visited
repeat until we have visited all the nodes

*/

class Graph {
    constructor() {
        this.adjacencyList = {};
        this.notVistedVertex = new Set();
    }

    addVertex(value) {
        this.adjacencyList[value] = [];
        this.notVistedVertex.add(value);
    }

    addEdge(source, destination) {
        this.adjacencyList[source].push(destination);
        this.adjacencyList[destination].push(source);
    }
}

let graph = new Graph();
graph.addVertex('A')
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'G');


// a -> b, c
// b -> c, d
// c -> e 
// d -> e 
// e -> f, g

//a,b,c,e,f,g,d
//a,c,e,f,g,b,d

// loop over the keys
let all_nodes = Object.keys(graph.adjacencyList);
let node_stack = [all_nodes[0]];

while (node_stack.length > 0) {
    let topElement = node_stack.pop();
    graph.notVistedVertex.delete(topElement);
    console.log(topElement);
    let neighbours = graph.adjacencyList[topElement];
    for (let i = 0; i < neighbours.length; i++) {
        if(graph.notVistedVertex.has(neighbours[i])){
            node_stack.push(neighbours[i]);
        }
    }
}