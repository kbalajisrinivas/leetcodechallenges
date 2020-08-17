function getCheapestCost(rootNode) {
  // your code goes here
  let minSumPath = 0;
  let result = {
    minSum: null
  }
  dfs(rootNode, 0, result);   // 0, 0, 0
  return result.minSum;
}

function dfs(node, sum, result){
  console.log(node);
  // leaf node because there are no children
   if(node.children.length === 0){   // length = 2
     let currentSum = sum + node.cost;  // 5+4 = 0
     
     if(result.minSum === null){
       result.minSum = currentSum; // 9 
     }
     if(currentSum < result.minSum){
        result.minSum = currentSum;
     }
     return;
   }
  
   let currentSum = sum + node.cost;  //currentsum = 5
   for(let i=0;i<node.children.length;i++){
      dfs(node.children[i], currentSum, result); //1, 5, 9
   }
  return;
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/ 

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}


rootNode = new Node(0);
console.log(rootNode);
Node5 = new Node(5)
Node3 = new Node(3)
Node6 = new Node(6)
rootNode.children.push(Node5)
rootNode.children.push(Node3)
rootNode.children.push(Node6)
Node4 = new Node(4)
Node5.children.push(Node4)
Node2 = new Node(2)
Node0 = new Node(0)
Node3.children.push(Node2)
Node3.children.push(Node0)
Node1 = new Node(1)
Node5 = new Node(5)
Node6.children.push(Node5)
Node6.children.push(Node1)
Node1 = new Node(1)
Node2.children.push(Node1)
Node10 = new Node(10)
Node0.children.push(Node10)
Node1_1 = new Node(1)
Node1.children.push(Node1_1)
Node2_2 = new Node(100);
Node1_1.children.push(Node2_2)

console.log(getCheapestCost(rootNode))
 