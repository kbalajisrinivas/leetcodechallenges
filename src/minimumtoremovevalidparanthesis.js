/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let s_array = s.split('');
    let paranthesis_array = [];
    for (let i = 0; i < s_array.length; i++) {
        if (s_array[i] === '(') {
            paranthesis_array.push({
                character: '(',
                index: i
            })
        } else if (s_array[i] === ')') {

            //             last element in paranthesis_array is (, then pop the element
            let last_paranthesis_element = paranthesis_array[paranthesis_array.length - 1];
            if (last_paranthesis_element && last_paranthesis_element.character === '(') {
                paranthesis_array.pop()
            } else {
                paranthesis_array.push({
                    character: ')',
                    index: i
                })
            }
        }
    }

    if (paranthesis_array.length > 0) {
        for (let j = 0; j < paranthesis_array.length; j++) {
            s_array[paranthesis_array[j].index] = '';
        }
        return s_array.join('');
    }
    return s;
};

let s = "())()(((";
let result = minRemoveToMakeValid(s);
console.log(result);