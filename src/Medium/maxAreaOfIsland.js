// let input_array = [];
// https://leetcode.com/problems/max-area-of-island/

const rows = 4;
const columns = 6;
// for (let i = 0; i < columns; i++) {
//     let row_array = [];
//     for (let j = 0; j < rows; j++) {
//         let randomNumber = Math.floor(Math.random() * 10);
//         row_array[j] = randomNumber % 2 === 0 ? 0 : 1;
//     }
//     input_array.push(row_array);
// }

let input_array = [[1, 1, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 1],
[1, 1, 0, 0, 0, 0]]
console.log(input_array);

// we need to traverse on rows/columns when there are 1's
let maxIslandArea = 0;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        if (input_array[i][j] === 1) {
            let islandArea = findMaxIslandArea(input_array, i, j, 1);
            if (maxIslandArea < islandArea) {
                maxIslandArea = islandArea;
            }
        }
    }
}

function findMaxIslandArea(input_array, i, j, area) {
    if (i < 0 || i >= input_array.length || j < 0 || j >= input_array[i].length || input_array[i][j] == 0) {
        return 0;
    }

    input_array[i][j] = 0;
    let leftIslandArea = findMaxIslandArea(input_array, i, j - 1, area);
    let rightIslandArea = findMaxIslandArea(input_array, i, j + 1, area);
    let topIslandArea = findMaxIslandArea(input_array, i + 1, j, area);
    let bottomIslandArea = findMaxIslandArea(input_array, i - 1, j, area);
    return area + leftIslandArea + rightIslandArea + topIslandArea + bottomIslandArea;
}