package com.joe.login.mapper;

import com.joe.login.bean.Moment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface MomentMapper {

    @Insert("insert into moment(topic,content,star_num,user_id) values(#{topic},#{content},#{star_num},#{user_id})")
    void postMoment(Moment moment);

    @Select("select * from moment where user_id = #{id}")
    List<Moment> getMoments(int id);

    @Update("UPDATE moment SET star_num = star_num + 1 where id = #{id}")
    void addStar(Moment starRequest);

}
