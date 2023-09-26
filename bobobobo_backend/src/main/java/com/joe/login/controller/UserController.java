package com.joe.login.controller;

import com.joe.login.bean.User;
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
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    private static final String SECRET_KEY = "Bobobo"; // 这应该是一个复杂的密钥，并从配置或环境变量中获取

    public static String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)  // 设置token的主体（通常是用户的标识）
                .setIssuedAt(new Date())  // 设置token的签发时间
                .setExpiration(new Date(System.currentTimeMillis() + 2 * 86400000))  // 设置token的过期时间，两天
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)  // 使用HS256算法和你的密钥签名token
                .compact();  // 构建token
    }

    @RequestMapping(value = "/login" , method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody User user){
        Map<String, Object> responseMap = new HashMap<>();
        User loggedInUser = userService.login(user.getUsername(), user.getPassword());
        System.out.println("user controller login");
        if (loggedInUser != null) {
            String token = generateToken(user.getUsername());
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
