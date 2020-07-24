class Node {
    constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    }
 }
// THIS IS THE SOLUTION
 
 let root = new Node(4);
 root.left = new Node(2);
//  root.right = new Node(6);
//  root.left.left = new Node(10);
 let maxNodePath = 0;

 let diameter = findDiameter(root);
 console.log(maxNodePath);
 
 function findDiameter(node){
     if(node === null){
         return 0;
     }
     //base case
     if(node.left === null && node.right === null){
     return 1;
     }
     let leftNodes = findDiameter(node.left);
     let rightNodes = findDiameter(node.right);
     const totalPath = leftNodes + rightNodes;
     if(maxNodePath < totalPath){
         maxNodePath = totalPath;
     }
     currentMaxPath = Math.max(leftNodes, rightNodes);
     return currentMaxPath+1;
 
 }