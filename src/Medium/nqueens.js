// 4
// 4 queens

// first start with the first position
// second queen can be in 3 positions (put in 3rd position)
// third queen cannot be in 2nd or 4th. 
// return 

// second queen in 4th position
// third queen in 2nd position
// fourth queen cannot be put anywhere
let result = [];
let n = 16;

let possiblePositions = [];
for (let i = 0; i < n; i++) {
    possiblePositions.push(i);
}

recursivelyFindQueenPosition([], possiblePositions, 0, n);

console.log(result);

function recursivelyFindQueenPosition(array, possiblePositions, i, n) {
    if (i == n) {
        result.push([...array]);
        return;
    }

    for (let j = 0; j < possiblePositions.length; j++) {
        let possiblePositionCopy = [...possiblePositions];
        possiblePositionCopy.splice(j, 1);
        let possibleCombination = (new Array(n)).fill('.');
        if (canQueenBePlacedInPosition(array, i, possiblePositions[j])) {
            possibleCombination[possiblePositions[j]] = 'Q';
            array.push(possibleCombination);
            recursivelyFindQueenPosition(array, possiblePositionCopy, i + 1, n);
            array.pop();
        }
    }
    return;
}

function canQueenBePlacedInPosition(array, i, j) {
    let iCounter = i - 1;
    let jCounter = j - 1;
    while (iCounter >= 0 && jCounter >= 0) {
        if (array[iCounter][jCounter] === 'Q') {
            return false;
        }
        iCounter--;
        jCounter--;
    }
    iCounter = i - 1;
    jCounter = j + 1;
    while (iCounter >= 0 && jCounter < n) {
        if (array[iCounter][jCounter] === 'Q') {
            return false;
        }
        iCounter--;
        jCounter++;
    }
    return true;
}