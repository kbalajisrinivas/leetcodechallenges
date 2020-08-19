
function findCeiling(input_array, target) {
    let left = 0;
    let right = input_array.length - 1;

    if (target < input_array[0]) {
        return input_array[0];
    }

    if (target > input_array[input_array.length - 1]) {
        return -1;
    }

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (input_array[mid] === target) {
            return mid;
        }
        if (input_array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

let input_array = [4, 6, 20, 30, 31, 32, 34];
const target = 33;

let response = findCeiling(input_array, target);
console.log(response);