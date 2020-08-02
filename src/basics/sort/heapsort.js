/*

main thing in heapsort is that it is a complete binary tree

[4,3,2,1,8,9,10]
 0 1 2 3 4 5 6

              4
        3            2
    1      8    9       10
 length(array)/2 = 4
 whether element at 4 has children
  no, 
  element at 3 also does not have children
*/

let input = [5, 1, 2, 3, 3, 10, -48, 10, 13, -12, 100, 65, -48];
heapSort(input);
console.log(input);

function heapSort(input_array) {
    // first need to heapify the array
    // and then need to sort
    let middleElement = Math.ceil(input_array.length / 2) - 1;
    for (let i = middleElement - 1; i >= 0; i--) {
        heapify(input_array, i, input_array.length);
    }

    for (let i = input_array.length - 1; i >= 0; i--) {
        // swap first element and the last element
        let temp = input_array[0];
        input_array[0] = input_array[i];
        input_array[i] = temp;
        heapify(input_array, 0, i);
    }
}

function heapify(input_array, index, max) {

    let leftChild = (2 * index) + 1;
    let rightChild = (2 * index) + 2;
    let currentElement = input_array[index];

    let largestElement = index;
    if (leftChild < max && input_array[largestElement] < input_array[leftChild]) {
        largestElement = leftChild;
    }
    if (rightChild < max && input_array[largestElement] < input_array[rightChild]) {
        largestElement = rightChild;
    }
    // if largestElement is either the leftChild or the rightChild
    if (largestElement !== index) {
        // swap the elements
        let temp = input_array[largestElement];
        input_array[largestElement] = input_array[index];
        input_array[index] = temp;
        heapify(input_array, largestElement, max);
    }
}