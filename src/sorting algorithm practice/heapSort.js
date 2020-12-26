let inputArray = [-1, 4, 2, 5, 6, 3, 0, 8];

// heapSort(inputArray);
// console.log(inputArray);
// console.log("====");

// inputArray = [0,1,2,3,4];
// heapSort(inputArray);
// console.log(inputArray);
// console.log("====");

// inputArray = [4,3,2,1,0,-1,-2,-4];
// heapSort(inputArray);
// console.log(inputArray);
// console.log("====");

// inputArray = [1];
// heapSort(inputArray);
// console.log(inputArray);
// console.log("====");


function heapSort(input) {
    // inplace sorting algorithm
    // iterate from the middle and go to the first element and heapify at each position
    let middleElement = Math.ceil(input.length / 2);

    for (let i = middleElement; i >= 0; i--) {
        heapify(i, input.length - 1, input);
    }

    let lastElement = input.length - 1;
    for (let i = 0; i <= lastElement; i++) {
        let temp = input[lastElement - i];
        input[lastElement - i] = input[0];
        input[0] = temp;
        heapify(0, lastElement - i - 1, input);
    }
    // console.log("sorted");
    // console.log(input);
}


function heapify(position, endValue, input) {
    let left = (2 * position) + 1;
    let right = (2 * position) + 2;
    let maxPosition = position;

    if (left <= endValue && input[left] > input[maxPosition]) {
        maxPosition = left;
    }

    if (right <= endValue && input[right] > input[maxPosition]) {
        maxPosition = right;
    }

    // something has changed, so swap and then heapify at that position
    if (maxPosition !== position) {
        let temp = input[maxPosition];
        input[maxPosition] = input[position];
        input[position] = temp;
        heapify(maxPosition, endValue, input);
    }
}


// inputArray = [-1, 4, 2, 5, 6, 3, 0, 8];
// let result = mergeSort(0, inputArray.length - 1, inputArray);
// console.log(result);
// console.log("=====");

// inputArray = [0, 1, 2, 3, 4];
// result = mergeSort(0, inputArray.length - 1, inputArray);
// console.log(result);
// console.log("=====");

// inputArray = [4, 3, 2, 1, 0, -1, -2, -4];
// result = mergeSort(0, inputArray.length - 1, inputArray);
// console.log(result);
// console.log("=====");

// inputArray = [1];
// result = mergeSort(0, inputArray.length - 1, inputArray);
// console.log(result);
// console.log("=====");
// In the merge function we are creating new arrays which is not good.
// instead we should be passing the same array and move elements accordingly

function mergeSort(start, end, input) {
    if (start === end) {
        return [input[start]];
    }

    let middleElement = Math.floor((start + end) / 2);
    let left = mergeSort(start, middleElement, input);
    let right = mergeSort(middleElement + 1, end, input);
    let mergedList = merge(left, start, right, end);
    return mergedList;
}

function merge(list1, list2, start, end) {

    let mergedList = [];
    let i = 0; //pointer for list1
    let j = 0; //pointer for list2

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            mergedList.push(list1[i]);
            i++;
        } else {
            mergedList.push(list2[j]);
            j++;
        }
    }
    while (i < list1.length) {
        mergedList.push(list1[i]);
        i++;
    }

    while (j < list2.length) {
        mergedList.push(list2[j]);
        j++;
    }

    for (let i = start; i <= end; i++) {

    }
    // returns a new list
    return mergedList;
}

inputArray = [-1, 4, 2, 5, 6, 3, 0, 8];
let result = quickSort(inputArray);
console.log(result);
console.log("=====");

inputArray = [0, 1, 2, 3, 4];
result = quickSort(inputArray);
console.log(result);
console.log("=====");

inputArray = [4, 3, 2, 1, 0, -1, -2, -4];
result = quickSort(inputArray);
console.log(result);
console.log("=====");

// inputArray = [1];
// result = mergeSort(0, inputArray.length - 1, inputArray);
// console.log(result);
// console.log("=====");

function quickSort(input) {
    pivot(0, input.length - 1, input);
    return input;
}

function pivot(low, high, input) {
    if (low < high) {
        let position = partition(low, high, input)
        pivot(low, position - 1, input);
        pivot(position + 1, high, input);
    }
}

function partition(low, high, input) {
    let i = low;
    let j = low;
    let pivotElement = input[high];
    while (j < high) {
        if (input[j] <= pivotElement) {
            let temp = input[j];
            input[j] = input[i];
            input[i] = temp;
            i++;
        }
        j++;
    }
    input[high] = input[i];
    input[i] = pivotElement;
    return i;
}