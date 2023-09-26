package com.joe.login.service;

import com.joe.login.bean.Moment;
import com.joe.login.mapper.MomentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MomentService {

    @Autowired
    private MomentMapper momentMapper;

    public void postMoment(Moment moment){
        System.out.println("service: "+moment);
        momentMapper.postMoment(moment);
    }

    public List<Moment> getMoment(int id){
        System.out.println("service: "+id);
        return momentMapper.getMoments(id);
    }

    public void addStar(Moment starRequest) {
        momentMapper.addStar(starRequest);
    }
}
