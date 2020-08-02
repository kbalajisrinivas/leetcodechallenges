// https://leetcode.com/problems/divide-two-integers/

/* 
WRONG ANSWER
PLEASE REFER LEETCODE FOR CORRECT ANSWER
*/

let number = 0;
let divisor = 1;

let quotient = 0;
let multiplier = 1;
if (number < 0 || divisor < 0) {
    multiplier = -1;
}


while (number > divisor) {
    number = Math.abs(number) - Math.abs(divisor);
    ++quotient;
}


console.log(quotient*multiplier);