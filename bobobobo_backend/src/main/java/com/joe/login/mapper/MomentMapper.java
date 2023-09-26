package com.joe.login.mapper;

import com.joe.login.bean.Moment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import static net.sf.jsqlparser.parser.feature.Feature.insert;

@Mapper
public interface MomentMapper {

    @Insert("insert into moment(topic,content,star_num,user_id) values(#{topic},#{content},0,#{user_id})")
    void postMoment(Moment moment);

    Object[] getMoments(String token);

}
