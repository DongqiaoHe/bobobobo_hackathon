package com.joe.login.controller;

import com.joe.login.bean.User;
import com.joe.login.service.JwtUtil;
import com.joe.login.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login" , method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody User user){
        Map<String, Object> responseMap = new HashMap<>();
        User loggedInUser = userService.login(user.getUsername(), user.getPassword());
        System.out.println("user controller login");
        if (loggedInUser != null) {
            String token = JwtUtil.generateToken(user.getId());
            responseMap.put("token", token);
            return new ResponseEntity<>(responseMap, HttpStatus.OK);
        }
        responseMap.put("message", "The username or password is wrong!");
        return new ResponseEntity<>(responseMap, HttpStatus.UNAUTHORIZED);

    }

    @RequestMapping(value = "/register" , method = RequestMethod.POST)
    public ResponseEntity<?> register(@RequestBody User user){
        Map<String, Object> responseMap = new HashMap<>();
        try {
            userService.register(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            responseMap.put("message", "The username is exist!");
            return new ResponseEntity<>(responseMap, HttpStatus.BAD_REQUEST);
        }

    }

}
