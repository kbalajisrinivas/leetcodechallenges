let words = ["wfhi", "wf"];
let order = "worldabcefghijkmnpqstuvxyz";


let result = verifyAlien(words, order);
console.log(result);

function verifyAlien(words, order) {
    let dict = {};
    for (let i = 0; i < order.length; i++) {
        dict[order[i]] = i;
    }
    let previous = null;

    for (let i = 0; i < words.length; i++) {
        let wordPositions = [];
        for (let j = 0; j < words[i].length; j++) {
            wordPositions.push(dict[words[i][j]]);
        }
        if (previous === null) {
            previous = JSON.parse(JSON.stringify(wordPositions));
        } else {
            // compare previous and wordpositions and then assign
            for (let i = 0; i < previous.length; i++) {
                if (wordPositions.length > i) {
                    if (previous[i] > wordPositions[i]) {
                        return false;
                    } else if (previous[i] < wordPositions[i]) {
                        break;
                    }
                } else {
                    return false;
                }
            }
            previous = wordPositions;
        }
    }
    return true;
}