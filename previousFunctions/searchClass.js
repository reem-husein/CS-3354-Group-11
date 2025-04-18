const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

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

// Create a MongoDB schema that matches your actual data structure
const searchWordSchema = new mongoose.Schema({
    word: { type: String, required: true }
});

// Create a model based on the schema, connecting to your 'searchTest' collection
const SearchWord = mongoose.model('SearchWord', searchWordSchema, 'searchTest');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sir-axel:Family%23007@cluster3354.wyf6qes.mongodb.net/class_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Route to load search words and provide suggestions
router.get('/api/search', async (req, res) => {
    try {
        const { prefix } = req.query;
        
        // Get all words from the database
        const searchWords = await SearchWord.find();
        
        // Create a new search trie
        const search = new searchInput();
        
        // Insert all words into the trie
        searchWords.forEach(item => search.insert(item.word));
        
        // Get suggestions based on the prefix
        const suggestions = search.suggest(prefix || "");
        
        res.json({ suggestions });
    } catch (error) {
        console.error('Error during search:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to add a new word to the database
router.post('/api/search/add', async (req, res) => {
    try {
        const { word } = req.body;
        
        // Create a new search word
        const newWord = new SearchWord({ word });
        
        // Save to database
        await newWord.save();
        
        res.status(201).json({ message: 'Word added successfully', word });
    } catch (error) {
        console.error('Error adding word:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

/*test
// For Node.js environment
const readline = require('readline');

// Sample words
let words = ["apple", "app", "apricot", "banana", "berry", "blueberry", "cherry"];

// Create search instance and insert words
let search = new searchInput();
words.forEach(word => search.insert(word));

// Setup readline for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for search and display results
rl.question("Enter your search: ", function(input) {
    let suggestions = search.suggest(input);
    console.log("Suggestions:", suggestions);
    rl.close();
});

*/