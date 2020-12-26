// top k numbers


// frequency sort

// rearrange string


// scheduling tasks

// frequency stack

`
https://leetcode.com/problems/top-k-frequent-elements/
idea is to first create a frequencymap and then create a 
min heap of K.
if something is less than the min element, do not add to heap
if something is greater than the min element, add it to the heap
and remove the min element

`

let nums = [5, -3, 9, 1, 7, 7, 9, 10, 2, 2, 10, 10, 3, -1, 3, 7, -9, -1, 3, 3];
const k = 3;

const frequencyMap = {};
for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (frequencyMap[currentNumber] === undefined) {
        frequencyMap[currentNumber] = 0
    }
    frequencyMap[currentNumber] = frequencyMap[currentNumber] + 1;
}

const heap = []; //this should have the size 2

for (const [key, value] of Object.entries(frequencyMap)) {
    const element = {
        frequency: value,
        num: key
    };
    if (heap.length === 0) {
        heap.push(element);
    } else {
        // get the firstElement from the heap
        let mostFrequentElement = heap[0];
        if (heap.length < k) {
            heap.push(element);
            heapifyFromBottom(heap.length - 1, heap);
        } else if (mostFrequentElement.frequency < element.frequency) {
            // heap.shift();
            // i cannot just do shift to remove the root element because
            // shifting elements  might change the heap property.
            // so replace root with lastelement and then do heapify
            heap[0] = heap[heap.length - 1];
            heap.pop();
            heapifyFromTop(0, heap.length - 1, heap);
            heap.push(element);
            heapifyFromBottom(heap.length - 1, heap);
        }
    }
}

let result = [];
heap.forEach((element) => {
    result.push(parseInt(element.num, 10));
});
console.log(result);


function heapifyFromBottom(position, heap) {
    let parent = Math.floor((position - 1) / 2);
    let element = heap[position];
    if (parent >= 0) {
        let parentElement = heap[parent];
        //    if parent element's count is more than current, then 
        //we need to swap
        if (parentElement['frequency'] > element['frequency']) {
            heap[position] = heap[parent];
            heap[parent] = element;
            heapifyFromBottom(parent, heap);
        }
    }
}

function heapifyFromTop(position, endPos, heap) {
    let leftChild = (2 * position) + 1;
    let rightChild = (2 * position) + 2;

    let smallestIndex = position;
    if (leftChild <= endPos && heap[leftChild].frequency < heap[smallestIndex].frequency) {
        smallestIndex = leftChild;
    }

    if (rightChild <= endPos && heap[rightChild].frequency < heap[smallestIndex].frequency) {
        smallestIndex = rightChild;
    }

    if (smallestIndex !== position) {
        //swap and then heapify at smallestIndex
        let temp = heap[smallestIndex];
        heap[smallestIndex] = heap[position];
        heap[position] = temp;
        heapifyFromTop(smallestIndex, endPos, heap);
    }
}