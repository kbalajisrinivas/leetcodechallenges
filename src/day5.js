let input_array = ["duh", "ill"];

// [["cab"],["tin"],["pew"],["duh","ill"],["may"],["buy"],["bar"],["max"],["doc"]]

// [["doc"],["bar"],["buy"],["ill"],["may"],["tin"],["cab"],["pew"],["max"],["duh"]]

let dictionary_str = {};
// ascii doesn't exactly work. it works only if the characters are distinct
// need to sort the arrays and then compare them
for (let i = 0; i < input_array.length; i++) {
    let str = input_array[i];
    let asciiSum = 0;
    let char_dict = {};
    for (let j = 0; j < str.length; j++) {
        asciiSum += str[j].charCodeAt();
        if (char_dict[str[j]]) {
            char_dict[str[j]] += 1;
        } else {
            char_dict[str[j]] = 1;
        }
    }
    let key = [str.length, asciiSum];
    if (dictionary_str[key]) {
        let first_element = dictionary_str[key][0];
        // compare the characters in both the strings
        dictionary_str[key].push(str);
    } else {
        dictionary_str[key] = [str];
    }
}
let result = [];
for (let key in dictionary_str) {
    result.push(dictionary_str[key]);
}
console.log(result);