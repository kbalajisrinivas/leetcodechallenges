/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
    //first form a graph, no cycles
    let adjacencyList = {};
    let allPaths = {};
    for (let i = 0; i < flights.length; i++) {
        const currentFlight = flights[i];
        const source = currentFlight[0];
        const destination = currentFlight[1];
        const cost = currentFlight[2];
        if (adjacencyList[source] === undefined) {
            adjacencyList[source] = [];
        }
        adjacencyList[source].push({
            destination, cost
        });
    }
    // console.log(allPaths);
    let minCost = bfs(src, dst, adjacencyList, K);
    return minCost;
};

// simple bfs
// store the cost somewhere
function bfs(node, destination, adjacencyList, k) {

    let queue = [{
        node: node,
        hops: 0,
        cost: 0
    }];

    while (queue.length > 0) {
        queue.sort((a, b) => {
            return a.cost - b.cost
        });
        let firstNode = queue.shift();
        if (firstNode.node === destination && firstNode.hops <= k+1) {
            return firstNode.cost;
        }
        if (firstNode.hops <= k+1) {

            const neighbours = adjacencyList[firstNode.node];
            if (neighbours) {
                for (let i = 0; i < neighbours.length; i++) {
                    const currentNeighbour = neighbours[i];
                    queue.push({
                        node: currentNeighbour.destination,
                        hops: firstNode.hops + 1,
                        cost: firstNode.cost + currentNeighbour.cost
                    })
                }
            }
        }
    }
    return -1;
}

// let result = findCheapestPrice(5,
//     [[0,1,5],[1,2,5],[0,3,2],[3,1,2],[1,4,1],[4,2,1]],
//     0,
//     2,
//     2);

let result = findCheapestPrice(3,
    [[0,1,100],[1,2,100],[0,2,500]],
    0,
    2,
    0);


// let result = findCheapestPrice(4,
//     [[0,1,1],[0,2,5],[1,2,1],[2,3,1]],
//     0,
//     3,
//     1);
console.log(result);