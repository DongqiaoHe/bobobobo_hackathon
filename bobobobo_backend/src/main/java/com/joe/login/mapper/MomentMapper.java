package com.joe.login.mapper;

import com.joe.login.bean.Moment;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MomentMapper {
    void postMoment(Moment moment);

    Object[] getMoments(String token);

}
