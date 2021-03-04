/**
 * Initialize your data structure here.
 */




var MagicDictionary = function () {
    this.trie = new TrieNode();

};

var TrieNode = function () {
    this.children = {};
    this.isCompleteWord = false;
}

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {

    //you have both access to this.trie to check for items and TrieNode to create new Items
    // children is a dictionary
    for (let i = 0; i < dictionary.length; i++) {
        const currentWord = dictionary[i];
        let currentNode = this.trie;
        for (let j = 0; j < currentWord.length; j++) {
            let allChildren = currentNode.children;
            const currentChar = currentWord[j];
            let currentCharacter = allChildren[currentChar];
            if (currentCharacter === undefined) {
                allChildren[currentChar] = new TrieNode();
            }
            currentNode = allChildren[currentChar];
        }
        currentNode.isCompleteWord = true
    }
    console.log(this.trie);
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {


    function searchRecurse(i, currentNode, replacements) {
        let result = false;
        const currentCharacter = searchWord[i];
        if (i === searchWord.length) {
            //we have reached the last character, check if it's complete word 
            //  and replacements is 1, then return true
            if (replacements === 1 && currentNode.isCompleteWord === true) {
                return true;
            } else if (replacements === 0 && currentNode.isCompleteWord === false) {
                return true;
            } else {
                return false;
            }
        }
        const node = currentNode.children[currentCharacter];
        if (node === undefined) {
            if(i === searchWord.length -1){
                // last element is not found
                return true;
            }
            //loop over all children, update replacements
            for (const [key, value] of Object.entries(currentNode.children)) {
                result = result || searchRecurse(i, currentNode.children[key], replacements + 1);
            }
        } else {
            result = result || searchRecurse(i + 1,node, replacements)
        }
        return result;
    }

    let result = searchRecurse(0, this.trie, 0);
    return result;
};

let mg = new MagicDictionary();
mg.buildDict(["hello", "leetcode"]);
mg.search("leetcoded");

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */