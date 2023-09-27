package com.joe.controller;

import com.joe.bean.Quiz;
import com.joe.bean.User;
import com.joe.service.JwtUtil;
import com.joe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
            String token = JwtUtil.generateToken(user.getUsername());
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

    @RequestMapping(value = "/quiz" , method = RequestMethod.PATCH)
    public ResponseEntity<?> submitQuiz(@RequestHeader("Authorization") String header, @RequestBody Quiz result){
        System.out.println(header);
        try {
            String token = header.replace("Bearer ", "");
            int id = userService.getIdByUsername(JwtUtil.getUserUserFromToken(token));
            result.setId(id);
            userService.submitQuiz(result);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("错了");
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/quiz/rank")
    public ResponseEntity<?> getRank(){
        return new ResponseEntity<>(userService.getRank(), HttpStatus.OK);
    }


//eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjk1Nzc1MjYzLCJleHAiOjE2OTYwMzQ0NjN9.pm-buXi8elAfbiDOY8iWrYtvOSueAfZ8PLXZQSoipk0
}
