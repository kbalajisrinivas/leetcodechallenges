
let input_array = [-8, -7, -6, 3]

let lowestIndex = -1;
function indexEqualsValueSearch(arr, left, right) {
    // your code goes here
    let midpoint = Math.ceil((left + right) / 2);
    if (arr[midpoint] === midpoint) {
        if (lowestIndex == -1) {
            lowestIndex = midpoint
        }
        if (midpoint < lowestIndex) {
            lowestIndex = midpoint;
        }
    }
    if (left >= right) {
        return;
    }
    if (arr[midpoint] >= midpoint) {
        indexEqualsValueSearch(arr, left, midpoint - 1);

    } else {
        indexEqualsValueSearch(arr, midpoint + 1, right);
    }
}

indexEqualsValueSearch(input_array, 0, input_array.length - 1);
console.log(lowestIndex);






