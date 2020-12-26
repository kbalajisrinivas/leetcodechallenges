var reorganizeString = function(S) {
    
    let frequencyMap = {};
    for(let i=0;i<S.length;i++){
        const currentCharacter = S[i];
        if(frequencyMap[currentCharacter] === undefined){
            frequencyMap[currentCharacter] =  0;
        }
        frequencyMap[currentCharacter] =  frequencyMap[currentCharacter] + 1;
    }
    
    let maxHeap = [];
    let queue = [];
    let result = [];
//     add all elements to the maxHeap
    for(const [key,value] of Object.entries(frequencyMap)){
        const element = {
            frequency: value,
            character: key
        }
        maxHeap.push(element);
        buildMaxHeapFromBottom(maxHeap.length-1, maxHeap);
    }
    
//     now we have a maxHeap
    console.log(maxHeap);
    
    while(maxHeap.length > 0){
        //get the firstElement in the heap
        //it has more frequency, so remove it from the heap
        //add the element to the result, decrement frequency by 1
        //put in a queue
        //pop another element, 
        let mostFrequentElement = maxHeap[0];
        result.push(mostFrequentElement.character);
        const mostFrequentElementFrequency = mostFrequentElement.frequency -1;
        if(mostFrequentElementFrequency > 0){
            queue.push({
                frequency: mostFrequentElementFrequency,
                character: mostFrequentElement.character
            });
        }
        //remove the firstElement and then run heapify
        maxHeap[0] = maxHeap[maxHeap.length-1];
//         remove the lastElement as it is swapped with the root
        maxHeap.pop();
        // need to heapify from top
        buildMaxHeapFromTop(0, maxHeap.length-1, maxHeap);
        // push to the queue only when the element removed from heap is not same as the one pushed in to the queue
        if(queue.length > 0 && queue[0].character !== mostFrequentElement.character){
//             add the previous element back to the heap
            const elementToBeInserted = queue.shift();
            maxHeap.push(elementToBeInserted);
            buildMaxHeapFromBottom(maxHeap.length-1, maxHeap);
        }
    }
    
    if(queue.length > 0){
        return "";
    }
    return result.join("");
    
};

function buildMaxHeapFromBottom(position, heap){
    const parentPosition = Math.floor((position-1)/2);
    
    const currentElement = heap[position];
    if(parentPosition >= 0){
        //if parent frequency is less than current frequency, swap.
        //otherwise don't do anything
        const parentFrequency = heap[parentPosition].frequency;
        const currentFrequency = heap[position].frequency;
        if(parentFrequency < currentFrequency){
          heap[position] = heap[parentPosition];
          heap[parentPosition] = currentElement;
          buildMaxHeapFromBottom(parentPosition, heap);
        }
    }
}


function buildMaxHeapFromTop(position, endPosition, heap){
    let leftChild = (2*position) + 1;
    let rightChild = (2*position) + 2;
    
    let maxIndex = position;
    
    if(leftChild <= endPosition && heap[leftChild].frequency > heap[maxIndex].frequency){
        maxIndex = leftChild;
    }
    
    if(rightChild <= endPosition && heap[rightChild].frequency > heap[maxIndex].frequency){
        maxIndex = rightChild;
    }
    
    if(maxIndex !== position){
        let temp = heap[position];
        heap[position] = heap[maxIndex];
        heap[maxIndex] = temp;
        buildMaxHeapFromTop(maxIndex, endPosition, heap);
    }
}

let result = reorganizeString("aabcccddddeeeeeffffffff");
console.log(result);