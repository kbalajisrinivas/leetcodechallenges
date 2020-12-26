/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
// https://leetcode.com/problems/long-pressed-name/

var isLongPressedName = function (name, typed) {
    let typedCounter = 0;
    let characterPosition = 0;

    let i = 1;
    let charCounter = 1;
    let prevCharacter = name[0];
    while (i <= name.length) {
        let currentCharacter = name[i];
        if (prevCharacter === currentCharacter) {
            charCounter++;
        } else {
            let initialCounter = 0
            for (let j = typedCounter; j < typed.length; j++) {
                if(typed[j] == prevCharacter){
                    initialCounter++;
                    typedCounter++;
                }
                if(typed[j] !== typed[j+1]){
                    break;
                }
            }
            if(initialCounter < charCounter){
                return false;
            }
            charCounter = 1;
        }



        prevCharacter = name[i];
        i++;
    }
    return true;

};

let x = isLongPressedName("saeed","ssaaedd");
console.log(x);