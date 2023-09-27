package com.joe.bean;

import lombok.Data;

@Data
public class User {
    private Integer id;
    private String username;
    private String password;  // hashcode
    private Integer quiz_correct;
    private Integer quiz_wrong;
}
