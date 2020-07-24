let input_array = [2, 3, 1];


/*1, 3, 2

2, 3, 1  => 3 1 2

The idea is to find the first place where the numbers are decreasing. 
then we need to find the first number that is less than the current number. 
once we find that number, we need to swap with i
finally reverse the array starting from i+1
*/

let i, j;

for (i = input_array.length - 1; i > 0; i--) {
    if (input_array[i] > input_array[i - 1]) {
        break;
    }
}
// the element at which it is descending.
i = i - 1;

if (i >= 0) {
    for (j = i + 1; j <= input_array.length - 1; j++) {
        if (input_array[j] <= input_array[i]) {
            break;
        }
    }
    let temp = input_array[j - 1];
    input_array[j - 1] = input_array[i];
    input_array[i] = temp;
}

let start = i + 1;
let end = input_array.length - 1;

while (start < end) {
    let temp = input_array[start];
    input_array[start] = input_array[end];
    input_array[end] = temp;
    start++;
    end--;
}

console.log(input_array);