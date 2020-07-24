let A = [[1, 0, 0, 1],
[-1, 0, 3, 1]]

let B = [[7, 0, 0],
[0, 0, 0],
[0, 0, 1],
[5, 4, 3]
]

let result_array = [];

for (let i = 0; i < A.length; i++) {
    let rows_result = [];
    for (let j = 0; j < B[i].length; j++) {
        let result = getResult(A[i], j, B);
        rows_result.push(result);
    }
    result_array.push(rows_result);
}

console.log(result_array);

function getResult(A, counter, B) {
    let left_array = A;
    let right_array = [];
    for (let i = 0; i < B.length; i++) {
        right_array.push(B[i][counter])
    }
    let result = 0;
    for (let i = 0; i < left_array.length; i++) {
        result = result + (left_array[i] * right_array[i]);
    }
    return result;

}