// https://leetcode.com/problems/sort-characters-by-frequency/
/* Need to understand why we should use heaps to do this and not a regular sort*/

/**
 * @param {string} s
 * @return {string}
 */

let input_str = "raaeaedere"
let result = frequencySort(input_str);
console.log(result);
function frequencySort(s) {

    let string_array = s.split('');
    let string_dict = {};
    for (let i = 0; i < string_array.length; i++) {
        if (!string_dict[string_array[i]]) {
            string_dict[string_array[i]] = 0;
        }
        string_dict[string_array[i]] = string_dict[string_array[i]] + 1;
    }

    //     string_dict has all the characters and frequency. 
    let input_array = [];
    let keys = Object.keys(string_dict);

    for (let i = 0; i < keys.length; i++) {
        input_array.unshift({
            character: keys[i],
            count: string_dict[keys[i]]
        });
        heapify(input_array, 0, input_array.length - 1);
    }

    //     at this point we have a max heap by frequency. 
    for (let i = 0; i <= input_array.length - 1; i++) {

        heapify(input_array, i, input_array.length - 1);
    }

    let result_array = [];

    for (let i = 0; i < input_array.length; i++) {
        let charkey = input_array[i];
        for (let j = 0; j < charkey.count; j++) {
            result_array.push(charkey.character)
        }
    }

    return result_array.join('');


};


function heapify(input_array, index, endPos) {
    let leftElement = 2 * index + 1;
    let rightElement = 2 * index + 2;
    let largestElement = index;

    if (leftElement <= endPos && input_array[leftElement].count > input_array[largestElement].count) {
        largestElement = leftElement;
    }

    if (rightElement <= endPos && input_array[rightElement].count > input_array[largestElement].count) {
        largestElement = rightElement;
    }

    if (largestElement !== index) {
        let temp = input_array[index];
        input_array[index] = input_array[largestElement];
        input_array[largestElement] = temp;
        heapify(input_array, largestElement, endPos);
    }
    return input_array;
}