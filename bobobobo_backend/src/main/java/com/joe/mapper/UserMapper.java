package com.joe.mapper;

import com.joe.bean.Quiz;
import com.joe.bean.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UserMapper {

    @Insert("insert into user(username,password,quiz_correct,quiz_wrong) values(#{username},#{password},0,0)")
    void register(User user);

    @Select("select * from user where username=#{username}")
    User findByUsername(String username);

    @Select("select username from user where id=#{id}")
    String findByUsernameById(int id);

    @Select("select id from user where username=#{username}")
    int findByIdByUsername(String username);

    @Update("update user set quiz_correct = quiz_correct + #{quiz_correct}, quiz_wrong = quiz_wrong + #{quiz_wrong} where id= #{id}")
    void submitQuiz(Quiz quiz);
}
