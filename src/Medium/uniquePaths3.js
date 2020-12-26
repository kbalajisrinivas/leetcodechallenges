// https://leetcode.com/problems/unique-paths-iii/

let input = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]

let paths = [];
let numberOfZeroes = 0;
let zeroCount = 0;
let x1 = -1;
let y1 = -1;
let endx = -1;
let endy = -1;
let ans = 0;
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 1) {
            x1 = i;
            y1 = j;
        }
        if (input[i][j] === 0) {
            numberOfZeroes++;
        }
    }
}

paths = findUniquePaths(x1, y1, input);
console.log(ans);




function findUniquePaths(i, j, input) {
    if (i < 0 || j < 0 || i >= input.length || j >= input[i].length
        || input[i][j] === -1) {
        return;
    }
    //we have reached 2 and also visited all zeroes. 
    if (input[i][j] === 2 && numberOfZeroes === zeroCount) {
        //reached the end point
        ans++;
        return;
    }
    //we have reached 2 but we hvae not visited all the zeroes.
    if (input[i][j] === 2 && numberOfZeroes !== zeroCount) {
        return;
    }
    if (input[i][j] === 0) {
        zeroCount++;
    }
    let oldValue = input[i][j];
    input[i][j] = -1;
    //if you are here, that implies you are the value is 0

    //go left
    findUniquePaths(i, j - 1,  input);
    //go right
    findUniquePaths(i, j + 1,  input);
    //go down
    findUniquePaths(i - 1, j,  input);
    //go top
    findUniquePaths(i + 1, j,  input);
    input[i][j] = oldValue;
    if (input[i][j] === 0) {
        zeroCount--;
    }
    return;

}