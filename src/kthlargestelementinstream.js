
var KthLargest = function (k, nums) {
    this.nums = nums;
    this.k = k;

};

KthLargest.prototype.add = function (val) {

    if (this.nums.length < this.k) {
        this.nums.unshift(val);
    } else if (val < this.nums[0]) {
        //do not do anything because this is not going to change the largest Element
        this.nums[0];
    } else {
        //         since there is already k elements, we just replace the minimum element with the value
        this.nums[0] = val;
    }
    heapify(this.nums, 0, this.nums.length);
    //     minimum element
    return this.nums[0];
};


function heapify(input_array, index, endPos) {
    let leftElement = 2 * index + 1;
    let rightElement = 2 * index + 2;
    let largestElement = index;
    if (leftElement < input_array.length && input_array[leftElement] < input_array[largestElement]) {
        largestElement = leftElement;
    }
    if (rightElement < input_array.length && input_array[rightElement] < input_array[largestElement]) {
        largestElement = rightElement;
    }

    if (largestElement !== index) {
        //         swap the largestElement and index and call heapify
        let temp = input_array[largestElement];
        input_array[largestElement] = input_array[index];
        input_array[index] = temp;
        heapify(input_array, largestElement, endPos);
    }
}

let input_array = [5, 6];
let kthlargestArrayInstance = new KthLargest(4, input_array);
let result;
result = kthlargestArrayInstance.add(8);
result = kthlargestArrayInstance.add(2);
result = kthlargestArrayInstance.add(18);
result = kthlargestArrayInstance.add(10);
