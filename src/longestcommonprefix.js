let input_array = ["flower","flowe","flower"];

let counter = 0;

let first_str_length = input_array[0].length;

while (counter < first_str_length) {
    let character = input_array[0][counter];
    for (let i = 1; i < input_array.length; i++) {
        if (input_array[i].length < counter || input_array[i][counter] !== character) {
            console.log(input_array[0].substr(0,counter))
            return;
        }
    }
    counter++;
}
return input_array[0];