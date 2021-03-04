var allPathsSourceTarget = function(graph) {
    let result = [];
    let memo = [];
    const source = 0;
    const destination = graph.length-1;
    dfs(source, destination, graph, [], result, memo);
    return memo[0];
};


function dfs(node, destination, graph, path, result, memo){
    if(node === destination){
        path.push(node);
        result.push(path);
        return [[node]];
    }
    
//     if we have already found the path, we don't need to traverse again
    if(memo[node] !== undefined){
        return memo[node];
    }
    
    path.push(node);
    let allPathsFromNode = []
    //we are visiting a node which is not visited before
    const neighbours = graph[node];
    for(let i=0;i<neighbours.length;i++){
        const currentNeighbour = neighbours[i];
        let resultPath = dfs(currentNeighbour, destination, graph, [...path], result, memo);
        if(resultPath.length > 0){
            allPathsFromNode.push(...resultPath);
        }
    }
    //add the currentNode to all Paths;
    let newPaths = [];
    for(let i=0;i<allPathsFromNode.length;i++){
//         add currentNode to each path
        let temp = [...allPathsFromNode[i]];
        temp.unshift(node);
        newPaths.push(temp)
    }
    //next time if someone is at this node, we will know all the paths from this node to destination
    memo[node] = newPaths;
    return memo[node];
    
}

allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]);