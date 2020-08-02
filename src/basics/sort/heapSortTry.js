let input = [8, 2, 3, 10, 4, 7, 2, 4, 18, 4, 6];

// first need to create a max heap and then you need to swap the elements.
// few things need to keep in mind are leftchild at 2i+1 and rightchild at 2i+2. 

heapSort(input)
console.log(input);
function heapSort(input_array) {
    //   console.log(input_array);
    let middleElement = Math.ceil(input_array.length / 2);

    for (let i = middleElement - 1; i >= 0; i--) {
        heapify(input_array, i, input_array.length);
        // console.log(input_array);
    }

    // now the maxheap is formed, we need to put the elements in array. 
    let counter = 0;
    // swap the current element and the last element.
    while (counter !== input_array.length-1) {
        let temp = input_array[input_array.length - counter - 1];
        input_array[input_array.length - 1 - counter] = input_array[0];
        input_array[0] = temp;
        counter++;
        heapify(input_array, 0, input_array.length - counter);
    }
    console.log(input_array);

}


function heapify(input_array, index, endPos) {
    let leftChild = (2 * index) + 1;
    let rightChild = (2 * index) + 2;
    let largestElement = index;

    // need to check which is the maximum element
    if (leftChild < endPos && input_array[leftChild] > input_array[largestElement]) {
        largestElement = leftChild;
    }

    if (rightChild < endPos && input_array[rightChild] > input_array[largestElement]) {
        largestElement = rightChild;
    }

    // we need to check whether the left or right element is largest. 
    if (largestElement !== index) {
        let temp = input_array[largestElement];
        input_array[largestElement] = input_array[index];
        input_array[index] = temp;
        heapify(input_array, largestElement, endPos);
    }

}
