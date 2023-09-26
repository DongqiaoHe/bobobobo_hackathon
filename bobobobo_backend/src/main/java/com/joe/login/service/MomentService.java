package com.joe.login.service;

import com.joe.login.bean.Moment;
import com.joe.login.mapper.MomentMapper;
import com.joe.login.mapper.UserMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MomentService {

    @Autowired
    private MomentMapper momentMapper;

    public void postMoment(Moment moment){
        System.out.println("service"+moment);
        momentMapper.postMoment(moment);
    }

    public Object[] getMoment(){
        return null;
    }
}
