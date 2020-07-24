let input_array = [5, 1, 2, 3, 3, 10, -48, 10, 13, -12, 100, 65, -48];


/*5 1 2 3

10 13 12


1 5  2 3



i <= j*/

mergeSort(input_array, 0, input_array.length - 1);
console.log(input_array);

function mergeSort(input_array, i, j) {
    if (i < j) {
        let middleElement = Math.floor((i + j) / 2);
        mergeSort(input_array, i, middleElement);
        mergeSort(input_array, middleElement + 1, j);
        merge(input_array, i, middleElement, j);
    }
}

function merge(input_array, i, middleElement, j) {

    let left_array = [];
    let right_array = [];
    let m = 0;
    let n = 0;
    let counter = i;
    for (let x = i; x <= middleElement; x++) {
        left_array.push(input_array[x]);
    }
    for (let x = middleElement + 1; x <= j; x++) {
        right_array.push(input_array[x]);
    }
    // now you have both left and right arrays. 
    // when using counters, double check whether they start from zero or some random position
    
    while (m < left_array.length && n < right_array.length) {
        if (left_array[m] <= right_array[n]) {
            input_array[counter] = left_array[m];
            m++;
        } else {
            input_array[counter] = right_array[n];
            n++;
        }
        counter++;
    }

    while (m < left_array.length) {
        input_array[counter] = left_array[m];
        counter++;
        m++;
    }

    while (n < right_array.length) {
        input_array[counter] = right_array[n];
        counter++;
        n++;
    }
}


/*
mergesort
quicksort
heapsort

linkedlist --> reverse

*/