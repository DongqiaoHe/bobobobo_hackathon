package com.joe.service;

import com.joe.bean.Comment;
import com.joe.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    CommentMapper commentMapper;
    public void postComment(Comment comment) {
        commentMapper.postComment(comment);
    }

    public List<Comment> getComment(int moment_id) {
        return commentMapper.findByUsername(moment_id);
    }
}
