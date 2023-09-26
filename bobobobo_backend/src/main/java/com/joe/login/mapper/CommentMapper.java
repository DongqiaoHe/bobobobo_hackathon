package com.joe.login.mapper;

import com.joe.login.bean.Comment;
import com.joe.login.bean.Moment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface CommentMapper {

    @Insert("insert into comment(moment_id,message,user_id) values(#{moment_id},#{message},#{user_id})")
    void postComment(Comment comment);

}
