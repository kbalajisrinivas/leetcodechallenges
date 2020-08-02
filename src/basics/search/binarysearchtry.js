let input_array = [1, 3, 5, 6, 7, 8, 11, 12, 13];

let i = 0;
let j = input_array.length - 1;
let k = 13;

while (i <= j) {
    let middleElement = Math.ceil((i + j) / 2);
    if (input_array[middleElement] === k) {
        return true;
    }
    if (input_array[middleElement] < k) {
        // move to the right
        i = middleElement+1;
    } else {
        j = middleElement-1;
    }
}