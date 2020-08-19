/*4 3 2 7 8 10 1 6 7

sorted array: 1 2 3 4 6 7 7 8 10


7 is pivot

i = -1
j = 0

4 < 7 

i=0
j=0

3 < 7
i=1






*/

let input_array = [-4, 3, 2, 700, 80, -10, 1, 6, -7];
let sorted_array = quicksort(input_array, 0, input_array.length - 1);
console.log(`${input_array}`);

function quicksort(input_array, low, high) {
    if (low < high) {
        let positionOfElement = partition(input_array, low, high);
        quicksort(input_array, low, positionOfElement - 1);
        quicksort(input_array, positionOfElement + 1, high);
    }
}

function partition(input_array, low, high) {
    //counter for keeping the min element
    let pivotElement = input_array[high];
    let i = low - 1;
    // iterator
    for (let j = low; j < high; j++) {
        if (input_array[j] < pivotElement) {
            i++;
            let temp = input_array[j];
            input_array[j] = input_array[i];
            input_array[i] = temp;
        }
    }
    // swap the i+1th element and the pivot
    let temp = input_array[i + 1];
    input_array[i + 1] = input_array[high];
    input_array[high] = temp;
    return i + 1;
}