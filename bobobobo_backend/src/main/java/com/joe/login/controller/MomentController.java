package com.joe.login.controller;

import com.joe.login.bean.Moment;
import com.joe.login.bean.User;
import com.joe.login.service.JwtUtil;
import com.joe.login.service.MomentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/moment")
public class MomentController {

    @Autowired
    MomentService momentService;

    //用户发布


    @PostMapping
    public ResponseEntity<?> createMessage(@RequestHeader("Authorization") String token, @RequestBody Moment moment) {
        String userID = JwtUtil.getUserIDFromToken(token);
        moment.setUser_id(Integer.parseInt(userID));
        momentService.postMoment(moment);
        return new ResponseEntity<>(HttpStatus.CREATED); // 或者返回其他响应
    }
}
