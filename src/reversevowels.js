/*

hello 
holle

balaji
bilaja


2 pointers
keep coming towards the middle
when you see a vowel, stop it
only if it is not a vowel, decrement it or only when both are vowels decrement it.



*/
let result = reverseVowelsInString("aA");
console.log(result);

function reverseVowelsInString(input) {
    let vowels = ['a','e','i','o','u'];
    input = input.split('');
    let start = 0;
    let end = input.length - 1;
    while (start < end) {
        let isStartCharacterVowel = vowels.indexOf(input[start].toLowerCase()) !== -1;
        let isEndCharacterVowel = vowels.indexOf(input[end].toLowerCase()) !== -1;
        if(!isStartCharacterVowel){
            start++;
        }
        if(!isEndCharacterVowel){
            end--;
        }
        if(isStartCharacterVowel && isEndCharacterVowel){
            let temp = input[end];
            input[end] = input[start];
            input[start] = temp;
            start++;
            end--;
        }
    }
    return input.join('');
}