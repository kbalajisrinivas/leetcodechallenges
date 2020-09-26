var longestIncreasingPath = function (matrix) {

    let longestLengthMatrix = [];
    let maxLength = 0;

    for (let i = 0; i < matrix.length; i++) {
        longestLengthMatrix.push(new Array(matrix[0].length));
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let path = findMaximumPathForCell(i, j, longestLengthMatrix, matrix, -50000, 0);
            longestLengthMatrix[i][j] = path;
            maxLength = Math.max(path, maxLength);
        }
    }

    return maxLength;
};

function findMaximumPathForCell(i, j, longestLengthMatrix, matrix, prevcell_value, maxLength) {

    if (i < 0 || j < 0 || i >= longestLengthMatrix.length || j >= longestLengthMatrix[0].length || matrix[i][j] <= prevcell_value) {
        return 0;
    }


    if (longestLengthMatrix[i][j] !== undefined) {
        return longestLengthMatrix[i][j];
    }



    let current_value = matrix[i][j];
    let topPath = findMaximumPathForCell(i - 1, j, longestLengthMatrix, matrix, current_value, maxLength);
    let bottomPath = findMaximumPathForCell(i + 1, j, longestLengthMatrix, matrix, current_value, maxLength);
    let leftPath = findMaximumPathForCell(i, j - 1, longestLengthMatrix, matrix, current_value, maxLength);
    let rightPath = findMaximumPathForCell(i, j + 1, longestLengthMatrix, matrix, current_value, maxLength);

    return Math.max(topPath, bottomPath, leftPath, rightPath) + 1;

}

let result = longestIncreasingPath([
    [7, 7, 5],
    [2, 4, 6],
    [8, 2, 0]
])
console.log(result);