` Premium Problem: Alien Dictionary
[
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt"
  ]
  we need to go over each of the word and build a dependency graph
   t --> f (t comes before f or f is dependent on t)
   once dependency graph is built, we can store the adjacency list
   and indegree count. 
   put the 0 indegree in the queue and then reduce the indegree count for it's dependencies

  `

const wordOrder = ["z","x"];

const dependencyGraph = [];

for (let i = 0; i < wordOrder.length - 1; i++) {
    const currentWord = wordOrder[i];
    const nextWord = wordOrder[i + 1];
    let currentWordCounter = 0;
    let nextWordCounter = 0;

    while (currentWordCounter < currentWord.length && nextWordCounter < nextWord.length) {
        const currentCharacter = currentWord[currentWordCounter];
        const nextCharacter = nextWord[nextWordCounter];
        if (currentCharacter !== nextCharacter) {
            dependencyGraph.push([currentCharacter, nextCharacter]);
            break;
        }
        currentWordCounter++;
        nextWordCounter++;
    }
}

console.log(dependencyGraph);

const adjacencyList = {};
const inDegreeCount = {};

for (let i = 0; i < dependencyGraph.length; i++) {
    const start = dependencyGraph[i][0];
    const end = dependencyGraph[i][1];

    if (adjacencyList[start] === undefined) {
        adjacencyList[start] = [];
    }
    adjacencyList[start].push(end);
    if (adjacencyList[end] === undefined) {
        adjacencyList[end] = [];
    }
    if (inDegreeCount[end] === undefined) {
        inDegreeCount[end] = 0;
    }
    inDegreeCount[end] = inDegreeCount[end] + 1;
    if (inDegreeCount[start] === undefined) {
        inDegreeCount[start] = 0;
    }
}

// find the sourcenodes (which has indegree 0)
let vertexQueue = [];
let result = [];

for (const [key, value] of Object.entries(inDegreeCount)) {
    if (value === 0) {
        vertexQueue.push(key);
    }
}

while (vertexQueue.length > 0) {
    let nextVertex = vertexQueue.pop();
    result.push(nextVertex);
    const neighbours = adjacencyList[nextVertex];
    for (let i = 0; i < neighbours.length; i++) {
        const currentNeighbour = neighbours[i];
        inDegreeCount[currentNeighbour] = inDegreeCount[currentNeighbour] - 1;
        if (inDegreeCount[currentNeighbour] === 0) {
            vertexQueue.push(currentNeighbour);
        }
    }
}

// make sure all the nodes are visited
for (const [key, value] of Object.entries(inDegreeCount)) {
    if (value !== 0) {
        return -1;
    }
}

console.log(result);