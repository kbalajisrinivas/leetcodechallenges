/**
 * Initialize your data structure here.
 */
// https://leetcode.com/problems/implement-trie-prefix-tree/
var Trie = function () {
    this.trie = new TrieNode();
};

var TrieNode = function () {
    this.children = {};
    this.isCompleteWord = false;
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let currentNode = this.trie;
    for (let i = 0; i < word.length; i++) {
        const currentCharacter = word[i];
        const allChildren = currentNode.children;
        const treeNode = allChildren[currentCharacter];
        if (treeNode === undefined) {
            allChildren[currentCharacter] = new TrieNode();
        }
        currentNode = allChildren[currentCharacter];
    }
    currentNode.isCompleteWord = true
};


    let trie = this.trie;
    for(let k=0;k<currentWord.length;k++){
        let childNode = trie.children[currentWord[k]];
        if(childNode === undefined){
            trie.children[currentWord[k]] = new TrieNode();
        }
        trie = trie.children[currentWord[k]];
    }
    trie.isCompleteWord = true;


/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let currentNode = this.trie;
    for (let i = 0; i < word.length; i++) {
        const currentCharacter = word[i];
        const allChildren = currentNode.children;
        const node = allChildren[currentCharacter];
        if (node === undefined) {
            return false
        }
        currentNode = node;
    }

    return currentNode.isCompleteWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let currentNode = this.trie;
    for (let i = 0; i < prefix.length; i++) {
        const currentCharacter = prefix[i];
        const allChildren = currentNode.children;
        const node = allChildren[currentCharacter];
        if(node === undefined){
            return false;
        }
        currentNode = node
    }
    return true;

};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie();
obj.insert("balaji");
let x = obj.search("balaji");
let y = obj.search("alaj");
let z = obj.search("balajisri");
let x1 = obj.startsWith("bala");
console.log(obj);