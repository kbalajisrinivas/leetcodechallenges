/**
 * @param {number[][]} matrix
 * @return {number[]}
 */



var result_array= [];
let elementCount = 0;
var visitedElements = 0;
var input_array = [];

var spiralOrder = function (matrix) {
    input_array = matrix;
    let columnStartCounter = 0;
    let columnEndCounter = 0;
    let rowStartCounter = 0;
    let rowEndCounter = 0;
    let rowCount = 0
    let columnCount = 0;
    
    // Initialize all variables here
    if (input_array.length > 0) {
        rowCount = input_array.length;
        columnCount = input_array[0].length;
        columnEndCounter = columnCount - 1;
        rowEndCounter = rowCount - 1
        visitedElements = rowCount * columnCount;
    }
    else {
        visitedElements = 0;
    }

    while (visitedElements > 0) {
        console.log(visitedElements);
        if (rowStartCounter < rowCount) {
            moveright(columnStartCounter, columnEndCounter, rowStartCounter);
        }
        if (columnEndCounter < columnCount) {
            movedown(rowStartCounter + 1, rowEndCounter, columnEndCounter);
        }
        if (rowEndCounter >= 0) {
            moveleft(columnEndCounter - 1, columnStartCounter, rowEndCounter);
        }
        if (columnStartCounter >= 0) {
            moveup(rowEndCounter - 1, rowStartCounter + 1, columnStartCounter);
        }

        rowStartCounter += 1;
        rowEndCounter -= 1;
        columnStartCounter += 1;
        columnEndCounter -= 1;
    }
    return result_array;
};



let result = spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
console.log(result);
function moveright(columnStartCounter, columnEndCounter, rowIndex) {
    for (let i = columnStartCounter; i <= columnEndCounter; i++) {
        result_array.push(input_array[rowIndex][i]);
        visitedElements--;
    }
}


function movedown(rowStartCounter, rowEndCounter, columnIndex) {
    for (let i = rowStartCounter; i <= rowEndCounter; i++) {
        result_array.push(input_array[i][columnIndex]);
        visitedElements--;
    }
}

function moveleft(columnEndCounter, columnStartCounter, rowIndex) {
    for (let i = columnEndCounter; i >= columnStartCounter; i--) {
        result_array.push(input_array[rowIndex][i]);
        visitedElements--;
    }
}

function moveup(rowEndCounter, rowStartCounter, columnIndex) {
    for (let i = rowEndCounter; i >= rowStartCounter; i--) {
        result_array.push(input_array[i][columnIndex]);
        visitedElements--;
    }
}