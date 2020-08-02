// https://leetcode.com/problems/walls-and-gates/

let input_array =
    [[8000001, -1, 0, 8000001],
    [8000001, 8000001, 8000001, -1],
    [8000001, -1, 8000001, -1],
    [0, -1, -1, 8000001]]



for (let i = 0; i < input_array.length; i++) {
    for (let j = 0; j < input_array[i].length; j++) {

        //only if we are at a gate, we need to find the distance
        //otherwise we don't need to find the distance. 
        if (input_array[i][j] === 0) {
            // do a dfs on updating the distances
            updateDistance(input_array, i, j, 0);
        }
    }
}
console.log(input_array);

function updateDistance(input_array, i, j, distance) {
    // distance should be incremented
    //handle edge cases
    if (i < 0 || j < 0 || i >= input_array.length || j >= input_array[i].length) {
        return;
    }

    // also return if the existing distance is less than the updating distance. 
    if (input_array[i][j] < distance) {
        return;
    }

    // we have hit a wall, we cannot go anywhere
    if(input_array[i][j] === -1 || (distance > 0 && input_array[i][j] === 0)){
        return;
    }
    input_array[i][j] = distance;
    let new_distance = distance + 1;
    updateDistance(input_array,i-1,j, new_distance);
    updateDistance(input_array,i+1,j,new_distance);
    updateDistance(input_array,i,j-1,new_distance);
    updateDistance(input_array,i,j+1, new_distance);
}