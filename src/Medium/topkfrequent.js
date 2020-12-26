// https://leetcode.com/problems/top-k-frequent-elements/

/*
NOTE: This solution uses heaps to solve the problem. 
But there is another better solution without using heaps. 
We can store the frequencies in an array
(frequency as index and list of elements as a value in array)
then iterate from the end. 

Update November 26th, 2020: If we store frequency as Index, then we might need
to use a lot of space.
If there are 100,000 elements with 50,000 1's then, we need the array index
to be 50,000.
*/

var topKFrequent = function(nums, k) {
    let frequencyDictionary = {};
    for(let i=0;i<nums.length;i++){
        if(!frequencyDictionary[nums[i]]){
            frequencyDictionary[nums[i]] = {
                element: nums[i],
                frequency: 0
            };
        }
        frequencyDictionary[nums[i]].frequency = frequencyDictionary[nums[i]].frequency + 1;
    }
    let keys = Object.keys(frequencyDictionary);
    frequency_array = [];
    for(let i=0;i<keys.length;i++){
        frequency_array.unshift(frequencyDictionary[keys[i]]);
        heapify(frequency_array, 0, frequency_array.length);
    }
    let result_array = [];
    for(let i=0;i<k;i++){
        let element = frequency_array.shift();
        result_array.push(element.element);
        heapify(frequency_array, 0, frequency_array.length);
    }
    return result_array;
};


function heapify(input_array, index, endPos){
    let leftElement = 2*index + 1;
    let rightElement = 2*index + 2;
    let largestElement = index;
    if(leftElement < endPos && input_array[leftElement].frequency > input_array[largestElement].frequency){
        largestElement = leftElement;
    }
    if(rightElement < endPos && input_array[rightElement].frequency > input_array[largestElement].frequency){
        largestElement = rightElement;
    }
    if(largestElement !== index){
        let temp = input_array[index];
        input_array[index] = input_array[largestElement];
        input_array[largestElement] = temp;
        heapify(input_array, largestElement, endPos);
    }
}

let result = topKFrequent([1,4,4,4,6,6,6,6,6,6,6,6], 3);
console.log(result);