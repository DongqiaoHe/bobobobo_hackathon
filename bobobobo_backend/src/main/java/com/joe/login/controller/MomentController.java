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

import java.util.List;

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
        String username = JwtUtil.getUserUserFromToken(token);
        moment.setUser_id(userService.getIdByUsername(username));
        momentService.postMoment(moment);
        return new ResponseEntity<>(HttpStatus.CREATED); // 或者返回其他响应
    }


    @GetMapping
    public ResponseEntity<?> getMoment(@RequestHeader("Authorization") String token) {
        String username = JwtUtil.getUserUserFromToken(token);
        int userId = userService.getIdByUsername(username);
        List<Moment> data = momentService.getMoment(userId);
        return new ResponseEntity<>(data, HttpStatus.ACCEPTED); // 或者返回其他响应
    }

    @PatchMapping("/star")
    public ResponseEntity<?> addStar(@RequestHeader("Authorization") String token, @RequestBody Moment starRequest) {
        String username = JwtUtil.getUserUserFromToken(token);
        System.out.println(starRequest);
        if(username!=null){
            momentService.addStar(starRequest);
            return new ResponseEntity<>(HttpStatus.ACCEPTED); // 或者返回其他响应
        }else{
            System.out.println("moment controller:gg");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // 或者返回其他响应
        }
    }
}
