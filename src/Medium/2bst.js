
/*

first we will try to see whether we can print the binary search tree in sorted order

         6

    4         8

1      5   7      10
*/
class Node {
    constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    }
 }

 let root = new Node(6);
 root.left = new Node(4);
 root.right = new Node(8);
 root.left.left = new Node(1);
 root.left.right = new Node(5);
 root.right.left = new Node(7);
 root.right.right = new Node(10);

let result = findChildren(root);
console.log(result);


 function findChildren(node){
     if(node === null){
         return [];
     }
     let result = [];
     let leftNodes = findChildren(node.left);
     let rightNodes = findChildren(node.right);
     result.push(...leftNodes);
     result.push(node.value);
     result.push(...rightNodes);
     return result;
 }