package com.joe.login.service;

import com.joe.login.bean.User;
import com.joe.login.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public void register(User user) {
        System.out.println(user);
        user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        userMapper.register(user);
    }


    public User login(String username, String password) {
        User user = userMapper.findByUsername(username);
        if (user == null) {
            return null;
        }
        // md5加密; bobo2 的md5值为：b49b6d44a4456d955c3ff25f709f11ac 作为测试
        String hashedPassword = DigestUtils.md5DigestAsHex(password.getBytes());
        if (hashedPassword.equals(user.getPassword())) {
            return user;
        }
        return null;
    }




}
