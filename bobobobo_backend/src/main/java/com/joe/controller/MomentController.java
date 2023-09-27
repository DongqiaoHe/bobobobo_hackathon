package com.joe.controller;

import com.joe.bean.Comment;
import com.joe.bean.Moment;
import com.joe.service.CommentService;
import com.joe.service.JwtUtil;
import com.joe.service.MomentService;
import com.joe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/moment")
public class MomentController {

    @Autowired
    MomentService momentService;

    @Autowired
    UserService userService;

    @Autowired
    CommentService commentService;

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
        List<Moment> data = momentService.getAllMoment(userId);
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

    @PostMapping("/comment")
    public ResponseEntity<?> postComment(@RequestHeader("Authorization") String token, @RequestBody Comment comment) {
        String username = JwtUtil.getUserUserFromToken(token);
        int id = userService.getIdByUsername(username);
        comment.setUser_id(id);
        commentService.postComment(comment);
        return new ResponseEntity<>(HttpStatus.CREATED); // 或者返回其他响应
    }

    @GetMapping("/comment")
    public ResponseEntity<?> getComment(@RequestHeader("Authorization") String token, @RequestBody Map<String, Object> payload) {
        String username = JwtUtil.getUserUserFromToken(token);
        int id = userService.getIdByUsername(username);
        List<Comment> data =  commentService.getComment((Integer) payload.get("moment_id"));
        System.out.println(data);
        return new ResponseEntity<>(data,HttpStatus.CREATED); // 或者返回其他响应
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllMoment() {
        List<Moment> data = momentService.getAllMoments();
        return new ResponseEntity<>(data, HttpStatus.ACCEPTED); // 或者返回其他响应
    }
}
