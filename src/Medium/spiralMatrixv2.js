var generateMatrix = function(n) {
    
    let matrix = [];
    for(let i = 0;i<n;i++){
         let matrixColumns = new Array(n).fill(0);
         matrix.push(matrixColumns);
    }
    
    //go to the right
     let i = 0;
     let j = 0;
     let counter = 0;
     let matrixCell = 1;
    
     while(i < n && j < n){
         
         for(let columns = counter; columns < n - counter;columns++){
             matrix[i][columns] = matrixCell;
             matrixCell++;
         }
         
         for(let rows = counter+1; rows < n-counter;rows++){
             matrix[rows][n-counter-1] = matrixCell;
             matrixCell++;
         }
         
         
         for(let columns = n-counter-2; columns >=counter; columns--){
             matrix[n-counter-1][columns] = matrixCell;
             matrixCell++;
         }
         
         for(let rows = n-counter-2; rows > counter;rows--){
             matrix[rows][counter] = matrixCell;
             matrixCell++;
         }
         
         counter++;
         i++;
         j++;
     }
    
    return matrix;
    
};

let result = generateMatrix(3);
