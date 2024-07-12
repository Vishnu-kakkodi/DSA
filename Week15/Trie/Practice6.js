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
        let node = this.root;
        for(let char of word){
            if(!node.character[char]){
                node.character[char] = new TrieNode();
            }
            node = node.character[char];
        }
        node.isEndOfWord = true;
    }

    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.character[char]){
                return false
            }
            node = node.character[char]
        }
        return node.isEndOfWord
    }

    searchWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.character[char]){
                return false
            }
            node = node.character[char]
        }
        return true
    }

    printWords(node = this.root,prefix="",words=[]){
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for(let char in node.character){
            this.printWords(node.character[char],prefix+char,words)
        }
        return words
    }

    autoComplete(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.character[char]){
                return []
            }
            node = node.character[char]
        }
        return this.getAllWord(node,prefix)
    }

    getAllWord(node,prefix){
        let words = []
        if(node.isEndOfWord){
            words.push(prefix)
        }
        for(let char in node.character){
            words = words.concat(this.getAllWord(node.character[char],prefix+char))
        }
        return words
    }
}

let word = new Trie()
word.insert("cat")
word.insert("cattle");
word.insert("moon");
word.insert("catch")
word.insert("monkey");
word.insert("lamb");
console.log(word.printWords());
console.log(word.search("lamb"));
console.log(word.searchWith("da"));
console.log("Autocomplete cat", word.autoComplete("cat"));