package com.chauffeurcheck.backend.service;

import com.chauffeurcheck.backend.model.User;
import com.chauffeurcheck.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public String userLogin(String username, String password) {
        // Validate username and password formats
        if (!isValidUsername(username)) {
            return "Invalid Username";
        }
        if (!isValidPassword(password)) {
            return "Invalid Password";
        }

        // Fetch user from MongoDB
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return "Account not in system";
        }
        // Check if the password matches
        if (!authenticateUser(user, password)) {
            return "Incorrect Password";
        }
        return "Login Successful";
    }

    // Compare stored password with entered password
    private boolean authenticateUser(User user, String enteredPassword) {
        return user.getPassword().equals(enteredPassword);
    }

    private boolean isValidUsername(String username) {
        // Check null/empty and length constraints
        if (username == null || username.isEmpty() || username.length() >= 254) {
            return false;
        }
        // Basic check: username should be a valid email (contains @)
        return username.contains("@");
    }

    private boolean isValidPassword(String password) {
        if (password == null) {
            return false;
        }
        // Password must be 8-12 characters, contain at least one lowercase letter,
        // one uppercase letter, one digit, and one special character.
        String pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#?!@$%^&*-]).{8,12}$";
        return Pattern.matches(pattern, password);
    }
}