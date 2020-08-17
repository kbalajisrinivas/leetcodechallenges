// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rows_dict = {};
    let columns_dict = {};
    let result = false;
    for (let i = 0; i < board.length; i += 3) {
        for (let j = 0; j < board[i].length; j += 3) {
            result = checkIfBlockIsValid(board, rows_dict, columns_dict, i, j);
            if (!result) {
                return false;
            }
        }
    }
    return true;
};

function checkIfBlockIsValid(board, rows_dict, columns_dict, i, j) {
    let current_block = new Set();
    for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
            let number = board[x][y];
            //             number is a valid number
            if (number !== ".") {
                if (!rows_dict[x]) {
                    rows_dict[x] = new Set()
                }
                if (rows_dict[x].has(number)) {
                    return false;
                } else {
                    rows_dict[x].add(number);
                }

                if (!columns_dict[y]) {
                    columns_dict[y] = new Set();
                }
                if (columns_dict[y].has(number)) {
                    return false;
                } else {
                    columns_dict[y].add(number);
                }
                if (current_block.has(number)) {
                    return false;
                }
                current_block.add(number);
            }
        }
    }
    return true;

}

let input_array = [
    [[".", "2", "3", "4", "5", "6", "7", "8", "9"], ["1", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."]]
];

let result = isValidSudoku(input_array);
console.log(result);