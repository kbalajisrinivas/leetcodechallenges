let input_str = "abcd";
String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

let result = findPermutations(input_str);
console.log(result.length);

function findPermutations(input_str) {
    //base condition
    if (input_str.length === 1) {
        return [input_str];
    }
    const current_character = input_str[0];
    let subString = input_str.slice(1, input_str.length);
    let combinations = findPermutations(subString);
    let allCombinations = [];
    //need to insert the current character in all the positions of the substring
    for (let i = 0; i < combinations.length; i++) {
        let currentCombination = combinations[i];
        for (let i = 0; i <= currentCombination.length; i++) {
            let permuted_string = currentCombination.splice(i, 0, current_character);
            allCombinations.push(permuted_string);
        }
    }
    return allCombinations;
}

