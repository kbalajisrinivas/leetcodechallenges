let input_array =
    [[-1, 12, 53],
    [4, 8, 9],
    [7, -5, 6]];

let maxProduct = null;

findMaxProduct(input_array, 0, 0, 1);
console.log(maxProduct);


function findMaxProduct(input_array, i, j, productvalue) {
    // base case. if we reached the end of the array. (last element)
    if (i >= input_array.length || j >= input_array[i].length) {
        return;
    }
    productvalue = productvalue * input_array[i][j];

    if (i === input_array.length - 1 && j === input_array[i].length - 1) {
        console.log(i, j);
        console.log("========");
        if (maxProduct === null) {
            maxProduct = productvalue;
        }
        if (maxProduct < productvalue) {
            maxProduct = productvalue;
        }
        return;
    }
    console.log(i, j);
    findMaxProduct(input_array, i + 1, j, productvalue);
    findMaxProduct(input_array, i, j + 1, productvalue);

}    