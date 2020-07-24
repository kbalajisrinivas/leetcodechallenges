let arr = [1,3,2,3,5,0];

let need_dict = {};
let have_dict = {};
let pairs = 0;
// there is an easier solution, by storing all the numbers in the dictionary in the first pass
// in the second pass, we can just read the elements from the dictionary and see which one is available

for (let i = 0; i < arr.length; i++) {
    let current_element = arr[i];
    // I need the i+1th element
    if (have_dict[current_element + 1]) {
        have_dict[current_element + 1] = 1;
        need_dict[current_element] = 0;
        pairs = pairs + 1;
    } else if (need_dict[current_element + 1]) {
        need_dict[current_element + 1] += 1;
    } else {
        need_dict[current_element + 1] = 1;
    }

    // check whether I was needed somewhere
    if (need_dict[current_element]) {
        pairs += need_dict[current_element];
        need_dict[current_element] = 0;
    }
    if (!have_dict[current_element]) {
        have_dict[current_element] = 1;
    }
}

console.log(pairs);