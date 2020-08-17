/*
 [4,4,6,1,2,2,2,3]

 [4,4,6], [1,2,2], [2,2,3]

*/

let input_array =  [4,6,4,1,3,4];
let count = 0;

let good_tuple_set = new Set();
if(input_array.length < 3){
    return [];
}

let prev_2_numbers_equal = input_array[1] === input_array[0];
let prev = input_array[1];
let prev1 = input_array[0];

// for(let i=2;i<input_array.length;i++){
//    let a = new Set(input_array.slice(i-2,i+1));
//    if(a.size === 2){
//        count++;
//    }
// }

for(let i=2;i<input_array.length;i++){
    let prev = input_array[i] === input_array[i-1];
    let isEqualToPrev =  prev || input_array[i] === input_array[i-2];
    if(isEqualToPrev){
        if(!prev_2_numbers_equal){
            count++;
        }
    } else {
        if(prev_2_numbers_equal){
            count++;
        }
    }
    prev_2_numbers_equal = prev;
}



console.log(count);
