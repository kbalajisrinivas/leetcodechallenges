/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 1){
                let area = dfs(i,j,grid);
                maxArea = Math.max(area, maxArea);
            }
        }
    }
    return maxArea;
};



function dfs(i,j,input){
    if(i<0 || j < 0 || i>= input.length || j >= input[0].length){
        return 0;
    }
    if(input[i][j] === 0 || input[i][j] === -1){
        return 0;
    }
    
    let count = 1;
    input[i][j] = -1;
    count = count + dfs(i-1,j,input);
    count = count + dfs(i+1,j,input);
    count = count + dfs(i,j-1,input);
    count = count + dfs(i,j+1, input);
    
    return count;
}

let input = 
[
    [0,1,0],
    [0,1,0],
    [0,1,1]
]

let result = maxAreaOfIsland(input);
console.log(result);