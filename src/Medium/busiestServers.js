// https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function (k, arrival, load) {

    /*     idea is each time a task comes, we see whether it can be put in any of the existing servers. Once you are able to put the request in one of the server, find the time that particular server will be available to serve the request.
    maintain an array of size k to see whether that particular server is available
    
    */

    //     initially all servers are available
    let availabilityServers = new Array(k).fill(true);
    let requestCount = new Array(k).fill(0);
    //heap has the time at which server is available and the server
    //min heap of available time
    let heap = [];

    for (let i = 0; i < arrival.length; i++) {
        const arrivalTime = arrival[i];
        const server = i % k;
        const correspondingServer = availabilityServers[server];
        if (correspondingServer) {
            //             if corresponding server is available (best case), then put the task there
            availabilityServers[server] = false;
            requestCount[server]++;
            const processingTimeForServer = load[server];
            const nextAvailableTimeForServer = arrival[i] + processingTimeForServer;
            const serverInfo = {
                server: server,
                nextAvailableTime: nextAvailableTimeForServer
            };
            //add it to the heap. we know that heap size is less than k at this time
            heap.push(serverInfo);
            buildHeapFromBottom(heap.length - 1, heap);
        } else {
            //             check if any server is available
            if (heap.length === k) {
                //                 all servers are busy. keep removing the available servers
                let counter = k
                while (counter > 0 && heap[0].nextAvailableTime <= arrivalTime) {
                    //server being removed
                    let serverRemoved = heap[0].server;
                    //replace firstElement with LastElement
                    heap[0] = heap[heap.length - 1];
                    // remove the last element
                    heap.pop();
                    heapify(0, heap);
                    availabilityServers[serverRemoved] = true;
                    counter--;
                }
                if (counter === k) {
                    //none of the servers are available. so just let it go
                    continue;
                } else {
                    let startingPosition = i % k;
                    //                     some server is available, we need to find which is the closest server available
                    for (let j = 0; j < k; j++) {
                        let serverPosition = (i + j) % k;
                        if (availabilityServers[serverPosition]) {
                            //found the first server available
                            availabilityServers[serverPosition] = false;
                            requestCount[serverPosition]++;
                            const processingTimeForServer = load[serverPosition];
                            const nextAvailableTimeForServer = arrival[i] + processingTimeForServer;
                            const newServerInfo = {
                                server: serverPosition,
                                nextAvailableTime: nextAvailableTimeForServer
                            }
                            heap.push(newServerInfo);
                            buildHeapFromBottom(heap.length - 1, heap);
                            break;
                        }
                    }
                }

            }
        }
    }

    let maxRequestCount = Math.max(...requestCount);
    let result = [];
    for (let i = 0; i < requestCount.length; i++) {
        if (requestCount[i] === maxRequestCount) {
            result.push(i);
        }
    }
    return result;

};

function buildHeapFromBottom(position, heap) {
    let parent = Math.floor((position - 1) / 2);
    let elementAtPosition = heap[position];
    if (parent >= 0) {
        let parentElement = heap[parent];
        if (parentElement.nextAvailableTime > elementAtPosition.nextAvailableTime) {
            heap[parent] = elementAtPosition;
            heap[position] = parentElement;
            buildHeapFromBottom(parent, heap);
        }
    }
}

function heapify(position, heap) {
    let leftChild = (2 * position) + 1;
    let rightChild = (2 * position) + 2;

    let minPosition = position;
    if (leftChild < heap.length && heap[leftChild].nextAvailableTime < heap[minPosition].nextAvailableTime) {
        minPosition = leftChild;
    }
    if (rightChild < heap.length && heap[rightChild].nextAvailableTime < heap[minPosition].nextAvailableTime) {
        minPosition = rightChild;
    }
    if (minPosition !== position) {
        let temp = heap[minPosition];
        heap[minPosition] = heap[position];
        heap[position] = temp;
        heapify(minPosition, heap);
    }
}

// 3
// [3,4,6,8,9,11,12,16]
// [1,2,8,6,5,3,8,3]
let k = 3, arrival = [3, 4, 6, 8, 9, 11, 12, 16], load = [1, 2, 8, 6, 5, 3, 8, 3];
let result = busiestServers(k, arrival, load);
console.log(result);