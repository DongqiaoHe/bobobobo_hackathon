package com.joe.mapper;

import com.joe.bean.Moment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface MomentMapper {

    @Insert("insert into moment(topic,content,star_num,user_id, table_json) values(#{topic},#{content},#{star_num},#{user_id},#{table_json})")
    void postMoment(Moment moment);

    @Select("select * from moment where user_id = #{id}")
    List<Moment> getMoments(int id);

    @Update("UPDATE moment SET star_num = star_num + 1 where id = #{id}")
    void addStar(Moment starRequest);

    @Select("select * from moment")
    List<Moment> getAllMoments();
}
