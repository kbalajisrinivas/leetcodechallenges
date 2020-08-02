function getStrength(password, weight_a) {
    // Complete the function
    let result = 0;
    for(let i=0;i<password.length;i++){
        let current_character = password[i].charCodeAt();
        let current_ascii = current_character%97;
        result = result + ((current_ascii+weight_a)%26);
    }
    return result;

}

let result = getStrength("hellomrz",2);
console.log(result);