let input_array = [3, 2, 1, 0, 4];
let result_array = (new Array(input_array.length)).fill(0);

for (let i = input_array.length - 2; i >= 0; i--) {
    let maxJumps = input_array[i];
    for (let j = 1; j <= maxJumps; j++) {
        if (i + j == input_array.length - 1 || result_array[i + j] == 1) {
            result_array[i] = 1;
        }
    }
}
return result_array[0] == 1;