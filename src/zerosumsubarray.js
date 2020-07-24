let input_array = [10, 2, -5, 1, 2, -1];

/*

subarray whose sum is 0

*/
let result = zeroSum(input_array);
console.log(result);

function zeroSum(input_array) {
    for (let i = 0; i < input_array.length; i++) {
        let sum = 0;
        for (let j = i; j < input_array.length; j++) {
            sum = sum + input_array[j];
            if (sum === 0) {
                return input_array.slice(i, j+1);
            }
        }
    }
}