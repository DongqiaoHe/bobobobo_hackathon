package com.joe.login.mapper;

import com.joe.login.bean.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Insert("insert into user(username,password) values(#{username},#{password})")
    void register(User user);
    @Select("select * from user where username=#{username}")
    User findByUsername(String username);

}
