package com.joe.bean;

import lombok.Data;

@Data
public class Moment {
    private int id;

    private String topic;

    private String content;

    private int star_num;

    private int user_id;

    private String table_json;


}
