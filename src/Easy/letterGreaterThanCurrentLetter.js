var nextGreatestLetter = function(letters, target) {
    
    if(target < letters[0] || target >= letters[letters.length-1]){
        return letters[0];
    }

    
    let left = 0;
    let right = letters.length-1;
    while(left <= right){
        let mid = left + Math.floor((right-left)/2);
        if(letters[mid] === target){
            if(mid === letters.length-1){
                return letters[0];
            } else {
                if(letters[mid] !== letters[mid+1]){
                    return letters[mid+1];
                } else {
                    left = mid+1;
                }
            }
        } else if(letters[mid]<target){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return letters[left];
};

let result = nextGreatestLetter(["a","f","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","l","n","o","o","p"],"g");
console.log(result);