// https://leetcode.com/problems/longest-palindromic-substring/

let input = "cbbd"

// some sample inputs -- bb -> "bbaghi"
// "" --> 0
//"abcxcba" --> "abcxcba"
//"abcdefh" --> ""

// let maxPalindromicLength = 0;
// let startPosition = 0;
// // compare the next character and previous character
// // and compare next character and character - 2
// //if it's equal then keep moving forward and compare with the character at i - counter.

// let currentCounter = 0;
// if (input.length === 0) {
//     return currentCounter;
// }
// let previouscharacter = input[0];
// let current_startingPosition = 0;
// //babad
// for (let i = 1; i < input.length; i++) {
//     let current_element = input[i];
//     let starting_position = 0;
//     // there is  already a palindrome
//     if (currentCounter > 0) {
//         // current_startingposition - counter will go to the previous element
//         // current_Startingposition + count = i 
//         // if it is not, we will break out of the condition
//         // reset startPosition and maxPalindromicLength
//         if (current_startingPosition - currentCounter >= 0 && (input[i] === input[current_startingPosition - currentCounter])) {
//             currentCounter++;
//         } else {
//             if (currentCounter > maxPalindromicLength) {
//                 startPosition = starting_position;
//                 maxPalindromicLength = currentCounter;
//                 current_startingposition = starting_position;
//             }
//             currentCounter = 0;
//         }
//     }
//     if (currentCounter === 0) {
//         if (input[i] === input[i - 1]) {
//             //  ispalindrome
//             currentCounter++;
//             starting_position = i - 1;
//         } else if ((i - 2 >= 0) && (input[i] === input[i - 2])) {
//             //  ispalindrome
//             currentCounter++;
//             starting_position = i - 2;
//         } else {
//             currentCounter = 0;
//         }
//         if (currentCounter > maxPalindromicLength) {
//             startPosition = i - 1;
//             maxPalindromicLength = currentCounter;
//             current_startingposition = starting_position;
//         }
//     }
// }

// let left_string = ""
// let right_string = input.substr(startPosition, startPosition + maxPalindromicLength)
// if (startPosition - maxPalindromicLength > 0) {
//     left_string = input.substr(startPosition - maxPalindromicLength, maxPalindromicLength);
// }


// function oddPalindrome(input) {

// }
// console.log(left_string + right_string);

//algorithm
// loop over the string, for each string you need to expand
// 2 calls (one to find the palindromes that are odd number of times and another for even)

let maxpalindromeLength = 0;
let leftPosition = 0;
oddnumberPalindrome(input);
evenNumberPalindrome(input);
console.log(maxpalindromeLength);
console.log(input.substr(leftPosition, maxpalindromeLength));

function oddnumberPalindrome(input) {
    for (let i = 0; i < input.length; i++) {
        if (i - 1 >= 0 && input[i - 1] === input[i + 1]) {
            // now you need to expand on both the sides
            let left = i - 1;
            let right = i + 1;
            // edge condition, code stops when left reaches the start of the string
            // and right reaches the end of the string
            while (left >= 0 && right <= input.length - 1) {
                if (input[left] === input[right]) {
                    left--;
                    right++;
                } else {
                    break;
                }
            }
            if (left !== i - 1) {
                // something has been modified
                left = left + 1;
                right = right - 1;
            }
            if (maxpalindromeLength < (right - left + 1)) {
                maxpalindromeLength = right - left + 1;
                leftPosition = left;
            }
        }

    }
}

function evenNumberPalindrome(input) {
    for (let i = 0; i < input.length; i++) {
        if (i - 1 >= 0 && input[i - 1] === input[i]) {
            let left = i - 1;
            let right = i;
            while (left >= 0 && right <= input.length - 1) {
                if (input[left] === input[right]) {
                    left--;
                    right++;
                } else {
                    break;
                }
            }
            if (left !== i - 1) {
                // something has been modified
                left = left + 1;
                right = right - 1;
            }
            if (maxpalindromeLength < (right - left + 1)) {
                maxpalindromeLength = right - left + 1;
                leftPosition = left;
            }
        }
    }
}