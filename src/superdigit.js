let number = 5789

let number_str = number.toString();
let final_str = "";

for (let i = 0; i < 100; i++) {
    final_str = final_str + number_str;
}
let result = findSuperDigit(final_str)

function findSuperDigit(input) {
    //base case
    if (Math.floor(parseInt(input) / 10) < 1) {
        return input;
    }
    //need to find the sum recursively.
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum = sum + parseInt(input[i], 10)
    }
    return findSuperDigit(sum.toString())
}

// let result = findSuperDigit(number);
console.log(result);

// longest increasing subarray of ints
// merge N sorted arrays 
// bfs
// matching paranthesis