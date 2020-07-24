    
    let result = convertNumberToExcelHeaders(700);
    console.log(result);
    function convertNumberToExcelHeaders(columnNumber) {
        if (columnNumber < 0) {
            return;
        }
        // as index starts with 0 adding 1
        columnNumber = columnNumber + 1;
        const totalCharacters = 26;
        let count = 0;
        while (columnNumber > 26) {
            columnNumber = columnNumber - totalCharacters;
            count++;
        }
        if (count > 0) {
            return String.fromCharCode(64 + count).concat(String.fromCharCode(64 + columnNumber));
        } else {
            return String.fromCharCode(64 + columnNumber);
        }
    }