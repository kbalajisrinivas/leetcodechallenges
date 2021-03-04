/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {

    const occurrencesDictionary = {};
    let heap = [];
    let result = [];
    for (let i = 0; i < tasks.length; i++) {
        const currentTask = tasks[i];
        if (occurrencesDictionary[currentTask] === undefined) {
            occurrencesDictionary[currentTask] = 0;
        }
        occurrencesDictionary[currentTask]++;
    }
    //go over each item in the dictionary and add it to the heap
    for (const [key, value] of Object.entries(occurrencesDictionary)) {
        let taskInfo = {
            task: key,
            occurrence: value,
            nextInterval: 1
        }
        heap.push(taskInfo);
        buildHeap(heap.length - 1, heap);
    }
    console.log(heap);
    let queue = [];
    let timeCounter = 1;

    while (heap.length > 0 || queue.length > 0) {
        if (heap.length === 0) {
            // we need push idleState
            result.push("idle");
        } else {
            console.log(heap);
            //             if there are items in the queue, you take them off, reduce the occurrence and then add it to the queue
            let firstElement = heap[0];
            let lastElement = heap.pop();
            //         if heap's length is 0, we don't want to put the lastElement back in 0th position
            if (heap.length !== 0) {
                heap[0] = lastElement;
                heapify(0, heap.length - 1, heap);
            }
            //why n+1? because cooldown period is 2, so nextTime it can start is at 3
            firstElement.nextInterval = timeCounter + n;
            firstElement.occurrence = firstElement.occurrence - 1;
            result.push(firstElement.task);
            //         if an element's occurrence is 0, that means we have already executed the tasks
            //         put in the queue only if the occurrence is greater than 1
            if (firstElement.occurrence !== 0) {
                queue.push(firstElement);
            }
        }
        //check whether the firstElement in the queue can be put back in the queue
        // if(queue.length === 0){
        //     return result;
        // }
        if (queue.length > 0) {
            let topElement = queue[0];
            if (topElement.nextInterval === timeCounter) {
                //now we can remove the item from the queue. 
                topElement = queue.shift();
                heap.push(topElement);
                buildHeap(heap.length - 1, heap);
            }
        }
        timeCounter++;
    }
    return result;
};


function buildHeap(position, heap) {
    let parent = Math.floor((position - 1) / 2);
    if (position <= 0) {
        return heap;
    }
    //     if we are here, then heap should have more than one item
    const positionOccurrence = heap[position];
    const parentOccurrence = heap[parent];
    //we are building a maxheap, so if parent is less, then it requires a swap
    if (parentOccurrence.occurrence < positionOccurrence.occurrence) {
        //         swap parent and position
        [heap[position], heap[parent]] = [heap[parent], heap[position]];
        buildHeap(parent, heap)
    }
}

function heapify(position, end, heap) {
    let left = (position * 2) + 1;
    let right = (position * 2) + 2;
    let index = position;

    if (left <= end && heap[left].occurrence > heap[index].occurrence) {
        index = left;
    }
    if (right <= end && heap[right].occurrence > heap[index].occurrence) {
        index = right;
    }
    if (index !== position) {
        [heap[position], heap[index]] = [heap[index], heap[position]];
        heapify(index, end, heap);
    }
}

let result = leastInterval(["A", "A", "A", "B", "B", "C", "D", "C", "D", "C", "D", "C", "C", "E"],
    2)

/*

first create a map of all the tasks and occurrences.
heap will have the task and occurrences count (object)
Initialize all the tasks' nextInterval to 0 (because they can be run at 0th time).
when you pop from the heap, we will update the nextInterval and add it to queue
first take the task that occurs lot of times.
once you add a task to the result, decrement the count and add it to the queue.
update the nextInterval.

datastructures needed: heap and queue
end condition both heap and queue are empty.

*/