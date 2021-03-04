/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    //first form a graph, no cycles
    let adjacencyList = {};
    for(let i=0;i<flights.length;i++){
        const currentFlight = flights[i];
        const source = currentFlight[0];
        const destination = currentFlight[1];
        const cost = currentFlight[2];
        if(adjacencyList[source] === undefined){
            adjacencyList[source] = [];
        }
        adjacencyList[source].push({
            destination, cost
        });
    }
    let memoize = {};
    let minCost = dfs(src, dst, 0, adjacencyList, K+1,memoize);
    return minCost;
};


function dfs(node, destination, cost, adjacencyList, k, memoize){
    if(k < 0){
//         since no routes are possible, return -1
        return -1;
    }
    if(memoize[node] !== undefined){
        return cost + memoize[node];
    }
    
    if(node === destination){
//         last node,we found the node. return the cost to reach the node
        return cost;
    }
    
    const neighbours = adjacencyList[node];
    if(!neighbours){
        //if there are no neighbours return -1
        return -1;
    }
    let result = [];
    for(let i=0;i<neighbours.length;i++){
        const currentNeighbour = neighbours[i];
        let localCost = dfs(currentNeighbour.destination, destination, currentNeighbour.cost, adjacencyList, k-1, memoize);
        if(localCost !== -1){
            result.push(localCost);
        }
    }
    
    let minCost = -1;
    if(result.length === 0){
        return minCost;
    }
    minCost =  Math.min(...result);
    memoize[node] = minCost;
    return cost+minCost;

}


let result = findCheapestPrice(5,
    [[0,1,5],[1,2,5],[0,3,2],[3,1,2],[1,4,1],[4,2,1]],
    0,
    2,
    2);

console.log(result);