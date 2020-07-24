let str = "balajisrinivas";

let stringResult = [str.split('')[0]];

for (let i = 1; i < str.length; i++) {
    let currentCharacter = str[i];
    let localResult = [];
    for (let j = 0; j < stringResult.length; j++) {
        let x = addLetterToAllPositions(str[i], stringResult[j]);
        localResult.push(...x);
    }
    stringResult = localResult;
}
console.log(stringResult);


function addLetterToAllPositions(char, input_str) {
    let result = [];
    for (let i = 0; i <= input_str.length; i++) {
        let str = input_str.split('');
        str.splice(i, 0, char);
        result.push(str.join(''));
    }
    return result;
}