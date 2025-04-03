//Rebeca Rios's responsibility

import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class LoginHandler {
    public String userLogin(String username, String password) {
        // check if email is valid/correct format
        if (!isValidUsername(username)) {
            return ("Invalid Username");
        }
        // check if password is valid/correct format
        if (!isValidPassword(password)) {
            return ("Invalid Password");
        }
        // get user from database? - change once database is added
        User user = new User("test", "test123$");
        // LoginResponse loginResponse = new LoginResponse()

        if (!authenticateUser(user, username, password)) {
            return ("Account not in system");
        }
        return ("Login Successful");
    }

    // checks if both username and password match a user in database-
    public boolean authenticateUser(User user, String enteredUsername, String enteredPassword) {
        // TO-DO:
        if (user.getUsername().equals(enteredUsername) && user.getPassword().equals(enteredPassword)) {
            return true;
        }
        return false;

    }

    private boolean isValidUsername(String username) {
        if (username.isEmpty() && username.length() >= 254 && !hasSpecialCharacter(username)) {
            return false;
        }
        // ASK: if username == email check if it has @
        if (!username.contains("@")) {
            return false;
        } else {
            return true;
        }
    }

    private boolean isValidPassword(String password) {
        // check if it has at least one alphabet, numeric and special character
        if (password.matches("^(?=.*?[a-z][A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$")) {
            return true;
        } else {
            return false;
        }

    }

    private boolean hasSpecialCharacter(String str) {
        Pattern specialCharacterPattern = Pattern.compile("[^a-zA-Z0-9\\s]");
        Matcher matcher = specialCharacterPattern.matcher(str);
        return matcher.find();
    }

}
