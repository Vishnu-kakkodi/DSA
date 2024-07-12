class TrieNode {
    constructor() {
        this.character = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.character[char]) {
                node.character[char] = new TrieNode();
            }
            node = node.character[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.character[char]) {
                return false;
            }
            node = node.character[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.character[char]) {
                return false;
            }
            node = node.character[char];
        }
        return true;
    }

    autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.character[char]) {
                return [];
            }
            node = node.character[char];
        }
        return this.getAllWordFromNode(node, prefix);
    }

    getAllWordFromNode(node, prefix) {
        let words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (let char in node.character) {
            words = words.concat(this.getAllWordFromNode(node.character[char], prefix + char));
        }
        return words;
    }
}

// Test code
let word = new Trie();
word.insert("cat");
word.insert("cattle");
word.insert("moon");
word.insert("catch");
word.insert("monkey");
word.insert("lamb");

console.log("Autocomplete 'cat':", word.autoComplete("cat"));
console.log("Starts with 'mo':", word.startsWith("mo"));
console.log("Search 'cat':", word.search("cat"));
console.log("Search 'catt':", word.search("catt"));
