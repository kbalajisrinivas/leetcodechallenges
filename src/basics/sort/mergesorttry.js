
let input_array = [1, 4, 5, 2, 3, 8, 7, 6];
let result = mergeSort1(0, input_array.length - 1, input_array);
console.log(result);



function mergeSort1(left, right, array) {
    if (left < right) {
        let middleElement = Math.floor((left+right) / 2);

        let left_array = mergeSort1(left, middleElement - 1, array);
        let right_array = mergeSort1(middleElement, right, array);
        let merged_array = merge(left_array, right_array);
        return merged_array;
    }
}

function merge(left, right) {
    let result = [];

    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < left.length && rightPointer < right.length) {
        if (left[leftPointer] <= right[rightPointer]) {
            result.push(left[leftPointer]);
            leftPointer++;
        } else {
            result.push(right[rightPointer]);
            rightPointer++;
        }
    }
    while (leftPointer < left.length) {
        result.push(left[leftPointer]);
        leftPointer++;
    }
    while (rightPointer < right.length) {
        result.push(right[rightPointer]);
        rightPointer++;
    }
    return result;
}