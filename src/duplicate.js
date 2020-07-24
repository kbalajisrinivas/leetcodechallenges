let input_array = [1, 2, 1, 3, 2, 1, 2,];

let duplicate_array_set = new Set();

for (let i = 0; i < input_array.length; i++) {
    let index = input_array[i] - 1;
    if (input_array[index] < 0) {
        duplicate_array_set.add(input_array[i]);
    } else {
        input_array[index] *= -1;
    }
}

console.log(Array.from(duplicate_array_set));


