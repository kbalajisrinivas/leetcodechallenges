let input = "MCMXCIV";

let roman_integer_map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

if(input.length===0){
    return;
}

let lastElement = input[input.length-1];
let result = roman_integer_map[lastElement];
let previous = result;
for (let i = input.length - 2; i >= 0; i--) {
      let current_element = input[i];
      let current_result = roman_integer_map[current_element];
      if(current_result < previous){
          result = result - current_result;
      } else {
          result = result + current_result;
      }
      previous = current_result;
}
console.log(result);