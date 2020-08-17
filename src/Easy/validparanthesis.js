// https://leetcode.com/problems/valid-parentheses/


let input = "({[]})()}{[]";
const paranthesis_matches = {
    "(": ")",
    "{": "}",
    "[": "]"
}

let input_array = input.split("");
let stack = [];

for (let i = 0; i < input_array.length; i++) {
    let current_character = input_array[i];
    if (current_character === "(" || current_character === "{" || current_character === "[") {
        stack.push(current_character);
    } else {
        let char = stack.pop();
        if(paranthesis_matches[char] !== input_array[i]){
            return false;
        }
    }
}

if (stack.length > 0) {
    console.log("Invalid paranthesis");
} else {
    console.log("valid paranthesis");
}