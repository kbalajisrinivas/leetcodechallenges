// 1,4,3
// 2,5,4
// 7,9,6

// 7


// 1,4,2
// 2,4,1
// 3,6,5
// 8

/*
input is array of arrays.
each array has a start time, end time and load
we need to find the maximum load of the CPU at any time
you put the end time in the heap and the load. 
have a variable called as load and another to track the maximum load
each time something enters the heap, you add to the load and check whether it's
maximum. 
operations: [1,4,3] --> only 1 item. load is 3, put 4 in the heap
[2,5,4] --> if something can be removed from the heap, remove it and then add 2,5,4 to the heap
            since nothing was removed from the heap, the load time is 3+4 = 7
[7,9,6] --> can any of the items be removed from the heap? 
            keep removing items until start time is greater than the element in heap
            (also keep updating the variable each time something is removed)
            removing stops, when start time is less than element in heap
            at this point add the element to the heap. 
            we will keep a min heap of the end times

*/



function getMaximumCpuLoad(tasks) {
    let currentCpuLoad = 0;
    let maxCpuLoad = Number.MIN_SAFE_INTEGER;
    let heap = [];
    tasks.sort((a,b)=>{
        return a[0] - b[0];
    });
    for (let i = 0; i < tasks.length; i++) {
        const currentTask = tasks[i];
        const currentTaskInfo = {
            start: currentTask[0],
            end: currentTask[1],
            load: currentTask[2]
        };
        // get the latest task from heap and remove until start time < end time
        while (heap.length > 0) {
            let topElement = heap[0];
            if (topElement.end < currentTaskInfo.start) {
                //topElement's task is finished
                let lastElement = heap.pop();
                //subtract the cpu load, since one item is being removed from the heap
                currentCpuLoad = currentCpuLoad - topElement.load;
                if (heap.length > 0) {
                    heap[0] = lastElement;
                    heapify(0, heap.length - 1, heap);
                }
            } else {
                // break out of the while loop
                break;
            }
        }
        // after the previous steps, we have only the operations that are currently going through
        currentCpuLoad = currentCpuLoad + currentTaskInfo.load;
        maxCpuLoad = Math.max(currentCpuLoad, maxCpuLoad);
        heap.push(currentTaskInfo);
        buildFromBottom(heap.length - 1, heap);
    }
    return maxCpuLoad;
}

function buildFromBottom(position, heap) {
    let parent = Math.floor((position - 1) / 2);
    if (position <= 0) {
        return heap;
    }
    if (heap[parent].end > heap[position].end) {
        [heap[parent], heap[position]] = [heap[position], heap[parent]];
        buildFromBottom(parent, heap);
    }
}

function heapify(position, end, heap) {
    let leftElement = (2 * position) + 1;
    let rightElement = (2 * position) + 2;
    let index = position;
    if (leftElement <= end && heap[leftElement].end < heap[index].end) {
        index = leftElement;
    }
    if (rightElement <= end && heap[rightElement].end < heap[index].end) {
        index = rightElement;
    }
    if (index !== position) {
        // something has been moved
        [heap[index], heap[position]] = [heap[position], heap[index]];
        heapify(index, end, heap);
    }
}

let input = [[1, 4, 2],
[5, 14, 11],
[15, 16, 15],
[1, 12, 2]];

let result = getMaximumCpuLoad(input);
console.log(result);