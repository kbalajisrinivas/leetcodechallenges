// https://leetcode.com/problems/maximum-product-subarray/
let input_array = [-3,-4];

/* THIS SOLUTION IS WRONG
WE SHOULD BE USING KADANE's ALGORITHM
THIS IS BRUTE FORCE.
*/

let maxProduct = input_array[0];
let product = null;
for (let i = 0; i < input_array.length; i++) {
    product = input_array[i];
    if (maxProduct < product) {
        maxProduct = product;
    }
    for (let j = i + 1; j < input_array.length; j++) {
        product = product * input_array[j];
        if (maxProduct < product) {
            maxProduct = product;
        }
    
    }
}
if (maxProduct < input_array[input_array.length - 1]) {
    maxProduct = input_array[input_array.length - 1];
}
console.log(maxProduct);