let input_array = [{
    "start": 4,
    "end": 8
}, {
    "start": 2,
    "end": 5
}, {
    "start": 17,
    "end": 20
}, {
    "start": 10,
    "end": 21
}, {
    "start": 9,
    "end": 18
}];

let sorted_input_array = input_array.sort((a, b) => { return a.start - b.start });

let iterator = 1;
let maxCount = 0;
let currentCount = 0;
let endCounter = 0;

while (iterator < sorted_input_array.length) {
    if (sorted_input_array[iterator].start < sorted_input_array[endCounter].end) {
        currentCount++;
    } else {
        if (maxCount < currentCount) {
            maxCount = currentCount;
        }
        endCounter++;
    }
    iterator++;
}
if (maxCount < currentCount) {
    maxCount = currentCount;
}

console.log(maxCount + 1);