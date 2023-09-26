package com.joe.login.controller;

import com.joe.login.bean.Moment;
import com.joe.login.bean.User;
import com.joe.login.service.JwtUtil;
import com.joe.login.service.MomentService;
import com.joe.login.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/moment")
public class MomentController {

    @Autowired
    MomentService momentService;

    @Autowired
    UserService userService;

    //用户发布


    @PostMapping
    public ResponseEntity<?> createMoment(@RequestHeader("Authorization") String token, @RequestBody Moment moment) {
        String username = JwtUtil.getUserIDFromToken(token);
        moment.setUser_id(userService.getIdByUsername(username));
        momentService.postMoment(moment);
        return new ResponseEntity<>(HttpStatus.CREATED); // 或者返回其他响应
    }


    @GetMapping
    public ResponseEntity<?> getMoment(@RequestHeader("Authorization") String token) {
        String username = JwtUtil.getUserIDFromToken(token);
        int userId = userService.getIdByUsername(username);
        List<Moment> data = momentService.getMoment(userId);
        return new ResponseEntity<>(data, HttpStatus.CREATED); // 或者返回其他响应
    }
}
