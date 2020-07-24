let input_array = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
let numberOfSteps = 0;


let counter = 0;
let rottenOrangesPosition = {};
let infectedOranges = {}; // intermediate state
for (let i = 0; i < input_array.length; i++) {
    for (let j = 0; j < input_array[i].length; j++) {
        if (input_array[i][j] == 2) {
            rottenOrangesPosition[[i, j]] = 1;
        }
    }
}
let result = loopOverRecords();
let isFreshOrangeAvailable = false;
// check whether there are any fresh oranges
for (let i = 0; i < input_array.length; i++) {
    for (let j = 0; j < input_array[i].length; j++) {
        if (input_array[i][j] === 1) {
            isFreshOrangeAvailable = true;
            break;
        }
    }
}
if (!isFreshOrangeAvailable) {
    console.log(counter);
} else {
    console.log(-1);
}

function loopOverRecords() {
    for (let i = 0; i < input_array.length; i++) {
        for (let j = 0; j < input_array[i].length; j++) {
            if (input_array[i][j] == 2 && rottenOrangesPosition[[i, j]]) {
                // we need to set the properties for adjacent cells to rotten
                setAdjacentNodesToRotten(input_array, i, j);
            }
        }
    }
    counter++;
    if (Object.keys(infectedOranges).length > 0) {
        rottenOrangesPosition = JSON.parse(JSON.stringify(infectedOranges));
        infectedOranges = {};
        loopOverRecords();
    } else {
        return counter;
    }


}


function setAdjacentNodesToRotten(input_array, i, j) {
    if (i < 0 || j < 0 || i >= input_array.length || j >= input_array[i].length) {
        return 0;
    }
    //if any of the neighbours is 1, return true because you are setting that to rotten
    // otherwise return false. 
    if (input_array[i][j] === 1) {
        infectedOranges[[i, j]] = 2;
        input_array[i][j] = 2;
        return 1;
    }
    if (input_array[i][j] === 0) {
        return 0;
    }

    if (input_array[i][j] === 2 && !rottenOrangesPosition[[i, j]]) {
        return 0;
    }

    if (input_array[i][j] === 2 && infectedOranges[[i, j]]) {
        return 0;
    }

    let left_element = setAdjacentNodesToRotten(input_array, i - 1, j);
    let right_element = setAdjacentNodesToRotten(input_array, i + 1, j);
    let top_element = setAdjacentNodesToRotten(input_array, i, j + 1);
    let down_element = setAdjacentNodesToRotten(input_array, i, j - 1);
    return left_element || right_element || top_element || down_element;
}