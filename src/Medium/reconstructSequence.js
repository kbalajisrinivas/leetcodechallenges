`orig= [1,2,3], seqs = [[1,2],[1,3]]`
// 1 comes before 2, 2 is dependent on 1
// takeaway -- read the question properly. Initially assumed that
// the inputSequence is going to be in pairs. but there can be more than 2 elements
// in a given input sequence.
//also if there are duplicate edges, the code works fine because the adjacencyList also has duplicates
// https://leetcode.com/problems/sequence-reconstruction/ (premium problem)

let inputSequence = [[5, 2, 6, 3], [4, 1, 5, 2]];

let originalSequence = [4, 1, 5, 2, 6, 3];
const adjacencyList = {};
const inDegreeDictionary = {};

let sequenceSet = new Set();

for (let i = 0; i < inputSequence.length; i++) {
    const currentSequence = inputSequence[i];
    for (let j = 0; j < currentSequence.length - 1; j++) {
        sequenceSet.add([currentSequence[j], currentSequence[j + 1]]);
    }
}

let sequence = Array.from(sequenceSet);

for (let i = 0; i < sequence.length; i++) {
    const start = sequence[i][0];
    const end = sequence[i][1];

    if (adjacencyList[start] === undefined) {
        adjacencyList[start] = [];
    }
    adjacencyList[start].push(end);
    if (adjacencyList[end] === undefined) {
        adjacencyList[end] = [];
    }
    if (inDegreeDictionary[end] == undefined) {
        inDegreeDictionary[end] = 0;
    }
    inDegreeDictionary[end] = inDegreeDictionary[end] + 1;
    if (inDegreeDictionary[start] === undefined) {
        inDegreeDictionary[start] = 0;
    }
}

let vertexQueue = [];
let result = [];

for (const [key, value] of Object.entries(inDegreeDictionary)) {
    if (value === 0) {
        vertexQueue.push(parseInt(key, 10));
    }
}

// because if there are 2 source nodes, the start point can be one of them
// so returning false.
if (vertexQueue.length > 1) {
    return false;
}

while (vertexQueue.length > 0) {
    let currentNode = vertexQueue.pop();
    result.push(currentNode);
    const neighbours = adjacencyList[currentNode];
    for (let i = 0; i < neighbours.length; i++) {
        const currentNeighbour = neighbours[i];
        inDegreeDictionary[currentNeighbour] = inDegreeDictionary[currentNeighbour] - 1;
        if (inDegreeDictionary[currentNeighbour] === 0) {
            vertexQueue.push(currentNeighbour);
        }
    }
    if (vertexQueue.length > 1) {
        return false;
    }
}

for (const [key, value] of Object.entries(inDegreeDictionary)) {
    if (value > 0) {
        return false;
    }
}

if (result.length !== originalSequence.length) {
    return false;
}

result.sort((a, b) => { return a - b });
originalSequence.sort((a, b) => { return a - b });

for (let i = 0; i < result.length; i++) {
    if (result[i] !== originalSequence[i]) {
        return false;
    }
}

return true;