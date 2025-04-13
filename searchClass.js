//represent a node in the trie search
class searchClass {
    constructor() {
        this.children = {};
        this.isSearch = false;
    }
}

//search input and suggest words
class searchInput {
    constructor() {
        this.root = new searchClass();
    }

    //insert a word into trie search
    insert(word) {
        let search = this.root;
        for (let i = 0 ; i < word.length; i++) {
            //if there is no child node, create a new one
            if (!search.children [word[i]]) {
                search.children [word [i]] = new searchClass();
            }
            //move to the next child node
            search = search.children [word[i]];
        }
        //mark the end of the word
        search.isSearch = true;
    }

    //helper function to suggest words
    suggestHelper(root, list, current) {
        //if the current node is a word, add it to the list
        if (root.isSearch) {
            list.push(current);
        }

        //if there are no children, return
        if (!Object.keys (root.children).length) {
            return;
        }

        //for each child node, call the suggestHelper
        for (let child in root.children) {
            this.suggestHelper(root.children[child], list, current + child);
        }
    }

    //sugest word start with prefix
    suggest(prefix) {
        let node = this.root;
        //inlucde space in prefix
        let current = " ";
        //traverse the trie search tree
        for (let i = 0; i < prefix.length; i ++) {
            //if there is no result, return empty
            if (!node.children[prefix[i]]) {
                return [];
            }
            //move to the next child node
            node = node.children [prefix[i]];
            current += prefix[i];
        }

        let list = [];
        this.suggestHelper(node, list, current);
        return list;
    }
}

/*testing the search class
let words = ["apple", "app", "apricot", "banana", "berry", "blueberry", "cherry"];
let search = new searchInput();
words.forEach(word => search.insert(word));
console.log(search.suggest("ap")); // ["apple", "app", "apricot"]
console.log(search.suggest("b")); // ["banana", "berry", "blueberry"]
*/
