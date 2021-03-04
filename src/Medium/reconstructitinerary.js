/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let adjacencyList = {};
     for(let i=0;i<tickets.length;i++){
         const currentTicket = tickets[i];
         const source = currentTicket[0];
         const destination = currentTicket[1];
         if(adjacencyList[source] === undefined){
             adjacencyList[source] = [];
         }
         adjacencyList[source].push({
             destination: destination,
             visited: false
         });
     }
    
    for(const [key,value] of Object.entries(adjacencyList)){
value.sort((a,b)=>{

            if(a.destination < b.destination) { return -1; }
    if(a.destination > b.destination) { return 1; }
    return 0;
        });
       
    }
    console.log(adjacencyList["JFK"]);
    let result = {result:[]};
    dfs("JFK", adjacencyList, ["JFK"], result, tickets.length);
    return result.result;
};

function dfs(node, adjacencyList, path, result, ticketsCount){
    
    const neighbours = adjacencyList[node];
    if(result.result.length > 0){
        return;
    }
    
    if(path.length === ticketsCount+1){
        result.result = path;
    }
    if(!neighbours){
        return;
    }
    if(neighbours){
       for(let i=0;i<neighbours.length;i++){
           const currentNeighbour = neighbours[i];
           
           if(!currentNeighbour.visited){
               //only if it's not visited you go that way
               currentNeighbour.visited = true;
               let temp = [...path];
               temp.push(currentNeighbour.destination);
               dfs(currentNeighbour.destination, adjacencyList, temp, result, ticketsCount);
               currentNeighbour.visited = false;
           }
       }
    }
}

let result = findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]);
console.log(result);