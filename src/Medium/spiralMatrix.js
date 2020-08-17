var result_array= [];
let elementCount = 0;
let visitedElements = 0;
var input_array = [];
//populate the matrix

// for (let i = 0; i < rowCount; i++) {
//     let columns_for_row = [];
//     for (let j = 0; j < columnCount; j++) {
//         columns_for_row.push(elementCount);
//         elementCount = elementCount + 1;
//     }
//     input_array.push(columns_for_row);
// }
let result = spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
console.log(JSON.stringify(result));



// let visitedElements = rowCount * columnCount;
// let columnStartCounter = 0;
// let columnEndCounter = columnCount - 1;

// let rowStartCounter = 0;
// let rowEndCounter = rowCount - 1;
// let counter = 1;
// let result_array = [];



// while (visitedElements > 0) {
//     if (rowStartCounter < rowCount) {
//         moveright(columnStartCounter, columnEndCounter, rowStartCounter);
//     }
//     if (columnEndCounter < columnCount) {
//         movedown(rowStartCounter + 1, rowEndCounter, columnEndCounter);
//     }
//     if (rowEndCounter >= 0) {
//         moveleft(columnEndCounter - 1, columnStartCounter, rowEndCounter);
//     }
//     if (columnStartCounter >= 0) {
//         moveup(rowEndCounter - 1, rowStartCounter + 1, columnStartCounter);
//     }

//     rowStartCounter += 1;
//     rowEndCounter -= 1;
//     columnStartCounter += 1;
//     columnEndCounter -= 1;
// }

// console.log(JSON.stringify(result_array));

// function moveright(columnStartCounter, columnEndCounter, rowIndex) {
//     for (let i = columnStartCounter; i <= columnEndCounter; i++) {
//         result_array.push(input_array[rowIndex][i]);
//         visitedElements--;
//     }
// }


// function movedown(rowStartCounter, rowEndCounter, columnIndex) {
//     for (let i = rowStartCounter; i <= rowEndCounter; i++) {
//         result_array.push(input_array[i][columnIndex]);
//         visitedElements--;
//     }
// }

// function moveleft(columnEndCounter, columnStartCounter, rowIndex) {
//     for (let i = columnEndCounter; i >= columnStartCounter; i--) {
//         result_array.push(input_array[rowIndex][i]);
//         visitedElements--;
//     }
// }

// function moveup(rowEndCounter, rowStartCounter, columnIndex) {
//     for (let i = rowEndCounter; i >= rowStartCounter; i--) {
//         result_array.push(input_array[i][columnIndex]);
//         visitedElements--;
//     }
// }



/**
 * @param {number[][]} matrix
 * @return {number[]}
 */





function spiralOrder(matrix) {
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
        console.log("hello");
    }
    else {
        visitedElements = 0;
    }

    while (visitedElements > 0) {

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