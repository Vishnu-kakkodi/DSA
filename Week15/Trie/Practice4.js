class TrieNode{
    constructor(){
        this.character = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.character[char]){
                node.character[char] = new TrieNode()
            }
            node = node.character[char]
        }
        node.isEndOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.character[char]){
                return false
            }
            node = node.character[char]
        }
        return node.isEndOfWord
    }

    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
        if(!node.character[char]){
            return false
        }
        node = node.character[char]
    }
    }

    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.character[char]){
                return []
            }
            node = node.character[char];
        }
        return this.getWords(node,prefix)
    }

    getWords(node,prefix){
        let words = [];
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for(let char in node.character){
            words = words.concat(this.getWords(node.character[char],prefix+char))
        }
    }
}