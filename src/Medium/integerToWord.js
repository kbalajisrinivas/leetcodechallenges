var numberToWords = function (num) {
    const billionNum = 1000000000;
    const millionNum = 1000000;
    const thousandNum = 1000;
    const hundredNum = 100;
    const tenNum = 10;

    function convertNumberToWord(num) {
        let result = "";
        while (num > 0) {
            if (num >= billionNum) {
                let billionWord = getBillion(num)
                result = result + billionWord;
                num = num % billionNum;
            } else if (num >= millionNum) {
                let millionWord = getMillion(num);
                result = result + millionWord;
                num = num % millionNum;
            } else if (num >= thousandNum) {
                let thousandWord = getThousand(num);
                result = result + thousandWord;
                num = num % thousandNum;
            } else if (num >= hundredNum) {
                let hundredWord = getHundred(num);
                result = result + hundredWord;
                num = num % hundredNum;
            } else if (num >= tenNum) {
                //this covers the numbers from 10 to 20
                if (num <= 20) {
                    let tenWord = returnWordForTens(num);
                    result = result + tenWord;
                    num = 0;
                } else {
                    let quotient = Math.floor(num / 10);
                    let tenWord = returnWordForTens(quotient*10);
                    result = result+tenWord;
                    num = num % (tenNum * quotient);
                }
            } else {
                let unitWord = returnWordForUnits(num);
                result = result + unitWord;
                num = 0;
            }
        }
        return result;
    }

    function getBillion(num) {
        let billionDigit = Math.floor(num / billionNum);
        let result = convertNumberToWord(billionDigit);
        result = result + " Billion";
        return result;
    }

    function getMillion(num) {
        let millionDigit = Math.floor(num / millionNum);
        let result = convertNumberToWord(millionDigit);
        result = result + " Million";
        return result;
    }

    function getThousand(num) {
        let thousandDigit = Math.floor(num / thousandNum);
        let result = convertNumberToWord(thousandDigit);
        result = result + " Thousand";
        return result;
    }

    function getHundred(num) {
        let hundredDigit = Math.floor(num / hundredNum);
        let result = returnWordForUnits(hundredDigit);
        result = result + " Hundred";
        return result;
    }

    let result = convertNumberToWord(num);
    return result.trim();

};

let result = numberToWords(1234567891);
console.log(result);


function returnWordForUnits(num) {
    switch (num) {
        case 1:
            return " One";
        case 2: 
            return " Two";
        case 3: 
            return " Three";
        case 4: 
            return " Four";
        case 5: 
            return " Five";
        case 6: 
            return " Six";
        case 7: 
            return " Seven";
        case 8: 
            return " Eight";
        case 9: 
            return " Nine";
        default:
            return "";
    }
}

function returnWordForTens(num) {
    switch (num) {
        case 10:
            return " Ten";
        case 11: 
            return " Eleven";
        case 12: 
            return " Twelve";
        case 13: 
            return " Thirteen";
        case 14: 
            return " Fourteen";
        case 15: 
            return " Fifteen";
        case 16: 
            return " Sixteen";
        case 17: 
            return " Seventeen";
        case 18: 
            return " Eighteen";
        case 19: 
            return " Nineteen";
        case 20: 
            return " Twenty";
        case 30: 
            return " Thirty";
        case 40: 
            return " Forty";
        case 50: 
            return " Fifty";
        case 60: 
            return " Sixty";
        case 70: 
            return " Seventy";
        case 80: 
            return " Eighty";
        case 90: 
            return " Ninety";
        default:
            return "";
    }
}