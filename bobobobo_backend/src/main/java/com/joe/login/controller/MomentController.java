package com.joe.login.controller;

import com.joe.login.bean.User;
import com.joe.login.service.MomentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/moment")
public class MomentController {

    @Autowired
    MomentService momentService;

    //用户发布
    @RequestMapping(value = "/" , method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody User user){
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("message", "The username or password is wrong!");
        return null;
    }

    //获得用户的发布

}
