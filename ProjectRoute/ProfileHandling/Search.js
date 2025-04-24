const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Driver = require("../DBConnection/Driver");

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
        //include space in prefix
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

// Route to load search words and provide suggestions
router.get('/search', async (req, res) => {
    try {
        const { prefix } = req.query;
        
        // Get all words from the database
        const searchWords = await Driver.find({
            'employeeBasicInfo.full_name': { $regex: `^${prefix}`, $options: 'i' } // case-insensitive prefix match
        });
        
        // Create a new search trie
        const search = new searchInput();
        
        //Insert all words into the trie
        searchWords.forEach(item => {
            if (item.employeeBasicInfo.full_name &&item.employeeBasicInfo.full_name) {
                search.insert(item.employeeBasicInfo.full_name.toLowerCase()); //make it lower case to handle easier
            }
        });
        
        // Get suggestions based on the prefix
        const suggestions = search.suggest(prefix);

        res.json({ suggestions });

    } catch (error) {
        console.error('Error during search:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to add a new word to the database
router.post('/search/add', async (req, res) => {
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

