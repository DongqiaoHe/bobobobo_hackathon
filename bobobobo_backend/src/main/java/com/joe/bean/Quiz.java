package com.joe.bean;

import lombok.Data;

@Data
public class Quiz {
    private Integer id;
    private Integer quiz_correct;
    private Integer quiz_wrong;
}
