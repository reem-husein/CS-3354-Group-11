package com.chauffeurcheck.backend.controller;

import com.chauffeurcheck.backend.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        return loginService.userLogin(username, password);
    }
}