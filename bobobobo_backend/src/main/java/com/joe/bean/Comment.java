package com.joe.bean;

import lombok.Data;

@Data
public class Comment {
    int user_id;

    int moment_id;

    String message;
}
