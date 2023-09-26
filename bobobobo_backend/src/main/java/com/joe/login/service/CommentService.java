package com.joe.login.service;

import com.joe.login.bean.Comment;
import com.joe.login.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    @Autowired
    CommentMapper commentMapper;
    public void postComment(Comment comment) {
        commentMapper.postComment(comment);
    }
}
