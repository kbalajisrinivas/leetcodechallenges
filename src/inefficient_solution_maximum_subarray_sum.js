let input_array = [5, 6, -5, 5, 3, 5, 3, -2, 0];

let sum = 8;
let array_length = 0;

for (let i = 0; i < input_array.length; i++) {
    let consecutive_sum = 0;
    for (let j = i; j < input_array.length; j++) {
        consecutive_sum = consecutive_sum + input_array[j];
        if (consecutive_sum === sum) {
            console.log(input_array.slice(i, j+1));
            if (array_length < j+1 - i) {
                array_length = j+1 - i;
            }
        }
    }
}
console.log(array_length);