import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class SearchMethod {

	//a list of data for testing
	static List<String> testName = List.of("John Doe", "Brown Smith", "Davis Miler", "Jose Davis", "Joe Wilson", 
									"Brandon Will","Joe Martinez","Micheal Jean","George Gray");
	
	//root node
	private SearchNode root;
	
	public class SearchNode {
	//map the character to the childNode
	Map <Character, SearchNode> childNode;
	//store character
	char c;
	//flag the search result as the end of the word
	boolean isSearch;
	
	//initialize a node with a character
	public SearchNode (char c) {
		this.c = c;
		childNode = new HashMap<>();
	}
	
	//constructor for root node
	public SearchNode () {
		childNode = new HashMap<>();
	}
	
	//insert method
	public void insert (String word) {
		//base case, empty string
		if (word == null || word.isEmpty()) {
			return;
		}
		
		char firstChar = word.charAt(0);
		SearchNode child = childNode.get(firstChar);
		
		//create a child node if not exist
		if (child == null) {
			child = new SearchNode(firstChar);
			childNode.put(firstChar, child);
		}
		
		//insert remaining characters
		if (word.length() > 1) {
			child.insert(word.substring(1));
		}
		else {
			//mark complete word
			child.isSearch = true;
		}
	}	
}

//build search method using list of words and using Trie method
public SearchMethod (List<String> words) {
	//initialize root
	root = new SearchNode();
	//insert each word into root 
	for (String word : words) {
		root.insert(word);
	}
}

//search for prefix in Trie
public boolean find (String prefix, boolean exact) {
	SearchNode lastNode = root;
	
	for (char c : prefix.toCharArray()) {
		lastNode = lastNode.childNode.get(c);
		//if prefix does not exit
		if (lastNode == null)
			return false; 
	}
		
	return !exact || lastNode.isSearch;
	}

//find prefix without require exact max
public boolean find (String prefix) {
	return find(prefix, false);
}

public void suggestHelper (SearchNode root, List<String> wordList, StringBuffer curr) {
	if (root.isSearch) {
		wordList.add(curr.toString());
	}
	
	if (root.childNode == null || root.childNode.isEmpty()) {
		return;
	}
	
	for (SearchNode child : root.childNode.values()) {
		//append character before recursion
		curr.append(child.c);
		//pass the current buffer
		suggestHelper (child, wordList, curr);
		//remove character after recursion
		curr.setLength(curr.length() - 1);
	}
}

//getting suggest word based on the prefix
public List<String> suggest(String prefix) {
	//store suggested word
	List<String> wordList = new ArrayList<>();
	SearchNode lastNode = root;
	//keep track of current location
	StringBuffer curr = new StringBuffer();
	
	//traverse through the Trie method
	for (char c : prefix.toCharArray()) {
		lastNode = lastNode.childNode.get(c);
		if (lastNode == null) {
			return wordList;
		}
		curr.append(c);
	}
	
	suggestHelper(lastNode, wordList, curr);
	return wordList;
}

//getting search result
public static String searchResult (String str) {
	
    SearchMethod t = new SearchMethod(testName);
    
    if (str == null || str.isEmpty()) {
    	return "Failure: Input is empty";
    }
    
    List<String> autoSearch = t.suggest(str);
    
    if (autoSearch.isEmpty()) {
    	return "Failure: No match found";
    }
    
    return autoSearch.toString();
}
}


	


