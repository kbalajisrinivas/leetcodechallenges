let input_number = 347;

let all_possible_results = new Set();
all_possible_results.add(input_number);


let previousVal = input_number;
while (true) {
    let result = sumOfDigits(previousVal);
    if(result === 1){
        return true;
    }
    if(all_possible_results.has(result)){
      return false;
    }
    all_possible_results.add(result);
    previousVal = result; 
}

console.log(result);

function sumOfDigits(num) {
    let str = num.toString();
    let digits = str.split('');
    let squared_number = 0;
    for (let i = 0; i < digits.length; i++) {
        squared_number = squared_number + (digits[i] * digits[i]);
    }
    return squared_number;
}