let input_array = [-6];
let result = binarySearch(input_array, -2);
console.log(result);

/*

go to the midelement
midelement is startpos + Math.floor((end - startpost)/2)

each time you update the start and end position
the while loop loops until endposition < startposition

in the above example, 
first midpoint is  0 + 3 which is 1

let's say we want to find the number -2

1 > -1
left side
start = start, end = midpoint -1

0 + 1
midpoint 1 

-1 > -2
left side
start = 0, end = 0

*/

function binarySearch(input_array, element) {
    if (input_array.length === 0) {
        return -1;
    }
    let start = 0;
    let end = input_array.length - 1;
    let midpoint = 0;

    while (start <= end) {
        midpoint = start + Math.floor((end - start) / 2);
        if (input_array[midpoint] == element) {
            return midpoint;
        } else if (input_array[midpoint] > element) {
            end = midpoint - 1;
        } else {
            start = midpoint + 1;
        }
    }
    return -1;
}