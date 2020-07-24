/*-4 -1 2 3 4

o/p 1 4 9 16 16 

what can i check for?

need to find the first element of the array
first square number greater than the previous one
16 < 1? no
1 < 4? yes

0 1 2 3 4

0 < 1? yes
start at 0

-2 -1  1 2

4 < 1? no
1<=1? yes

*/

let result = sortedSquareArray([-1]);
console.log(result);

function sortedSquareArray(input_array) {
    let firstIndex = 0;
    let result_array = [];
    while (firstIndex < input_array.length && input_array[firstIndex] < 0) {
        firstIndex = firstIndex + 1;
    }
    let startIndex = firstIndex - 1;
    let endIndex = firstIndex;

    while (startIndex >= 0 && endIndex < input_array.length) {
        let leftElement = Math.pow(input_array[startIndex], 2);
        let rightElement = Math.pow(input_array[endIndex], 2);
        if (leftElement < rightElement) {
            result_array.push(leftElement);
            startIndex = startIndex - 1;
        } else {
            result_array.push(rightElement);
            endIndex = endIndex + 1;
        }
    }

    while (startIndex >= 0) {
        result_array.push(Math.pow(input_array[startIndex], 2));
        startIndex = startIndex - 1;
    }

    while (endIndex < input_array.length) {
        result_array.push(Math.pow(input_array[endIndex], 2));
        endIndex = endIndex + 1;
    }
    return result_array;
}
