let input_array = [2, 1, 2, 0, 1];

let profit = 0;

let buying_price = -1;
let selling_price = -1;

for (let i = 1; i < input_array.length; i++) {
    if (input_array[i] > input_array[i - 1]) {
        if (buying_price > input_array[i - 1] || buying_price === -1) {
            buying_price = input_array[i - 1];
        }
    }
    if (input_array[i] < input_array[i - 1] && buying_price > -1) {
        if (selling_price < input_array[i - 1] || selling_price == -1) {
            selling_price = input_array[i - 1];
            profit += selling_price - buying_price;
            buying_price = -1;
            selling_price = -1;
        }
    }
}

if (selling_price === -1 && buying_price !== -1) {
    selling_price = input_array[input_array.length - 1];
    if (selling_price > buying_price) {
        profit += selling_price - buying_price;
    }
}

console.log(profit);