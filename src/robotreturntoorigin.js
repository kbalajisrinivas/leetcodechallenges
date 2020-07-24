let x = 0;
let y = 0;

let input = "RRDD";
for (let i = 0; i < input.length; i++) {
    if (input[i] === "R") {
        x++;
    } else if (input[i] === "L") {
        x--;
    } else if (input[i] === "U") {
        y++;
    } else if (input[i] === "D") {
        y--;
    }
}

console.log(x === 0 && y===0);