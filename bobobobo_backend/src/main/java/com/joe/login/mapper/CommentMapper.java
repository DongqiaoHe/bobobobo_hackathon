package com.joe.login.mapper;

import com.joe.login.bean.Comment;
import com.joe.login.bean.Moment;
import com.joe.login.bean.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CommentMapper {

    @Insert("insert into comment (moment_id,message,user_id) values(#{moment_id},#{message},#{user_id})")
    void postComment(Comment comment);

    @Select("select * from comment where moment_id = #{moment_id} ")
    List<Comment> findByUsername(int moment_id);

}
