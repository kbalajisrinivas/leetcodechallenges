// https://leetcode.com/problems/rotate-image/
/*There is another solution for doing this

We need to swap right elements to left and left elements to right
 
1 2     changes to    2  1     
3 4                   4  3

Then change i and j positions [i][j] [j][i]. 

2 1    changes to 3  1
4 3               4  2
*/
/*

input matrix:  1 2 
               3 4 

o/p: 3 1 
     4 2

     1 2 3
     4 5 6
     7 8 9 


    7 4  1
    8 5  2 
    9 6  3

    start = 0
    end = column.length

    0,0 -> 0,end
    0,1 -> 1, end
    0,2 -> 2,end

    maximum sum contigous array

    [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    0 1 0 4, 3,5,6,1,5

    maxsum is 6
    start with -2+1, maxsum is -1

    [-2,6,-3,100]

    [-4,-5,6,7,8,9]


    0, 6, 3, 103
    0 0 6 13 21 30


 1 2 4 6

 3 4 5 6

 search for the smaller array element in the larger array

 m, n 
 O(m+n)


*/

let matrix = [
   [1, 2, 3, 16],
   [4, 5, 6, 17],
   [7, 8, 9, 18],
   [27, 28, 29, 30]
];
let matrixLength = matrix.length-1;

for (let i = 0; i < matrixLength; i++) {
   for (let j = i; j < matrixLength; j++) {
      let temp = matrix[i][j]; //rightmost
      matrix[i][j] = matrix[matrixLength - j][i];
      matrix[matrixLength - j][i] = matrix[matrixLength][matrixLength - j];
      matrix[matrixLength][matrixLength - j] = matrix[j][matrixLength]
      matrix[j][matrixLength] = temp;
   }
   matrixLength = matrixLength - 1;
}

console.log(matrix);