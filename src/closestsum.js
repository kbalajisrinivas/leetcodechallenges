
// Given a sorted array and a number x, find a pair in array whose sum is closest to x.

// Input: arr[] = {22, 28, 29, 30, 40}, x = 54
// Output: 22 and 30

// Input: arr[] = {1, 3, 4, 7, 10}, x = 15
// Output: 4 and 10

/*
 1,3,5,8,10 sum = 13
 
 3,10
 
 sum = 100000
 8,10 - 18
 
 
 sum = 24
 
 1, 23
 3, 21
 5, 19
 8, 16
 10, 14
 
 {-7, -6, -3, 0, 1, 5, 8, 9, 10}, T = 0.
 
 pseudocode
 
 two pointers, one from left and another right and keep moving the points
 move rightpointer to left is sum > target
 
 move leftpointer to right if sum < target
 
 
*/


//let input_array = [22, 25, 29, 30, 40, 50];
//const target = 54

let input_array = [-7, -6, -3, 0, 0, 5, 8, 9, 10];
const target = 0;
let distances = {}

let result = findMinimumDistance(input_array, target);
console.log(result);



function findMinimumDistance(input_array, target){
  if(input_array.length === 0){
    return "Not Found";
  }
  
  let leftPointer = 0;
  let rightPointer = input_array.length-1;
  let previousDistance = 0;
  let previousSumPair = {distance: null};
  
  while(leftPointer < rightPointer){
    
     let sum = input_array[leftPointer] + input_array[rightPointer];
     let sumpair = {};
    
     if(sum == target){
       return [input_array[leftPointer], input_array[rightPointer]];
     } else {
       //compare the previous distance and the current distance
       sumpair = {
         "distance": Math.abs(sum-target),
         "numbers": [input_array[leftPointer], input_array[rightPointer]]
       }
       
       
       if(previousSumPair.distance=== null || previousSumPair.distance > sumpair.distance){
          previousSumPair = sumpair;
       }
     }
    
     if(sum < target){
       leftPointer++;
     } else if(sum > target){
       rightPointer--;
     }     
  }
  
  return previousSumPair.numbers;
  
}