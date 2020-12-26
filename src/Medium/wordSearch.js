/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// https://leetcode.com/problems/word-search/
var exist = function (board, word) {

    let visitedDictionary = new Set()
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            //             start at word's first character
            const firstCharacter = word[0];
            if (board[i][j] === firstCharacter) {
                //check whether. a word can be constructed here
                let result = traverseBoard(board, word, i, j, 0, visitedDictionary);
                if (result) {
                    return true;
                }
            }
        }
    }
    return false;
};


function traverseBoard(board, word, i, j, wordCharacter, visitedDictionary) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
        //we have reached out of bounds
        return false;
    }
    const currentCharacter = word[wordCharacter];
    if (board[i][j] !== currentCharacter) {
        return false;
    }

    const currentCoordinate = `${i}_${j}`;

    if (visitedDictionary.has(currentCoordinate)) {
        return false;
    }

    visitedDictionary.add(currentCoordinate);

    //     we are at last character
    if (word.length - 1 === wordCharacter) {
        if (word[wordCharacter] === board[i][j]) {
            return true;
        } else {
            return false;
        }
    }

    console.log(`${wordCharacter}`);

    let result = false;
    //there are more characters in the word and within array bounds
    // if something is true,we don't even need to worry about running other directions

    //go up
    result = !result && traverseBoard(board, word, i - 1, j, wordCharacter + 1, visitedDictionary);
    //go down
    if (!result) {
        result = !result && traverseBoard(board, word, i + 1, j, wordCharacter + 1, visitedDictionary);
    }
    //go left
    if (!result) {
        result = !result && traverseBoard(board, word, i, j - 1, wordCharacter + 1, visitedDictionary);
    }
    // go right
    if (!result) {
        result = !result && traverseBoard(board, word, i, j + 1, wordCharacter + 1, visitedDictionary);
    }

    visitedDictionary.delete(currentCoordinate);

    return result;

}

let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
let word = "ABCCCED";


let result = exist(board, word);
console.log(result);