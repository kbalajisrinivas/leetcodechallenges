// https://leetcode.com/problems/minimum-path-sum/

var minPathSum = function(grid) {
    let result = findMinPathSum(grid, 0, 0, {minSum:Number.MAX_VALUE}, 0);
    return result;
};


function findMinPathSum(grid, i, j, minSum, currentSum){
//     we have reached the last cell, we need to compare
    if(i === grid.length-1 && j === grid[i].length-1){
        currentSum = currentSum + grid[i][j];
        if(minSum.minSum > currentSum){
            minSum.minSum = currentSum;
        }
        return;
    }
    if(i >= grid.length || j >= grid[i].length){
        return;
    }
    currentSum = currentSum + grid[i][j];
    //move right
    findMinPathSum(grid, i, j+1, minSum, currentSum);
    //move down
    findMinPathSum(grid,i+1,j,minSum, currentSum);
    return minSum.minSum;
}
let input_array = [
    [1,3,121],
    [14,5,1],
    [40,2,1]
  ]
let result = minPathSum(input_array);
console.log(result);