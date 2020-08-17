let input_array = [2, 6, 4, 8, 0, 10, 9, 15];

// [1, 2, 3, 4, 5]
//[2, 6, 4, 8, 0, 10, 9, 15]

let leftIndex = 0;
let rightIndex = 0;
let counter = 1;

while (counter < input_array.length) {
    if (input_array[counter - 1] > input_array[counter]) {
        if (leftIndex === 0) {
            leftIndex = counter;
            leftIndex--;
            break;
        }
    }
    counter++;
}

counter = input_array.length - 1;
while (counter > 0) {
    if (input_array[counter - 1] > input_array[counter]) {
        if (rightIndex === 0) {
            rightIndex = counter;
            break;
        }
    }
    counter--;
}

// if (rightIndex === 0) {
//     return 2;
// }

let minElement = Number.MAX_SAFE_INTEGER;
let maxElement = Number.MIN_SAFE_INTEGER;

let minIndex = 0;
let maxIndex = 0;

for (let i = leftIndex; i <= rightIndex; i++) {
    minElement = Math.min(minElement, input_array[i]);
    if (minElement === input_array[i]) {
        minIndex = i;
    }
    maxElement = Math.max(maxElement, input_array[i]);
    if (maxElement === input_array[i]) {
        maxIndex = i;
    }
}

while (minIndex > 0 && input_array[minIndex] >= minElement) {
    minIndex--;
}

while (maxIndex < input_array.length - 1 && input_array[maxIndex] <= maxElement) {
    maxIndex++;
}
maxIndex--;

console.log(maxIndex - minIndex);