/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */


var kClosest = function (points, K) {

    let input_array = [];
    for (let i = 0; i < points.length; i++) {
        let squared_num = (points[i][0] * points[i][0]) + (points[i][1] * points[i][1]);
        input_array.push({
            val: Math.sqrt(squared_num),
            points: points[i]
        });
    }

    let middleElement = Math.ceil(points.length / 2);

    for (let i = middleElement; i >= 0; i--) {
        heapify(input_array, i, input_array.length - 1);
    }

    let counter = 0;
    while (counter < K) {
        let temp = input_array[0];
        input_array[0] = input_array[input_array.length - counter - 1];
        input_array[input_array.length - counter - 1] = temp;
        counter++;
        heapify(input_array, 0, input_array.length - counter - 1);
    }

    return input_array.slice(input_array.length - K, input_array.length);

};


function heapify(input_array, index, endPos) {

    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallestElement = index;

    if (left <= endPos && input_array[left].val < input_array[smallestElement].val) {
        smallestElement = left;
    }

    if (right <= endPos && input_array[right].val < input_array[smallestElement].val) {
        smallestElement = right;
    }

    if (smallestElement != index) {
        let temp = input_array[smallestElement];
        input_array[smallestElement] = input_array[index];
        input_array[index] = temp;
        heapify(input_array, smallestElement, endPos)
    }
    return input_array;
}

let result = kClosest([[3, 3]], 1);
console.log(result.map(a => a.points));