/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
//             if it's 0 don't do anything
            if(matrix[i][j] === 1){
                dfs(matrix,i,j);
            }
        }
    }
        
   return matrix;
};

function dfs(matrix,i,j){
    if(i< 0 || j < 0 || i >= matrix.length || j >= matrix[i].length){
        return Number.MAX_SAFE_INTEGER;
    }
    if(matrix[i][j] === -1){
        return -1;
    }
    
    if(matrix[i][j] === 0){
        return 0;
    }
    if(matrix[i][j] !== 1){
        return matrix[i][j];
    }
    matrix[i][j] = -1;
    let left = dfs(matrix,i,j-1);
    let right = dfs(matrix,i,j+1);
    let top = dfs(matrix,i-1,j);
    let bottom = dfs(matrix,i+1,j);
    
    matrix[i][j] = 1+ Math.min(left,right,top,bottom);
    
    return 1+ Math.min(left,right,top,bottom);
    
}


let result = updateMatrix([[1,1,1],[1,1,0]]);
console.log(result);