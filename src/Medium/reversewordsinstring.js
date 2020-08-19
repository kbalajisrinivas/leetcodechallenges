// https://leetcode.com/problems/reverse-words-in-a-string/
/*

Below solution is not great. There are easier and cleaner solutions available
(like splitting by "" and then reverse it)
*/
let input = "a good   example  ";
let output = "";

let start_counter = 0;
let counter = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
        counter++;
    } else {
        let output_str = input.substr(start_counter, counter);
        counter = 0;
        start_counter = i + 1;
        let isspace = output === "" ? "" : " ";
        if (output_str !== "") {
            output = output_str + isspace + output;
        }
    }
}
// last string
let isspace = output === "" ? "" : " ";
let output_str_last_word = input.substr(start_counter, counter);
if (output_str_last_word !== "") {
    output = output_str_last_word + isspace + output;
}
console.log(output);