let input_str = "xyxxy";
let char_array = new Array(26).fill(-100);

// convert each character to lowercase and do mod97

for (let i = 0; i < input_str.length; i++) {
    let current_character = input_str[i].toLowerCase();
    let ascii_code = current_character.charCodeAt() % 97;
    if (char_array[ascii_code] === -100) {
        char_array[ascii_code] = i;
    } else {
        char_array[ascii_code] = -1;
    }
}
let min_pos = 1000000000;
for (let i = 0; i < char_array.length; i++) {
    if (char_array[i] !== -1 && char_array[i] !== -100) {
        if (min_pos > char_array[i]) {
            min_pos = char_array[i];
        }
    }
}
if (min_pos === 1000000000) {
    return -1;
}
console.log(min_pos);
// return min_pos;