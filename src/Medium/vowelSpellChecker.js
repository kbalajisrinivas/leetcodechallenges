/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordList, queries) {
    //put all the words in the dictionary
    let wordsDictionary = {};
    for (let i = 0; i < wordList.length; i++) {
        const currentWord = wordList[i];
        const lowerCase = currentWord.toLowerCase();
        if (wordsDictionary[lowerCase] === undefined) {
            wordsDictionary[lowerCase] = [];
        }
        wordsDictionary[lowerCase].push(currentWord);
    }

    function Trie() {
        return {
            character: null,
            children: [],
            isLastCharacter: false
        }
    }
    function TrieNode(character) {
        return {
            character: character,
            isLastCharacter: false,
            children: []
        }
    }

    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    function addCharacterToTrie(word, counter, node) {
        if (word.length === counter) {
            //stop here 
            node.isLastCharacter = true;
            return;
        }
        let isCharacterFound = false;
        let currentCharacter = word[counter];
        for (let i = 0; i < node.children.length; i++) {
            const currentChild = node.children[i];
            if (currentChild === currentCharacter) {
                isCharacterFound = true;
                //go deep at the child level
                addCharacterToTrie(word, counter + 1, currentChild);
            }
        }
        if (!isCharacterFound) {
            //need to create a new node.
            let newNode = new TrieNode(word[counter]);
            node.children.push(newNode);
            addCharacterToTrie(word, counter + 1, newNode);
        }
    }

    function isWordPartOfTrie(node, word, counter, str) {
        let isCharacterPresent = "";
        const currentCharacter = word[counter];
        if (word.length === counter) {
            if (node.isLastCharacter) {
                return str;
            } else {
                return "";
            }
        }
        if (node.children.length === 0 && word.length > counter) {
            return "";
        }
        //loop over children
        for (let i = 0; i < node.children.length; i++) {
            const childrenCharacter = node.children[i].character;
            if (childrenCharacter === currentCharacter) {
                isCharacterPresent = isWordPartOfTrie(node.children[i], word, counter + 1, str + childrenCharacter);
                return isCharacterPresent;
            } else {
                //exact character is not available. chec
                if (vowelSet.has(childrenCharacter) && vowelSet.has(currentCharacter)) {
                    isCharacterPresent = isWordPartOfTrie(node.children[i], word, counter + 1, str + childrenCharacter);
                    return isCharacterPresent;
                }
            }
        }
        return isCharacterPresent;
    }

    //need to form the Trie
    let root = new Trie();

    for (const [key, value] of Object.entries(wordsDictionary)) {
        addCharacterToTrie(key, 0, root);
    }

    let matchingWords = [];

    for (let i = 0; i < queries.length; i++) {
        const currentQuery = queries[i].toLowerCase();
        let resultQuery = isWordPartOfTrie(root, currentQuery.toLowerCase(), 0, "");
        matchingWords.push(resultQuery);
    }
    for (let i = 0; i < queries.length; i++) {
        const currentQuery = queries[i];
        let isValidWord = wordsDictionary[currentQuery.toLowerCase()];
        let isMatchFound = false;
        if (isValidWord) {
            // matchingWords.push(currentQuery);

            //word is present
            let possibleMatches = wordsDictionary[currentQuery.toLowerCase()];
            for (let j = 0; j < possibleMatches.length; j++) {
                const currentMatch = possibleMatches[j];
                if (currentMatch === currentQuery) {
                    matchingWords[i] = currentMatch;
                    isMatchFound = true;
                    break;
                }
            }

            if (!isMatchFound) {
                //since exact match was not found, find the character which is capitalized
                const firstCapitalizedCharacter = currentQuery[0].toUpperCase();
                for (let j = 0; j < possibleMatches.length; j++) {
                    const currentMatch = possibleMatches[j];
                    if (currentMatch[0] === firstCapitalizedCharacter) {
                        matchingWords[i] = currentMatch;
                        isMatchFound = true;
                        break;
                    }
                }
            }
            //just take the first match
            if (!isMatchFound) {
                matchingWords[i] = possibleMatches[0];
            }
        }
    }
    return matchingWords;
};

let wordlist = ["KiTe", "kite", "hare", "Hare"], queries = ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"];
let result = spellchecker(wordlist, queries);
console.log(matchingWords);
