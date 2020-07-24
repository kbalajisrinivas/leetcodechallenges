/*

 0 0 0
 1 0 0
 0 1 0

 brute force
 loop over the rows/column and store the rows/columns in  separate arrays

 rows = [1,2]
 column = [0,1]

 for(let i=0;i<rows.length;i++){
    for(let j=0;j<columns.length;j++){
        if()
    }

 }



*/

let input_matrix = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 1, 0]
];

for (let i = 0; i < input_matrix.length; i++) {
    for (let j = 0; j < input_matrix[i].length; j++) {
        if (input_matrix[i][j] == 1) {
            // set all the matrix's row/column to be -1 except the current 1
            setRowValue(i, j);
            setColumnValue(i, j);
        }
    }
}

for (let i = 0; i < input_matrix.length; i++) {
    for (let j = 0; j < input_matrix[i].length; j++) {
        if (Math.abs(input_matrix[i][j]) == 1) {
            // set all the matrix's row/column to be -1 except the current 1
            input_matrix[i][j] = 1;
        }
    }
}
console.log(input_matrix);

function setRowValue(row_counter, column_counter) {
    for (let i = 0; i < input_matrix.length; i++) {
        if (i !== row_counter && input_matrix[i][column_counter] !== 1) {
            input_matrix[i][column_counter] = -1;
        }
    }
}

function setColumnValue(row_counter, column_counter) {
    for (let j = 0; j < input_matrix[row_counter].length; j++) {
        if (j !== column_counter && input_matrix[row_counter][j] !== 1) {
            if(input_matrix[row_counter][j] === -1){
                break;
            }
            input_matrix[row_counter][j] = -1;
        }
    }
}