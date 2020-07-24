let input_array = [];
let m = 1, n = 1;

if(m==0 || n==0){
    return 0;
}
for (let i = 0; i < m; i++) {
    let row = new Array(n).fill(0);
    input_array.push(row);
}

findUniquePaths(m-1, n-1);
console.log(input_array);
function findUniquePaths(x, y){

    if (x === 0 && y === 0) {
        input_array[x][y] = 1;
        return 1;
    }
    if (x < 0 || y < 0) {
        return 0;
    }
    if (input_array[x][y] !== 0) {
        return input_array[x][y];
    }

    let top_unique_path = findUniquePaths(x - 1, y);
    let left_unique_path = findUniquePaths(x, y - 1);
    let total_paths = top_unique_path + left_unique_path;
    input_array[x][y] = total_paths;
    return total_paths;

}