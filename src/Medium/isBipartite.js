var isBipartite = function (graph) {

    let setA = new Set();
    let setB = new Set();

    let queue = [0];
    setA.add(0);
    let currentSet = setB;
    let otherSet = setA;
    while (queue.length > 0) {
        let temp = [];

        for (let i = 0; i < queue.length; i++) {
            const currentNode = queue[i];
            const neighbours = graph[currentNode];
            for (let j = 0; j < neighbours.length; j++) {
                const currentNeighbour = neighbours[j];
                if (otherSet.has(currentNeighbour)) {
                    console.log("abcd")
                    return false;
                }
                if (!currentSet.has(currentNeighbour)) {
                    temp.push(currentNeighbour);
                    currentSet.add(currentNeighbour);
                }
            }
        }
        console.log(currentSet);
        console.log(otherSet);
        console.log("===");

        queue = temp;
        if (currentSet === setA) {
            currentSet = setB;
            otherSet = setA;
        } else {
            currentSet = setA;
            otherSet = setB;
        }
    }

    return true;
};

let result = isBipartite([[], [2, 4, 6], [1, 4, 8, 9], [7, 8], [1, 2, 8, 9], [6, 9], [1, 5, 7, 8, 9], [3, 6, 9], [2, 3, 4, 6, 9], [2, 4, 5, 6, 7, 8]]);
console.log(result);